"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  reveal?: boolean;
}

export default function Section({ 
  id, 
  children, 
  className = "", 
  reveal = true 
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(!reveal);

  useEffect(() => {
    if (!reveal) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [reveal]);

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`section ${className}`}
    >
      <div 
        className={`transition-all duration-700 will-change-transform ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-3"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

