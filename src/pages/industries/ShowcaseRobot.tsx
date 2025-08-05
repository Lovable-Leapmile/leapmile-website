import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ShowcaseRobot = () => {
  const features = [
    "Floating Glass Observation Bubbles",
    "Transparent Lighted Panels for Additional Display",
    "Touch Screen Self Service Interactivity",
    "Automated Rotation of Display Across Collections",
    "Body Panels Wrapped in Art Renderings",
    "Secure & Simplified Management App"
  ];

  const orderFlow = [
    {
      image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/Inscreen.png",
      header: "Selecting Item",
      caption: "Customer browses and selects items through the interactive touchscreen interface"
    },
    {
      image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/Intray.png", 
      header: "Transferring from Rack",
      caption: "The robotic system retrieves the selected item from secure storage racks"
    },
    {
      image: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/Inbubble.png",
      header: "Displaying Item", 
      caption: "Item is presented in the glass observation bubble for detailed inspection"
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
                <Badge variant="outline" className="mb-4">Showcase Robot</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Elegance at your fingertips The Showcase Robot Curating Creativity
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Introducing the showcase robot, a cutting-edge system designed to exhibit specialized items, 
                  bespoke products, luxury goods, jewelry, and art masterpieces within a compact, self-serve automated display. 
                  Using advanced robotic mechanisms, the transparent front panel serves as a captivating display area, 
                  while the racks situated behind serve as storage space.
                </p>
                
                {/* Key Point */}
                <div className="p-4 bg-primary/5 rounded-lg mb-8">
                  <p className="text-foreground font-medium">
                    Users have the ability to interact with the system, enabling them to handpick specific items 
                    to inspect at close quarters in the glass bubbles.
                  </p>
                </div>
                
                <Button size="lg" className="bg-tech-gradient hover:shadow-tech">
                  Get Started Today
                </Button>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/industrishow.png" 
                    alt="Showcase Robot display system"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Background */}
      <section className="py-20 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Images/features.png)'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Advanced Features
              </h2>
              <p className="text-xl text-muted-foreground">
                Cutting-edge technology for premium display experiences
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card/90 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-6 h-6 bg-primary rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm leading-relaxed">{feature}</h4>
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
              Watch the Showcase Robot in Action
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
                <source src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Industries/Videos/Showcase Robot Leapmile.mp4" type="video/mp4" />
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
                Interaction Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple steps to explore and inspect premium items
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {orderFlow.map((flow, index) => (
                <div key={index} className="text-center">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={flow.image} 
                      alt={flow.header}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{flow.header}</h3>
                  <p className="text-muted-foreground leading-relaxed">{flow.caption}</p>
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

export default ShowcaseRobot;