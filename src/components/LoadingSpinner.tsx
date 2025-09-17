"use client";
import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-bg flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full border-4 border-primary/20 border-t-primary rounded-full" />
        </motion.div>
        
        <motion.div
          className="text-2xl font-bold text-gradient mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Mindful Tech
        </motion.div>
        
        <motion.div
          className="text-ink-dim"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        >
          Loading infrastructure...
        </motion.div>
      </div>
    </div>
  );
}
