import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  FileSpreadsheet,
  LayoutTemplate,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const TEMPLATE_MARKDOWN = `# [Project or Team] Decision Log

## [Date] — [Decision title]
**Decision:** [What was decided, in one sentence]
**Why:** [The key reason or reasons — 1–3 sentences]
**Alternatives considered:** [What else was on the table and why it was rejected]
**Owner:** [Who is accountable]
**Status:** Proposed | Live | Superseded | Reversed
**Revisit date:** [Only for decisions with a known expiry]

---`;

const COLUMNS = [
  { name: "Date", why: "When the decision was made — not when it was logged." },
  { name: "Decision ID", why: "A short ID (D-001, D-002…) so decisions can reference each other." },
  { name: "Title", why: "One line, specific enough to recognise without opening the row." },
  { name: "Context / Problem", why: "Why was this even on the table?" },
  { name: "Options Considered", why: "The losing options. This is the part that stops re-litigation." },
  { name: "Decision", why: "What was actually decided, in one sentence." },
  { name: "Reasoning", why: "Written as if explaining to someone who missed the meeting." },
  { name: "Owner", why: "One accountable person. No owner, no follow-through." },
  { name: "Status", why: "Proposed, Live, Superseded or Reversed." },
  { name: "Revisit Date", why: "Only for decisions with a known expiry — pricing, bets, experiments." },
  { name: "Source", why: "Where it came from: the meeting, thread or document." },
];

const STEPS = [
  {
    title: "Log the decision while the room is still warm",
    text: "Reserve the last two minutes of any meeting where a decision was made. Don't rely on async follow-up — the context is warmest in the room, and everyone is still present to correct inaccuracies.",
  },
  {
    title: "Write the reasoning for someone who wasn't there",
    text: "\"Why\" is the field people skip, and the one that matters most six months later. One to three sentences. If it takes more than that, the decision probably wasn't clear.",
  },
  {
    title: "Keep the rejected options visible",
    text: "\"Options considered\" is what stops your team re-making the same decision in April that they already made in October. The losing arguments are the record.",
  },
  {
    title: "Use status deliberately",
    text: "Proposed means not yet final. Live means someone owns it. Superseded means a newer decision replaced it — link it. Reversed means explicitly undone, with the reason written down.",
  },
  {
    title: "Review the log monthly for the first three months",
    text: "Anything Live with no owner is a red flag. After three months the habit is usually established and the review can stop.",
  },
];

const DecisionLogTemplate = () => {
  const [copied, setCopied] = useState(false);

  const copyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(TEMPLATE_MARKDOWN);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — user can still select the text manually
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Decision Log Template (Excel + Notion) | Corteza"
        description="A free decision log template for your team: download the Excel file, copy the template into Notion or Google Docs, and never re-make the same decision twice."
        path="/decision-log-template"
      />
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">

          {/* Hero */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4 bg-primary/10 px-3 py-1 rounded-full">
              Free template
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight leading-tight">
              Decision log template
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A lightweight decision log your team will actually keep. Download the
              Excel file, or copy the template straight into Notion, Google Docs or
              Confluence. Takes two minutes per decision to maintain.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/decision-log-template.xlsx" download>
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Download size={16} className="mr-2" />
                  Download Excel template
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                onClick={copyTemplate}
                className="w-full sm:w-auto"
              >
                {copied ? <Check size={16} className="mr-2" /> : <Copy size={16} className="mr-2" />}
                {copied ? "Copied to clipboard" : "Copy for Notion or Docs"}
              </Button>
            </div>
          </div>

          {/* Copyable template */}
          <section className="mb-16">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-7">
              {true && (
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  The template
                </p>
              )}
              <pre className="text-foreground text-sm leading-relaxed whitespace-pre-wrap font-mono">
{TEMPLATE_MARKDOWN}
              </pre>
            </div>
            <p className="text-sm text-muted-foreground -mt-8 mb-10">
              New entries go at the top, oldest at the bottom. Keep the log in a
              shared location everyone can reach, and link it from your team's main
              Notion page or Slack channel description.
            </p>
          </section>

          {/* What's in the Excel version */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-3 tracking-tight flex items-center gap-2">
              <FileSpreadsheet size={22} className="text-primary" />
              What's in the Excel version
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The spreadsheet has three tabs: the decision log itself, a how-to-use
              guide, and a status legend. The Status column is a dropdown so entries
              stay consistent.
            </p>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left font-semibold text-foreground px-5 py-3">Column</th>
                    <th className="text-left font-semibold text-foreground px-5 py-3">What it's for</th>
                  </tr>
                </thead>
                <tbody>
                  {COLUMNS.map(({ name, why }) => (
                    <tr key={name} className="border-t border-border">
                      <td className="px-5 py-3 font-medium text-foreground align-top whitespace-nowrap">{name}</td>
                      <td className="px-5 py-3 text-muted-foreground">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Prefer Google Sheets? Download the Excel file, then in Google Sheets
              choose <em>File → Import → Upload</em> — the formatting and dropdown
              carry over.
            </p>
          </section>

          {/* How to use it */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-3 tracking-tight flex items-center gap-2">
              <LayoutTemplate size={22} className="text-primary" />
              How to use it without it becoming overhead
            </h2>
            <div className="flex flex-col gap-6 mt-6">
              {STEPS.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Example entry */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">
              What a filled-in entry looks like
            </h2>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                Example
              </p>
              <p className="text-foreground text-sm leading-relaxed whitespace-pre-line font-mono">
{`Decision: We'll support guest checkout without requiring account creation.
Why: Checkout abandonment data showed 34% of users dropped off at the account creation step. Reducing friction here is our highest-leverage conversion improvement.
Alternatives considered: Requiring account creation for better email capture and retention, but the conversion loss outweighed the retention benefit at our current stage. We'll revisit optional post-purchase signup in Q3.
Owner: Priya · Status: Live · Revisit: 2026-05-24`}
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <p className="text-foreground font-medium text-lg mb-6 leading-relaxed">
              Tired of maintaining the log by hand? Corteza captures your team's
              decisions automatically — wherever they're made — and makes them
              searchable in plain language.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/early-access">
                <Button variant="hero" size="lg">
                  Request early access
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <a href="https://app.corteza.app/demo" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Try the demo
                </Button>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DecisionLogTemplate;
