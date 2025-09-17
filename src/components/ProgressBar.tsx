"use client";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const maxScroll = scrollHeight - clientHeight;
      const scrollProgress = maxScroll ? (scrollTop / maxScroll) * 100 : 0;
      setProgress(scrollProgress);
    };

    updateProgress();
    document.addEventListener("scroll", updateProgress, { passive: true });
    
    return () => document.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div 
      style={{ width: `${progress}%` }} 
      className="fixed top-0 left-0 h-1 bg-[var(--primary)]/70 z-40 transition-all duration-150 ease-out"
      aria-hidden="true"
    />
  );
}

