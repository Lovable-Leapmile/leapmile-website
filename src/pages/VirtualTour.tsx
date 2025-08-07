import { useState, useEffect } from "react";

const VirtualTour = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

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

  // Add event listeners to specific rect element after SVG is loaded
  useEffect(() => {
    if (!svgContent) return;

    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as SVGElement;
      // Check if this is our target rect element
      if (target.tagName === 'rect' && 
          target.getAttribute('x') === '191' && 
          target.getAttribute('y') === '406' && 
          target.getAttribute('width') === '67' && 
          target.getAttribute('height') === '92' && 
          target.getAttribute('fill') === 'url(#pattern1_1091_237)') {
        setHoveredRegion('target-rect');
      }
    };

    const handleMouseLeave = () => {
      setHoveredRegion(null);
    };

    // Add event listeners to the SVG container
    const svgContainer = document.querySelector('#virtual-tour-svg');
    if (svgContainer) {
      const targetRect = svgContainer.querySelector('rect[x="191"][y="406"][width="67"][height="92"][fill="url(#pattern1_1091_237)"]');
      if (targetRect) {
        targetRect.addEventListener('mouseenter', handleMouseEnter);
        targetRect.addEventListener('mouseleave', handleMouseLeave);
        // Make rect visually interactive
        (targetRect as SVGElement).style.cursor = 'pointer';

        return () => {
          targetRect.removeEventListener('mouseenter', handleMouseEnter);
          targetRect.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }
  }, [svgContent]);

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

      {/* Interactive SVG & Video Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - SVG Display */}
            <div className={`relative transition-transform duration-500 ease-in-out ${
              hoveredRegion ? 'lg:-translate-x-8' : ''
            }`}>
              {isLoading ? (
                <div className="flex items-center justify-center h-96 bg-muted rounded-lg">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div 
                  id="virtual-tour-svg"
                  className="w-full h-auto"
                  dangerouslySetInnerHTML={{ __html: svgContent }}
                />
              )}
            </div>

            {/* Right Column - Dynamic GIF Display */}
            <div className={`relative transition-all duration-500 ease-in-out ${
              hoveredRegion ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}>
              {hoveredRegion && (
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src="https://leapmile-website.blr1.cdn.digitaloceanspaces.com/Technology/Gif/Cuberobo.gif"
                    alt="Cube Robot Animation"
                    className="w-full h-auto max-w-md rounded-lg shadow-lg object-contain"
                    style={{ aspectRatio: 'auto' }}
                  />
                  
                  {/* GIF Overlay with Info */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded">
                    <span className="text-sm font-medium">
                      Cube Robot Technology
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Instructions */}
          <div className="lg:hidden mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Tap on the highlighted area in the warehouse diagram to view the cube robot animation
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
    </div>
  );
};

export default VirtualTour;