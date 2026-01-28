import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import VideoTutorial from "@/components/landing/VideoTutorial";
import BeforeAfter from "@/components/landing/BeforeAfter";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import AITrust from "@/components/landing/AITrust";
import Integrations from "@/components/landing/Integrations";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VideoTutorial />
        <BeforeAfter />
        <Features />
        <Testimonials />
        <AITrust />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
