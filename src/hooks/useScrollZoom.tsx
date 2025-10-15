import { useEffect, useState, RefObject } from "react";

interface UseScrollZoomProps {
  elementRef: RefObject<HTMLElement>;
  minScale?: number;
  maxScale?: number;
}

export const useScrollZoom = ({ 
  elementRef, 
  minScale = 0.8, 
  maxScale = 1.2 
}: UseScrollZoomProps) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible in the viewport
      // When element is at top of viewport: progress = 1 (zoom in)
      // When element is centered: progress = 0.5
      // When element is at bottom: progress = 0 (zoom out)
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // Distance from center (-windowHeight/2 to +windowHeight/2)
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Normalize to 0-1 range, inverted (1 at top, 0 at bottom)
      const normalizedDistance = Math.min(Math.abs(distanceFromCenter) / (windowHeight / 2), 1);
      
      // Map to scale range (inverted: maxScale at top, minScale at bottom)
      const newScale = maxScale - (maxScale - minScale) * normalizedDistance;
      
      setScale(newScale);
    };

    handleScroll(); // Initial call
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef, minScale, maxScale]);

  return scale;
};
