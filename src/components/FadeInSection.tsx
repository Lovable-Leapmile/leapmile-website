import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number; // Distance to translate (default: 30px)
  duration?: number; // Animation duration in ms (default: 800ms)
  aboveTheFold?: boolean; // Whether element is above the fold
  threshold?: number; // Intersection threshold (default: 0.1)
  rootMargin?: string; // Root margin for intersection observer
}

const FadeInSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  distance = 30,
  duration = 800,
  aboveTheFold = false,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px"
}: FadeInSectionProps) => {
  const { ref, isVisible } = useScrollReveal({ 
    aboveTheFold, 
    threshold, 
    rootMargin 
  });

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: delay ? `${delay}ms` : '0ms',
        willChange: 'opacity, transform',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
        // Ensure no layout shift by keeping space allocated
        minHeight: aboveTheFold ? 'auto' : '1px',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
