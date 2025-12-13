import { Shield, Eye, UserCheck, Lock } from "lucide-react";

const trustPoints = [
  {
    icon: Eye,
    title: "Full transparency",
    description: "See exactly what the AI detected and why. Every suggestion includes the source context.",
  },
  {
    icon: UserCheck,
    title: "Human approval required",
    description: "Nothing enters the decision record without explicit human review and approval.",
  },
  {
    icon: Lock,
    title: "No hallucinations",
    description: "AI only surfaces decisions from your actual conversations. No fabricated content.",
  },
  {
    icon: Shield,
    title: "You stay in control",
    description: "Edit, reject, or refine any AI suggestion. The final word is always yours.",
  },
];

const AITrust = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              AI you can trust
            </div>
            <h2 className="text-headline font-bold text-foreground mb-6">
              AI detection, human control
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe AI should assist, not decide. Our system suggests — you approve. 
              Every decision in your record is verified by a human.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trustPoints.map((point, i) => (
              <div 
                key={i}
                className="p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <point.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual representation */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-sm font-bold">AI</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">Decision detected</div>
                  <div className="text-xs text-muted-foreground">From Slack #product-decisions</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">Pending review</span>
              </div>

              <div className="p-4 rounded-xl bg-secondary/50 border border-border mb-6">
                <p className="text-foreground mb-2">
                  "We're going with Option B for the checkout flow redesign. Ship date is end of Q1."
                </p>
                <p className="text-sm text-muted-foreground">
                  — Sarah Chen, 2 hours ago in #product-decisions
                </p>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button className="px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
                  Reject
                </button>
                <button className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
                  Approve as decision
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITrust;
