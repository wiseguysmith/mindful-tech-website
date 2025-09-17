"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DataPoint {
  id: number;
  x: number;
  y: number;
  value: string;
  color: string;
}

export default function DataStream() {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);

  useEffect(() => {
    const generateDataPoint = (): DataPoint => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      value: Math.random() > 0.5 ? "1" : "0",
      color: Math.random() > 0.5 ? "#63F5FF" : "#B95CFF",
    });

    const interval = setInterval(() => {
      setDataPoints(prev => {
        const newPoint = generateDataPoint();
        const updated = [...prev, newPoint].slice(-20); // Keep only last 20 points
        return updated;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dataPoints.map((point) => (
        <motion.div
          key={point.id}
          className="absolute text-xs font-mono font-bold"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            color: point.color,
            textShadow: `0 0 10px ${point.color}`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -50, -100],
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
        >
          {point.value}
        </motion.div>
      ))}
      
      {/* Connection lines */}
      {dataPoints.slice(0, -1).map((point, index) => {
        const nextPoint = dataPoints[index + 1];
        if (!nextPoint) return null;
        
        return (
          <motion.line
            key={`${point.id}-${nextPoint.id}`}
            x1={`${point.x}%`}
            y1={`${point.y}%`}
            x2={`${nextPoint.x}%`}
            y2={`${nextPoint.y}%`}
            stroke={point.color}
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
        );
      })}
    </div>
  );
}

