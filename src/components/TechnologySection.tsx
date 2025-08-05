import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Cpu, 
  Eye, 
  Brain, 
  Zap, 
  Shield, 
  Cloud,
  Gauge,
  Network
} from "lucide-react";

const TechnologySection = () => {
  const technologies = [
    {
      icon: Brain,
      name: "Machine Learning",
      description: "Advanced ML algorithms for pattern recognition and decision making",
      proficiency: 95
    },
    {
      icon: Eye,
      name: "Computer Vision",
      description: "Real-time visual processing and object recognition systems",
      proficiency: 92
    },
    {
      icon: Cpu,
      name: "Edge Computing",
      description: "Low-latency processing at the edge for real-time responses",
      proficiency: 88
    },
    {
      icon: Network,
      name: "IoT Integration",
      description: "Seamless connectivity and data exchange across devices",
      proficiency: 90
    }
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption and security protocols"
    },
    {
      icon: Cloud,
      title: "Cloud-Native",
      description: "Scalable cloud infrastructure with global deployment"
    },
    {
      icon: Gauge,
      title: "Real-Time Processing",
      description: "Sub-millisecond response times for critical operations"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized algorithms for maximum efficiency"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-background">
      <div className="page-wrapper">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Technology Stack</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powered by
              <span className="block text-primary">Cutting-Edge Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our solutions leverage the latest advances in AI, robotics, and cloud computing 
              to deliver unparalleled performance and reliability.
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6 hover:shadow-tech transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <tech.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{tech.name}</h3>
                        <span className="text-sm text-primary font-medium">{tech.proficiency}%</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {tech.description}
                      </p>
                      <Progress value={tech.proficiency} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Capabilities Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{capability.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
    </section>
  );
};

export default TechnologySection;