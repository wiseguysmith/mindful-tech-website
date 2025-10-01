"use client";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  loadingText?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    loading = false,
    loadingText,
    disabled,
    children,
    ...props 
  }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden";
    
    const variants = {
      primary: "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white hover:shadow-[var(--glow-primary)] active:scale-95 hover:scale-105 transition-all duration-300",
      secondary: "bg-[var(--surface)] text-[var(--ink)] border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-hover)] hover:scale-105 transition-all duration-300",
      ghost: "text-[var(--ink)] hover:bg-[var(--surface)] hover:text-[var(--primary)] hover:scale-105 transition-all duration-300",
      outline: "border-2 border-[var(--border)] text-[var(--ink)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 hover:scale-105 transition-all duration-300"
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm rounded-lg",
      md: "h-11 px-6 text-base rounded-xl",
      lg: "h-12 px-8 text-lg rounded-2xl"
    };

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <button
          className={cn(
            baseClasses,
            variants[variant],
            sizes[size],
            className
          )}
          disabled={disabled || loading}
          ref={ref}
          {...props}
        >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        />
        
        {/* Loading spinner with custom animation */}
        {loading && (
          <motion.div
            className="mr-2 h-4 w-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </motion.div>
        )}
        
        {/* Button content with smooth transitions */}
        <motion.span
          className="relative z-10 flex items-center"
          animate={{ opacity: loading ? 0.7 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {loading && loadingText ? loadingText : children}
        </motion.span>
        </button>
      </motion.div>
    );
  }
);

Button.displayName = "Button";

export default Button;


