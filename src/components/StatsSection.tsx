import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Package, 
  Maximize2, 
  HandMetal,
  TrendingUp,
  Target,
  Settings,
  Eye,
  Shield,
  Zap,
  ShoppingCart,
  DollarSign
} from "lucide-react";

const StatsSection = () => {
  const topStats = [
    {
      icon: Clock,
      title: "Deployment Time",
      value: "1–2 Weeks"
    },
    {
      icon: Package,
      title: "Storage Capacity", 
      value: "6000 SKUs"
    },
    {
      icon: Maximize2,
      title: "Physical Footprint",
      value: "3000 Sq. Ft"
    },
    {
      icon: HandMetal,
      title: "High Throughput",
      value: "1250 Orders / Day"
    }
  ];

  const gridStats = [
    {
      title: "Increase in storage density & capacity",
      value: "200%",
      icon: TrendingUp
    },
    {
      title: "Improvement in overall accuracy",
      value: "99%", 
      icon: Target
    },
    {
      title: "Reduction in manual & tasks interventions",
      value: "75%",
      icon: Settings
    },
    {
      title: "Enhanced inventory tracking & visibility",
      value: "100%",
      icon: Eye
    },
    {
      title: "Better monitoring & higher uptime",
      value: "99%",
      icon: Shield
    },
    {
      title: "Optimization across process & goods flows", 
      value: "80%",
      icon: Zap
    },
    {
      title: "Speed up of order picking & dispatch",
      value: "60%",
      icon: ShoppingCart
    },
    {
      title: "Lower CapEx & operational expenses",
      value: "50%",
      icon: DollarSign
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {topStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-tech transition-all duration-300 card-hover-effect">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gridStats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-tech transition-all duration-300 card-hover-effect cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold bg-tech-gradient bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;