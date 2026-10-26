import { MessageSquare, CalendarCheck, PenLine, Undo2, Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const abilities = [
  {
    icon: MessageSquare,
    title: "Ask about any decision",
    text: "\"What did we decide about pricing?\" or \"What's pending from Ana?\" Answers come with the meeting each item came from.",
  },
  {
    icon: CalendarCheck,
    title: "Prepare your day or a 1:1",
    text: "Today's meetings with what is still open from their earlier sessions, or everything you share with one person.",
  },
  {
    icon: PenLine,
    title: "Keep Corteza up to date",
    text: "Record a decision, add an action item, change a due date or close a question, right from the chat.",
  },
  {
    icon: Undo2,
    title: "Nothing changes without you",
    text: "Each change is shown first and made only when you confirm it. You can undo it for 24 hours.",
  },
];

const guarantees = [
  "Sees only what you see",
  "Never sensitive topics",
  "Every change needs your OK",
  "Admins can limit it to reading",
];

const Assistants = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="assistants" className="py-28 bg-secondary/40">
      <div ref={ref} className={`container mx-auto px-6 max-w-[1200px] reveal ${visible ? "is-visible" : ""}`}>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-signal mb-4">Works with your AI assistant</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.05] mb-6">
              Your decisions, <span className="font-serif italic font-normal text-muted-foreground">inside Claude and ChatGPT.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Connect Corteza to the assistant you already use (Claude, ChatGPT or any other that supports MCP connectors)
              and ask about your meetings without opening another tab.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {abilities.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-signal-soft text-signal flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-base font-semibold mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mock conversation */}
          <div className="rounded-2xl border border-border bg-card shadow-xl p-6 space-y-4" aria-label="Example conversation with an AI assistant">
            <div className="flex justify-end">
              <p className="max-w-[85%] rounded-2xl rounded-br-md bg-ink text-ink-foreground px-4 py-3 text-sm">
                What's still open from the pricing sync?
              </p>
            </div>
            <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-secondary px-4 py-3 text-sm space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Using Corteza</p>
              <p>Two things from the Pricing sync (Sep 29):</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Question:</strong> include existing customers in the experiment? No one owns it yet.</li>
                <li><strong>Action item:</strong> Cristian sets up the experiment, no due date.</li>
              </ul>
            </div>
            <div className="flex justify-end">
              <p className="max-w-[85%] rounded-2xl rounded-br-md bg-ink text-ink-foreground px-4 py-3 text-sm">
                Make Cristian's task due Friday.
              </p>
            </div>
            <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-secondary px-4 py-3 text-sm">
              <p className="mb-3">Here's the change. Should I apply it?</p>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Change to confirm</p>
                <p className="font-medium">Cristian sets up the pricing experiment</p>
                <p className="text-muted-foreground">Due date: none → <span className="text-foreground font-medium">Fri, Oct 31</span></p>
                <div className="flex gap-2 mt-3">
                  <span className="rounded-full bg-ink text-ink-foreground px-3 py-1 text-xs font-semibold">Confirm</span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold">Cancel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {guarantees.map((g) => (
            <li key={g} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-success" />
              {g}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Assistants;
