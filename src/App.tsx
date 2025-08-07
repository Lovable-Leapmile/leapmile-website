import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Navigation from "./components/Navigation";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
            <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
            <Route path="/pricing-and-refunds" element={<PricingAndRefunds />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
