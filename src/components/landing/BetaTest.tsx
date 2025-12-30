import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const BetaTest = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Early Access",
      description: "Be among the first to experience corteza.app and shape its future",
    },
    {
      icon: Users,
      title: "Direct Feedback",
      description: "Your input directly influences product development",
    },
    {
      icon: Zap,
      title: "Priority Support",
      description: "Get dedicated support during the beta phase",
    },
    {
      icon: Shield,
      title: "Founding Member Benefits",
      description: "Exclusive perks for early adopters when we launch",
    },
  ];

  return (
    <section id="beta-test" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <span className="text-sm font-medium">Limited Spots Available</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join the Early Access Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sign up now to be part of our exclusive beta program. Once approved, you'll receive detailed instructions on how to get started.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/early-access">
            <Button size="lg" className="group">
              Join Early Access
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Free during beta • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetaTest;
