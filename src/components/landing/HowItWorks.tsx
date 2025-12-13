import { MessageSquare, Brain, Link2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Capture from where work happens",
    description: "Connect Slack channels and meeting transcripts. Decisions are detected from natural conversations — no extra effort required.",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI suggests, humans approve",
    description: "Our AI identifies potential decisions and presents them for review. You approve, reject, or edit. Nothing goes into the record without your consent.",
  },
  {
    icon: Link2,
    number: "03",
    title: "Decisions connect to execution",
    description: "Approved decisions automatically link to Jira tickets. See what was decided, when, why, and what action followed.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            How it works
          </div>
          <h2 className="text-headline font-bold text-foreground mb-6">
            Three steps to decision clarity
          </h2>
          <p className="text-lg text-muted-foreground">
            No new workflows. No behavior change. Just capture what's already happening.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div 
                key={i}
                className="relative group"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
                )}
                <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-elegant transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <step.icon className="w-7 h-7 text-accent" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/30">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
