"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const [language, setLanguage] = useState<"EN" | "ES">("EN");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  // WhatsApp link - replace with actual number
  const whatsappLink = "https://wa.me/1234567890";

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect to Supabase or email service
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubscribed(true);
    setEmail("");
    
    setTimeout(() => setSubscribed(false), 3000);
  };

  const content = {
    EN: {
      updates: "Stay connected — join our future updates.",
      placeholder: "Enter your email",
      button: "Subscribe",
      subscribed: "✓ Subscribed!",
      copyright: "Mindful Tech. All rights reserved.",
      tagline: "Building the future of conscious technology."
    },
    ES: {
      updates: "Mantente conectado — únete a nuestras actualizaciones.",
      placeholder: "Ingresa tu correo",
      button: "Suscribirse",
      subscribed: "✓ Suscrito!",
      copyright: "Mindful Tech. Todos los derechos reservados.",
      tagline: "Construyendo el futuro de la tecnología consciente."
    }
  };

  const text = content[language];

  return (
    <>
      {/* ===== FOOTER ===== */}
      <footer 
        className="relative py-16 px-6 bg-black overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #000000, #0a0a0a)"
        }}
      >
        {/* Top Border Glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Bilingual Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex gap-2 p-1 bg-white/5 rounded-full border border-white/10">
              <button
                onClick={() => setLanguage("EN")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  language === "EN"
                    ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ES")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  language === "ES"
                    ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                ES
              </button>
            </div>
          </motion.div>

          {/* Email Capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h4 className="font-space text-2xl font-semibold text-white mb-6">
              {text.updates}
            </h4>
            
            <form 
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto"
            >
              <div className="relative w-full sm:w-auto">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={text.placeholder}
                  required
                  disabled={isSubmitting}
                  className="w-full sm:w-80 pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || subscribed}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 disabled:from-gray-600 disabled:to-gray-600 rounded-full text-black font-semibold transition-all hover:scale-105 disabled:scale-100"
              >
                {subscribed ? text.subscribed : isSubmitting ? "..." : text.button}
              </button>
            </form>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-400 font-inter mb-8"
          >
            {text.tagline}
          </motion.p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-sm text-gray-500"
          >
            © {new Date().getFullYear()} {text.copyright}
          </motion.p>
        </div>
      </footer>

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shadow-[0_0_30px_rgba(0,198,167,0.5)] hover:shadow-[0_0_40px_rgba(0,198,167,0.7)] transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-teal-400 animate-ping opacity-20" />
      </motion.a>
    </>
  );
}

