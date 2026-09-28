import { Quote, Lock, ShieldCheck, SlidersHorizontal } from "lucide-react";

const points = [
  { icon: Quote, title: "Evidence for everything", text: "Every decision, commitment and insight links back to what was actually said." },
  { icon: Lock, title: "Feedback stays private", text: "Meeting feedback goes to the organizer only. It's coaching, not surveillance." },
  { icon: ShieldCheck, title: "Your data stays yours", text: "We don't store your recordings or transcripts, and we never train AI models on your data." },
  { icon: SlidersHorizontal, title: "You stay in control", text: "Edit, reassign or dismiss anything in one click." },
];

const Trust = () => (
  <section id="trust" className="py-24">
    <div className="container mx-auto px-6 max-w-[1200px]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built to be trusted</h2>
        <p className="text-lg text-muted-foreground">Useful AI has to be accurate, private and easy to correct.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {points.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-7">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
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
  </section>
);

export default Trust;
