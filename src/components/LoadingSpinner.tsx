"use client";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "accent" | "neon" | "fullscreen";
  className?: string;
  text?: string;
  showLogo?: boolean;
}

export default function LoadingSpinner({ 
  size = "md", 
  variant = "primary",
  className = "",
  text,
  showLogo = false
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  };

  const variantClasses = {
    primary: "border-primary/20 border-t-primary",
    secondary: "border-secondary/20 border-t-secondary", 
    accent: "border-accent/20 border-t-accent",
    neon: "border-cyan-400/20 border-t-cyan-400",
    fullscreen: "border-primary/20 border-t-primary"
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base", 
    xl: "text-lg"
  };

  // Fullscreen loading (original behavior)
  if (variant === "fullscreen") {
    return (
      <div className="fixed inset-0 bg-bg flex items-center justify-center z-50">
        <div className="text-center">
          <motion.div
            className="w-16 h-16 mx-auto mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className={`w-full h-full border-4 ${variantClasses[variant]} rounded-full`} />
          </motion.div>
          
          {showLogo && (
            <motion.div
              className="text-2xl font-bold text-gradient mb-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Mindful Tech
            </motion.div>
          )}
          
          <motion.div
            className="text-ink-dim"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          >
            {text || "Loading infrastructure..."}
          </motion.div>
        </div>
      </div>
    );
  }

  // Inline loading spinner
  return (
    <motion.div
      className={`flex flex-col items-center gap-3 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Main spinner */}
      <motion.div
        className={`${sizeClasses[size]} ${variantClasses[variant]} relative`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className={`w-full h-full border-2 ${variantClasses[variant]} rounded-full`} />
        
        {/* Glow effect for neon variant */}
        {variant === "neon" && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: "0 0 20px #00ffff, 0 0 40px #00ffff",
              filter: "blur(1px)"
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.div>
      
      {/* Loading text */}
      {text && (
        <motion.p
          className={`${textSizes[size]} text-gray-300 font-medium`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {text}
        </motion.p>
      )}
    </motion.div>
  );
}
