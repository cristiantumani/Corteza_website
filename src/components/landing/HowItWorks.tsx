import { MessageSquare, Search, Brain } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Log decisions where work happens",
    description:
      "Capture decisions from Slack, the web dashboard, or the browser extension — wherever your team works. Include what was decided, why, and what alternatives were considered.",
    detail: "No context-switching, no separate tool to open. Works in meetings, async threads, docs reviews — anywhere.",
  },
  {
    icon: Search,
    number: "02",
    title: "Ask anything, get instant answers",
    description:
      'Ask "Why did we pick Stripe over Braintree?" or "What did we decide about guest checkout?" — in plain English.',
    detail: "Corteza searches semantically, not by keyword. It finds the decision even if you don't remember the exact words.",
  },
  {
    icon: Brain,
    number: "03",
    title: "Your team's memory compounds over time",
    description:
      "New hires onboard faster. Sprint reviews have context. Stakeholders stop asking questions that were answered months ago.",
    detail: "Every decision logged makes the next search more valuable. Institutional knowledge that actually stays.",
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
            From any tool your team already uses to a searchable team memory — in three steps.
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
