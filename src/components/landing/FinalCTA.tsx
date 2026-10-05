import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { track } from "@/lib/analytics";

const FinalCTA = () => (
  <section className="py-32 bg-ink text-ink-foreground relative overflow-hidden">
    <div className="absolute -right-40 -bottom-40 w-[520px] h-[520px] rounded-full border-[60px] border-signal/20 pointer-events-none" />
    <div className="container mx-auto px-6 relative max-w-[1200px]">
      <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.035em] leading-[0.98] max-w-4xl mb-8">
        The meeting ends.
        <span className="block font-serif italic font-normal text-signal">The work doesn't.</span>
      </h2>
      <p className="text-xl text-ink-foreground/70 mb-10 max-w-xl">We're opening a private beta for a small number of teams.</p>
      <div className="flex flex-wrap items-center gap-6 mb-10">
        <Link to="/early-access" onClick={() => track("cta_click", { cta: "request_early_access", location: "final_cta" })}>
          <Button className="group h-auto rounded-full bg-signal text-signal-foreground hover:bg-signal/90 px-8 py-4 text-base font-semibold">
            Request early access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <a href="https://app.corteza.app/demo" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-ink-foreground underline underline-offset-4 hover:text-signal">
          or try the demo →
        </a>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-ink-foreground/70 text-sm">
        {["Free during beta", "No bots in your meetings", "Nothing new to learn"].map((item) => (
          <span key={item} className="flex items-center gap-1.5"><Check className="w-4 h-4 text-success" />{item}</span>
        ))}
      </div>
    </div>
  </section>
);

export default FinalCTA;
