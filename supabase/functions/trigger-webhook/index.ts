import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const TIMEOUT_MS = 30000;
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;
const MAX_PAYLOAD_BYTES = 10240; // 10KB

const ALLOWED_ORIGINS = [
  'https://decision-well.lovable.app',
  'https://corteza.app',
  'http://localhost:5173',
  'http://localhost:8080',
];

function isValidOrigin(origin: string | null): boolean {
  if (!origin) return false;
  return ALLOWED_ORIGINS.includes(origin) || 
         origin.includes('.lovable.app') ||
         origin.includes('localhost');
}

function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get('origin');
  return {
    'Access-Control-Allow-Origin': isValidOrigin(origin) ? origin! : 'null',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
  };
}

function getWebhookUrl(): string {
  const url = Deno.env.get('N8N_WEBHOOK_URL');
  if (!url) {
    throw new Error('N8N_WEBHOOK_URL environment variable is not configured');
  }
  return url;
}

interface WebhookPayload {
  firstName: string;
  lastName: string;
  email: string;
  timestamp: string;
}

function validatePayload(data: unknown): WebhookPayload {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid payload: expected an object');
  }

  const obj = data as Record<string, unknown>;

  if (typeof obj.firstName !== 'string' || obj.firstName.length === 0 || obj.firstName.length > 50) {
    throw new Error('Invalid firstName: must be a string between 1 and 50 characters');
  }
  if (typeof obj.lastName !== 'string' || obj.lastName.length === 0 || obj.lastName.length > 50) {
    throw new Error('Invalid lastName: must be a string between 1 and 50 characters');
  }
  if (typeof obj.email !== 'string' || obj.email.length === 0 || obj.email.length > 100) {
    throw new Error('Invalid email: must be a string between 1 and 100 characters');
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(obj.email)) {
    throw new Error('Invalid email format');
  }
  if (typeof obj.timestamp !== 'string') {
    throw new Error('Invalid timestamp: must be a string');
  }

  return {
    firstName: obj.firstName,
    lastName: obj.lastName,
    email: obj.email,
    timestamp: obj.timestamp,
  };
}

async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function callWebhookWithRetry(payload: WebhookPayload & { triggered_at: string }, webhookUrl: string): Promise<{ success: boolean; attempt: number; error?: string; status?: number }> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    console.log(`[Webhook] Attempt ${attempt}/${MAX_RETRIES} - Calling n8n webhook`);
    
    try {
      const response = await fetchWithTimeout(
        webhookUrl,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
        TIMEOUT_MS
      );
      
      console.log(`[Webhook] Response status: ${response.status}`);
      
      if (response.ok) {
        return { success: true, attempt, status: response.status };
      }
      
      const errorText = await response.text();
      console.error(`[Webhook] Non-OK response (${response.status}):`, errorText);
      
      if (response.status >= 400 && response.status < 500) {
        return { success: false, attempt, error: `HTTP ${response.status}`, status: response.status };
      }
      
      if (attempt < MAX_RETRIES) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`[Webhook] Attempt ${attempt} failed:`, errorMessage);
      
      if (attempt < MAX_RETRIES) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
      } else {
        return { success: false, attempt, error: errorMessage };
      }
    }
  }
  
  return { success: false, attempt: MAX_RETRIES, error: "Max retries exceeded" };
}

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const origin = req.headers.get('origin');
    if (!isValidOrigin(origin)) {
      console.error(`[Webhook] Rejected request from unauthorized origin: ${origin}`);
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check payload size
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > MAX_PAYLOAD_BYTES) {
      return new Response(
        JSON.stringify({ error: 'Payload too large' }),
        { status: 413, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const webhookUrl = getWebhookUrl();
    
    // Validate payload
    let payload: WebhookPayload;
    try {
      const rawPayload = await req.json();
      payload = validatePayload(rawPayload);
    } catch (validationError) {
      console.error('[Webhook] Validation error:', validationError);
      return new Response(
        JSON.stringify({ error: 'Invalid request data' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[Webhook] Received valid request from origin: ${origin}`);
    
    const result = await callWebhookWithRetry({
      ...payload,
      triggered_at: new Date().toISOString(),
    }, webhookUrl);
    
    if (result.success) {
      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      console.error(`[Webhook] All attempts failed:`, result.error);
      return new Response(
        JSON.stringify({ success: false, error: 'Webhook delivery failed' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('[Webhook] Error processing request:', errorMessage);
    return new Response(
      JSON.stringify({ error: 'An error occurred processing your request' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
