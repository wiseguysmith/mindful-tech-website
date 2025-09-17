"use client";

import { useEffect, useRef } from "react";

export default function SacredBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawSacredGeometry = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const time = Date.now() * 0.001;

      // Create a subtle sacred geometry pattern
      ctx.strokeStyle = "rgba(99, 102, 241, 0.1)";
      ctx.lineWidth = 1;

      // Draw concentric circles with subtle pulsing
      for (let i = 0; i < 5; i++) {
        const radius = 50 + i * 80 + Math.sin(time + i) * 10;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw sacred geometry lines
      const points = 8;
      for (let i = 0; i < points; i++) {
        const angle1 = (i / points) * Math.PI * 2 + time * 0.1;
        const angle2 = ((i + 2) / points) * Math.PI * 2 + time * 0.1;
        
        const x1 = centerX + Math.cos(angle1) * 200;
        const y1 = centerY + Math.sin(angle1) * 200;
        const x2 = centerX + Math.cos(angle2) * 200;
        const y2 = centerY + Math.sin(angle2) * 200;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(drawSacredGeometry);
    };

    resizeCanvas();
    drawSacredGeometry();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}
