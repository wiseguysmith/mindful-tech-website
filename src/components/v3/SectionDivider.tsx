"use client";
import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`h-px bg-gradient-to-r from-transparent via-white/20 to-transparent ${className}`}
    />
  );
}
