import { Search, Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const follow = [
  { k: "Decision captured", d: "Mon 10:42", done: true },
  { k: "Action assigned to Cristian", d: "Mon 10:43", done: true },
  { k: "Reminder sent", d: "Thu 09:00", done: true },
  { k: "Completed", d: "Fri 16:20", done: true },
  { k: "Outcome remembered", d: "Forever", done: false },
];

const links = [
  { label: "Meeting", text: "Pricing sync · Sep 29", pos: "top-4 left-0" },
  { label: "Previous decision", text: "Freeze prices for Q3", pos: "top-4 right-0" },
  { label: "People", text: "Ana, Cristian, Marta", pos: "bottom-4 left-0" },
  { label: "Later outcome", text: "+12% trial conversion", pos: "bottom-4 right-0" },
];

const TeamMemory = () => {
  const a = useReveal();
  const b = useReveal();
  return (
    <section id="team-memory" className="py-28 bg-background">
      <div className="container mx-auto px-6 max-w-[1200px] space-y-32">
        {/* Follow-through */}
        <div ref={a.ref} className={`grid lg:grid-cols-2 gap-14 items-center reveal ${a.visible ? "is-visible" : ""}`}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-signal mb-4">Follow-through</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.05] mb-6">Capturing is the easy part. Corteza stays until it's done.</h2>
            <p className="text-xl text-muted-foreground">Summaries get read once. Corteza keeps owners in the loop until the commitment is closed.</p>
          </div>
          <ol className="relative border-l-2 border-border ml-3">
            {follow.map((f, i) => (
              <li
                key={f.k}
                className="pl-8 pb-7 last:pb-0 relative transition-all duration-700"
                style={{ transitionDelay: `${i * 150}ms`, opacity: a.visible ? 1 : 0, transform: a.visible ? "none" : "translateX(-8px)" }}
              >
                <span className={`absolute -left-[13px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center ${f.done ? "bg-success text-success-foreground" : "bg-signal text-signal-foreground"}`}>
                  {f.done ? <Check className="w-3.5 h-3.5" /> : <span className="w-2 h-2 rounded-full bg-signal-foreground" />}
                </span>
                <p className="text-lg font-semibold">{f.k}</p>
                <p className="text-sm text-muted-foreground font-mono">{f.d}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Organizational memory */}
        <div ref={b.ref} className={`reveal ${b.visible ? "is-visible" : ""}`}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-signal mb-4">Team memory</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.02]">
              Find the decision, <span className="font-serif italic font-normal text-muted-foreground">not the transcript.</span>
            </h2>
            <p className="text-xl text-muted-foreground mt-6">Your team's decisions shouldn't disappear into old recordings. Ask, and get the answer with its whole story.</p>
          </div>

          <div className="max-w-2xl mx-auto mb-10 flex items-center gap-3 rounded-full border border-border bg-card px-5 py-4 shadow-sm">
            <Search className="w-5 h-5 text-muted-foreground" />
            <span className="text-lg text-foreground">Why did we change pricing in September?</span>
            <span className="ml-auto w-0.5 h-5 bg-signal animate-pulse" />
          </div>

          <div className="relative hidden md:block h-[360px] max-w-4xl mx-auto">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 360" preserveAspectRatio="none" aria-hidden>
              {[[130, 50], [670, 50], [130, 310], [670, 310]].map(([x, y], i) => (
                <line key={i} x1="400" y1="180" x2={x} y2={y} className="stroke-border" strokeWidth="2" strokeDasharray="6 6"
                  style={{ strokeDashoffset: b.visible ? 0 : 400, transition: `stroke-dashoffset 1.2s ${i * 0.15}s ease` }} />
              ))}
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-ink text-ink-foreground p-6 w-72 shadow-xl">
              <span className="text-[11px] font-semibold uppercase tracking-wide rounded-md px-2 py-1 bg-signal text-signal-foreground">Decision</span>
              <p className="text-xl font-semibold mt-3">Run a pricing experiment for new signups</p>
            </div>
            {links.map((l) => (
              <div key={l.label} className={`absolute ${l.pos} w-56 rounded-xl border border-border bg-card p-4 shadow-sm`}>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{l.label}</p>
                <p className="text-base font-medium mt-1">{l.text}</p>
              </div>
            ))}
          </div>
          <div className="md:hidden grid gap-3">
            {links.map((l) => (
              <div key={l.label} className="rounded-xl border border-border bg-card p-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{l.label}</p>
                <p className="text-base font-medium mt-1">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemory;
