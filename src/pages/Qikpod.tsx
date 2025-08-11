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

const Qikpod = () => {
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
    </div>
  );
};

export default Qikpod;