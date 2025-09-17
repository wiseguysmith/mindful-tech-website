import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlowCard({ children, className }: { children: ReactNode; className?: string; }) {
  return (
    <div className={cn("card p-6 md:p-8 transition hover:shadow-glow hover:border-white/20", className)}>
      {children}
    </div>
  );
}
