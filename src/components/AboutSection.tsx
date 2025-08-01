import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cog, Zap, Target } from "lucide-react";
import warehouseAutomationImage from "@/assets/warehouse-automation.jpg";
const AboutSection = () => {
  const values = [{
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Leveraging advanced machine learning and AI algorithms to create intelligent automation solutions."
  }, {
    icon: Cog,
    title: "Precision Engineering",
    description: "Building robust, reliable robotics systems with precision manufacturing and quality assurance."
  }, {
    icon: Zap,
    title: "Rapid Innovation",
    description: "Fast-tracking development cycles to bring cutting-edge solutions to market quickly."
  }, {
    icon: Target,
    title: "Mission-Critical Focus",
    description: "Delivering solutions that meet the most demanding operational requirements and safety standards."
  }];
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">About Leapmile Robotics</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Innovative warehousing and last-mile products to 
              <span className="block text-primary">accelerate digital commerce</span>
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Value-Engineered Warehouse Automation Solutions
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Leapmile Robotics, an innovative provider in the emerging warehouse space, is committed to delivering value-engineered, flexible, intelligent warehouse automation solutions that combine smart robotics technology and intelligent software. The Leapmile Nano offers the world's most cost-efficient platform for the deployment of small nano warehouses. The robotics hardware enjoys fast implementation times and offers an API-first software and analytics system that can be easily integrated into existing workflows and back-end systems.
              </p>
              
              {/* Key Numbers */}
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-2xl font-bold text-primary">5+ Years</div>
                  <div className="text-muted-foreground">Industry Experience</div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-2xl font-bold text-primary">25+ Patents</div>
                  <div className="text-muted-foreground">Filed & Pending</div>
                </div>
              </div>
            </div>

            {/* Right Content - GIF */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={warehouseAutomationImage} 
                  alt="Leapmile warehouse automation in action"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card border rounded-lg p-4 shadow-lg">
                <div className="text-sm font-semibold text-foreground">AI Processing</div>
                <div className="text-2xl font-bold text-primary">99.7%</div>
                <div className="text-xs text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <Card key={index} className="text-center hover:shadow-tech transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;