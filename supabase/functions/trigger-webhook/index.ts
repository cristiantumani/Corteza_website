import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

/**
 * Early access signup emails, sent directly with Resend (no n8n).
 *
 * Called by the early access form (src/pages/EarlyAccess.tsx) right after the signup row is
 * saved. It sends:
 *   1. a welcome email to the person who signed up
 *   2. a notification to the team (SIGNUP_NOTIFY_EMAIL)
 *
 * Emails only go out for a real signup row, once: the row is claimed by setting
 * welcome_sent_at, so the function can't be used to email arbitrary addresses or to resend.
 * (Before that column exists, it falls back to rows created in the last 15 minutes.)
 *
 * Secrets: RESEND_API_KEY, SIGNUP_NOTIFY_EMAIL (comma separated), plus SUPABASE_URL and
 * SUPABASE_SERVICE_ROLE_KEY, which Supabase provides to every edge function.
 */

const RESEND_API_URL = "https://api.resend.com/emails";
const FROM = "Corteza <noreply@corteza.app>";
const MAX_PAYLOAD_BYTES = 10240; // 10KB
const FALLBACK_WINDOW_MS = 15 * 60 * 1000;

// Sites allowed to call this function: corteza.app and any subdomain (www.corteza.app),
// Lovable previews, and local development. Compared on the parsed hostname, never as a substring.
const ALLOWED_DOMAINS = ["corteza.app", "lovable.app"];

function isValidOrigin(origin: string | null): boolean {
  if (!origin) return false;
  let url: URL;
  try {
    url = new URL(origin);
  } catch {
    return false;
  }
  const host = url.hostname;
  if (host === "localhost" || host === "127.0.0.1") return true;
  if (url.protocol !== "https:") return false;
  return ALLOWED_DOMAINS.some((domain) => host === domain || host.endsWith(`.${domain}`));
}

function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("origin");
  return {
    "Access-Control-Allow-Origin": isValidOrigin(origin) ? origin! : "null",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

function requireEnv(name: string): string {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

type Signup = {
  email: string;
  first_name: string;
  last_name: string;
  company?: string | null;
  team_size?: string | null;
  meeting_tool?: string | null;
  meeting_problem?: string | null;
  created_at?: string;
};

/** Supabase REST call with the service role key (bypasses RLS; never exposed to the browser) */
async function rest(path: string, init: RequestInit = {}): Promise<Response> {
  const url = requireEnv("SUPABASE_URL");
  const key = requireEnv("SUPABASE_SERVICE_ROLE_KEY");
  return fetch(`${url}/rest/v1/${path}`, {
    ...init,
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", ...(init.headers || {}) },
  });
}

/**
 * The signup to email, claimed so it's emailed only once; null when there's nothing to send
 * (no such signup, or already emailed)
 */
async function claimSignup(email: string): Promise<Signup | null> {
  const filter = `early_access_signups?email=eq.${encodeURIComponent(email)}`;
  const claimed = await rest(`${filter}&welcome_sent_at=is.null`, {
    method: "PATCH",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({ welcome_sent_at: new Date().toISOString() }),
  });
  if (claimed.ok) {
    const rows = (await claimed.json()) as Signup[];
    return rows[0] || null;
  }

  // Before the welcome_sent_at migration is applied: only a signup made in the last few minutes
  const errorText = await claimed.text();
  if (!/welcome_sent_at/.test(errorText)) throw new Error(`Could not read the signup: ${claimed.status} ${errorText}`);
  const found = await rest(`${filter}&select=*`);
  if (!found.ok) throw new Error(`Could not read the signup: ${found.status}`);
  const [row] = (await found.json()) as Signup[];
  if (!row || !row.created_at || Date.now() - Date.parse(row.created_at) > FALLBACK_WINDOW_MS) return null;
  return row;
}

/** Sends one email with Resend, retrying once on 429 / 5xx */
async function sendEmail(message: { to: string[]; subject: string; html: string; reply_to?: string }): Promise<void> {
  const apiKey = requireEnv("RESEND_API_KEY");
  for (let attempt = 1; attempt <= 2; attempt++) {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM, ...message }),
    });
    if (response.ok) return;
    const detail = await response.text();
    if (attempt === 2 || (response.status < 500 && response.status !== 429)) {
      throw new Error(`Resend ${response.status}: ${detail}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

function welcomeEmail(signup: Signup) {
  const firstName = escapeHtml(signup.first_name);
  return {
    subject: "Thanks for requesting early access to Corteza",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; color: #111; line-height: 1.6;">
        <img src="https://corteza.app/favicon-96x96.png" alt="Corteza" width="40" style="margin-bottom: 24px;" />
        <h1 style="font-size: 22px; margin: 0 0 16px;">Thanks, ${firstName}!</h1>
        <p style="font-size: 15px; margin: 0 0 16px;">
          We got your request for early access to Corteza. We're opening a private beta for a small number of teams,
          to make every meeting end in action: decisions that stick, commitments that get done, and meetings that get better over time.
        </p>
        <p style="font-size: 15px; margin: 0 0 16px;">
          We'll reach out within a few days for a short call to learn how your team meets and decides, and see if you're a fit for this first group.
        </p>
        <p style="font-size: 15px; margin: 0 0 24px;">
          Want to tell us more in the meantime? Just reply to this email.
        </p>
        <p style="font-size: 15px; margin: 0;">The Corteza team</p>
      </div>`,
  };
}

function notificationEmail(signup: Signup) {
  const rows: [string, unknown][] = [
    ["Name", `${signup.first_name} ${signup.last_name}`],
    ["Email", signup.email],
    ["Company", signup.company],
    ["Team size", signup.team_size],
    ["Meets on", signup.meeting_tool],
    ["Biggest meeting problem", signup.meeting_problem],
  ];
  return {
    subject: `New early access request: ${signup.first_name} ${signup.last_name}${signup.company ? ` (${signup.company})` : ""}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #111;">
        <h1 style="font-size: 18px; margin: 0 0 16px;">New early access request</h1>
        <table style="border-collapse: collapse; font-size: 14px; width: 100%;">
          ${rows
            .map(([label, value]) => `<tr><td style="padding: 6px 12px 6px 0; color: #666; vertical-align: top; white-space: nowrap;">${label}</td><td style="padding: 6px 0;">${escapeHtml(value || "—")}</td></tr>`)
            .join("")}
        </table>
      </div>`,
  };
}

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const origin = req.headers.get("origin");
    if (!isValidOrigin(origin)) {
      console.error(`[Signup emails] Rejected request from unauthorized origin: ${origin}`);
      return json({ error: "Unauthorized" }, 403);
    }

    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > MAX_PAYLOAD_BYTES) {
      return json({ error: "Payload too large" }, 413);
    }

    let email: string;
    try {
      const body = await req.json();
      email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 100) throw new Error("invalid email");
    } catch {
      return json({ error: "Invalid request data" }, 400);
    }

    const signup = await claimSignup(email);
    if (!signup) {
      console.log(`[Signup emails] Nothing to send for ${email} (no recent signup, or already emailed)`);
      return json({ success: true, sent: false });
    }

    const notifyTo = (Deno.env.get("SIGNUP_NOTIFY_EMAIL") || "").split(",").map((e) => e.trim()).filter(Boolean);
    const results = await Promise.allSettled([
      sendEmail({ to: [signup.email], ...welcomeEmail(signup), ...(notifyTo[0] ? { reply_to: notifyTo[0] } : {}) }),
      notifyTo.length ? sendEmail({ to: notifyTo, ...notificationEmail(signup) }) : Promise.resolve(),
    ]);
    results.forEach((result, index) => {
      if (result.status === "rejected") {
        console.error(`[Signup emails] ${index === 0 ? "Welcome" : "Notification"} email failed:`, result.reason);
      }
    });
    if (!notifyTo.length) console.warn("[Signup emails] SIGNUP_NOTIFY_EMAIL is not set: no team notification sent");

    const ok = results.every((result) => result.status === "fulfilled");
    console.log(`[Signup emails] ${ok ? "Sent" : "Partly sent"} for ${email} (origin ${origin})`);
    return json({ success: ok, sent: true }, ok ? 200 : 502);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[Signup emails] Error:", message);
    return json({ error: "An error occurred processing your request" }, 500);
  }
});
