import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Maximize2, X } from "lucide-react";
import Footer from "@/components/Footer";
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
    coordinates: {
      x: "191",
      y: "406",
      width: "67",
      height: "92",
      fill: "url(#pattern1_1091_237)"
    }
  },
  omniChannel: {
    id: "omniChannel",
    title: "Omni Channel",
    gifUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Gif/Omnichannelaction.gif",
    description: "The system can have different temperature zones, including ambient, fresh, chilled, and frozen storage sections. Each section is enclosed separately to maintain its unique temperature.",
    videoUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/Omni%20Channel%20-%20Pickup.mp4",
    coordinates: {
      x: "513",
      y: "398",
      width: "67",
      height: "92",
      fill: "url(#pattern2_1091_237)"
    }
  },
  towerRobot: {
    id: "towerRobot",
    title: "Tower Robot",
    gifUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Gif/towerrobotaction.gif",
    description: "This system consists of three main elements: the racking system, the shuttle system, and load carriers. Each element plays a crucial role in ensuring efficient, accurate, and fast storage and retrieval of items.",
    videoUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/Tower%20-%20Parcel%20Pickup%20Animation.mp4",
    coordinates: {
      x: "805",
      y: "398",
      width: "67",
      height: "92",
      fill: "url(#pattern3_1091_237)"
    }
  },
  nanoWarehouse: {
    id: "nanoWarehouse",
    title: "Nano Warehouse",
    gifUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Gif/Nanowarehouseaction.gif",
    description: "This system consists of three main elements: the racking system, the shuttle system, and load carriers. Each element plays a crucial role in ensuring efficient, accurate, and fast storage and retrieval of items.",
    videoUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/VE%20-%20Nanowarehouse.mp4",
    coordinates: {
      x: "312",
      y: "238",
      width: "67",
      height: "92",
      fill: "url(#pattern4_1091_237)"
    }
  },
  mezzanineFloor: {
    id: "mezzanineFloor",
    title: "Mezzanine Floor",
    gifUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Gif/Mezzanineaction.gif",
    description: "The system can employ multi-level storage, allowing for a greater number of items to be stored in the same floor area, optimizing the overall storage capacity & enhancing operational efficiency.",
    videoUrl: "https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Videos/Mezzanine%20Floor-%20Function.mp4",
    coordinates: {
      x: "660",
      y: "146",
      width: "67",
      height: "92",
      fill: "url(#pattern5_1091_237)"
    }
  }
};
const VirtualTour = () => {
  const [activeSystem, setActiveSystem] = useState<string>("cube");
  const [svgContent, setSvgContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const currentSystem = systemsContent[activeSystem];

  // Preload all GIFs for instant display
  useEffect(() => {
    Object.values(systemsContent).forEach(system => {
      const img = new Image();
      img.src = system.gifUrl;
      img.loading = 'eager';
      // Force load
      img.decode().catch(() => {});
    });
  }, []);

  // Load SVG content
  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch('https://leapmile-website.blr1.cdn.digitaloceanspaces.com/virtual_tour.svg');
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

    // Inject highlight styles if not already present
    if (!document.getElementById('virtual-tour-svg-highlight-style')) {
      const style = document.createElement('style');
      style.id = 'virtual-tour-svg-highlight-style';
      style.innerHTML = `
        .svg-rect-highlight {
          stroke: #351c75 !important;
          stroke-width: 6px !important;
          filter: drop-shadow(0 0 12px #351c75aa);
        }
        .svg-rect-indicator {
          pointer-events: none;
        }
        @keyframes pulse-dot {
          0% { r: 6; opacity: 1; }
          50% { r: 10; opacity: 0.5; }
          100% { r: 6; opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }

    // --- Mouse enter logic for rects ---
    const svgContainer = document.querySelector('#virtual-tour-svg');
    if (svgContainer) {
      const listeners: Array<{
        element: Element;
        enter: () => void;
      }> = [];
      Object.entries(systemsContent).forEach(([systemId, system]) => {
        const {
          x,
          y,
          width,
          height,
          fill
        } = system.coordinates;
        const selector = `rect[x="${x}"][y="${y}"][width="${width}"][height="${height}"][fill="${fill}"]`;
        const rectElement = svgContainer.querySelector(selector);
        if (rectElement) {
          const enter = () => {
            setActiveSystem(systemId);
          };
          rectElement.addEventListener('mouseenter', enter);
          listeners.push({
            element: rectElement,
            enter
          });
        }
      });
      return () => {
        listeners.forEach(({
          element,
          enter
        }) => {
          element.removeEventListener('mouseenter', enter);
        });
      };
    }
  }, [svgContent]);

  // Highlight logic: always highlight the activeSystem
  useEffect(() => {
    if (!svgContent) return;
    // Remove all previous highlights and indicators
    document.querySelectorAll('#virtual-tour-svg rect').forEach(el => {
      el.classList.remove('svg-rect-highlight');
    });
    document.querySelectorAll('#virtual-tour-svg .svg-rect-indicator').forEach(el => el.remove());
    // Highlight the active rect and add indicator
    const system = systemsContent[activeSystem];
    if (system) {
      const {
        x,
        y,
        width,
        height
      } = system.coordinates;
      const selector = `rect[x="${x}"][y="${y}"][width="${width}"][height="${height}"]`;
      const rectElement = document.querySelector(`#virtual-tour-svg ${selector}`);
      if (rectElement) {
        rectElement.classList.add('svg-rect-highlight');
        // Add a pulsing dot indicator at the center
        const svg = (rectElement as SVGGraphicsElement).ownerSVGElement;
        if (svg) {
          const cx = parseFloat(x) + parseFloat(width) / 2;
          const cy = parseFloat(y) + parseFloat(height) / 2;
          const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          dot.setAttribute('cx', cx.toString());
          dot.setAttribute('cy', cy.toString());
          dot.setAttribute('r', '6');
          dot.setAttribute('fill', '#351c75');
          dot.setAttribute('class', 'svg-rect-indicator');
          dot.setAttribute('style', 'animation: pulse-dot 1.2s infinite;');
          svg.appendChild(dot);
        }
      }
    }
  }, [svgContent, activeSystem]);
  const handleFullscreenClick = () => {
    setIsVideoModalOpen(true);
  };
  return <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="pt-24 pb-6 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Virtual Warehouse
          </h1>
          
          <div className="max-w-4xl mx-auto mb-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Experience the LeapMile Robotics Virtual Warehouse—an engaging online journey you can enjoy from the comfort of your desk. Dive into the cutting-edge innovations designed into our Nano Warehouse Automated Storage and Retrieval Solutions (ASRS). Embark on a virtual tour of our inbound and outbound processes and discover the extraordinary features of our products.
            </p>
            <h2 className="text-lg md:text-xl font-semibold text-foreground">
              Embark on a virtual journey through various inbound and outbound processes, where you'll uncover the remarkable features of our products.
            </h2>
          </div>
        </div>
      </section>

      {/* Interactive SVG & GIF Section */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left Column - SVG Display */}
            <div className="flex-1 flex flex-col items-center justify-stretch">
              {isLoading ? <div className="flex items-center justify-center h-96 bg-muted rounded-lg w-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div> : <div id="virtual-tour-svg" className="w-full h-full max-w-2xl mx-auto flex items-stretch" style={{
              height: '100%',
              minHeight: '420px',
              maxHeight: '520px'
            }} dangerouslySetInnerHTML={{
              __html: svgContent
            }} />}
            </div>

            {/* Right Column - Always Visible GIF Panel */}
            <div className="flex-1 flex flex-col items-center justify-stretch">
              <div className="w-full max-w-2xl flex flex-col h-full rounded-xl bg-white border border-slate-200" style={{
              minHeight: '420px',
              maxHeight: '520px',
              boxShadow: '0 4px 24px 0 rgba(53,28,117,0.08)'
            }}>
                <div className="relative flex-shrink-0 flex items-center justify-center p-[15px]" style={{
                background: 'none'
              }}>
                  {/* Render all GIFs but only show the active one */}
                  {Object.entries(systemsContent).map(([systemId, system]) => (
                    <img 
                      key={systemId}
                      src={system.gifUrl} 
                      alt={`${system.title} Animation`} 
                      className="w-full h-auto rounded-lg object-contain absolute top-[15px] left-[15px] right-[15px] transition-opacity duration-150" 
                      style={{
                        marginTop: 0,
                        boxShadow: 'none',
                        opacity: activeSystem === systemId ? 1 : 0,
                        pointerEvents: activeSystem === systemId ? 'auto' : 'none'
                      }}
                      loading="eager"
                    />
                  ))}
                  {/* Fullscreen Icon */}
                  <button onClick={handleFullscreenClick} className="absolute bottom-[15px] left-[15px] bg-black/70 hover:bg-black/90 text-white p-2 rounded-lg transition-colors duration-200 z-10" aria-label="View fullscreen video">
                    <Maximize2 size={20} />
                  </button>
                </div>
                <div style={{
                background: '#f4f2ff',
                borderBottomLeftRadius: '0.75rem',
                borderBottomRightRadius: '0.75rem'
              }} className="flex-1 flex flex-col justify-center bg-[#f4f2ff]">
                  <div className="px-6 pt-4 pb-2">
                    <h3 className="text-xl font-bold mb-2 text-violet-900">{currentSystem.title}</h3>
                    <div style={{
                    color: '#222',
                    textAlign: 'left',
                    fontSize: '1rem',
                    fontWeight: 400
                  }} className="rounded-lg p-4 bg-transparent">
                      {currentSystem.description}
                    </div>
                  </div>
                </div>
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

      {/* Additional Information Section - moved below SVG & GIF */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Explore Our Interactive Features
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Hover over different regions of our virtual warehouse to see real-time demonstrations 
            of our automated storage and retrieval systems in action. Each area showcases unique 
            capabilities of our robotic solutions.
          </p>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl w-full border-slate-700" style={{
        background: 'linear-gradient(135deg, #351c75 0%, #5f3fae 100%)'
      }}>
          <DialogHeader>
            <DialogTitle className="text-white text-xl font-bold">
              {currentSystem.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
            <video className="absolute top-0 left-0 w-full h-full object-cover" controls autoPlay muted playsInline>
              <source src={currentSystem.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>;
};
export default VirtualTour;