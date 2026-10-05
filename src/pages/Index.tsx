import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Pillars from "@/components/landing/Pillars";
import TeamMemory from "@/components/landing/TeamMemory";
import Outcomes from "@/components/landing/Outcomes";
import Trust from "@/components/landing/Trust";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { faqs } from "@/components/landing/FAQ";

const Index = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Corteza — Meetings that close the loop"
        description="Corteza makes sure every meeting ends in action: decisions stick, commitments get done, and each meeting runs better than the last. And everything your team decides is one question away."
        path="/"
        jsonLd={faqSchema}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Outcomes />
        <Pillars />
        <TeamMemory />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
