'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NeonLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

const NeonLogo: React.FC<NeonLogoProps> = ({ 
  size = 'md', 
  animated = true, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const eyeVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: { 
      scale: [1, 1.05, 1],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rayVariants = {
    initial: { opacity: 0.8, scale: 1 },
    animate: { 
      opacity: [0.8, 1, 0.8],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Eye Icon */}
      <motion.div 
        className={`relative ${sizeClasses[size]}`}
        variants={animated ? eyeVariants : {}}
        initial="initial"
        animate="animate"
      >
        {/* Main Eye - Exact Match to Design */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 0 20px #00ffff) drop-shadow(0 0 40px #00ffff)' }}
        >
          {/* Eye Shape - elongated horizontally with pointed ends */}
          <path
            d="M25 50 Q50 25 75 50 Q50 75 25 50 Z"
            fill="none"
            stroke="#00ffff"
            strokeWidth="3"
            style={{ 
              filter: 'drop-shadow(0 0 10px #00ffff) drop-shadow(0 0 20px #00ffff)',
              textShadow: '0 0 10px #00ffff'
            }}
          />
          
          {/* Iris */}
          <circle
            cx="50"
            cy="50"
            r="12"
            fill="none"
            stroke="#00ffff"
            strokeWidth="2"
            style={{ 
              filter: 'drop-shadow(0 0 8px #00ffff) drop-shadow(0 0 16px #00ffff)',
              textShadow: '0 0 8px #00ffff'
            }}
          />
          
          {/* Pupil */}
          <circle
            cx="50"
            cy="50"
            r="6"
            fill="#00ffff"
            style={{ 
              filter: 'drop-shadow(0 0 6px #00ffff) drop-shadow(0 0 12px #00ffff)',
              textShadow: '0 0 6px #00ffff'
            }}
          />
        </svg>

        {/* Yellow Rays - 5 above, 5 below */}
        <motion.div 
          className="absolute inset-0"
          variants={animated ? rayVariants : {}}
          initial="initial"
          animate="animate"
        >
          {/* 5 rays above the eye */}
          {[...Array(5)].map((_, i) => {
            const angle = (i * 20) - 40; // Spread across 80 degrees above
            const length = 8;
            
            return (
              <motion.div
                key={`top-${i}`}
                className="absolute bg-yellow-400 neon-yellow"
                style={{
                  height: `${length}px`,
                  width: '2px',
                  left: '50%',
                  top: '35%',
                  transformOrigin: 'bottom center',
                  transform: `rotate(${angle}deg) translateX(-50%)`,
                  filter: 'drop-shadow(0 0 8px #ffff00) drop-shadow(0 0 16px #ffff00)',
                  borderRadius: '1px'
                }}
                variants={animated ? {
                  animate: {
                    opacity: [0.8, 1, 0.8],
                    scale: [1, 1.2, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }
                  }
                } : {}}
              />
            );
          })}
          
          {/* 5 rays below the eye */}
          {[...Array(5)].map((_, i) => {
            const angle = (i * 20) - 40; // Spread across 80 degrees below
            const length = 8;
            
            return (
              <motion.div
                key={`bottom-${i}`}
                className="absolute bg-yellow-400 neon-yellow"
                style={{
                  height: `${length}px`,
                  width: '2px',
                  left: '50%',
                  top: '65%',
                  transformOrigin: 'top center',
                  transform: `rotate(${angle}deg) translateX(-50%)`,
                  filter: 'drop-shadow(0 0 8px #ffff00) drop-shadow(0 0 16px #ffff00)',
                  borderRadius: '1px'
                }}
                variants={animated ? {
                  animate: {
                    opacity: [0.8, 1, 0.8],
                    scale: [1, 1.2, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      delay: (i + 5) * 0.1,
                      ease: "easeInOut"
                    }
                  }
                } : {}}
              />
            );
          })}
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div 
        className="flex flex-col"
        variants={animated ? textVariants : {}}
        initial="initial"
        animate="animate"
      >
        {/* Mindful Tech */}
        <div className="flex flex-col">
          <motion.span 
            className={`font-bold text-white neon-white ${textSizes[size]}`}
            style={{ 
              filter: 'drop-shadow(0 0 10px #ffffff) drop-shadow(0 0 20px #ffffff)',
              textShadow: '0 0 20px #ffffff'
            }}
          >
            Mindful
          </motion.span>
          <motion.span 
            className={`font-bold neon-magenta ${textSizes[size]}`}
            style={{ 
              filter: 'drop-shadow(0 0 10px #ff00ff) drop-shadow(0 0 20px #ff00ff)',
              textShadow: '0 0 20px #ff00ff'
            }}
          >
            Tech
          </motion.span>
        </div>

        {/* Tagline */}
        <motion.div 
          className="flex flex-col text-gray-300 neon-gray"
          style={{ 
            filter: 'drop-shadow(0 0 5px #9ca3af)',
            textShadow: '0 0 10px #9ca3af'
          }}
        >
          <span className={`${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'} font-light`}>
            Liberation tech
          </span>
          <span className={`${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'} font-light`}>
            for next generation
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NeonLogo;
