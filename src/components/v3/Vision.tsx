"use client";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function Vision() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden mb-32">
      {/* Animated Glow Behind Text */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-[120px]"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Eye Logo Silhouette (Optional - using Lucide Eye icon) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            {/* Glowing Eye Icon */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 blur-xl"
            >
              <Eye className="w-20 h-20 text-cyan-400" />
            </motion.div>
            <Eye className="relative w-20 h-20 text-cyan-400" />
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <p className="font-inter text-lg md:text-xl text-gray-200 leading-relaxed">
            Building systems that generate real productivity, transparent ownership, and equitable growth.
          </p>
          
          <p className="font-inter text-base md:text-lg text-gray-400 leading-relaxed">
            From Costa Rica&apos;s coastline to America&apos;s innovation corridors, we make prosperity accessible to all.
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        />
      </div>
    </section>
  );
}

