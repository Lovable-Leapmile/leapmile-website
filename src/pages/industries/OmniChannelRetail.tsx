import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OmniChannelRetail = () => {
  const benefits = [
    "Increase Throughput",
    "Simplified Customization", 
    "Inventory Visibility",
    "Eliminate Manual Errors",
    "Easy Maintenance",
    "Enhance Shopper Experience",
    "24 x 7 Operation", 
    "Daily Audit Reports",
    "Handle Seasonal Peaks",
    "Increase Storage Density"
  ];

  const orderFlow = [
    {
      image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/orderplacement.png",
      header: "Order Placement",
      caption: "Customer places order through multiple channels for convenient pickup"
    },
    {
      image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/orderflow2.png", 
      header: "Order Consolidated",
      caption: "Items are automatically consolidated and prepared for pickup"
    },
    {
      image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/orderflow3.png",
      header: "Order Package & Filling", 
      caption: "Orders are packaged and filled ready for customer collection"
    },
    {
      image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/customerscan.png",
      header: "Order Pickup", 
      caption: "Customer collects order through their preferred pickup method"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <Badge variant="outline" className="mb-4">Omni-Channel Retail</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Lead the Future with our Omni-Channel Retail Nano Warehouse Platform
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We revolutionize the shopping experience by seamlessly integrating online ordering with flexible pickup options. 
                  Whether you prefer the ease of shopping from home and picking up in-store, the convenience of mall pickup, 
                  or the simplicity of curbside pickup, our solution has you covered. Experience the future of retail as we 
                  redefine convenience and streamline your shopping journey.
                </p>
                
                {/* Key Points */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Emerge as the vanguard of innovation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Revolutionizing the delivery and storage of groceries</span>
                  </div>
                </div>
                
                <Button size="lg" className="bg-tech-gradient hover:shadow-tech">
                  Get Started Today
                </Button>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/ondemand1.png" 
                    alt="Omni-Channel Retail warehouse automation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience unmatched efficiency with our omni-channel solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-4">
                  <CardContent className="p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="w-6 h-6 bg-primary rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-sm text-foreground">{benefit}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Watch the Robot in Action
            </h2>
            
            <div className="relative rounded-2xl overflow-hidden">
              <video 
                className="w-full h-auto"
                autoPlay
                loop
                muted
                controls={false}
                style={{ borderRadius: '1rem' }}
              >
                <source src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Videos/quickcommerce.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Fullscreen Button */}
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-lg hover:bg-black/70 transition-colors"
                onClick={() => {
                  const video = document.querySelector('video');
                  if (video) {
                    video.requestFullscreen();
                  }
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Order Flow Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Order Flow Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Streamlined workflow from order to pickup
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {orderFlow.map((flow, index) => (
                <div key={index} className="text-center">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={flow.image} 
                      alt={flow.header}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{flow.header}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{flow.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-0">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Stay Ahead by Embracing Innovation and Profitability
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With our NanoWarehouse platform, operates most effectively with humans, robots, 
                  and synchronizing technologies, making smart decisions and adjusting to changing conditions.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  <strong>Stay in Control of Your Inventory:</strong> Know exactly where each item comes from 
                  and how long it's been in your warehouse. Thanks to our automated system.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-tech-gradient hover:shadow-tech">
                    Get Started Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OmniChannelRetail;