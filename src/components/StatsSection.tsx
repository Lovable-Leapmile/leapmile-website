import { Card, CardContent } from "@/components/ui/card";
import { 
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
  const performanceStats = [
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
      <div className="page-wrapper">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            A smarter way to automate warehouse operations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leapmile's Nano Warehousing platform helps improve fulfillment operations with measurable results—from higher storage capacity to reduced costs and increased throughput.
          </p>
        </div>

        {/* Performance Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceStats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-tech transition-all duration-300 card-hover-effect cursor-pointer hover:-translate-y-1">
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