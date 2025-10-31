import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroFadeIn from "./HeroFadeIn";
import WarehouseAnimation from "./WarehouseAnimation";
import TypingAnimation from "./TypingAnimation";
const HeroSection = () => {
  const navigate = useNavigate();
  const handleExploreIndustries = () => {
    const industriesSection = document.getElementById("industries");
    if (industriesSection) {
      industriesSection.scrollIntoView({
        behavior: "smooth"
      });
    } else {
      // fallback: navigate to industries page if not on homepage
      navigate("/industries/quick-commerce");
    }
  };
  const handleVirtualTour = () => {
    navigate("/virtual-tour");
  };
  return <section id="home" className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20 pb-8">
      <div className="absolute inset-0 bg-background/100"></div>
      <WarehouseAnimation />
      
      <div className="container mx-auto px-6 md:px-12" style={{ position: 'relative', zIndex: 2 }}>
        <HeroFadeIn staggerDelay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Stylish Text Line */}
              <div className="mb-6">
                <p className="text-lg md:text-xl text-muted-foreground font-thin tracking-wide">
                  <TypingAnimation 
                    text="Speed · Flexibility · Efficiency · Reliability · Affordable"
                    separator=" · "
                    typingSpeed={80}
                    wordDelay={200}
                  />
                </p>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6 leading-tight">
                <span className="block gradient-text-animated">
                  Nano Warehouse Automation
                </span>
              </h1>

              {/* Company Definition - Official Description */}
              <p className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed">
                Revolutionizing warehouse fulfillment through advanced robotics automation. Our platform excels in secure inventory storage, accurate retrieval, quick picking, regular auditing, and efficient dispatch—transforming manual operations into intelligent, automated workflows.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-premium-bg text-white font-bold text-lg px-8 py-4 h-auto rounded-xl group" onClick={handleExploreIndustries}>
                  Explore Industries
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto group hover:bg-accent" onClick={handleVirtualTour}>
                  <Play className="mr-2 h-5 w-5" />
                  Virtual Tour
                </Button>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline controls={false}>
                  <source src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Homepage/Videos/Nanowarehouse_leapmilerobotics.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </HeroFadeIn>

        {/* Stats */}
        
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-pulse delay-700"></div>
    </section>;
};
export default HeroSection;