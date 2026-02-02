import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-[120px] bg-gradient-to-br from-black via-[#1a1a1a] to-[#2D2D2D] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to never lose a decision again?
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-white/80 mb-10">
            Join 50+ teams using Corteza in beta
          </p>

          {/* Large CTA Button */}
          <div className="mb-8">
            <Link to="/early-access">
              <Button
                size="xl"
                className="group bg-white text-black hover:bg-white/90 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 font-semibold text-lg px-10 py-6 h-auto"
              >
                Add to Slack - It's Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#2EB67D]" />
              Free during beta
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#2EB67D]" />
              2-minute setup
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#2EB67D]" />
              No credit card required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
