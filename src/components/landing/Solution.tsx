import { CheckCircle2 } from "lucide-react";

const features = [
  "Capture decisions automatically from Slack and meetings",
  "AI detects decisions — humans approve or reject",
  "Every decision linked to context and Jira tickets",
  "Searchable, traceable, auditable decision history",
];

const Solution = () => {
  return (
    <section id="solution" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                The solution
              </div>
              <h2 className="text-headline font-bold text-foreground mb-6">
                A system of record for your decisions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Not another meeting notes tool. Not a task manager. A dedicated layer 
                for decision intelligence and governance — so every choice your team makes 
                is captured, contextualized, and connected to execution.
              </p>

              <div className="space-y-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-elegant">
                <div className="space-y-4">
                  {/* Decision card mock */}
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">
                        Approved
                      </span>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <h4 className="font-medium text-foreground mb-2">
                      Migrate to PostgreSQL by Q1
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Team agreed to complete database migration before the new billing system launch.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="px-2 py-1 rounded bg-secondary">JIRA-2341</span>
                      <span>•</span>
                      <span>Sprint Planning Meeting</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/20 text-accent">
                        Pending review
                      </span>
                      <span className="text-xs text-muted-foreground">Just now</span>
                    </div>
                    <h4 className="font-medium text-foreground mb-2">
                      Use feature flags for gradual rollout
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      AI detected from Slack #platform discussion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
