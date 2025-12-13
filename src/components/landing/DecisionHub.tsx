import { Search, Filter, Calendar, Users, ArrowUpRight } from "lucide-react";

const DecisionHub = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-l from-accent/10 to-accent/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card shadow-elegant overflow-hidden">
                {/* Search bar mock */}
                <div className="p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Search decisions...</span>
                    <div className="ml-auto flex items-center gap-2">
                      <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground">
                        <Filter className="w-4 h-4" />
                        Filter
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decision list mock */}
                <div className="p-4 space-y-3">
                  {[
                    { title: "Adopt TypeScript for all new services", team: "Platform", date: "Nov 28", linked: true },
                    { title: "Quarterly planning moved to async format", team: "Product", date: "Nov 25", linked: false },
                    { title: "Deprecate v1 API by March 2025", team: "Engineering", date: "Nov 22", linked: true },
                  ].map((decision, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-accent/30 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                            {decision.title}
                          </h4>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {decision.team}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {decision.date}
                            </span>
                            {decision.linked && (
                              <span className="px-2 py-0.5 rounded bg-accent/10 text-accent">
                                Linked
                              </span>
                            )}
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                Decision Hub
              </div>
              <h2 className="text-headline font-bold text-foreground mb-6">
                Every decision, searchable and visible
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your centralized portal for all decisions across teams. Search by keyword, 
                filter by team or date, and trace the full history of any choice.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Instant search</h4>
                    <p className="text-sm text-muted-foreground">
                      Find any decision in seconds. Full-text search across all decisions and their context.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Complete timeline</h4>
                    <p className="text-sm text-muted-foreground">
                      See when decisions were made, who was involved, and how they evolved over time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Team visibility</h4>
                    <p className="text-sm text-muted-foreground">
                      Filter by team, project, or individual. Know what decisions affect your work.
                    </p>
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

export default DecisionHub;
