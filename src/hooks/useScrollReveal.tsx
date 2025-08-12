import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  aboveTheFold?: boolean;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          // For above-the-fold elements, add a slight delay
          if (options.aboveTheFold) {
            setTimeout(() => {
              setIsVisible(true);
              setHasBeenVisible(true);
            }, 300); // 300ms delay for above-the-fold elements
          } else {
            setIsVisible(true);
            setHasBeenVisible(true);
          }
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px", // Trigger slightly before element fully enters viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasBeenVisible, options.threshold, options.rootMargin, options.aboveTheFold]);

  return { ref, isVisible };
};