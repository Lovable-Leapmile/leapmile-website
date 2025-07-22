import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cog, Zap, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Leveraging advanced machine learning and AI algorithms to create intelligent automation solutions."
    },
    {
      icon: Cog,
      title: "Precision Engineering",
      description: "Building robust, reliable robotics systems with precision manufacturing and quality assurance."
    },
    {
      icon: Zap,
      title: "Rapid Innovation",
      description: "Fast-tracking development cycles to bring cutting-edge solutions to market quickly."
    },
    {
      icon: Target,
      title: "Mission-Critical Focus",
      description: "Delivering solutions that meet the most demanding operational requirements and safety standards."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">About LeapMile</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Pioneering the Future of 
              <span className="block text-primary">Autonomous Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded with a vision to revolutionize industrial automation, LeapMile combines 
              cutting-edge robotics with artificial intelligence to solve complex challenges 
              across multiple industries.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Transforming Industries Through Innovation
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team of expert engineers, AI researchers, and robotics specialists work 
                tirelessly to develop solutions that don't just meet today's needs, but 
                anticipate tomorrow's challenges.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From autonomous logistics systems to intelligent manufacturing automation, 
                we're building the infrastructure that will power the next generation of 
                smart industries.
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

            {/* Right Content - Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Cog className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p>Advanced Robotics Lab</p>
                  <p className="text-sm">Innovation in Action</p>
                </div>
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
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-tech transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;