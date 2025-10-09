"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

export default function CalendlyModal({ 
  isOpen, 
  onClose,
  calendlyUrl = "https://calendly.com/mindfultechnology"
}: CalendlyModalProps) {
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[90vw] md:max-w-4xl md:h-[85vh] bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-2xl z-50 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </button>

            {/* Calendly Embed */}
            <iframe
              src={`${calendlyUrl}?embed_domain=${typeof window !== 'undefined' ? window.location.hostname : ''}&embed_type=Inline`}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a meeting"
              className="rounded-3xl"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

