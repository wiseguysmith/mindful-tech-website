"use client";
import { motion } from "framer-motion";
import { MapPin, MessageCircle } from "lucide-react";

export default function LocalPresence() {
  // WhatsApp link - replace with actual number
  const whatsappLink = "https://wa.me/1234567890";

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black to-teal-950/10 overflow-hidden mb-32">
      {/* Background Map Overlay Effect */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300F9FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-teal-500/20 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Location Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 mb-8"
        >
          <MapPin className="w-8 h-8 text-white" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-space text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Now Serving Clients Locally in{" "}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Tamarindo & Escazú
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-inter text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Bringing intelligent automation and blockchain infrastructure to Costa Rica&apos;s thriving business community.
        </motion.p>

        {/* WhatsApp CTA */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 rounded-full text-white font-semibold text-lg shadow-[0_0_30px_rgba(0,198,167,0.3)] hover:shadow-[0_0_40px_rgba(0,198,167,0.5)] transition-all"
        >
          <MessageCircle className="w-6 h-6" />
          <span>Chat on WhatsApp</span>
        </motion.a>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8 text-sm text-gray-500">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>Tamarindo Office</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Escazú Office</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

