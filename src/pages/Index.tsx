import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import BeforeAfter from "@/components/landing/BeforeAfter";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import DecisionHub from "@/components/landing/DecisionHub";
import AITrust from "@/components/landing/AITrust";
import Integrations from "@/components/landing/Integrations";
import Vision from "@/components/landing/Vision";
import BetaTest from "@/components/landing/BetaTest";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <Features />
        <Testimonials />
        <Problem />
        <Solution />
        <HowItWorks />
        <DecisionHub />
        <AITrust />
        <Integrations />
        <Vision />
        <BetaTest />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
