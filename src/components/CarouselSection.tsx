import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { 
  Bot, 
  Zap, 
  Shield, 
  Target, 
  Settings, 
  Eye, 
  TrendingUp, 
  Clock, 
  Package, 
  Maximize2, 
  HandMetal, 
  ShoppingCart, 
  DollarSign,
  Cpu,
  Database
} from "lucide-react";

const CarouselSection = () => {
  const features = [
    {
      icon: Bot,
      title: "Advanced Robotics",
      description: "State-of-the-art robotic systems for efficient warehouse operations"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast processing and order fulfillment capabilities"
    },
    {
      icon: Shield,
      title: "Reliable Operations",
      description: "99% uptime with robust monitoring and maintenance systems"
    },
    {
      icon: Target,
      title: "Precision Accuracy",
      description: "99% accuracy in inventory management and order processing"
    },
    {
      icon: Settings,
      title: "Automated Processes",
      description: "75% reduction in manual interventions and tasks"
    },
    {
      icon: Eye,
      title: "Full Visibility",
      description: "Complete inventory tracking and real-time visibility"
    },
    {
      icon: TrendingUp,
      title: "Increased Capacity",
      description: "200% increase in storage density and warehouse capacity"
    },
    {
      icon: Clock,
      title: "Quick Deployment",
      description: "1-2 weeks deployment time for rapid implementation"
    },
    {
      icon: Package,
      title: "Large Storage",
      description: "6000 SKU capacity in compact warehouse footprint"
    },
    {
      icon: Maximize2,
      title: "Space Efficient",
      description: "3000 sq ft physical footprint for maximum efficiency"
    },
    {
      icon: HandMetal,
      title: "High Throughput",
      description: "1250 orders per day processing capability"
    },
    {
      icon: ShoppingCart,
      title: "Fast Picking",
      description: "60% speed improvement in order picking and dispatch"
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "50% reduction in CapEx and operational expenses"
    },
    {
      icon: Cpu,
      title: "Smart Technology",
      description: "AI-powered optimization for warehouse operations"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Real-time analytics and performance monitoring"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24">
        {/* Image */}
        <div className="text-center mb-12">
          <img 
            src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Images/virtualrobot.png"
            alt="Virtual Robot"
            className="mx-auto max-w-md h-auto rounded-lg"
          />
        </div>

        {/* Auto-Scrolling Carousel */}
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="h-full">
                    <CardContent className="p-4 text-center">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-sm text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;