import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Cpu, Eye, Brain, Zap, Shield, Cloud, Gauge, Network } from "lucide-react";
const TechnologySection = () => {
  const technologies = [{
    icon: Brain,
    name: "Machine Learning",
    description: "Advanced ML algorithms for pattern recognition and decision making",
    proficiency: 95
  }, {
    icon: Eye,
    name: "Computer Vision",
    description: "Real-time visual processing and object recognition systems",
    proficiency: 92
  }, {
    icon: Cpu,
    name: "Edge Computing",
    description: "Low-latency processing at the edge for real-time responses",
    proficiency: 88
  }, {
    icon: Network,
    name: "IoT Integration",
    description: "Seamless connectivity and data exchange across devices",
    proficiency: 90
  }];
  const capabilities = [{
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and security protocols"
  }, {
    icon: Cloud,
    title: "Cloud-Native",
    description: "Scalable cloud infrastructure with global deployment"
  }, {
    icon: Gauge,
    title: "Real-Time Processing",
    description: "Sub-millisecond response times for critical operations"
  }, {
    icon: Zap,
    title: "High Performance",
    description: "Optimized algorithms for maximum efficiency"
  }];
  return <section id="technology" className="py-20 bg-background">
      <div className="page-wrapper">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          

          {/* Technology Grid */}
          

          {/* Capabilities Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {capabilities.map((capability, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{capability.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>

          {/* Tech Specs */}
          <div className="bg-card border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Technical Specifications
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">&lt;1ms</div>
                <div className="text-muted-foreground">Response Time</div>
                <div className="text-sm text-muted-foreground mt-1">Ultra-low latency processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.99%</div>
                <div className="text-muted-foreground">Uptime</div>
                <div className="text-sm text-muted-foreground mt-1">Enterprise-grade reliability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10TB/s</div>
                <div className="text-muted-foreground">Data Processing</div>
                <div className="text-sm text-muted-foreground mt-1">Massive parallel processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TechnologySection;