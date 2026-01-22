import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
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
            {/* Video Player Placeholder */}
            <div className="relative group cursor-pointer">
              <div className="aspect-video rounded-xl overflow-hidden shadow-elegant transition-all duration-300 ease-out hover:shadow-xl border border-border bg-card">
                {/* Screenshot placeholder showing Slack bot in action */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60">
                  {/* Slack-style header */}
                  <div className="bg-primary px-4 py-2.5 flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="text-white/80 text-xs font-medium">#engineering</span>
                  </div>

                  {/* Chat content preview */}
                  <div className="p-4 space-y-3">
                    {/* User message */}
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center flex-shrink-0">
                        <span className="text-accent-foreground text-[10px] font-bold">A</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-foreground mb-0.5">Alex Chen</div>
                        <div className="bg-background rounded-md p-2 inline-block shadow-sm">
                          <code className="text-accent text-xs font-medium">/decision</code>
                          <span className="text-foreground text-xs ml-1">Using PostgreSQL for payments</span>
                        </div>
                      </div>
                    </div>

                    {/* Bot response */}
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-md bg-success flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[10px] font-bold">C</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-xs font-semibold text-foreground">Corteza</span>
                          <span className="text-[10px] bg-accent/20 text-accent px-1 py-0.5 rounded">APP</span>
                        </div>
                        <div className="bg-success/10 border border-success/20 rounded-md p-2 inline-block">
                          <span className="text-xs text-foreground">✅ Decision captured with context!</span>
                        </div>
                      </div>
                    </div>

                    {/* Question */}
                    <div className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-md bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[10px] font-bold">M</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-foreground mb-0.5">Maria Lopez</div>
                        <div className="bg-background rounded-md p-2 inline-block shadow-sm">
                          <span className="text-foreground text-xs">@corteza why PostgreSQL?</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 group-hover:bg-foreground/10 transition-all duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary ml-1" />
                  </div>
                </div>
              </div>

              {/* Text below video */}
              <p className="text-center text-sm text-muted-foreground mt-4">
                See how it works in 60 seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
