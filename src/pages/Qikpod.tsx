import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import QikpodHero from "@/components/QikpodHero";
import QikpodProducts from "@/components/QikpodProducts";
import QikpodLockerFlow from "@/components/QikpodLockerFlow";
import QikpodSolutions from "@/components/QikpodSolutions";
import QikpodSmartLockerOverview from "@/components/QikpodSmartLockerOverview";
import QikpodWhyChooseSmartLocker from "@/components/QikpodWhyChooseSmartLocker";
import QikpodTechnology from "@/components/QikpodTechnology";
import QikpodHostLocations from "@/components/QikpodHostLocations";
import QikpodWhyChoose from "@/components/QikpodWhyChoose";
import QikpodClientCarousel from "@/components/QikpodClientCarousel";
import QikpodContactSection from "@/components/QikpodContactSection";
import QikpodFooter from "@/components/QikpodFooter";
import CookieConsent from "@/components/CookieConsent";

const Qikpod = () => {
  const location = useLocation();
  
  // Handle scroll to contact section after navigation
  useEffect(() => {
    if (location.pathname === "/qikpod" && location.hash === "#contact") {
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
      <QikpodHero />
      <QikpodProducts />
      <QikpodLockerFlow />
      <QikpodSolutions />
      <QikpodSmartLockerOverview />
      <QikpodWhyChooseSmartLocker />
      <QikpodTechnology />
      <QikpodHostLocations />
      <QikpodWhyChoose />
      <QikpodClientCarousel />
      <QikpodContactSection />
      <QikpodFooter />
      <CookieConsent pageName="qikpod" theme="qikpod" />
    </div>
  );
};

export default Qikpod;