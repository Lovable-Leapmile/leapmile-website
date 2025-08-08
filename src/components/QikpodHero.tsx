import { Button } from "@/components/ui/button";
import qikpodBg from "@/assets/qikpod-bg.png";
import qikpodIcon from "@/assets/qikpod-icon.png";
import qikpodMain from "@/assets/qikpod-main.png";
const QikpodHero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url(${qikpodBg})`
  }}>
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20"></div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Header Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Experience Fast and Convenient{" "}
              <span className="text-primary">Self-Service Parcel Management</span>
            </h1>
            
            {/* Secondary Title with Icon */}
            <div className="flex items-start gap-4">
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Modular, low-cost parcel locker system that is simple and quick to deploy anywhere, 
                Scale securely with our hardware-agnostic platform.
              </p>
            </div>
            
            {/* Button */}
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Solutions
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img src={qikpodMain} alt="Qikpod System" className="w-full max-w-lg lg:max-w-xl object-contain" />
          </div>
        </div>
      </div>
    </section>;
};
export default QikpodHero;