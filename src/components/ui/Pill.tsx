"use client";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface PillProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
}

const Pill = forwardRef<HTMLDivElement, PillProps>(
  ({ 
    className, 
    variant = "default", 
    size = "md",
    children,
    ...props 
  }, ref) => {
    const baseClasses = "inline-flex items-center font-medium rounded-full transition-all duration-200";
    
    const variants = {
      default: "bg-[var(--surface)] text-[var(--ink)] border border-[var(--border)]",
      primary: "bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/30",
      secondary: "bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/30",
      accent: "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30",
      success: "bg-[var(--success)]/10 text-[var(--success)] border border-[var(--success)]/30",
      warning: "bg-[var(--warning)]/10 text-[var(--warning)] border border-[var(--warning)]/30",
      error: "bg-[var(--error)]/10 text-[var(--error)] border border-[var(--error)]/30"
    };
    
    const sizes = {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2 text-base"
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Pill.displayName = "Pill";

export default Pill;

