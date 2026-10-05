import { useState } from "react";
import { Check, CircleHelp, Flag, TriangleAlert, Quote } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const types = [
  { key: "Decisions", line: "Know exactly what was decided.", icon: Flag, item: "Launch the pricing experiment Monday", quote: "Okay, we'll start the experiment on Monday.", time: "42:18", who: "Ana" },
  { key: "Action items", line: "Know who owes what.", icon: Check, item: "Cristian sets up the experiment by Monday", quote: "I'll set it up this week.", time: "43:02", who: "Cristian" },
  { key: "Open questions", line: "Know what still needs an answer.", icon: CircleHelp, item: "Should existing customers be included?", quote: "Do we include existing customers though?", time: "44:40", who: "Marta" },
  { key: "Risks", line: "Know what could derail the work.", icon: TriangleAlert, item: "Billing changes may confuse annual plans", quote: "Annual plans might get weird with this.", time: "47:11", who: "Leo" },
];

const Outcomes = () => {
  const [i, setI] = useState(0);
  const { ref, visible } = useReveal();
  const t = types[i];
  const Icon = t.icon;

  return (
    <section id="outcomes" className="py-28 bg-paper">
      <div ref={ref} className={`container mx-auto px-6 max-w-[1200px] reveal ${visible ? "is-visible" : ""}`}>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-signal mb-4">Outcomes, not transcripts</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.05] mb-10">
              Four things every meeting should leave behind.
            </h2>
            <div className="space-y-1">
              {types.map((x, idx) => (
                <button
                  key={x.key}
                  onClick={() => setI(idx)}
                  onMouseEnter={() => setI(idx)}
                  className={`w-full text-left flex items-baseline justify-between gap-4 py-4 border-b transition-colors ${
                    idx === i ? "border-signal" : "border-border"
                  }`}
                >
                  <span className={`text-2xl font-semibold ${idx === i ? "text-foreground" : "text-muted-foreground"}`}>{x.key}</span>
                  <span className="text-base text-muted-foreground hidden sm:inline">{x.line}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product card: AI shows its work */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[28px] bg-signal/10 rotate-2" />
            <div key={t.key} className="relative rounded-2xl bg-card border border-border shadow-xl p-7 animate-scale-in">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                <span className="w-8 h-8 rounded-lg bg-signal-soft text-signal flex items-center justify-center"><Icon className="w-4 h-4" /></span>
                {t.key.replace(/s$/, "")} · Product strategy
              </div>
              <p className="text-2xl md:text-3xl font-semibold leading-snug mb-7">{t.item}</p>
              <div className="rounded-xl bg-secondary border border-border p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5"><Quote className="w-3.5 h-3.5" /> Source</span>
                  <span className="font-mono normal-case tracking-normal text-signal">▶ {t.time}</span>
                </div>
                <p className="text-lg font-serif italic text-foreground">"{t.quote}"</p>
                <p className="text-sm text-muted-foreground mt-2">— {t.who}</p>
              </div>
              <p className="text-sm text-muted-foreground mt-5">AI should show its work. Every outcome links back to what was actually said.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
