import { X, Check, Sparkles, Frown } from "lucide-react";

const BeforeAfter = () => {
  const beforePoints = [
    { question: '"Why did we choose PostgreSQL?"', answer: "→ 30 minutes digging through Slack" },
    { question: "Team decisions lost in 1000+ messages", answer: "" },
    { question: "New hires have zero context on past decisions", answer: "" },
  ];

  const afterPoints = [
    { question: 'Ask "Why did we choose PostgreSQL?"', answer: "→ Instant answer with full context" },
    { question: "Every decision captured automatically", answer: "" },
    { question: "AI teammate that remembers everything", answer: "" },
  ];

  return (
    <section id="problem" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before Corteza - Left Column */}
          <div className="relative">
            <div className="bg-card rounded-2xl border border-border p-10 shadow-sm opacity-80">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Frown className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-muted-foreground">Before Corteza</h3>
              </div>

              {/* Pain Points */}
              <div className="space-y-4 mb-8">
                {beforePoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <div>
                      <span className="text-muted-foreground">{point.question}</span>
                      {point.answer && (
                        <span className="text-muted-foreground/70 ml-1">{point.answer}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual: Chaotic Slack messages */}
              <div className="relative rounded-xl bg-secondary/50 border border-border/50 p-4 overflow-hidden">
                <div className="space-y-2 opacity-60">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded bg-muted flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-3 bg-muted rounded w-3/4 mb-1" />
                      <div className="h-3 bg-muted/60 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="flex items-start gap-2 -rotate-1">
                    <div className="w-6 h-6 rounded bg-muted flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-3 bg-muted rounded w-2/3 mb-1" />
                      <div className="h-3 bg-muted/60 rounded w-4/5" />
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rotate-1">
                    <div className="w-6 h-6 rounded bg-muted flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-3 bg-muted rounded w-1/2 mb-1" />
                      <div className="h-3 bg-muted/60 rounded w-3/5" />
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded bg-muted flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-3 bg-muted rounded w-4/5 mb-1" />
                      <div className="h-3 bg-muted/60 rounded w-2/3" />
                    </div>
                  </div>
                </div>
                {/* Blur overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                  1,247 messages to search...
                </div>
              </div>
            </div>
          </div>

          {/* After Corteza - Right Column */}
          <div className="relative">
            <div className="bg-card rounded-2xl border border-accent/30 p-10 shadow-elegant ring-1 ring-accent/10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">After Corteza</h3>
              </div>

              {/* Solutions */}
              <div className="space-y-4 mb-8">
                {afterPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <div>
                      <span className="text-foreground">{point.question}</span>
                      {point.answer && (
                        <span className="text-accent ml-1 font-medium">{point.answer}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual: Clean Corteza response */}
              <div className="rounded-xl bg-accent/5 border border-accent/20 p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground text-xs font-bold">C</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground mb-1">Corteza</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">PostgreSQL was chosen on Jan 15</span> by the backend team. Key reasons:
                    </div>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-success" />
                        Better JSON support for our API needs
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-success" />
                        Sarah's prior experience with it
                      </li>
                    </ul>
                    <div className="mt-3 text-xs text-muted-foreground/70">
                      Source: #backend discussion • Decision by @alex
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Highlight glow effect */}
            <div className="absolute -inset-1 bg-accent/5 rounded-3xl blur-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
