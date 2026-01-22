import { Check, MessageSquare, Search, Link2 } from "lucide-react";

const features = [
  {
    title: "Capture decisions instantly",
    description: "Log decisions right where they happen—in Slack. Include context, alternatives, and reasoning.",
    badge: "2-second setup",
    imagePosition: "left" as const,
    visual: "slack-decision",
  },
  {
    title: "Ask questions naturally",
    description: "Your AI teammate understands 'latest', 'recent', semantic meaning. No keyword searches, just conversation.",
    badge: "95% accuracy",
    imagePosition: "right" as const,
    visual: "ai-response",
  },
  {
    title: "Connect to your workflow",
    description: "Link decisions to Jira tickets. See why features were built, not just what was built.",
    badge: "One-click sync",
    imagePosition: "left" as const,
    visual: "jira-integration",
  },
];

const SlackDecisionVisual = () => (
  <div className="bg-card rounded-xl border border-border shadow-elegant overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
    {/* Slack header */}
    <div className="bg-primary px-4 py-3 flex items-center gap-3">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/20" />
        <div className="w-3 h-3 rounded-full bg-white/20" />
        <div className="w-3 h-3 rounded-full bg-white/20" />
      </div>
      <span className="text-white/80 text-sm font-medium">#engineering</span>
    </div>
    
    <div className="p-5 space-y-4">
      {/* User message with /decision */}
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-bold">A</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-foreground text-sm">Alex Chen</span>
            <span className="text-xs text-muted-foreground">11:42 AM</span>
          </div>
          <div className="bg-secondary rounded-lg p-3">
            <code className="text-accent font-medium">/decision</code>
            <span className="text-foreground ml-2">We're using PostgreSQL for the new payments service</span>
            <div className="mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-muted px-2 py-0.5 rounded">Context</span>
                Need ACID compliance for transactions
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-muted px-2 py-0.5 rounded">Alternatives</span>
                MongoDB, MySQL
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corteza bot response */}
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
          <span className="text-accent-foreground text-sm font-bold">C</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-foreground text-sm">Corteza</span>
            <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded">APP</span>
            <span className="text-xs text-muted-foreground">11:42 AM</span>
          </div>
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
            <div className="flex items-center gap-2 text-foreground">
              <Check className="w-4 h-4 text-success" />
              <span className="font-medium">Decision captured!</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Logged with context from #backend and #payments channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AIResponseVisual = () => (
  <div className="bg-card rounded-xl border border-border shadow-elegant overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
    {/* Header */}
    <div className="bg-secondary px-4 py-3 border-b border-border flex items-center gap-2">
      <Search className="w-4 h-4 text-muted-foreground" />
      <span className="text-foreground text-sm">Ask Corteza anything...</span>
    </div>
    
    <div className="p-5 space-y-4">
      {/* User question */}
      <div className="flex justify-end">
        <div className="bg-accent text-accent-foreground rounded-2xl rounded-br-md px-4 py-2 max-w-[80%]">
          <p className="text-sm">What are the latest decisions about onboarding?</p>
        </div>
      </div>

      {/* AI response */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
          <span className="text-accent-foreground text-xs font-bold">C</span>
        </div>
        <div className="flex-1 bg-secondary/50 rounded-2xl rounded-tl-md p-4">
          <p className="text-sm text-foreground mb-3">
            Here are the 3 most recent onboarding decisions:
          </p>
          <div className="space-y-3">
            <div className="bg-background rounded-lg p-3 border border-border/50">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm text-foreground">Remove email verification step</span>
                <span className="text-xs text-muted-foreground">2 days ago</span>
              </div>
              <p className="text-xs text-muted-foreground">Reduce friction for new users. Decision by @sarah</p>
            </div>
            <div className="bg-background rounded-lg p-3 border border-border/50">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm text-foreground">Add interactive product tour</span>
                <span className="text-xs text-muted-foreground">1 week ago</span>
              </div>
              <p className="text-xs text-muted-foreground">Improve activation rate. Decision by @mike</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const JiraIntegrationVisual = () => (
  <div className="bg-card rounded-xl border border-border shadow-elegant overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
    {/* Jira header */}
    <div className="bg-[#0052CC] px-4 py-3 flex items-center gap-3">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-white/20" />
        <div className="w-3 h-3 rounded-full bg-white/20" />
        <div className="w-3 h-3 rounded-full bg-white/20" />
      </div>
      <span className="text-white/80 text-sm font-medium">PROJ-1234: Payment Flow Redesign</span>
    </div>
    
    <div className="p-5">
      {/* Jira ticket summary */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-6 bg-success rounded flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
        <div>
          <span className="text-xs text-muted-foreground">Story</span>
          <h4 className="font-semibold text-foreground">Implement new checkout flow</h4>
        </div>
      </div>

      {/* Linked decisions section */}
      <div className="border border-accent/30 rounded-lg bg-accent/5 p-4">
        <div className="flex items-center gap-2 mb-3">
          <Link2 className="w-4 h-4 text-accent" />
          <span className="font-medium text-sm text-foreground">Linked Decisions</span>
          <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded">via Corteza</span>
        </div>
        
        <div className="space-y-2">
          <div className="bg-background rounded-md p-3 border border-border/50">
            <div className="flex items-start gap-2">
              <MessageSquare className="w-4 h-4 text-accent mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Use Stripe for payments</p>
                <p className="text-xs text-muted-foreground">Dec 15 • by @alex • #payments</p>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-md p-3 border border-border/50">
            <div className="flex items-start gap-2">
              <MessageSquare className="w-4 h-4 text-accent mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">3-step checkout flow</p>
                <p className="text-xs text-muted-foreground">Dec 12 • by @sarah • #product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureVisual = ({ type }: { type: string }) => {
  switch (type) {
    case "slack-decision":
      return <SlackDecisionVisual />;
    case "ai-response":
      return <AIResponseVisual />;
    case "jira-integration":
      return <JiraIntegrationVisual />;
    default:
      return null;
  }
};

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to preserve team knowledge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From capturing decisions to connecting them with your existing tools.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`${
                  feature.imagePosition === "right" ? "lg:order-2" : "lg:order-1"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <FeatureVisual type={feature.visual} />
              </div>

              {/* Text */}
              <div
                className={`${
                  feature.imagePosition === "right" ? "lg:order-1" : "lg:order-2"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 100 + 50}ms` }}
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                  <Check className="w-3.5 h-3.5" />
                  {feature.badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
