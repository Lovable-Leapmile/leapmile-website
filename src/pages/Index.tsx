import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "@/components/SEO";
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://leapmileweb.lovable.app/#organization",
        "name": "Leapmile Robotics",
        "url": "https://leapmileweb.lovable.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/favicon_new.png"
        },
        "description": "The Leapmile Robotics platform revolutionizes warehouse fulfillment facility operations by automating traditionally manual, time-consuming tasks."
      },
      {
        "@type": "WebPage",
        "@id": "https://leapmileweb.lovable.app/#webpage",
        "url": "https://leapmileweb.lovable.app",
        "name": "Leapmile Robotics | Nano Warehouse Automation & Intelligent Fulfillment Solutions",
        "isPartOf": {
          "@id": "https://leapmileweb.lovable.app/#organization"
        },
        "about": {
          "@id": "https://leapmileweb.lovable.app/#organization"
        },
        "description": "Leapmile Robotics revolutionizes warehouse fulfillment operations through advanced robotics automation. Our platform efficiently handles storage, retrieval, picking, auditing, and dispatch.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://leapmileweb.lovable.app"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Industries",
              "item": "https://leapmileweb.lovable.app/industries/quick-commerce"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Careers",
              "item": "https://leapmileweb.lovable.app/careers"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Contact Us",
              "item": "https://leapmileweb.lovable.app/#contact"
            }
          ]
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Leapmile Robotics | Nano Warehouse Automation & Intelligent Fulfillment Solutions"
        description="Leapmile Robotics revolutionizes warehouse fulfillment operations through advanced robotics automation. Our platform efficiently handles storage, retrieval, picking, auditing, and dispatch — transforming traditional warehouse facilities into smart, autonomous environments."
        keywords="warehouse automation, nano warehouse, robotic storage, automated retrieval, smart logistics, warehouse fulfillment robots, robotic picking systems, Leapmile Robotics, intelligent warehouse"
        canonical="/"
        schemaData={organizationSchema}
      />
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
