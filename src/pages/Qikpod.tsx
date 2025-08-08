import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";

import Footer from "@/components/Footer";

const Qikpod = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechnologySection />
      
      <Footer />
    </div>
  );
};

export default Qikpod;