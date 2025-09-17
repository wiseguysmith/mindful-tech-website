"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  className?: string;
}

export default function Logo({ size = "md", animated = false, className }: LogoProps) {
  const iconSize = {
    sm: 20,
    md: 28,
    lg: 36,
    xl: 48,
  }[size];

  const textSize = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-3xl",
  }[size];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className={cn("flex items-center gap-3", className)}
      variants={animated ? containerVariants : undefined}
      initial={animated ? "hidden" : undefined}
      animate={animated ? "visible" : undefined}
    >
      <motion.svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="neural-glow"
        variants={animated ? itemVariants : undefined}
      >
        {/* Outer ring with subtle glow */}
        <motion.circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#outerGradient)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />
        
        {/* Main eye shape - more sophisticated */}
        <motion.ellipse
          cx="50"
          cy="50"
          rx="28"
          ry="18"
          fill="url(#eyeGradient)"
          stroke="url(#eyeStroke)"
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        />
        
        {/* Iris with detailed pattern */}
        <motion.ellipse
          cx="50"
          cy="50"
          rx="20"
          ry="12"
          fill="url(#irisGradient)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        />
        
        {/* Pupil - more refined */}
        <motion.ellipse
          cx="50"
          cy="50"
          rx="8"
          ry="6"
          fill="#0A0A0A"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1, ease: "easeOut" }}
        />
        
        {/* Highlight for depth */}
        <motion.ellipse
          cx="45"
          cy="45"
          rx="3"
          ry="2"
          fill="#FFFFFF"
          fillOpacity="0.8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2, ease: "easeOut" }}
        />
        
        {/* Subtle radiating lines - more elegant */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.line
            key={i}
            x1="50"
            y1="50"
            x2={50 + 35 * Math.cos((i * Math.PI) / 3)}
            y2={50 + 35 * Math.sin((i * Math.PI) / 3)}
            stroke="url(#lineGradient)"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 + i * 0.1, ease: "easeOut" }}
          />
        ))}
        
        <defs>
          <radialGradient id="outerGradient" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#63F5FF" stopOpacity="0.6" />
            <stop offset="1" stopColor="#B95CFF" stopOpacity="0.1" />
          </radialGradient>
          <radialGradient id="eyeGradient" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#1A1A2E" />
            <stop offset="0.7" stopColor="#16213E" />
            <stop offset="1" stopColor="#0F0F23" />
          </radialGradient>
          <linearGradient id="eyeStroke" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#63F5FF" stopOpacity="0.8" />
            <stop offset="1" stopColor="#B95CFF" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="irisGradient" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#63F5FF" />
            <stop offset="0.3" stopColor="#B95CFF" />
            <stop offset="0.7" stopColor="#FF6B9D" />
            <stop offset="1" stopColor="#4ECDC4" />
          </radialGradient>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#63F5FF" stopOpacity="0.6" />
            <stop offset="1" stopColor="#B95CFF" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </motion.svg>
      
      <motion.div
        className={cn("font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", textSize)}
        variants={animated ? itemVariants : undefined}
      >
        Mindful Tech
      </motion.div>
    </motion.div>
  );
}