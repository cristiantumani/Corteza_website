import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import LoopVisual from "./LoopVisual";
import { track } from "@/lib/analytics";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden py-[120px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse-subtle delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-[52px] font-bold text-foreground mb-6 animate-fade-in-up leading-[1.1] tracking-tight">
              Meetings that close the loop.
            </h1>

            <p className="text-xl text-muted-foreground mb-10 animate-fade-in-up delay-100 leading-relaxed">
              Corteza makes sure every meeting ends in action: decisions stick, commitments get done,
              and each meeting runs better than the last.
            </p>

            <div className="animate-fade-in-up delay-200 flex flex-col gap-4">
              <Link to="/early-access" onClick={() => track("cta_click", { cta: "request_early_access", location: "hero" })}>
                <Button className="group bg-black hover:bg-[#2D2D2D] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 py-5 px-10 text-base rounded-xl">
                  Request early access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Private beta · Limited spots · Free while in beta
              </p>
            </div>
          </div>

          <div className="animate-fade-in delay-300 w-full">
            <LoopVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
