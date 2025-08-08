import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Package, Settings, HeadphonesIcon } from "lucide-react";

const QikpodWhyChooseSmartLocker = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Convenience",
      description: "Users retrieve parcels at their own convenient location and time."
    },
    {
      icon: Package,
      title: "Compact",
      description: "Minimal indoor footprint, low power, and built-in connectivity."
    },
    {
      icon: Settings,
      title: "Flexible & Customisable",
      description: "Supports major e-commerce vendors and popular-size parcels."
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Service Ticketing",
      description: "Clean digital lockers deliver a smooth, contactless experience."
    }
  ];

  const handleRequestLocker = () => {
    // Navigate to home page and scroll to contact section
    window.location.href = "/#contact";
  };

  return (
    <section className="py-16 bg-qikpod-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-qikpod-black mb-6">
            Why Choose Smart Locker?
          </h2>
          <p className="text-lg text-qikpod-black max-w-4xl mx-auto">
            We welcome apartments, offices, tech parks, colleges, hostels, & retail locations to install lockers. Increase customer satisfaction, eliminate missed deliveries, reduce delivery costs, & cut carbon emissions.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center bg-qikpod-white border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-qikpod-black" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-qikpod-black">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-qikpod-black">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Request Locker Button */}
        <div className="text-center">
          <Button 
            onClick={handleRequestLocker}
            className="bg-qikpod-yellow hover:bg-qikpod-yellow/90 text-qikpod-black px-8 py-3"
          >
            Request Locker
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QikpodWhyChooseSmartLocker;