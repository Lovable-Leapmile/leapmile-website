import { useEffect, useRef } from "react";
import q25 from "@/assets/q25.png";
import q26 from "@/assets/q26.png";
import q27 from "@/assets/q27.png";
import q28 from "@/assets/q28.png";
import q29 from "@/assets/q29.png";
import q30 from "@/assets/q30.png";
import q37 from "@/assets/q37.png";
import q38 from "@/assets/q38.png";
import q39 from "@/assets/q39.png";
import q40 from "@/assets/q40.png";
import q41 from "@/assets/q41.png";
import q42 from "@/assets/q42.png";
import q43 from "@/assets/q43.png";
import q44 from "@/assets/q44.png";

const QikpodClientCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const clientLogos = [
    q25, q26, q27, q28, q29, q30, q37, q38, q39, q40, q41, q42, q43, q44
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Slow speed
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= maxScrollLeft) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-16 bg-qikpod-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-qikpod-black mb-6">
            Our Clients
          </h2>
        </div>

        <div 
          ref={scrollRef}
          className="overflow-hidden whitespace-nowrap"
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="inline-flex gap-8 items-center">
            {/* First set of logos */}
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`} 
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for infinite loop */}
            {clientLogos.map((logo, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`Client ${index + 1}`} 
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QikpodClientCarousel;