import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse-subtle delay-500" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Now in early access
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-display font-bold text-foreground mb-6 animate-fade-in-up text-balance leading-[1.1]">
            Your decisions deserve
            <br />
            <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              a system of record
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100 text-balance">
            Capture decisions from Slack and meetings. Let AI detect them. Keep humans in control. 
            Never lose context on why something was decided.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
            <Button variant="hero" size="xl" className="group">
              Join early access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              See how it works
            </Button>
          </div>

          {/* Social proof hint */}
          <p className="mt-10 text-sm text-muted-foreground animate-fade-in-up delay-300">
            Built for product, engineering, and leadership teams
          </p>
        </div>

        {/* Hero visual */}
        <div className="mt-16 max-w-5xl mx-auto animate-fade-in-up delay-400">
          <div className="relative rounded-2xl border border-border bg-card shadow-elegant overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
            <div className="p-8 relative">
              {/* Mock UI */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/40" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                </div>
                <div className="flex-1 h-6 bg-secondary rounded-md" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Decision detected", desc: "API rate limiting strategy", source: "Slack #engineering" },
                  { title: "Awaiting approval", desc: "Q4 roadmap priorities", source: "Product sync meeting" },
                  { title: "Linked to JIRA-1234", desc: "Authentication refactor", source: "Sprint planning" },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-accent/30 transition-colors"
                  >
                    <div className="text-xs font-medium text-accent mb-2">{item.title}</div>
                    <div className="text-sm font-medium text-foreground mb-1">{item.desc}</div>
                    <div className="text-xs text-muted-foreground">{item.source}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
