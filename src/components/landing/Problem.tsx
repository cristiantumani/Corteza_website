import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { n: 3, label: "decisions" },
  { n: 5, label: "action items" },
  { n: 2, label: "open questions" },
  { n: 1, label: "risk" },
];

const failures = [
  ["Nothing closes", "Decisions get re-opened and the same topic comes back next week."],
  ["Nobody remembers", "What was decided is lost in threads and impossible to find later."],
  ["Nobody learns", "Meetings drift and end without owners, with no feedback to fix it."],
  ["The cost is invisible", "Hours of senior time spent re-discussing instead of executing."],
];

const Counter = ({ to, run }: { to: number; run: boolean }) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setV(i);
      if (i >= to) clearInterval(id);
    }, 180);
    return () => clearInterval(id);
  }, [run, to]);
  return <>{v}</>;
};

const Problem = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="problem" className="py-28 bg-background">
      <div ref={ref} className={`container mx-auto px-6 max-w-[1200px] reveal ${visible ? "is-visible" : ""}`}>
        <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.02] max-w-4xl mb-16">
          Most meetings don't fail in the room.
          <span className="block text-muted-foreground">They fail <span className="font-serif italic font-normal text-signal">after.</span></span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center mb-20">
          <div>
            <p className="text-7xl md:text-8xl font-bold tracking-tight">60<span className="text-3xl md:text-4xl text-muted-foreground font-medium ml-2">min</span></p>
            <p className="text-xl text-muted-foreground mt-3">of conversation, and usually nothing written down.</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper p-8">
                <p className="text-5xl font-bold text-signal tabular-nums"><Counter to={s.n} run={visible} /></p>
                <p className="text-lg text-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
          {failures.map(([t, d], i) => (
            <div key={t} className="pt-6 pr-6 pb-2">
              <p className="text-sm font-mono text-muted-foreground mb-2">0{i + 1}</p>
              <h3 className="text-xl font-semibold mb-2">{t}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
