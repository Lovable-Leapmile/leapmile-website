import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Maximize2, X } from "lucide-react";

interface SystemContent {
  id: string;
  title: string;
  gifUrl: string;
  description: string;
  videoUrl: string;
  coordinates: {
    x: string;
    y: string;
    width: string;
    height: string;
    fill: string;
  };
}

// System content mapping - moved outside component to avoid recreation
const systemsContent: Record<string, SystemContent> = {
  cube: {
    id: "cube",
    title: "Cube",
    gifUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Gif/Cuberobo.gif",
    description: "The system is designed for the storage of a diverse range of items, from lightweight parcels to more substantial machinery spare parts, and is the most effective solution for automating in-store pickups.",
    videoUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/VE%20-%20Cube%20-%20Pickup.mp4",
    coordinates: { x: "191", y: "406", width: "67", height: "92", fill: "url(#pattern1_1091_237)" }
  },
  omniChannel: {
    id: "omniChannel",
    title: "Omni Channel",
    gifUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Gif/Omnichannelaction.gif",
    description: "The system can have different temperature zones, including ambient, fresh, chilled, and frozen storage sections. Each section is enclosed separately to maintain its unique temperature.",
    videoUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/Omni%20Channel%20-%20Pickup.mp4",
    coordinates: { x: "513", y: "398", width: "67", height: "92", fill: "url(#pattern2_1091_237)" }
  },
  towerRobot: {
    id: "towerRobot",
    title: "Tower Robot",
    gifUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Gif/towerrobotaction.gif",
    description: "This system consists of three main elements: the racking system, the shuttle system, and load carriers. Each element plays a crucial role in ensuring efficient, accurate, and fast storage and retrieval of items.",
    videoUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/Tower%20-%20Parcel%20Pickup%20Animation.mp4",
    coordinates: { x: "805", y: "398", width: "67", height: "92", fill: "url(#pattern3_1091_237)" }
  },
  nanoWarehouse: {
    id: "nanoWarehouse",
    title: "Nano Warehouse",
    gifUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Gif/Nanowarehouseaction.gif",
    description: "This system consists of three main elements: the racking system, the shuttle system, and load carriers. Each element plays a crucial role in ensuring efficient, accurate, and fast storage and retrieval of items.",
    videoUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/VE%20-%20Nanowarehouse.mp4",
    coordinates: { x: "312", y: "238", width: "67", height: "92", fill: "url(#pattern4_1091_237)" }
  },
  mezzanineFloor: {
    id: "mezzanineFloor",
    title: "Mezzanine Floor",
    gifUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Gif/Mezzanineaction.gif",
    description: "The system can employ multi-level storage, allowing for a greater number of items to be stored in the same floor area, optimizing the overall storage capacity & enhancing operational efficiency.",
    videoUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/Mezzanine%20Floor-%20Function.mp4",
    coordinates: { x: "660", y: "146", width: "67", height: "92", fill: "url(#pattern5_1091_237)" }
  }
};

const VirtualTour = () => {
  const [activeSystem, setActiveSystem] = useState<string>("cube");
  const [svgContent, setSvgContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const currentSystem = systemsContent[activeSystem];

  // Load SVG content
  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch('https://ams-bucket.blr1.digitaloceanspaces.com/virtual_tour.svg');
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error('Failed to load SVG:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSvg();
  }, []);

  // Add event listeners to all rect elements after SVG is loaded
  useEffect(() => {
    if (!svgContent) return;

    const handleMouseEnter = (systemId: string) => {
      setActiveSystem(systemId);
    };

    // Add event listeners to the SVG container
    const svgContainer = document.querySelector('#virtual-tour-svg');
    if (svgContainer) {
      const listeners: Array<{ element: Element; handler: () => void }> = [];

      // Set up event listeners for each system
      Object.entries(systemsContent).forEach(([systemId, system]) => {
        const { x, y, width, height, fill } = system.coordinates;
        const selector = `rect[x="${x}"][y="${y}"][width="${width}"][height="${height}"][fill="${fill}"]`;
        const rectElement = svgContainer.querySelector(selector);
        
        if (rectElement) {
          const handler = () => handleMouseEnter(systemId);
          rectElement.addEventListener('mouseenter', handler);
          (rectElement as SVGElement).style.cursor = 'pointer';
          
          listeners.push({ element: rectElement, handler });
        }
      });

      return () => {
        listeners.forEach(({ element, handler }) => {
          element.removeEventListener('mouseenter', handler);
        });
      };
    }
  }, [svgContent]);

  const handleFullscreenClick = () => {
    setIsVideoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Virtual Warehouse
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Experience the LeapMile Robotics Virtual Warehouse—an engaging online journey you can enjoy from the comfort of your desk. Dive into the cutting-edge innovations designed into our Nano Warehouse Automated Storage and Retrieval Solutions (ASRS). Embark on a virtual tour of our inbound and outbound processes and discover the extraordinary features of our products.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Embark on a virtual journey through various inbound and outbound processes, where you'll uncover the remarkable features of our products.
            </h2>
          </div>
        </div>
      </section>

      {/* Interactive SVG & GIF Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - SVG Display */}
            <div className="relative">
              {isLoading ? (
                <div className="flex items-center justify-center h-96 bg-muted rounded-lg">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div 
                  id="virtual-tour-svg"
                  className="w-full h-auto max-w-lg mx-auto"
                  dangerouslySetInnerHTML={{ __html: svgContent }}
                />
              )}
            </div>

            {/* Right Column - Always Visible GIF Panel */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-6 shadow-2xl">
                {/* System Title */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white">{currentSystem.title}</h3>
                </div>

                {/* GIF Container */}
                <div className="relative mb-4">
                  <img
                    src={currentSystem.gifUrl}
                    alt={`${currentSystem.title} Animation`}
                    className="w-full h-auto rounded-lg shadow-lg object-contain"
                    style={{ aspectRatio: '16/9' }}
                  />
                  
                  {/* Fullscreen Icon */}
                  <button
                    onClick={handleFullscreenClick}
                    className="absolute bottom-3 left-3 bg-black/70 hover:bg-black/90 text-white p-2 rounded-lg transition-colors duration-200"
                    aria-label="View fullscreen video"
                  >
                    <Maximize2 size={20} />
                  </button>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed">
                  {currentSystem.description}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Instructions */}
          <div className="lg:hidden mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Tap on different highlighted areas in the warehouse diagram to explore various systems
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Explore Our Interactive Features
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hover over different regions of our virtual warehouse to see real-time demonstrations 
            of our automated storage and retrieval systems in action. Each area showcases unique 
            capabilities of our robotic solutions.
          </p>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl w-full bg-slate-900 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white text-xl font-bold">
              {currentSystem.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              autoPlay
              muted
              playsInline
            >
              <source src={currentSystem.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VirtualTour;