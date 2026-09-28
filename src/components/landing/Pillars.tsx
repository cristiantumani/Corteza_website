import { CheckCircle2, Circle, AlertTriangle, TrendingUp, CalendarCheck, Lock } from "lucide-react";

/** Example cards: illustrations of each pillar, not product screenshots */
const LoopExample = () => (
  <div className="bg-card rounded-xl border border-border shadow-elegant p-5 space-y-3">
    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Launch plan · follow-up</p>
    {[
      { done: true, text: "Pricing page updated", who: "Ana", when: "Done" },
      { done: false, text: "Send the beta invite to 20 customers", who: "Martín", when: "Due Friday" },
      { done: false, overdue: true, text: "Confirm the payments provider", who: "Sofía", when: "2 days overdue" },
    ].map(item => (
      <div key={item.text} className="flex items-start gap-3">
        {item.done
          ? <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          : item.overdue
            ? <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            : <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />}
        <div className="flex-1">
          <p className={`text-sm ${item.done ? "text-muted-foreground line-through" : "text-foreground"}`}>{item.text}</p>
          <p className={`text-xs ${item.overdue ? "text-destructive" : "text-muted-foreground"}`}>{item.who} · {item.when}</p>
        </div>
      </div>
    ))}
    <p className="text-xs text-muted-foreground border-t border-border pt-3">
      Reminder sent to Sofía · Decision on pricing reconfirmed in Tuesday's meeting
    </p>
  </div>
);

const FeedbackExample = () => (
  <div className="bg-card rounded-xl border border-border shadow-elegant p-5">
    <div className="flex items-center justify-between mb-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Weekly ops · your feedback</p>
      <span className="flex items-center gap-1 text-xs text-muted-foreground"><Lock className="w-3 h-3" /> Only you</span>
    </div>
    <div className="grid grid-cols-3 gap-3 mb-4">
      {[["3", "decisions"], ["5", "action items"], ["2", "had no owner"]].map(([n, label]) => (
        <div key={label} className="rounded-lg bg-secondary/60 p-3 text-center">
          <p className="text-xl font-bold text-foreground">{n}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      ))}
    </div>
    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
      <TrendingUp className="w-4 h-4 text-accent" /> Next time
    </p>
    <ul className="space-y-1.5 text-sm text-muted-foreground">
      <li>• "Q4 hiring" came up for the 3rd week in a row. Decide it or take it offline.</li>
      <li>• 20 minutes went to a topic decided two weeks ago.</li>
      <li>• 2 of 5 next steps ended without a date.</li>
    </ul>
  </div>
);

const BriefExample = () => (
  <div className="bg-card rounded-xl border border-border shadow-elegant p-5">
    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3 flex items-center gap-2">
      <CalendarCheck className="w-4 h-4 text-accent" /> Before today's product sync
    </p>
    <div className="space-y-3 text-sm">
      <div>
        <p className="font-semibold text-foreground">Decided last time</p>
        <p className="text-muted-foreground">Launch moves to October 22.</p>
      </div>
      <div>
        <p className="font-semibold text-foreground">Still open</p>
        <p className="text-muted-foreground">Who approves discounts above 30%?</p>
      </div>
      <div>
        <p className="font-semibold text-foreground">Who owes what</p>
        <p className="text-muted-foreground">Martín: beta invites (due Friday) · Sofía: payments provider (overdue)</p>
      </div>
    </div>
  </div>
);

const pillars = [
  {
    badge: "After the meeting",
    title: "Close the loop",
    text: "Every decision, owner and deadline is tracked until it's done. Corteza follows up with the people responsible, flags what's overdue, and notices when a later meeting moves something forward or reverses it.",
    visual: <LoopExample />,
  },
  {
    badge: "For the organizer",
    title: "Know how every meeting went",
    text: "After each meeting, the organizer gets a private scorecard: did it end with clear decisions and owners, how much time went to topics already decided, and what to change next time. Coaching, not surveillance.",
    visual: <FeedbackExample />,
  },
  {
    badge: "Before the meeting",
    title: "Walk in prepared",
    text: "Before a recurring meeting, everyone gets a short brief: what was decided last time, what's still open and who owes what. Meetings start where the last one ended.",
    visual: <BriefExample />,
  },
];

const Pillars = () => (
  <section id="how-it-works" className="py-24">
    <div className="container mx-auto px-6 max-w-[1200px]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Before, during and after every meeting
        </h2>
        <p className="text-lg text-muted-foreground">
          Corteza doesn't take notes. It makes your meetings pay off.
        </p>
      </div>

      <div className="space-y-20">
        {pillars.map((pillar, index) => (
          <div key={pillar.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-accent bg-accent/10 rounded-full px-3 py-1 mb-4">
                {pillar.badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{pillar.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{pillar.text}</p>
            </div>
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>{pillar.visual}</div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground mt-16">Examples are illustrative.</p>
    </div>
  </section>
);

export default Pillars;
