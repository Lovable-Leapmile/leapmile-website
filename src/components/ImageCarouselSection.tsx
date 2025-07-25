import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ImageCarouselSection = () => {
  const carouselItems = [
    {
      title: "Optimize Storage",
      description: "Inventory layout & compact stacking"
    },
    {
      title: "Accuracy",
      description: "Smart tracking + display"
    },
    {
      title: "Picking Efficiency",
      description: "Auto location mapping"
    },
    {
      title: "Standardization",
      description: "Tote & SKU compatibility"
    },
    {
      title: "Training",
      description: "2-day training support"
    },
    {
      title: "Seamless Integration",
      description: "API & AGV friendly"
    },
    {
      title: "Technology",
      description: "Engineered for optimal output"
    },
    {
      title: "Security",
      description: "Cloud/on-prem access & audits"
    },
    {
      title: "Safety",
      description: "Operator-first tested design"
    },
    {
      title: "ROI",
      description: "Fast return on investment"
    },
    {
      title: "Faster Throughput",
      description: "High retrieval speed"
    },
    {
      title: "RaaS",
      description: "CapEx-free service model"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Images/virtualrobot.png"
                alt="Virtual Robot Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Carousel */}
          <div className="order-1 lg:order-2">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {carouselItems.map((item, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 lg:basis-1/2">
                    <Card className="h-full border border-border">
                      <CardContent className="p-4">
                        <div className="text-center space-y-2">
                          <h3 className="font-semibold text-foreground text-sm">
                            {item.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {item.description}
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
      </div>
    </section>
  );
};

export default ImageCarouselSection;