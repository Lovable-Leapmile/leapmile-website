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
      // When element first appears: rect.top = windowHeight (scale = 1, normal)
      // As we scroll down and element moves up: rect.top decreases (scale increases)
      // When element is at top: rect.top = 0 or negative (scale = maxScale)
      
      const elementTop = rect.top;
      
      // Normalize to 0-1 range
      // 1 = element at bottom/below viewport (normal size = 1)
      // 0 = element at top (zoomed in = maxScale)
      const progress = Math.max(0, Math.min(1, elementTop / windowHeight));
      
      // Map to scale range: start at 1 (normal), increase to maxScale as we scroll down
      // When progress = 1 (element at bottom): scale = 1
      // When progress = 0 (element at top): scale = maxScale
      const newScale = 1 + (maxScale - 1) * (1 - progress);
      
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
