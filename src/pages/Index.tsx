import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import DecisionHub from "@/components/landing/DecisionHub";
import AITrust from "@/components/landing/AITrust";
import Integrations from "@/components/landing/Integrations";
import Vision from "@/components/landing/Vision";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <DecisionHub />
        <AITrust />
        <Integrations />
        <Vision />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
