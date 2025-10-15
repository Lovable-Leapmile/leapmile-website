import { useEffect, useRef } from "react";

interface Rack {
  x: number;
  width: number;
  height: number;
}

interface Shuttle {
  x: number;
  targetX: number;
  speed: number;
  hasItem: boolean;
  targetRack: number;
}

const WarehouseAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 150; // Height for bottom animation
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create racks
    const rackCount = 8;
    const rackSpacing = canvas.width / (rackCount + 1);
    const racks: Rack[] = [];
    
    for (let i = 0; i < rackCount; i++) {
      racks.push({
        x: rackSpacing * (i + 1),
        width: 40,
        height: 100,
      });
    }

    // Create shuttles
    const shuttles: Shuttle[] = [
      {
        x: canvas.width * 0.2,
        targetX: canvas.width * 0.2,
        speed: 1.5,
        hasItem: false,
        targetRack: 0,
      },
      {
        x: canvas.width * 0.7,
        targetX: canvas.width * 0.7,
        speed: 1.2,
        hasItem: true,
        targetRack: 3,
      },
    ];

    // Items in racks (showing occupancy)
    const rackItems = racks.map(() => ({
      slot1: Math.random() > 0.3,
      slot2: Math.random() > 0.3,
    }));

    // Human figures
    const humans = [
      { x: canvas.width * 0.1, direction: 1 },
      { x: canvas.width * 0.9, direction: -1 },
    ];

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw track line
      ctx.strokeStyle = "rgba(142, 124, 195, 0.3)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 30);
      ctx.lineTo(canvas.width, canvas.height - 30);
      ctx.stroke();

      // Draw racks
      racks.forEach((rack, index) => {
        // Rack structure
        ctx.fillStyle = "rgba(142, 124, 195, 0.2)";
        ctx.fillRect(rack.x - rack.width / 2, canvas.height - 130, rack.width, rack.height);
        
        // Rack outline
        ctx.strokeStyle = "rgba(142, 124, 195, 0.4)";
        ctx.lineWidth = 2;
        ctx.strokeRect(rack.x - rack.width / 2, canvas.height - 130, rack.width, rack.height);

        // Draw slots at bottom
        const slotHeight = 20;
        const slotY1 = canvas.height - 50;
        const slotY2 = canvas.height - 70;

        // Slot 1
        if (rackItems[index].slot1) {
          ctx.fillStyle = "rgba(142, 124, 195, 0.6)";
          ctx.fillRect(rack.x - 15, slotY1, 30, slotHeight);
        }
        ctx.strokeStyle = "rgba(142, 124, 195, 0.4)";
        ctx.strokeRect(rack.x - 15, slotY1, 30, slotHeight);

        // Slot 2
        if (rackItems[index].slot2) {
          ctx.fillStyle = "rgba(142, 124, 195, 0.6)";
          ctx.fillRect(rack.x - 15, slotY2, 30, slotHeight);
        }
        ctx.strokeStyle = "rgba(142, 124, 195, 0.4)";
        ctx.strokeRect(rack.x - 15, slotY2, 30, slotHeight);
      });

      // Update and draw shuttles
      shuttles.forEach((shuttle) => {
        // Move shuttle towards target
        const dx = shuttle.targetX - shuttle.x;
        if (Math.abs(dx) > 1) {
          shuttle.x += Math.sign(dx) * shuttle.speed;
        } else {
          // Reached target, pick new target
          shuttle.targetRack = Math.floor(Math.random() * racks.length);
          shuttle.targetX = racks[shuttle.targetRack].x;
          shuttle.hasItem = !shuttle.hasItem;
        }

        // Draw shuttle body
        ctx.fillStyle = shuttle.hasItem ? "rgba(142, 124, 195, 0.8)" : "rgba(142, 124, 195, 0.5)";
        ctx.fillRect(shuttle.x - 20, canvas.height - 40, 40, 15);
        
        // Draw shuttle wheels
        ctx.fillStyle = "rgba(142, 124, 195, 0.9)";
        ctx.beginPath();
        ctx.arc(shuttle.x - 12, canvas.height - 25, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(shuttle.x + 12, canvas.height - 25, 4, 0, Math.PI * 2);
        ctx.fill();

        // Draw item on shuttle if carrying
        if (shuttle.hasItem) {
          ctx.fillStyle = "rgba(53, 28, 117, 0.8)";
          ctx.fillRect(shuttle.x - 10, canvas.height - 50, 20, 10);
        }

        // Draw direction arrow
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        const arrowDir = Math.sign(shuttle.targetX - shuttle.x);
        ctx.beginPath();
        ctx.moveTo(shuttle.x + arrowDir * 5, canvas.height - 32);
        ctx.lineTo(shuttle.x - arrowDir * 3, canvas.height - 36);
        ctx.lineTo(shuttle.x - arrowDir * 3, canvas.height - 28);
        ctx.fill();
      });

      // Update and draw human figures
      humans.forEach((human) => {
        human.x += human.direction * 0.3;
        if (human.x < 0) human.x = canvas.width;
        if (human.x > canvas.width) human.x = 0;

        // Draw simple human figure
        ctx.fillStyle = "rgba(142, 124, 195, 0.6)";
        // Head
        ctx.beginPath();
        ctx.arc(human.x, canvas.height - 12, 4, 0, Math.PI * 2);
        ctx.fill();
        // Body
        ctx.fillRect(human.x - 2, canvas.height - 8, 4, 8);
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
    <div className="absolute bottom-0 left-0 right-0 w-full" style={{ height: '150px' }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.7 }}
      />
    </div>
  );
};

export default WarehouseAnimation;
