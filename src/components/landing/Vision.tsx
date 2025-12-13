import { Radar, AlertCircle, GitBranch, TrendingUp } from "lucide-react";

const roadmapItems = [
  {
    icon: AlertCircle,
    title: "Contradicting decisions detection",
    description: "AI will flag when new decisions conflict with previous ones, preventing organizational whiplash.",
    status: "Coming Q1",
  },
  {
    icon: Radar,
    title: "Expired decisions alerts",
    description: "Get notified when decisions become stale or need revisiting based on time or context changes.",
    status: "Coming Q1",
  },
  {
    icon: GitBranch,
    title: "Decision trees",
    description: "Visualize how decisions branch and relate to each other across your organization.",
    status: "Coming Q2",
  },
  {
    icon: TrendingUp,
    title: "Organizational decision intelligence",
    description: "Analytics on decision patterns, velocity, and quality across teams and projects.",
    status: "Coming Q2",
  },
];

const Vision = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Roadmap
            </div>
            <h2 className="text-headline font-bold text-foreground mb-6">
              Where we're heading
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Today, we capture and organize decisions. Tomorrow, we'll help you 
              understand patterns, prevent conflicts, and make better decisions faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmapItems.map((item, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-card border border-border hover:border-accent/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
