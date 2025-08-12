import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedOnce") === "true";

    if (hasVisited) {
      setIsVisible(true);
      return;
    }

    // First visit in this session: perform fade-in
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem("hasVisitedOnce", "true");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-[700ms] ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ willChange: "opacity" }}
    >
      {children}
    </div>
  );
};

export default PageTransition;