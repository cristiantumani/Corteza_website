import { Clock, CheckCircle2, TrendingUp, Zap } from "lucide-react";

const outcomes = [
  { icon: Clock, title: "Shorter meetings", text: "No re-litigating what's already decided." },
  { icon: CheckCircle2, title: "Commitments that get done", text: "Owners, deadlines and follow-up, without chasing anyone." },
  { icon: TrendingUp, title: "Better meetings over time", text: "Every organizer gets feedback to run them better." },
  { icon: Zap, title: "A team that decides faster", text: "The context of every past decision is one question away." },
];

const teams = ["Leadership teams", "Operations", "Product & engineering", "Agencies & consultancies", "Customer-facing teams"];

const Outcomes = () => (
  <section id="outcomes" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-6 max-w-[1200px]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What changes for your team</h2>
        <p className="text-lg text-muted-foreground">More efficiency, less waste, and meetings that are worth the time.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {outcomes.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-card rounded-2xl border border-border p-7">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
          Made for teams that make decisions in meetings
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {teams.map(team => (
            <span key={team} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground">{team}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Outcomes;
