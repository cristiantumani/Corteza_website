import { Search, History, UserPlus, Layers } from "lucide-react";

const benefits = [
  {
    icon: History,
    title: "Every decision, with its why",
    text: "What was decided, when, by whom and the reasoning behind it. Not just the outcome, the context.",
  },
  {
    icon: UserPlus,
    title: "New people get up to speed in days",
    text: "New hires and new team members ask Corteza instead of chasing people or digging through old threads.",
  },
  {
    icon: Layers,
    title: "One place for everything",
    text: "Decisions, commitments, open questions and risks from every meeting, searchable together.",
  },
];

/** Example question and answer: an illustration, not a product screenshot */
const AskExample = () => (
  <div className="bg-card rounded-xl border border-border shadow-elegant overflow-hidden">
    <div className="flex items-center gap-3 border-b border-border px-5 py-4">
      <Search className="w-4 h-4 text-muted-foreground" />
      <p className="text-sm text-foreground">Why did we move the launch to October?</p>
    </div>
    <div className="p-5 space-y-4">
      <p className="text-sm text-foreground leading-relaxed">
        The launch moved to October 22 because the payments provider couldn't be ready for September, and the team
        preferred one launch over a partial one <span className="text-accent font-medium">[1]</span>. Pricing was
        confirmed a week later, with annual discounts capped at 20% <span className="text-accent font-medium">[2]</span>.
      </p>
      <div className="space-y-2">
        {[
          ["1", "Decision · Launch planning · Sep 3"],
          ["2", "Decision · Pricing review · Sep 10"],
        ].map(([n, source]) => (
          <div key={n} className="flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-2 text-xs text-muted-foreground">
            <span className="font-semibold text-accent">[{n}]</span> {source}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TeamMemory = () => (
  <section id="team-memory" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-6 max-w-[1200px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-accent bg-accent/10 rounded-full px-3 py-1 mb-4">
            Your team's memory
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Ask anything. Get the decision, the why and where it came from.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Everything your team decides is captured in one place. Ask in plain language and get a clear answer with
            the context behind it, whether you were in the meeting or joined the team last week.
          </p>
          <div className="space-y-5">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AskExample />
      </div>
    </div>
  </section>
);

export default TeamMemory;
