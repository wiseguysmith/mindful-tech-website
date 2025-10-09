"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, TrendingUp, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import CalendlyModal from "@/components/CalendlyModal";

const painSolutionCards = [
  {
    icon: Mail,
    pain: "Inbox Chaos",
    solution: "Automated Workflows",
    description: "Transform scattered emails into organized, intelligent response systems.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    pain: "Missed Leads",
    solution: "AI Follow-ups",
    description: "Never lose a prospect with intelligent, personalized outreach automation.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Sparkles,
    pain: "Marketing Fatigue",
    solution: "Intelligent Assistant",
    description: "Let AI handle content, scheduling, and engagement while you focus on growth.",
    color: "from-blue-500 to-purple-500"
  }
];

const useCases = [
  {
    title: "Small Business",
    scenario: "Automate client onboarding, invoicing, and follow-ups — free up 15+ hours per week."
  },
  {
    title: "Law Firm",
    scenario: "Intelligent intake forms, case management workflows, and automated client communication."
  }
];

export default function Automation() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(0);

  const nextUseCase = () => {
    setActiveUseCase((prev) => (prev + 1) % useCases.length);
  };

  const prevUseCase = () => {
    setActiveUseCase((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  return (
    <>
      {/* ===== AUTOMATION SECTION ===== */}
      <section 
        id="automation"
        className="relative py-32 px-6 bg-gradient-to-b from-black via-teal-950/10 to-black overflow-hidden"
      >
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/20 blur-[150px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-400 font-medium text-sm">AUTOMATION</span>
            </div>
            
            <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Works While You Don&apos;t
              </span>
            </h2>
            <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
              AI-powered systems that give you back your time.
            </p>
          </motion.div>

          {/* Pain → Solution Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {painSolutionCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-teal-400/50 transition-all"
              >
                {/* Icon with Gradient */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>

                {/* Pain → Solution */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-400 font-medium text-sm line-through">
                      {card.pain}
                    </span>
                    <span className="text-white/40">→</span>
                  </div>
                  <h3 className="text-xl font-bold text-teal-300 mb-3">
                    {card.solution}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 font-inter text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 rounded-3xl transition-all pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Use-Case Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-2xl mx-auto mb-12"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
                <span className="text-gray-400 font-medium text-xs">USE CASES</span>
              </div>
            </div>

            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              {/* Carousel Content */}
              {useCases[activeUseCase] && (
                <motion.div
                  key={activeUseCase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h4 className="font-space text-2xl font-bold text-cyan-400 mb-3">
                    {useCases[activeUseCase].title}
                  </h4>
                  <p className="font-inter text-base text-gray-300 leading-relaxed">
                    {useCases[activeUseCase].scenario}
                  </p>
                </motion.div>
              )}

              {/* Navigation Arrows */}
              <button
                onClick={prevUseCase}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                aria-label="Previous use case"
              >
                <ChevronLeft className="w-6 h-6 text-gray-400" />
              </button>

              <button
                onClick={nextUseCase}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                aria-label="Next use case"
              >
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {useCases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveUseCase(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeUseCase 
                        ? "bg-cyan-400 w-8" 
                        : "bg-white/20"
                    }`}
                    aria-label={`Go to use case ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="group relative px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full text-black font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,198,167,0.6)]"
            >
              <span className="relative z-10">Schedule Your Setup</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </>
  );
}

