import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Zap, Shield, Target, Settings, Eye, TrendingUp, Clock, Package, Maximize2, HandMetal, ShoppingCart, DollarSign, Cpu, Database } from "lucide-react";

const CarouselSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const features = [{
    icon: Bot,
    title: "Advanced Robotics",
    description: "State-of-the-art robotic systems for efficient warehouse operations"
  }, {
    icon: Zap,
    title: "High Performance",
    description: "Lightning-fast processing and order fulfillment capabilities"
  }, {
    icon: Shield,
    title: "Reliable Operations",
    description: "99% uptime with robust monitoring and maintenance systems"
  }, {
    icon: Target,
    title: "Precision Accuracy",
    description: "99% accuracy in inventory management and order processing"
  }, {
    icon: Settings,
    title: "Automated Processes",
    description: "75% reduction in manual interventions and tasks"
  }, {
    icon: Eye,
    title: "Full Visibility",
    description: "Complete inventory tracking and real-time visibility"
  }, {
    icon: TrendingUp,
    title: "Increased Capacity",
    description: "200% increase in storage density and warehouse capacity"
  }, {
    icon: Clock,
    title: "Quick Deployment",
    description: "1-2 weeks deployment time for rapid implementation"
  }, {
    icon: Package,
    title: "Large Storage",
    description: "6000 SKU capacity in compact warehouse footprint"
  }, {
    icon: Maximize2,
    title: "Space Efficient",
    description: "3000 sq ft physical footprint for maximum efficiency"
  }, {
    icon: HandMetal,
    title: "High Throughput",
    description: "1250 orders per day processing capability"
  }, {
    icon: ShoppingCart,
    title: "Fast Picking",
    description: "60% speed improvement in order picking and dispatch"
  }, {
    icon: DollarSign,
    title: "Cost Savings",
    description: "50% reduction in CapEx and operational expenses"
  }, {
    icon: Cpu,
    title: "Smart Technology",
    description: "AI-powered optimization for warehouse operations"
  }, {
    icon: Database,
    title: "Data Analytics",
    description: "Real-time analytics and performance monitoring"
  }];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationId: number;

    const scroll = () => {
      if (isPaused) {
        animationId = requestAnimationFrame(scroll);
        return;
      }

      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled the full width of one set
      const singleSetWidth = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <section className="bg-background py-[20px]">
      <div className="container mx-auto px-4">
        {/* Auto-Scrolling Carousel */}
        <div className="w-full overflow-hidden relative h-36">
          <div
            ref={scrollRef}
            className="overflow-hidden whitespace-nowrap relative w-full h-full"
            style={{ scrollBehavior: 'auto' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="inline-flex gap-4 items-stretch h-full">
              {/* First set of features */}
              {features.map((feature, index) => (
                <div key={index} className="flex-shrink-0 w-64 h-full">
                  <Card className="h-full hover:border-primary/50 transition-colors duration-200 max-w-64">
                    <CardContent className="p-4 text-center h-full flex flex-col justify-center items-center space-y-3">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground text-center w-full break-words leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed text-center w-full break-words">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
              {/* Duplicate set for infinite loop */}
              {features.map((feature, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-64 h-full">
                  <Card className="h-full hover:border-primary/50 transition-colors duration-200 max-w-64">
                    <CardContent className="p-4 text-center h-full flex flex-col justify-center items-center space-y-3">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground text-center w-full break-words leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed text-center w-full break-words">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;