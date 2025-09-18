import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import CookieConsent from "@/components/CookieConsent";


const Index = () => {
  const location = useLocation();
  
  // Handle scroll to contact section after navigation
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

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
      <CookieConsent pageName="home" />
    </div>
  );
};

export default Index;
