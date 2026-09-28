import { CalendarCheck, CheckCircle2, MessagesSquare, TrendingUp } from "lucide-react";

/**
 * The meeting loop Corteza closes: prepare → meet → follow through → improve.
 * An illustration of the idea, not a product screenshot.
 */
const stages = [
  {
    icon: CalendarCheck,
    label: "Walk in prepared",
    detail: "What was decided last time, what's still open",
    position: "top-0 left-1/2 -translate-x-1/2",
  },
  {
    icon: MessagesSquare,
    label: "Meet",
    detail: "Decide, assign, move on",
    position: "top-1/2 right-0 -translate-y-1/2",
  },
  {
    icon: CheckCircle2,
    label: "Close the loop",
    detail: "Every commitment followed until it's done",
    position: "bottom-0 left-1/2 -translate-x-1/2",
  },
  {
    icon: TrendingUp,
    label: "Get better",
    detail: "Private feedback for the organizer",
    position: "top-1/2 left-0 -translate-y-1/2",
  },
];

/** Small screens: the same loop as a vertical list */
const LoopList = () => (
  <ol className="sm:hidden space-y-3" aria-hidden="true">
    {stages.map(({ icon: Icon, label, detail }, index) => (
      <li key={label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
          <Icon className="h-4 w-4 text-accent" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">{label}</p>
          <p className="text-xs text-muted-foreground">{detail}</p>
        </div>
        <span className="text-xs font-semibold text-muted-foreground">{index === stages.length - 1 ? "↺" : "↓"}</span>
      </li>
    ))}
  </ol>
);

const LoopVisual = () => (
  <>
  <LoopList />
  <div className="relative mx-auto hidden aspect-square w-full max-w-[460px] sm:block" aria-hidden="true">
    {/* The loop */}
    <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
      <defs>
        <marker id="loop-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-accent" />
        </marker>
      </defs>
      <circle cx="200" cy="200" r="138" className="fill-none stroke-border" strokeWidth="2" />
      <path
        d="M 297.6 102.4 A 138 138 0 0 1 297.6 297.6"
        className="fill-none stroke-accent"
        strokeWidth="3"
        strokeLinecap="round"
        markerEnd="url(#loop-arrow)"
      />
      <path
        d="M 102.4 297.6 A 138 138 0 0 1 102.4 102.4"
        className="fill-none stroke-accent"
        strokeWidth="3"
        strokeLinecap="round"
        markerEnd="url(#loop-arrow)"
      />
    </svg>

    {/* Center */}
    <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-foreground text-background shadow-xl">
      <img src="/favicon-96x96.png" alt="" className="mb-1 h-7 w-7 rounded-lg" />
      <span className="text-xs font-semibold leading-tight">Every meeting,</span>
      <span className="text-xs font-semibold leading-tight">closed.</span>
    </div>

    {/* Stages */}
    {stages.map(({ icon: Icon, label, detail, position }) => (
      <div
        key={label}
        className={`absolute ${position} w-36 rounded-xl border border-border bg-card p-3 text-center shadow-elegant`}
      >
        <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
          <Icon className="h-4 w-4 text-accent" />
        </div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{detail}</p>
      </div>
    ))}
  </div>
  </>
);

export default LoopVisual;
