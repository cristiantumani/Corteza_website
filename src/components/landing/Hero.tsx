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

      <div className="container mx-auto px-6 relative z-10 max-w-[800px]">
        <div className="text-center">
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
                className="group bg-[#4A154B] hover:bg-[#4A154B]/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 py-5 px-10 text-base rounded-xl"
              >
                Join early access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            {/* Small text below button */}
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required • 2-minute setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
