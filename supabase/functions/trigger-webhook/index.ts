import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const WEBHOOK_URL = "https://cristiantumani.app.n8n.cloud/webhook/e0486aa6-ee8b-4c5b-9e8f-9795d9e11f1a";
const TIMEOUT_MS = 30000; // 30 second timeout
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000; // 1 second between retries

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

async function callWebhookWithRetry(payload: unknown): Promise<{ success: boolean; attempt: number; error?: string; status?: number }> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    console.log(`[Webhook] Attempt ${attempt}/${MAX_RETRIES} - Calling n8n webhook`);
    console.log(`[Webhook] Payload:`, JSON.stringify(payload));
    
    try {
      const response = await fetchWithTimeout(
        WEBHOOK_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
        TIMEOUT_MS
      );
      
      console.log(`[Webhook] Response status: ${response.status}`);
      
      if (response.ok) {
        const responseText = await response.text();
        console.log(`[Webhook] Success! Response body:`, responseText);
        return { success: true, attempt, status: response.status };
      }
      
      // Non-ok response
      const errorText = await response.text();
      console.error(`[Webhook] Non-OK response (${response.status}):`, errorText);
      
      // Don't retry on 4xx errors (client errors)
      if (response.status >= 400 && response.status < 500) {
        return { success: false, attempt, error: `HTTP ${response.status}: ${errorText}`, status: response.status };
      }
      
      // Retry on 5xx errors
      if (attempt < MAX_RETRIES) {
        console.log(`[Webhook] Retrying in ${RETRY_DELAY_MS}ms...`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`[Webhook] Attempt ${attempt} failed:`, errorMessage);
      
      if (error instanceof DOMException && error.name === 'AbortError') {
        console.error(`[Webhook] Request timed out after ${TIMEOUT_MS}ms`);
      }
      
      if (attempt < MAX_RETRIES) {
        console.log(`[Webhook] Retrying in ${RETRY_DELAY_MS}ms...`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS));
      } else {
        return { success: false, attempt, error: errorMessage };
      }
    }
  }
  
  return { success: false, attempt: MAX_RETRIES, error: "Max retries exceeded" };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    console.log(`[Webhook] Received request to trigger n8n webhook`);
    
    const result = await callWebhookWithRetry({
      ...payload,
      triggered_at: new Date().toISOString(),
    });
    
    if (result.success) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: `Webhook triggered successfully on attempt ${result.attempt}`,
          status: result.status 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      console.error(`[Webhook] All attempts failed:`, result.error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: result.error,
          attempts: result.attempt 
        }),
        { 
          status: 502, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('[Webhook] Error processing request:', errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
