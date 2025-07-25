import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Truck, 
  Factory, 
  Smartphone, 
  ArrowRight, 
  CheckCircle 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Autonomous Robotics",
      description: "Custom robotic solutions for manufacturing, healthcare, and service industries.",
      features: ["Custom Design", "AI Integration", "Safety Protocols", "24/7 Support"],
      highlight: "Most Popular"
    },
    {
      icon: Truck,
      title: "Smart Logistics",
      description: "Intelligent warehousing and distribution systems with real-time optimization.",
      features: ["Route Optimization", "Inventory Management", "Predictive Analytics", "IoT Integration"],
      highlight: null
    },
    {
      icon: Factory,
      title: "Industrial Automation",
      description: "Complete factory automation solutions to maximize efficiency and reduce costs.",
      features: ["Process Automation", "Quality Control", "Predictive Maintenance", "Data Analytics"],
      highlight: null
    },
    {
      icon: Smartphone,
      title: "AI-Powered Software",
      description: "Intelligent software solutions that learn and adapt to your business needs.",
      features: ["Machine Learning", "Computer Vision", "Natural Language Processing", "Cloud Integration"],
      highlight: "New"
    }
  ];

  return (
    <section id="services" className="py-20 bg-accent/30">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Solutions for
              <span className="block text-primary">Every Industry</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide end-to-end robotics and AI solutions 
              tailored to your specific business requirements.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden hover:shadow-tech transition-all duration-300 group hover:-translate-y-1"
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="default" 
                      className="bg-tech-gradient text-white"
                    >
                      {service.highlight}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="group/btn hover:bg-primary hover:text-white transition-colors"
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