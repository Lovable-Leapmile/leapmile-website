import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const RoboticsParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles with more on right side
    const particleCount = 60;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Weight particles towards the right side (60% chance to be on right half)
      const isRightSide = Math.random() > 0.3;
      const xPosition = isRightSide 
        ? canvas.width * 0.5 + Math.random() * canvas.width * 0.5  // Right half
        : Math.random() * canvas.width * 0.5;  // Left half
      
      particles.push({
        x: xPosition,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // Slower horizontal movement
        vy: (Math.random() - 0.5) * 0.5, // Slower vertical movement
        size: Math.random() * 12 + 2, // Size between 2-14px for more variation
        opacity: Math.random() * 0.08 + 0.02, // Very subtle opacity 0.02-0.1
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position with warehouse-like grid movement
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Add subtle automated path-like behavior
        const time = Date.now() * 0.0005;
        particle.x += Math.sin(time + index) * 0.1;
        particle.y += Math.cos(time + index) * 0.1;

        // Wrap around edges
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;

        // Draw particle with #8e7cc3 color
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(142, 124, 195, ${particle.opacity})`;
        ctx.fill();

        // Add subtle glow effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        gradient.addColorStop(0, `rgba(142, 124, 195, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, "rgba(142, 124, 195, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default RoboticsParticles;
