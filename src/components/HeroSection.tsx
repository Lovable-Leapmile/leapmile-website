import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Clock, Package, Maximize2, HandMetal } from "lucide-react";
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Homepage/Gif/homebackground.gif')`
    }}></div>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/100"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-left">
            {/* Heading */}
            <div className="mb-6">
              <p className="text-lg md:text-xl text-muted-foreground font-thin tracking-wide">
                Discover robotic warehousing done the Leapmile way!
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
              Nano Warehousing platform
              <span className="block bg-tech-gradient bg-clip-text text-transparent">
                transforms fulfilment automation
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed">
              The Leapmile Robotics platform revolutionizes warehouse fulfillment facility operations by automating traditionally manual, time-consuming tasks. This advanced system uses top-tier robotics technology for efficient storage and management of items within any warehouse facility. It excels in automating tasks like secure inventory storage, accurate retrieval, quick picking, regular auditing, and efficient dispatch.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-tech-gradient hover:shadow-tech text-lg px-8 py-4 h-auto group">
                Explore Industries
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto group hover:bg-accent">
                <Play className="mr-2 h-5 w-5" />
                Virtual Tour
              </Button>
            </div>
          </div>

          {/* Right Metrics Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-card-hover transition-all duration-300">
              <div className="flex flex-col items-center space-y-2">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Deployment Time</p>
                  <p className="text-lg font-semibold text-foreground">1–2 Weeks</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-card-hover transition-all duration-300">
              <div className="flex flex-col items-center space-y-2">
                <Package className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Storage Capacity</p>
                  <p className="text-lg font-semibold text-foreground">6000 SKUs</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-card-hover transition-all duration-300">
              <div className="flex flex-col items-center space-y-2">
                <Maximize2 className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Physical Footprint</p>
                  <p className="text-lg font-semibold text-foreground">3000 Sq. Ft</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-card-hover transition-all duration-300">
              <div className="flex flex-col items-center space-y-2">
                <HandMetal className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">High Throughput</p>
                  <p className="text-lg font-semibold text-foreground">1250 Orders/day</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-pulse delay-700"></div>
    </section>;
};
export default HeroSection;