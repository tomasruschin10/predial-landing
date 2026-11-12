import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <PropertiesSection />
        <AboutSection />
        <TestimonialsSection />
        <LocationSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
