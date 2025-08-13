import { Card, CardContent } from "@/components/ui/card";
import { Clock, Package, Maximize2, HandMetal } from "lucide-react";
import FadeInSection from "./FadeInSection";

const DiscoverSection = () => {
  const metrics = [
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

  return (
    <section 
      className="py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://ams-bucket.blr1.digitaloceanspaces.com/bg_pattern_leapmile.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="page-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <FadeInSection distance={40} duration={800}>
            <div className="space-y-6">
              <p className="text-sm font-medium text-primary uppercase tracking-wide">
                Discover robotic warehousing done the Leapmile way!
              </p>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Nano Warehousing platform transforms fulfilment automation
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Leapmile Robotics platform revolutionizes warehouse fulfillment facility operations by automating traditionally manual, time-consuming tasks. This advanced system uses top-tier robotics technology for efficient storage and management of items within any warehouse facility. It excels in automating tasks like secure inventory storage, accurate retrieval, quick picking, regular auditing, and efficient dispatch.
              </p>
            </div>
          </FadeInSection>

          {/* Right Column - Metrics Grid */}
          <FadeInSection delay={200} distance={30} duration={900}>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center hover:shadow-tech transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <metric.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">
                          {metric.title}
                        </p>
                        <p className="text-lg font-bold text-foreground">
                          {metric.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;