"use client";
import { motion } from "framer-motion";

export default function MorphingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "linear-gradient(135deg, #63F5FF, #B95CFF)",
          filter: "blur(40px)",
        }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Blob 2 */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
        style={{
          background: "linear-gradient(135deg, #B95CFF, #F5D061)",
          filter: "blur(50px)",
        }}
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 70% 30% 60%",
            "70% 30% 40% 60% / 70% 40% 60% 30%",
            "40% 60% 70% 30% / 40% 70% 30% 60%",
          ],
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
      
      {/* Blob 3 */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
        style={{
          background: "linear-gradient(135deg, #F5D061, #58A055)",
          filter: "blur(60px)",
        }}
        animate={{
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "80% 20% 80% 20% / 20% 80% 20% 80%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
          scale: [1, 1.5, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
    </div>
  );
}
