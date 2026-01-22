import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden py-[120px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse-subtle delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column - 40% (2/5) */}
          <div className="lg:col-span-2 text-left">
            {/* Headline */}
            <h1 className="text-4xl md:text-[48px] font-bold text-foreground mb-6 animate-fade-in-up leading-[1.15] tracking-tight">
              Your team's institutional memory, powered by AI
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-10 animate-fade-in-up delay-100 leading-relaxed">
              Stop losing decisions in Slack threads. Corteza remembers everything—and explains why.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up delay-200">
              <Link to="/early-access">
                <Button 
                  variant="hero"
                  size="xl" 
                  className="group"
                >
                  Add to Slack - Free Beta
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              {/* Small text below button */}
              <p className="mt-4 text-sm text-muted-foreground">
                No credit card required • 2-minute setup
              </p>
            </div>
          </div>

          {/* Right Column - 60% (3/5) */}
          <div className="lg:col-span-3 animate-fade-in-up delay-300">
            <div className="relative rounded-2xl border border-border bg-card shadow-elegant overflow-hidden transition-all duration-300 ease-out hover:shadow-xl">
              {/* Video/Demo Container */}
              <div className="aspect-video bg-secondary/30 relative">
                {/* Demo animation placeholder - replace with actual video */}
                <div className="absolute inset-0 flex flex-col justify-center p-8 space-y-6">
                  {/* Step 1: Typing /decision */}
                  <div className="flex items-start gap-3 animate-fade-in">
                    <div className="w-8 h-8 rounded-full bg-[#4A154B] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-background rounded-lg p-3 shadow-sm border border-border/50 inline-block">
                        <code className="text-sm text-foreground">/decision</code>
                        <span className="text-muted-foreground text-sm ml-2">We're going with PostgreSQL for the new service</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Bot responding */}
                  <div className="flex items-start gap-3 animate-fade-in delay-200 ml-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground text-xs font-bold">C</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-accent/10 rounded-lg p-3 border border-accent/20 inline-block">
                        <p className="text-sm text-foreground">✅ Decision captured! I've logged this with context from your recent #backend discussions.</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Someone asking */}
                  <div className="flex items-start gap-3 animate-fade-in delay-400">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-background rounded-lg p-3 shadow-sm border border-border/50 inline-block">
                        <span className="text-sm text-foreground">@corteza why did we choose PostgreSQL?</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: AI answering */}
                  <div className="flex items-start gap-3 animate-fade-in delay-600 ml-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground text-xs font-bold">C</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-accent/10 rounded-lg p-3 border border-accent/20 inline-block">
                        <p className="text-sm text-foreground">On Jan 15, the team decided PostgreSQL for better JSON support and Sarah's prior experience. This was discussed in #backend.</p>
                      </div>
                    </div>
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

export default Hero;
