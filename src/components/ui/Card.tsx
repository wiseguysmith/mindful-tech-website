"use client";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "glow" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = "default", 
    padding = "md",
    children,
    ...props 
  }, ref) => {
    const baseClasses = "rounded-2xl transition-all duration-300";
    
    const variants = {
      default: "bg-[var(--surface)] border border-[var(--border)]",
      glass: "bg-[var(--surface)]/50 backdrop-blur-sm border border-[var(--border)]/50",
      glow: "bg-[var(--surface)] border border-[var(--border)] hover:shadow-[var(--glow-primary)] hover:border-[var(--primary)]/30",
      elevated: "bg-[var(--surface)] border border-[var(--border)] shadow-lg hover:shadow-xl"
    };
    
    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          paddings[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;

