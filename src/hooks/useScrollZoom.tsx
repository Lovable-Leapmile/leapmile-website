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
      
      // Calculate element's position relative to viewport
      // When element is at bottom of viewport (first visible): rect.top = windowHeight
      // When element is at top of viewport: rect.top = 0
      const elementTop = rect.top;
      
      // Normalize to 0-1 range
      // 0 = element at top (zoom in - maxScale)
      // 1 = element at bottom (zoom out - minScale)
      const progress = Math.max(0, Math.min(1, elementTop / windowHeight));
      
      // Map to scale range: inverted so lower progress = more zoom
      const newScale = maxScale - (maxScale - minScale) * progress;
      
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
