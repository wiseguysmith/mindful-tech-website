"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  direction: number;
  opacity: number;
}

export default function AdvancedParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const colors = ['#63F5FF', '#B95CFF', '#F5D061', '#58A055'];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)] || '#63F5FF',
        speed: Math.random() * 0.5 + 0.1,
        direction: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            x: [
              particle.x,
              particle.x + Math.cos(particle.direction) * 100,
              particle.x + Math.cos(particle.direction) * 200,
              particle.x,
            ],
            y: [
              particle.y,
              particle.y + Math.sin(particle.direction) * 100,
              particle.y + Math.sin(particle.direction) * 200,
              particle.y,
            ],
            scale: [1, 1.5, 0.5, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity * 0.3, particle.opacity],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Mouse trail effect */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-radial from-primary/20 to-transparent blur-xl"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
