"use client";

export default function SkipToContent() {
  return (
    <a 
      href="#main" 
      className="sr-only focus:not-sr-only fixed left-4 top-4 z-50 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 focus:bg-white/20 focus:border-white/40"
    >
      Skip to content
    </a>
  );
}

