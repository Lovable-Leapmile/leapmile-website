import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, HeadphonesIcon, Settings, TrendingUp, DollarSign } from "lucide-react";

const QikpodWhyChoose = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "100% Acceptance"
    },
    {
      icon: HeadphonesIcon,
      title: "Support"
    },
    {
      icon: Settings,
      title: "Customisable"
    },
    {
      icon: TrendingUp,
      title: "Scalable"
    },
    {
      icon: DollarSign,
      title: "Value Engineering"
    }
  ];

  return (
    <section className="py-16 bg-zinc-100">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-qikpod-black mb-8">
            Why Choose QikPod?
          </h2>
        </div>

        {/* Benefits Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center bg-qikpod-white border-gray-200 hover:shadow-lg transition-shadow p-4">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-qikpod-yellow rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-qikpod-black" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-qikpod-black">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Below Benefits Content */}
        <div className="text-center space-y-6">
          <p className="text-lg text-qikpod-black">
            Subscribe to our network to enjoy multiple amazing benefits.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-qikpod-black tracking-wider">
              LARGE NETWORK OF PARTNER & HOSTS
            </h3>
            <p className="text-lg text-qikpod-black max-w-4xl mx-auto">
              Join our network of corporate campuses, residential communities, & educational institutions to experience hassle-free parcel management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QikpodWhyChoose;