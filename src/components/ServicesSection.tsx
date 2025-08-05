import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Package, 
  Store, 
  Wrench, 
  Eye, 
  ArrowRight, 
  CheckCircle 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const industries = [
    {
      icon: ShoppingCart,
      title: "Quick Commerce",
      description: "In an era where convenience is paramount, the grocery industry is undergoing significant transformation.",
      features: ["Innovate with purpose", "Revolutionize grocery logistics", "Optimize storage systems", "Lead industry transformation"],
      link: "/industries/quick-commerce"
    },
    {
      icon: Package,
      title: "E-Commerce",
      description: "E-commerce companies are confronted with the challenge of meeting elevated expectations for user experiences and delivery services.",
      features: ["Effortless item picking", "Seamless restocking operations", "Streamlined order dispatching", "End-to-end automation"],
      link: "/industries/e-commerce"
    },
    {
      icon: Store,
      title: "Omni-Channel Retail",
      description: "We revolutionize the shopping experience by seamlessly integrating online ordering with flexible pickup options.",
      features: ["Shop from home", "Pick up in-store", "Convenient mall pickups", "Quick and easy curbside pickup"],
      link: "/industries/omni-channel-retail"
    },
    {
      icon: Wrench,
      title: "Industrial & MRO",
      description: "Revolutionizing industrial fulfillment and MRO in manufacturing. Our platform ensures precise and swift parts delivery, promoting lean manufacturing and efficiency.",
      features: ["4× Picking Productivity", "System Payback in < 3 Years", "Efficient Storage for 1,000+ SKUs"],
      link: "/industries/industrial-&-mro"
    },
    {
      icon: Eye,
      title: "Showcase Robot",
      description: "Showcase Robot, a cutting-edge system designed to exhibit specialized items, bespoke products, luxury goods, jewelry, and art masterpieces within a compact, self-serve automated display.",
      features: ["Interactive Experience", "Seamless User Control", "Enhanced Transparency"],
      link: "/industries/showcase-robot"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-accent/30">
      <div className="page-wrapper">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Industries</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Smart Automation for
              <span className="block text-primary">Modern Industries</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Revolutionary warehouse automation solutions designed to transform efficiency across diverse industrial sectors, 
              from quick commerce to specialized showcase environments.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {industries.map((industry, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(industry.link)}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{industry.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="group/btn hover:bg-primary hover:text-white transition-colors w-full"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our robotics and AI solutions can help you achieve 
              unprecedented efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-tech-gradient hover:shadow-tech">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;