import { useEffect, useState } from "react";
import { Check } from "lucide-react";

// ─── Scene definitions ────────────────────────────────────────────────────────
//  Scene 0 – Someone types /decision in Slack
//  Scene 1 – Corteza confirms the capture
//  Scene 2 – A team-mate asks a question; Corteza answers with context
// Each scene holds for HOLD_MS, then fades out over FADE_MS, then the next starts.

const HOLD_MS = 2800;
const FADE_MS = 500;
const TOTAL_SCENES = 3;

// Typing animation speed (ms per character)
const TYPE_MS = 38;

const SLACK_MESSAGE =
  "/decision We're using PostgreSQL for payments. Need ACID compliance.";

const SEARCH_QUERY = "Why did we pick PostgreSQL?";

const AI_ANSWER = {
  summary: "2 decisions found for "payments"",
  items: [
    {
      title: "Use PostgreSQL for payments service",
      meta: "Alex Chen · #engineering · 2 days ago",
      reason: "ACID compliance needed for transactions",
    },
    {
      title: "Reject MongoDB for payments",
      meta: "Alex Chen · #engineering · 2 days ago",
      reason: "No native transaction support",
    },
  ],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const MacChrome = ({ url = "app.corteza.app" }: { url?: string }) => (
  <div className="bg-[#2a2a2a] px-4 py-[10px] flex items-center gap-3 border-b border-white/10">
    <div className="flex gap-1.5 flex-shrink-0">
      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
    </div>
    <div className="flex-1 bg-[#1a1a1a] rounded-md px-3 py-1 text-center">
      <span className="text-[11px] text-white/40 font-mono">{url}</span>
    </div>
  </div>
);

// Scene 0: Slack command being typed
const SlackScene = ({ visible, typed }: { visible: boolean; typed: string }) => (
  <div
    className="absolute inset-0 transition-opacity duration-500"
    style={{ opacity: visible ? 1 : 0 }}
  >
    {/* Slack sidebar stub */}
    <div className="flex h-full">
      <div className="w-14 bg-[#1a1a2e] flex flex-col items-center pt-3 gap-3 flex-shrink-0">
        <div className="w-8 h-8 rounded-lg bg-accent/80 flex items-center justify-center">
          <span className="text-white text-xs font-bold">C</span>
        </div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-8 h-8 rounded-lg bg-white/5" />
        ))}
      </div>

      <div className="flex-1 flex flex-col bg-[#1e1e2e]">
        {/* Channel header */}
        <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
          <span className="text-white/40 text-sm font-medium">#</span>
          <span className="text-white/80 text-sm font-semibold">engineering</span>
        </div>

        {/* Chat area */}
        <div className="flex-1 px-4 py-4 space-y-4 overflow-hidden">
          {/* Previous message – already faded */}
          <div className="flex items-start gap-3 opacity-40">
            <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white/80 text-xs font-semibold">Sarah Kim</span>
                <span className="text-white/30 text-xs">10:51 AM</span>
              </div>
              <p className="text-white/50 text-xs">Sounds good, let's go with that approach.</p>
            </div>
          </div>

          {/* Active message being typed */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white/90 text-xs font-semibold">Alex Chen</span>
                <span className="text-white/30 text-xs">11:42 AM</span>
              </div>
              <div className="bg-white/5 rounded-lg px-3 py-2 inline-block max-w-full">
                <span className="text-[12px] text-white/80 font-mono break-all">
                  {typed}
                  {typed.length < SLACK_MESSAGE.length && (
                    <span className="inline-block w-[2px] h-[13px] bg-accent ml-0.5 align-middle animate-pulse" />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="mx-4 mb-4 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
          <span className="text-white/25 text-xs">Message #engineering</span>
        </div>
      </div>
    </div>
  </div>
);

// Scene 1: Corteza bot confirms decision was captured
const ConfirmScene = ({ visible }: { visible: boolean }) => (
  <div
    className="absolute inset-0 transition-opacity duration-500"
    style={{ opacity: visible ? 1 : 0 }}
  >
    <div className="flex h-full">
      <div className="w-14 bg-[#1a1a2e] flex flex-col items-center pt-3 gap-3 flex-shrink-0">
        <div className="w-8 h-8 rounded-lg bg-accent/80 flex items-center justify-center">
          <span className="text-white text-xs font-bold">C</span>
        </div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-8 h-8 rounded-lg bg-white/5" />
        ))}
      </div>

      <div className="flex-1 flex flex-col bg-[#1e1e2e]">
        <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
          <span className="text-white/40 text-sm font-medium">#</span>
          <span className="text-white/80 text-sm font-semibold">engineering</span>
        </div>

        <div className="flex-1 px-4 py-4 space-y-4 overflow-hidden">
          {/* Original command – faded */}
          <div className="flex items-start gap-3 opacity-40">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white/80 text-xs font-semibold">Alex Chen</span>
                <span className="text-white/30 text-xs">11:42 AM</span>
              </div>
              <div className="bg-white/5 rounded-lg px-3 py-2">
                <span className="text-[11px] text-white/60 font-mono">{SLACK_MESSAGE}</span>
              </div>
            </div>
          </div>

          {/* Corteza bot confirmation */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white/90 text-xs font-semibold">Corteza</span>
                <span className="text-[10px] bg-accent/25 text-accent px-1.5 py-0.5 rounded font-medium">APP</span>
                <span className="text-white/30 text-xs">11:42 AM</span>
              </div>
              <div className="bg-accent/10 border border-accent/25 rounded-xl p-3 max-w-[85%]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-white/90 text-xs font-semibold">Decision captured!</span>
                </div>
                <p className="text-white/55 text-[11px] leading-relaxed">
                  Stored with full context from <span className="text-accent/80">#engineering</span>. Your team can search this anytime.
                </p>
                <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-3">
                  <span className="text-[10px] text-white/35">
                    📌 Linked to #payments · #architecture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 mb-4 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
          <span className="text-white/25 text-xs">Message #engineering</span>
        </div>
      </div>
    </div>
  </div>
);

// Scene 2: AI search interface with answer
const SearchScene = ({ visible, typed }: { visible: boolean; typed: string }) => (
  <div
    className="absolute inset-0 transition-opacity duration-500 flex flex-col bg-[#12121e]"
    style={{ opacity: visible ? 1 : 0 }}
  >
    {/* Top nav */}
    <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
      <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center flex-shrink-0">
        <span className="text-white text-[10px] font-bold">C</span>
      </div>
      <span className="text-white/80 text-xs font-semibold">Corteza</span>
      <span className="ml-auto text-white/30 text-[10px]">Team Memory</span>
    </div>

    <div className="flex-1 flex flex-col px-4 py-4 gap-3 overflow-hidden">
      {/* User question bubble */}
      <div className="flex justify-end">
        <div className="bg-accent text-white rounded-2xl rounded-br-sm px-3 py-2 max-w-[80%]">
          <p className="text-xs">
            {typed}
            {typed.length < SEARCH_QUERY.length && (
              <span className="inline-block w-[2px] h-[12px] bg-white/80 ml-0.5 align-middle animate-pulse" />
            )}
          </p>
        </div>
      </div>

      {/* AI answer — only show once typed */}
      {typed === SEARCH_QUERY && (
        <div className="flex items-start gap-2">
          <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-[10px] font-bold">C</span>
          </div>
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-3">
            <p className="text-white/70 text-[11px] mb-3">{AI_ANSWER.summary}</p>
            <div className="space-y-2">
              {AI_ANSWER.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-lg p-2.5"
                  style={{
                    animationDelay: `${i * 150}ms`,
                  }}
                >
                  <p className="text-white/85 text-[11px] font-medium mb-0.5">{item.title}</p>
                  <p className="text-white/35 text-[10px]">{item.meta}</p>
                  <p className="text-accent/70 text-[10px] mt-1">↳ {item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>

    {/* Search input */}
    <div className="mx-4 mb-4 rounded-xl border border-white/15 bg-white/5 px-3 py-2 flex items-center gap-2">
      <span className="text-white/25 text-xs flex-1">Ask anything about your team's decisions…</span>
    </div>
  </div>
);

// ─── Dot indicator ────────────────────────────────────────────────────────────

const SceneDots = ({ current }: { current: number }) => (
  <div className="flex items-center justify-center gap-2 pt-4">
    {[...Array(TOTAL_SCENES)].map((_, i) => (
      <div
        key={i}
        className="rounded-full transition-all duration-400"
        style={{
          width: i === current ? "20px" : "6px",
          height: "6px",
          background: i === current ? "hsl(var(--accent))" : "hsl(var(--muted-foreground) / 0.3)",
        }}
      />
    ))}
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

const HeroVisual = () => {
  const [scene, setScene] = useState(0);
  const [typedSlack, setTypedSlack] = useState("");
  const [typedSearch, setTypedSearch] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    let intervals: ReturnType<typeof setInterval>[] = [];

    const runScene = (s: number) => {
      setScene(s);
      setFadeOut(false);
      setTypedSlack("");
      setTypedSearch("");

      if (s === 0) {
        // Type the Slack message
        let i = 0;
        const iv = setInterval(() => {
          i++;
          setTypedSlack(SLACK_MESSAGE.slice(0, i));
          if (i >= SLACK_MESSAGE.length) clearInterval(iv);
        }, TYPE_MS);
        intervals.push(iv);

        // After typing + hold, advance
        const total = SLACK_MESSAGE.length * TYPE_MS + HOLD_MS;
        const t = setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => runScene(1), FADE_MS);
        }, total);
        timeouts.push(t);
      } else if (s === 1) {
        // Just hold, then advance
        const t = setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => runScene(2), FADE_MS);
        }, HOLD_MS + 600);
        timeouts.push(t);
      } else if (s === 2) {
        // Delay before typing starts
        const delay = setTimeout(() => {
          let i = 0;
          const iv = setInterval(() => {
            i++;
            setTypedSearch(SEARCH_QUERY.slice(0, i));
            if (i >= SEARCH_QUERY.length) clearInterval(iv);
          }, TYPE_MS);
          intervals.push(iv);
        }, 400);
        timeouts.push(delay);

        // After typing + hold, loop back
        const total = 400 + SEARCH_QUERY.length * TYPE_MS + HOLD_MS + 1400;
        const t = setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => runScene(0), FADE_MS);
        }, total);
        timeouts.push(t);
      }
    };

    runScene(0);

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Mac window chrome */}
      <div
        className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #12121e 100%)",
        }}
      >
        <MacChrome url={scene === 2 ? "app.corteza.app" : "slack.com"} />

        {/* Viewport */}
        <div
          className="relative overflow-hidden"
          style={{
            height: "340px",
            transition: `opacity ${FADE_MS}ms ease`,
            opacity: fadeOut ? 0 : 1,
          }}
        >
          <SlackScene visible={scene === 0} typed={typedSlack} />
          <ConfirmScene visible={scene === 1} />
          <SearchScene visible={scene === 2} typed={typedSearch} />
        </div>
      </div>

      {/* Scene indicator dots */}
      <SceneDots current={scene} />

      {/* Step labels */}
      <div className="flex justify-center gap-0 mt-2">
        {[
          { label: "Log in Slack", active: scene === 0 },
          { label: "Auto-captured", active: scene === 1 },
          { label: "AI search", active: scene === 2 },
        ].map(({ label, active }, i) => (
          <div key={i} className="flex-1 text-center">
            <span
              className="text-[11px] font-medium transition-colors duration-300"
              style={{ color: active ? "hsl(var(--accent))" : "hsl(var(--muted-foreground) / 0.4)" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroVisual;
