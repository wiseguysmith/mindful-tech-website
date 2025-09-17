"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DataPoint {
  label: string;
  value: number;
  color: string;
}

export default function AnimatedChart() {
  const [isVisible, setIsVisible] = useState(false);
  
  const data: DataPoint[] = [
    { label: "Q1", value: 85, color: "#63F5FF" },
    { label: "Q2", value: 92, color: "#B95CFF" },
    { label: "Q3", value: 78, color: "#F5D061" },
    { label: "Q4", value: 96, color: "#58A055" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-64 relative">
      {/* Chart bars */}
      <div className="flex items-end justify-between h-full gap-4">
        {data.map((point, index) => (
          <div key={point.label} className="flex-1 flex flex-col items-center">
            <motion.div
              className="w-full rounded-t-lg relative"
              style={{ backgroundColor: point.color }}
              initial={{ height: 0 }}
              animate={{ height: isVisible ? `${point.value}%` : 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-t-lg opacity-50 blur-sm"
                style={{ backgroundColor: point.color }}
              />
              
              {/* Value label */}
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              >
                {point.value}%
              </motion.div>
            </motion.div>
            
            {/* X-axis label */}
            <motion.div
              className="mt-4 text-sm text-ink-dim font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
            >
              {point.label}
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 25, 50, 75, 100].map((line) => (
          <motion.div
            key={line}
            className="absolute w-full border-t border-white/10"
            style={{ bottom: `${line}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        ))}
      </div>
    </div>
  );
}
