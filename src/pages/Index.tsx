import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import DiscoverSection from "@/components/DiscoverSection";
import WhyLeapmileSection from "@/components/WhyLeapmileSection";
import CarouselSection from "@/components/CarouselSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <DiscoverSection />
      <WhyLeapmileSection />
      <CarouselSection />
      <AboutSection />
      <ServicesSection />
      <TechnologySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
