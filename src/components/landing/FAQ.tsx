import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Corteza?",
    answer:
      "Corteza is a team memory tool for product teams. It captures your team's decisions, context, and explanations — right inside Slack — and makes them searchable with AI. Instead of digging through threads or re-litigating old debates, anyone on your team can ask a question and get an instant answer with full context.",
  },
  {
    question: "How is Corteza different from Notion or Confluence?",
    answer:
      "Notion and Confluence are great for documentation you intentionally write. Corteza is for capturing decisions as they happen, in the flow of work, without switching to another tool. You don't fill in a template — you type /decision in Slack and Corteza does the rest. Search is also fundamentally different: Corteza uses AI to understand what you're asking, not just match keywords.",
  },
  {
    question: "Does Corteza work without Slack?",
    answer:
      "The current version captures decisions primarily through Slack, since that's where most team conversations happen. A browser extension and other entry points are on the roadmap. You can try the product today without a Slack login at app.corteza.app/demo — the demo shows the full experience with real sample data.",
  },
  {
    question: "How does the AI search work?",
    answer:
      "When you ask a question, Corteza uses semantic search to find the most relevant decisions — even if you don't use the exact words from when the decision was logged. Then a language model synthesises a conversational answer, citing the specific decisions it drew from. It works like asking a knowledgeable teammate, not querying a database.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Under two minutes. Add Corteza to your Slack workspace, point it at a channel (like #decisions or #product), and your team can start logging immediately. There's no data migration, no onboarding call required, and no credit card needed during the beta.",
  },
  {
    question: "Can I try it before adding it to Slack?",
    answer:
      "Yes — the demo at app.corteza.app/demo lets you explore a fully-loaded team memory with 25 real decisions from a fictional company. You can search, ask questions, and see exactly how the AI responds. No login required.",
  },
  {
    question: "Is my team's data private?",
    answer:
      "Yes. Your workspace's decisions are only accessible to members of your Slack workspace. Corteza uses workspace-level isolation — no data is shared between organisations. We use industry-standard encryption in transit and at rest, and we do not train AI models on your team's data.",
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
            Everything you need to know about Corteza.
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
