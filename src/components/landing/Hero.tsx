import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";

const lines = [
  { who: "Ana", text: "So… are we doing the pricing test or not?" },
  { who: "Cristian", text: "Let's start it Monday. I'll set it up." },
  { who: "Marta", text: "Do we include existing customers though?" },
  { who: "Ana", text: "Not sure. Let's look at results next Friday." },
];

const outcomes = [
  { tag: "Decision", text: "Pricing experiment starts Monday", tone: "signal" },
  { tag: "Action", text: "Set up the experiment", meta: "Cristian · Mon", tone: "ink" },
  { tag: "Open question", text: "Include existing customers?", tone: "muted" },
  { tag: "Follow-up", text: "Review results", meta: "Next Friday", tone: "success" },
];

const toneClass: Record<string, string> = {
  signal: "bg-signal text-signal-foreground",
  ink: "bg-ink text-ink-foreground",
  muted: "bg-secondary text-foreground border border-border",
  success: "bg-success/15 text-success",
};

const Hero = () => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 10), 900);
    return () => clearInterval(id);
  }, []);
  const shownLines = Math.min(step + 1, 4);
  const shownOutcomes = Math.max(0, Math.min(step - 3, 4));

  return (
    <section className="relative overflow-hidden bg-paper pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grain-dots opacity-60 pointer-events-none" />
      <div className="container mx-auto px-6 relative max-w-[1200px]">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
            For Google Meet · Private beta
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[88px] font-bold text-foreground leading-[0.98] tracking-[-0.035em] mb-8 animate-fade-in-up">
            Meetings that <span className="font-serif italic font-normal text-signal">close</span> the loop.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10 animate-fade-in-up delay-100">
            The meeting ends. The work doesn't. Corteza turns every conversation into decisions,
            owners and follow-ups — and remembers all of it.
          </p>
          <div className="flex flex-wrap items-center gap-6 animate-fade-in-up delay-200">
            <Link to="/early-access" onClick={() => track("cta_click", { cta: "request_early_access", location: "hero" })}>
              <Button className="group h-auto rounded-full bg-ink text-ink-foreground hover:bg-ink/85 px-8 py-4 text-base font-semibold">
                Request early access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Conversation → outcomes */}
        <div className="mt-20 grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch animate-fade-in delay-300">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Pricing sync · Meet</span>
              <span className="flex items-center gap-1.5 text-xs text-destructive"><span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />Live</span>
            </div>
            <div className="space-y-3 min-h-[200px]">
              {lines.slice(0, shownLines).map((l, i) => (
                <div key={i} className="flex gap-3 animate-fade-in-up">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-secondary border border-border text-xs font-semibold flex items-center justify-center">{l.who[0]}</span>
                  <p className="text-base text-muted-foreground"><span className="font-medium text-foreground">{l.who}</span> {l.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-signal text-signal-foreground flex items-center justify-center shadow-lg">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          <div className="rounded-2xl bg-ink text-ink-foreground p-6 shadow-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-ink-foreground/60">What Corteza kept</span>
            <div className="mt-5 space-y-3 min-h-[200px]">
              {outcomes.slice(0, shownOutcomes).map((o) => (
                <div key={o.tag} className="flex items-center gap-3 rounded-xl bg-ink-foreground/5 border border-ink-foreground/10 p-3 animate-scale-in">
                  <span className={`text-[11px] font-semibold uppercase tracking-wide rounded-md px-2 py-1 ${toneClass[o.tone]}`}>{o.tag}</span>
                  <span className="text-base flex-1">{o.text}</span>
                  {o.meta && <span className="text-xs text-ink-foreground/60">{o.meta}</span>}
                </div>
              ))}
              {shownOutcomes === 0 && <p className="text-base text-ink-foreground/50">Listening for outcomes…</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
