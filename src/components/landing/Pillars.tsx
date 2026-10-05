import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const loop = [
  { k: "Meet", d: "Run your Google Meet as usual. No bot joins the call." },
  { k: "Capture", d: "Corteza picks out what actually matters." },
  { k: "Understand", d: "Decisions, actions, questions and risks — with sources." },
  { k: "Act", d: "Owners get nudged until the work is done." },
  { k: "Remember", d: "Everything joins your team's searchable memory." },
];

const steps = [
  ["Connect Google Meet", "Takes a minute. Corteza works with the meetings you already have."],
  ["Corteza finds the outcomes", "Decisions, action items, open questions and risks, each linked to the moment it was said."],
  ["Follow through", "See what needs your attention and what's still open — before the next meeting."],
];

const Pillars = () => {
  const { ref, visible } = useReveal();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => setActive((a) => (a + 1) % loop.length), 1800);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <section id="how-it-works" className="py-28 bg-ink text-ink-foreground overflow-hidden">
      <div ref={ref} className={`container mx-auto px-6 max-w-[1200px] reveal ${visible ? "is-visible" : ""}`}>
        <p className="text-sm font-semibold uppercase tracking-widest text-signal mb-4">The Corteza loop</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.02] max-w-3xl mb-16">
          Every meeting goes all the way around.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-24">
          {loop.map((s, i) => (
            <button
              key={s.k}
              onMouseEnter={() => setActive(i)}
              className={`text-left rounded-2xl p-6 border transition-all duration-500 ${
                active === i ? "bg-signal border-signal text-signal-foreground md:-translate-y-2" : "border-ink-foreground/15 text-ink-foreground"
              }`}
            >
              <span className="text-sm font-mono opacity-70">0{i + 1}</span>
              <p className="text-2xl font-semibold mt-6 mb-2">{s.k}</p>
              <p className={`text-sm leading-relaxed ${active === i ? "opacity-90" : "opacity-60"}`}>{s.d}</p>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <h3 className="text-3xl font-semibold">How it works.<span className="block text-ink-foreground/50 font-serif italic font-normal">Three steps, that's it.</span></h3>
          <ol className="divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
            {steps.map(([t, d], i) => (
              <li key={t} className="py-6 grid grid-cols-[3rem_1fr] gap-4">
                <span className="text-3xl font-serif italic text-signal">{i + 1}</span>
                <div>
                  <p className="text-xl font-semibold mb-1">{t}</p>
                  <p className="text-base text-ink-foreground/65">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
