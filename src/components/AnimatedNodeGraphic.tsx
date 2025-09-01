import React from 'react';
import { motion } from 'framer-motion';
import { User, Database, Bot } from 'lucide-react';

const AnimatedNodeGraphic = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-96 flex items-center justify-center">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#32f932" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="gridGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#32f932" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#32f932" stopOpacity="0.3" />
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
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#32f932]/30 to-transparent"
            style={{ top: `${12.5 * (i + 1)}%` }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#32f932]/30 to-transparent"
            style={{ left: `${12.5 * (i + 1)}%` }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              delay: i * 0.15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Central Node Cube */}
      <div className="relative z-10">
        <motion.div
          className="relative w-48 h-48"
          initial={{ scale: 0, rotateY: 0 }}
          animate={{ scale: 1, rotateY: 360 }}
          transition={{ 
            scale: { duration: 1, ease: "easeOut" },
            rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main Cube using the uploaded image */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/Nodeblock.png" 
              alt="PAI3 Node Cube" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Glowing ring around the cube */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#32f932]/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Floating Feature Labels */}
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 bg-black/80 border border-[#32f932]/30 rounded-full px-4 py-2">
            <User className="h-4 w-4 text-[#32f932]" />
            <span className="text-sm font-semibold text-white">Personal</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-8 -left-16"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 bg-black/80 border border-[#32f932]/30 rounded-full px-4 py-2">
            <Database className="h-4 w-4 text-[#32f932]" />
            <span className="text-sm font-semibold text-white">Business</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-8 -right-16"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 bg-black/80 border border-[#32f932]/30 rounded-full px-4 py-2">
            <Bot className="h-4 w-4 text-[#32f932]" />
            <span className="text-sm font-semibold text-white">Sharing</span>
          </div>
        </motion.div>

        {/* Connecting Lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.path
            d="M 120 40 Q 120 80 120 120"
            stroke="#32f932"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          />
          <motion.path
            d="M 80 200 Q 100 180 120 160"
            stroke="#32f932"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          />
          <motion.path
            d="M 160 200 Q 140 180 120 160"
            stroke="#32f932"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
          />
        </motion.svg>

        {/* Pulsing dots at connection points */}
        {[
          { top: '20%', left: '50%' },
          { bottom: '20%', left: '20%' },
          { bottom: '20%', right: '20%' }
        ].map((position, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-[#32f932] rounded-full"
            style={position}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              delay: 3 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Ambient glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#32f932]/10 via-transparent to-transparent rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AnimatedNodeGraphic;