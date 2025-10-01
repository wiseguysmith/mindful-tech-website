'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NeonBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neon particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
    }> = [];

    const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'];

    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;

      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;
          y = 0;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
          break;
        case 1: // Right
          x = canvas.width;
          y = Math.random() * canvas.height;
          vx = -Math.random() * 2 - 1;
          vy = (Math.random() - 0.5) * 2;
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height;
          vx = (Math.random() - 0.5) * 2;
          vy = -Math.random() * 2 - 1;
          break;
        case 3: // Left
          x = 0;
          y = Math.random() * canvas.height;
          vx = Math.random() * 2 + 1;
          vy = (Math.random() - 0.5) * 2;
          break;
        default:
          x = Math.random() * canvas.width;
          y = Math.random() * canvas.height;
          vx = (Math.random() - 0.5) * 2;
          vy = (Math.random() - 0.5) * 2;
      }

      particles.push({
        x,
        y,
        vx,
        vy,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)] ?? '#00ffff',
        alpha: Math.random() * 0.8 + 0.2,
        life: 1
      });
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new particles
      if (Math.random() < 0.3) {
        createParticle();
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Type guard to ensure particle exists
        if (!particle) {
          particles.splice(i, 1);
          continue;
        }
        
        // Now TypeScript knows particle is defined
        const p = particle;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.01;
        p.alpha = p.life * 0.8;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle with glow
        ctx.save();
        ctx.globalAlpha = p.alpha;
        
        // Outer glow
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner bright core
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Neon Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/10 to-cyan-900/10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-pink-900/10 to-yellow-900/10" />
    </div>
  );
};

export default NeonBackground;
