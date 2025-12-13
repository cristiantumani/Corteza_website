import { MessageSquare, CheckSquare, Video, Zap } from "lucide-react";

const integrations = [
  {
    icon: MessageSquare,
    name: "Slack",
    description: "Capture decisions from any channel or thread. No copy-pasting required.",
  },
  {
    icon: CheckSquare,
    name: "Jira",
    description: "Automatically link decisions to tickets. See the 'why' behind every task.",
  },
  {
    icon: Video,
    name: "Meeting Transcripts",
    description: "Connect Zoom, Google Meet, or upload transcripts. AI finds decisions for you.",
  },
  {
    icon: Zap,
    name: "More coming",
    description: "Linear, Notion, Confluence, and more integrations on the roadmap.",
  },
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Integrations
            </div>
            <h2 className="text-headline font-bold text-foreground mb-6">
              Works where you already work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No new tools to learn. No workflow changes. Connect your existing 
              tools and start capturing decisions in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-elegant transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors">
                  <integration.icon className="w-8 h-8 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>
            ))}
          </div>

          {/* Setup simplicity */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 p-6 rounded-2xl bg-secondary/50 border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">2 min</div>
                <div className="text-sm text-muted-foreground">to connect</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">0</div>
                <div className="text-sm text-muted-foreground">code required</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">secure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
