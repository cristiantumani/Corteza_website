import { RotateCcw, GraduationCap, Brain, Hourglass } from "lucide-react";

const problems = [
  {
    icon: RotateCcw,
    title: "Nothing closes",
    text: "Decisions get re-opened, commitments quietly slip, and the same topic comes back next week.",
  },
  {
    icon: GraduationCap,
    title: "Nobody learns",
    text: "Meetings run long, drift off-topic and end without owners, and nobody gets the feedback to fix it.",
  },
  {
    icon: Brain,
    title: "Nobody remembers",
    text: "What was discussed and decided in the meeting is forgotten, lost in threads, and hard to find afterwards.",
  },
  {
    icon: Hourglass,
    title: "The cost is invisible",
    text: "Hours of senior time every week, spent re-discussing instead of executing.",
  },
];

const Problem = () => (
  <section id="problem" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-6 max-w-[1200px]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
          Most meetings don't fail in the room. They fail after.
        </h2>
        <p className="text-lg text-muted-foreground">
          And when they do fail in the room, Corteza notices, tells you, and helps you fix it.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
