import React from 'react';
import { motion } from 'framer-motion';

const AnimatedNodeGraphic = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-[500px] flex items-center justify-center">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full opacity-30" viewBox="0 0 800 500">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#32f932" strokeWidth="0.5" opacity="0.4"/>
            </pattern>
            <linearGradient id="gridGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#32f932" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#32f932" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#32f932" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#gridGlow)" />
        </svg>
        
        {/* Animated grid lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#32f932]/40 to-transparent"
            style={{ top: `${12.5 * (i + 1)}%` }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#32f932]/40 to-transparent"
            style={{ left: `${8.33 * (i + 1)}%` }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full">
        {/* PAI3 Node Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
            PAI3 node makes AI personal
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Personal, business and sharing
          </p>
        </motion.div>

        {/* Main Layout: Left Text - Center Cube - Right Text */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Side - Secure your data */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center lg:text-right"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Secure your data on<br />the node
            </h3>
          </motion.div>

          {/* Central Node Cube */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/Nodeblock.png" 
                  alt="PAI3 Node Cube" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                
                {/* Glowing ring around the cube */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#32f932]/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Allow agents */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Allow agents to run<br />on your node
            </h3>
          </motion.div>
        </div>
      </div>

      {/* Ambient glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#32f932]/10 via-transparent to-transparent rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AnimatedNodeGraphic;