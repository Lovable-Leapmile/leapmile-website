import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Navigation from "./components/Navigation";
import useFavicon from "./hooks/useFavicon";
import Index from "./pages/Index";
import Qikpod from "./pages/Qikpod";
import NotFound from "./pages/NotFound";
import QuickCommerce from "./pages/industries/QuickCommerce";
import ECommerce from "./pages/industries/ECommerce";
import OmniChannelRetail from "./pages/industries/OmniChannelRetail";
import IndustrialMRO from "./pages/industries/IndustrialMRO";
import ShowcaseRobot from "./pages/industries/ShowcaseRobot";
import NanoWarehouse from "./pages/technology/NanoWarehouse";
import VirtualTour from "./pages/VirtualTour";
import TermsAndPrivacy from "./pages/TermsAndPrivacy";
import PricingAndRefunds from "./pages/PricingAndRefunds";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import RetailClickCollect from "./pages/solutions/RetailClickCollect";
import LastMileDelivery from "./pages/solutions/LastMileDelivery";
import DigitalMailroom from "./pages/solutions/DigitalMailroom";
import UniversityParcelHub from "./pages/solutions/UniversityParcelHub";
import LateNightDeliveries from "./pages/solutions/LateNightDeliveries";

const queryClient = new QueryClient();

const AppContent = () => {
  useFavicon(); // Hook to handle favicon changes

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/qikpod" element={<Qikpod />} />
          <Route path="/industries/quick-commerce" element={<QuickCommerce />} />
          <Route path="/industries/e-commerce" element={<ECommerce />} />
          <Route path="/industries/omni-channel-retail" element={<OmniChannelRetail />} />
          <Route path="/industries/industrial-&-mro" element={<IndustrialMRO />} />
          <Route path="/industries/showcase-robot" element={<ShowcaseRobot />} />
          <Route path="/technology/nano-warehouse" element={<NanoWarehouse />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/events" element={<Events />} />
          <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
          <Route path="/pricing-and-refunds" element={<PricingAndRefunds />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qikpod/solutions/retail-click-collect" element={<RetailClickCollect />} />
          <Route path="/qikpod/solutions/last-mile-delivery" element={<LastMileDelivery />} />
          <Route path="/qikpod/solutions/digital-mailroom" element={<DigitalMailroom />} />
          <Route path="/qikpod/solutions/university-parcel-hub" element={<UniversityParcelHub />} />
          <Route path="/qikpod/solutions/late-night-deliveries" element={<LateNightDeliveries />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
