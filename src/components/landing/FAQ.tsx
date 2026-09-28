import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    question: "What is Corteza?",
    answer:
      "Corteza makes your team's meetings pay off. It closes the loop on every meeting: decisions stick, commitments get done, and the organizer gets feedback to make the next meeting shorter and better. Everything your team decides stays in one place, so anyone can ask what was decided and why.",
  },
  {
    question: "Is Corteza a note-taker?",
    answer:
      "No. Note-takers stop at a summary nobody reads again. Corteza starts there: it follows every decision and commitment until it's done, prepares people for the next meeting, and tells the organizer how the meeting went and what to improve.",
  },
  {
    question: "Can I search everything my team has decided?",
    answer:
      "Yes. Every decision, commitment, open question and risk is kept in one place. Ask in plain language, like \"why did we move the launch?\", and Corteza answers with the context behind it and links to the meetings it came from. It's also the fastest way for new team members to get up to speed.",
  },
  {
    question: "Does a bot join my meetings?",
    answer:
      "No. There's nothing to invite and nothing to fill in. Corteza works from what your meeting tools already produce, so your meetings stay exactly as they are.",
  },
  {
    question: "Which meeting tools does it work with?",
    answer:
      "We're starting the private beta with a small set of tools. Tell us what your team uses when you request early access, and we'll let you know if you're a fit for this first group.",
  },
  {
    question: "Who sees the meeting feedback?",
    answer:
      "Only the meeting organizer. The feedback is there to help people run better meetings, not to evaluate them.",
  },
  {
    question: "Is my team's data private?",
    answer:
      "Yes. Each company's data is isolated, encrypted in transit and at rest, and only visible to its own team. We don't store your recordings or transcripts, and we don't train AI models on your data.",
  },
  {
    question: "What happens after I request early access?",
    answer:
      "We'll reach out within a few days for a short call to understand how your team meets and decides. If it's a fit, we set you up for the beta. It's free while we're in beta.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The short version of what Corteza is, and isn't.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
