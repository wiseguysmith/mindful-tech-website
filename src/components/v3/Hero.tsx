"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import CalendlyModal from "@/components/CalendlyModal";

export default function Hero() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect for hero content
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToAutomation = () => {
    const automationSection = document.getElementById("automation");
    automationSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #00F9FF 0%, #673AB7 50%, #000000 100%)"
          }}
        />
        
        {/* Animated Glow Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 -left-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 -right-40 w-[32rem] h-[32rem] bg-purple-600/30 rounded-full blur-[120px]"
        />

        {/* Hero Content */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
          {/* Text Background Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] rounded-3xl -m-6" />
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20 font-space text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight max-w-5xl mx-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          >
            <span className="text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]">
              Intelligent automation and blockchain infrastructure for digital transformation.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-20 font-inter text-lg sm:text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_0_15px_rgba(0,0,0,0.7)]"
          >
            Empowering small businesses and investors through automation and tokenization.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative z-20 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
          >
            {/* Primary CTA */}
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full text-black font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,249,255,0.4)] hover:shadow-[0_0_40px_rgba(0,249,255,0.8)]"
            >
              <span className="relative z-10">Schedule an Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/50 to-teal-500/50 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={scrollToAutomation}
              className="group relative px-10 py-5 rounded-full border-2 border-white/40 text-white font-semibold text-lg hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-105 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,249,255,0.6)]"
            >
              <span className="relative z-10">Learn More</span>
              {/* Subtle Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-white/50 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </>
  );
}

