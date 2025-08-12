import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface HeroFadeInProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number; // Delay between child elements (default: 150ms)
}

const HeroFadeIn = ({ 
  children, 
  className = "", 
  staggerDelay = 150 
}: HeroFadeInProps) => {
  const { ref, isVisible } = useScrollReveal({ 
    aboveTheFold: true,
    threshold: 0.1,
    rootMargin: "0px"
  });

  // Clone children and add staggered delays
  const childrenWithDelay = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const delay = 300 + (index * staggerDelay);
      return (
        <div
          key={index}
          style={{
            transitionDelay: `${delay}ms`,
            transitionDuration: '800ms',
            transitionProperty: 'opacity, transform',
            transitionTimingFunction: 'ease-out',
            willChange: 'opacity, transform',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          {child}
        </div>
      );
    }
    return child;
  });

  return (
    <div
      ref={ref}
      className={`${className}`}
    >
      {childrenWithDelay}
    </div>
  );
};

export default HeroFadeIn;
