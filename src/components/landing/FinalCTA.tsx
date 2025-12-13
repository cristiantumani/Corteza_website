import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline font-bold text-foreground mb-6">
            Stop losing decisions in the noise
          </h2>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Every day, your team makes decisions that shape your product, your culture, 
            and your future. Most of them are lost before they're ever documented.
          </p>
          <p className="text-lg text-foreground mb-10 font-medium">
            It's time to give decisions the respect they deserve.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="hero" size="xl" className="group">
              Join early access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Request a demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Free during early access. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
