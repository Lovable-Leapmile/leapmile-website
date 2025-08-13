import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

import { useTheme } from "@/hooks/useTheme";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navigateToContact } from "@/lib/navigation";
import { TrendingUp, Settings, Eye, ShieldCheck, Wrench, Heart, Clock, FileBarChart, TrendingDown, Archive } from "lucide-react";
const QuickCommerce = () => {
  const {
    theme
  } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const benefits = [{
    name: "Increase Throughput",
    icon: TrendingUp
  }, {
    name: "Simplified Customization",
    icon: Settings
  }, {
    name: "Inventory Visibility",
    icon: Eye
  }, {
    name: "Eliminate Manual Errors",
    icon: ShieldCheck
  }, {
    name: "Easy Maintenance",
    icon: Wrench
  }, {
    name: "Enhance Shopper Experience",
    icon: Heart
  }, {
    name: "24 x 7 Operation",
    icon: Clock
  }, {
    name: "Daily Audit Reports",
    icon: FileBarChart
  }, {
    name: "Handle Seasonal Peaks",
    icon: TrendingDown
  }, {
    name: "Increase Storage Density",
    icon: Archive
  }];
  const orderFlow = [{
    image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/orderflow1.png",
    header: "Order Submission",
    caption: "Once the order is getting confirmed, the order is displayed on the led screen."
  }, {
    image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/orderflow2.png",
    header: "Items Consolidated",
    caption: "The bins containing the corresponding SKUs are transported to the pickup station."
  }, {
    image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/orderflow3.png",
    header: "Picking & Dispatch",
    caption: "The staff manually picks up the items based on the quantities specified in the order."
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="page-wrapper">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <Badge variant="outline" className="mb-4">Quick Commerce</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Transforming Quick Commerce in Every Aspects
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  In an era where convenience is paramount, the grocery industry is undergoing significant transformation. 
                  As consumers demand more efficient shopping methods for their essentials, traditional approaches are 
                  encountering unprecedented challenges. The escalating labor costs and fluctuating demands underscore 
                  the pressing need for innovative solutions.
                </p>
                
                {/* Key Points */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Emerge as the vanguard of innovation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Revolutionizing the delivery and storage of groceries</span>
                  </div>
                </div>
                
                <Button size="lg" className="bg-tech-gradient hover:shadow-tech" onClick={() => navigateToContact(navigate, location.pathname)}>
                  Get Started Today
                </Button>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/ondemand1.png" alt="Quick Commerce warehouse automation" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://ams-bucket.blr1.digitaloceanspaces.com/bg_pattern_leapmile.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="page-wrapper">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience unmatched efficiency with our quick commerce solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {benefits.map((benefit, index) => <Card key={index} className="text-center p-4">
                  <CardContent className="p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm text-foreground">{benefit.name}</h4>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="page-wrapper">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Watch the Robot in Action
            </h2>
            
            <div className="relative rounded-2xl overflow-hidden">
              <video className="w-full h-auto" autoPlay loop muted controls={false} style={{
              borderRadius: '1rem'
            }}>
                <source src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Videos/quickcommerce.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Fullscreen Button */}
              <button className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-lg hover:bg-black/70 transition-colors" onClick={() => {
              const video = document.querySelector('video');
              if (video) {
                video.requestFullscreen();
              }
            }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Order Flow Section */}
      <section className="py-20 bg-muted/30">
        <div className="page-wrapper">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Order Flow Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Streamlined workflow from order to dispatch
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {orderFlow.map((flow, index) => <div key={index} className="text-center">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                    <img src={flow.image} alt={flow.header} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{flow.header}</h3>
                  <p className="text-muted-foreground leading-relaxed">{flow.caption}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-20 bg-background">
        <div className="page-wrapper">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Stay Ahead by Embracing Innovation and Profitability
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With our NanoWarehouse platform, operates most effectively with humans, robots, 
                  and synchronizing technologies, making smart decisions and adjusting to changing conditions.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  <strong>Stay in Control of Your Inventory:</strong> Know exactly where each item comes from 
                  and how long it's been in your warehouse. Thanks to our automated system.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-tech-gradient hover:shadow-tech" onClick={() => navigateToContact(navigate, location.pathname)}>
                    Get Started Now
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => navigateToContact(navigate, location.pathname)}>
                    Schedule Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>;
};
export default QuickCommerce;