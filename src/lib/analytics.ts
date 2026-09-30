import posthog from "posthog-js";

const projectToken = import.meta.env.VITE_LOVABLE_CONNECTOR_POSTHOG_API_KEY;
const region = import.meta.env.VITE_LOVABLE_CONNECTOR_POSTHOG_REGION || "eu";
const apiHost = region === "us" ? "https://us.i.posthog.com" : "https://eu.i.posthog.com";

let initialized = false;

export function initAnalytics() {
  if (!projectToken || initialized) return;
  posthog.init(projectToken, {
    api_host: apiHost,
    autocapture: true,
    capture_pageview: true,
    capture_pageleave: true,
  });
  initialized = true;
}

export function track(event: string, properties?: Record<string, unknown>) {
  if (!initialized) return;
  posthog.capture(event, properties);
}
