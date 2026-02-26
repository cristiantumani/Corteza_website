import { MessageSquare, Search, Brain } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Capture in seconds, wherever work happens",
    description:
      "Log a decision from Slack, the dashboard, or the browser extension — include the why, the alternatives, the context. Zero workflow changes needed.",
    detail: "No extra tab to open. Works mid-meeting, in async threads, during code reviews — anywhere.",
  },
  {
    icon: Search,
    number: "02",
    title: "Get answers instantly, not hours later",
    description:
      'Ask "Why did we pick Stripe?" or "What did we decide about guest checkout?" in plain English. Get the full context back in seconds.',
    detail: "Semantic search finds the right decision even if you don't remember the exact words used.",
  },
  {
    icon: Brain,
    number: "03",
    title: "Your team compounds its own knowledge",
    description:
      "New hires get up to speed in days. Stakeholders stop asking questions already answered. Repeat debates become a thing of the past.",
    detail: "Every decision logged makes the next one faster. The longer you use Corteza, the more valuable it gets.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works-steps" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Corteza works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From scattered context to confident decisions — in three steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-card border border-border rounded-2xl p-8 flex flex-col gap-4 hover:border-primary/30 transition-colors duration-300"
              >
                {/* Step number */}
                <span className="text-5xl font-black text-primary/10 absolute top-6 right-8 select-none">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground leading-snug">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
                <p className="text-xs text-muted-foreground/70 border-t border-border pt-4 mt-auto leading-relaxed">
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Connector arrows between steps (desktop only) */}
        <div className="hidden md:flex justify-center items-center gap-0 mt-0 -mt-4">
          {/* decorative only — handled by grid gap */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
