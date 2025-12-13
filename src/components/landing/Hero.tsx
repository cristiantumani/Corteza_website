import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setEmail("");
    
    toast({
      title: "You're on the list!",
      description: "We'll be in touch soon with early access details.",
    });
  };

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

          {/* Email Capture Form */}
          <form onSubmit={handleSubmit} className="animate-fade-in-up delay-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <div className="w-full sm:flex-1">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  className="h-12 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/20"
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="group w-full sm:w-auto"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Join early access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
            {error && (
              <p className="text-destructive text-sm mt-2 animate-fade-in">{error}</p>
            )}
          </form>
          
          <div className="mt-4 animate-fade-in-up delay-250">
            <Button variant="heroOutline" size="lg">
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
