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
        {/* Main Eye/Sun Outline */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 0 20px #0080ff) drop-shadow(0 0 40px #0080ff)' }}
        >
          {/* Eye Shape - more rounded like a sun */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#0080ff"
            strokeWidth="3"
            style={{ 
              filter: 'drop-shadow(0 0 10px #0080ff) drop-shadow(0 0 20px #0080ff)',
              textShadow: '0 0 10px #0080ff'
            }}
          />
          
          {/* Iris - larger and more sun-like */}
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="#0080ff"
            strokeWidth="2"
            style={{ 
              filter: 'drop-shadow(0 0 8px #0080ff) drop-shadow(0 0 16px #0080ff)',
              textShadow: '0 0 8px #0080ff'
            }}
          />
          
          {/* Pupil - the sun's core */}
          <circle
            cx="50"
            cy="50"
            r="12"
            fill="#0080ff"
            style={{ 
              filter: 'drop-shadow(0 0 6px #0080ff) drop-shadow(0 0 12px #0080ff)',
              textShadow: '0 0 6px #0080ff'
            }}
          />
          
          {/* Inner sun details */}
          <circle
            cx="50"
            cy="50"
            r="6"
            fill="#ffffff"
            style={{ 
              filter: 'drop-shadow(0 0 4px #ffffff)',
              textShadow: '0 0 4px #ffffff'
            }}
          />
        </svg>

        {/* Sun Rays */}
        <motion.div 
          className="absolute inset-0"
          variants={animated ? rayVariants : {}}
          initial="initial"
          animate="animate"
        >
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5); // 22.5 degrees apart for 16 rays
            const length = i % 2 === 0 ? 12 : 8; // Alternating long and short rays
            const width = i % 2 === 0 ? 2 : 1.5; // Alternating thick and thin rays
            
            return (
              <motion.div
                key={i}
                className="absolute bg-yellow-400 neon-yellow"
                style={{
                  height: `${length}px`,
                  width: `${width}px`,
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'bottom center',
                  transform: `rotate(${angle}deg) translateX(-50%) translateY(-50%)`,
                  filter: 'drop-shadow(0 0 12px #ffff00) drop-shadow(0 0 24px #ffff00)',
                  borderRadius: '2px'
                }}
                variants={animated ? {
                  animate: {
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.3, 1],
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
          
          {/* Additional inner rays for more sun effect */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45); // 45 degrees apart for inner rays
            const length = 6;
            
            return (
              <motion.div
                key={`inner-${i}`}
                className="absolute bg-yellow-300 neon-yellow"
                style={{
                  height: `${length}px`,
                  width: '1px',
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'bottom center',
                  transform: `rotate(${angle}deg) translateX(-50%) translateY(-50%)`,
                  filter: 'drop-shadow(0 0 8px #ffff00)',
                  borderRadius: '1px'
                }}
                variants={animated ? {
                  animate: {
                    opacity: [0.5, 0.9, 0.5],
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.15,
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
