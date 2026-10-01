import posthog from "posthog-js";

const projectToken = import.meta.env.VITE_LOVABLE_CONNECTOR_POSTHOG_API_KEY;
const region = import.meta.env.VITE_LOVABLE_CONNECTOR_POSTHOG_REGION || "eu";
const apiHost = region === "us" ? "https://us.i.posthog.com" : "https://eu.i.posthog.com";

let initialized = false;

const ALLOWED_HOSTNAMES = new Set(["corteza.app", "www.corteza.app"]);

function stripQueryString(url: unknown): unknown {
  if (typeof url !== "string") return url;
  try {
    const parsed = new URL(url);
    return `${parsed.origin}${parsed.pathname}`;
  } catch {
    return url;
  }
}

export function initAnalytics() {
  if (!projectToken || initialized) return;
  posthog.init(projectToken, {
    api_host: apiHost,
    autocapture: true,
    capture_pageview: true,
    capture_pageleave: true,
    debug: import.meta.env.DEV,
    before_send: (event) => {
      if (!event) return event;
      const props = (event.properties ?? {}) as Record<string, unknown>;

      let hostname = "";
      try {
        hostname = new URL(String(props.$current_url ?? "")).hostname;
      } catch {
        hostname = "";
      }
      if (!ALLOWED_HOSTNAMES.has(hostname)) return null;

      props.$current_url = stripQueryString(props.$current_url);
      props.$referrer = stripQueryString(props.$referrer);
      props.$initial_current_url = stripQueryString(props.$initial_current_url);
      return event;
    },
  });
  (window as unknown as { posthog?: typeof posthog }).posthog = posthog;
  initialized = true;
}

export function track(event: string, properties?: Record<string, unknown>) {
  if (!initialized) return;
  posthog.capture(event, properties);
}
