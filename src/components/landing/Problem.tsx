import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    stat: "71%",
    label: "of senior managers",
    desc: "say meetings are unproductive and inefficient",
    source: "Harvard Business Review"
  },
  {
    icon: DollarSign,
    stat: "$37B",
    label: "lost annually",
    desc: "in the US alone due to unproductive meetings",
    source: "Doodle"
  },
  {
    icon: Clock,
    stat: "31 hours",
    label: "per month",
    desc: "spent in meetings by the average employee — 50% wasted",
    source: "Industry Research"
  },
  {
    icon: AlertTriangle,
    stat: "$15M",
    label: "per year",
    desc: "lost due to decisions made with poor or missing information",
    source: "Gartner"
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-headline font-bold text-foreground mb-6">
            Decisions are the most valuable output of work
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Yet they're scattered across Slack threads, lost in meeting recordings, 
            and forgotten before they're ever documented. The cost? Confusion, rework, and blame.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div 
              key={i}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-elegant transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{item.stat}</div>
              <div className="text-sm font-medium text-foreground mb-2">{item.label}</div>
              <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
              <div className="text-xs text-muted-foreground/70">— {item.source}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-lg font-medium text-foreground">
            Poor operational decision-making costs companies over{" "}
            <span className="text-accent">3% of profits</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">— Gartner</p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
