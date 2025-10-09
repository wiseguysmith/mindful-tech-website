"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Building2, Shield, Play } from "lucide-react";
import CalendlyModal from "@/components/CalendlyModal";

const blockchainCards = [
  {
    icon: Building2,
    title: "Tokenization Pilot Overview",
    description: "Milestone-based smart contracts and fractional ownership infrastructure for real-world assets.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "How It Works",
    description: "Investor vaults, milestone escrow, and on-chain compliance — transparency at every step.",
    gradient: "from-pink-500 to-purple-600"
  },
  {
    icon: Play,
    title: "Watch Explainer",
    description: "Deep dive into our tokenization pilot program and infrastructure design.",
    gradient: "from-purple-600 to-indigo-500",
    isVideo: true
  }
];

export default function Blockchain() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Placeholder YouTube video ID - replace with actual video
  const youtubeVideoId = "dQw4w9WgXcQ";

  return (
    <>
      {/* ===== BLOCKCHAIN / INVESTOR SECTION ===== */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden mb-32">
        {/* Purple Glow Effects */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-pink-600/20 blur-[150px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                The Future of Real Estate Ownership
              </span>
            </h2>
            <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
              Our pilot program introduces tokenized real-estate infrastructure designed to open global investment access and transparency.
            </p>
          </motion.div>

          {/* 3 Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {blockchainCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => card.isVideo && setShowVideo(true)}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all ${card.isVideo ? 'cursor-pointer' : ''}`}
              >
                {/* Icon with Gradient */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-space text-2xl font-bold text-purple-300 mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 font-inter">
                  {card.description}
                </p>

                {/* Video Play Indicator */}
                {card.isVideo && (
                  <div className="mt-4 flex items-center gap-2 text-pink-400 font-semibold">
                    <Play className="w-5 h-5" />
                    <span>Click to watch</span>
                  </div>
                )}

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-3xl transition-all pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Video Modal */}
          {showVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setShowVideo(false)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="relative w-full max-w-5xl aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors"
                >
                  <span className="text-3xl">×</span>
                </button>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                  title="Mindful Tech Explainer Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                />
              </motion.div>
            </motion.div>
          )}

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
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]"
            >
              <span className="relative z-10">Schedule Investor Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
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

