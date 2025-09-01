import React from 'react';
import { motion } from 'framer-motion';
import { User, Database, Bot, Shield, Server } from 'lucide-react';

const AnimatedNodeGraphic = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-[600px] flex items-center justify-center">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full opacity-20" viewBox="0 0 800 600">
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
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#32f932]/30 to-transparent"
            style={{ top: `${8.33 * (i + 1)}%` }}
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
        
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#32f932]/30 to-transparent"
            style={{ left: `${6.25 * (i + 1)}%` }}
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

      {/* Main Content Container */}
      <div className="relative z-10 w-full">
        {/* PAI3 Node Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#32f932] mb-4 font-mono">
            PAI3 Node
          </h2>
          <p className="text-2xl text-white">
            Personal, business and sharing
          </p>
        </motion.div>

        {/* Central Node Cube with surrounding elements */}
        <div className="flex items-center justify-center mb-12">
          {/* Left Side - Your Data */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center mr-8 md:mr-16"
          >
            <div className="w-20 h-20 bg-[#32f932]/20 rounded-2xl flex items-center justify-center mb-4 border border-[#32f932]/30">
              <Database className="h-10 w-10 text-[#32f932]" />
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-1">Your Data</div>
              <div className="text-sm text-gray-400">Business</div>
            </div>
          </motion.div>

          {/* Central Node Cube */}
          <motion.div
            className="relative mx-8"
            initial={{ scale: 0, rotateY: 0 }}
            animate={{ scale: 1, rotateY: 360 }}
            transition={{ 
              scale: { duration: 1, ease: "easeOut", delay: 0.3 },
              rotateY: { duration: 20, repeat: Infinity, ease: "linear", delay: 1 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40"
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
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Your Node Label */}
            <motion.div
              className="absolute -top-12 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 bg-black/80 border border-[#32f932]/30 rounded-full px-4 py-2">
                <User className="h-4 w-4 text-[#32f932]" />
                <span className="text-sm font-semibold text-white">Your Node</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Your Agents */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col items-center ml-8 md:ml-16"
          >
            <div className="w-20 h-20 bg-[#32f932]/20 rounded-2xl flex items-center justify-center mb-4 border border-[#32f932]/30">
              <Bot className="h-10 w-10 text-[#32f932]" />
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-1">Your Agents</div>
              <div className="text-sm text-gray-400">Sharing</div>
            </div>
          </motion.div>
        </div>

        {/* Connecting Lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {/* Left connection line */}
          <motion.path
            d="M 200 300 Q 300 280 400 300"
            stroke="#32f932"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.7, duration: 1.5 }}
          />
          {/* Right connection line */}
          <motion.path
            d="M 400 300 Q 500 280 600 300"
            stroke="#32f932"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
          />
        </motion.svg>

        {/* Pulsing connection dots */}
        {[
          { left: '25%', top: '50%' },
          { right: '25%', top: '50%' }
        ].map((position, index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 bg-[#32f932] rounded-full"
            style={position}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              delay: 2.5 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Bottom Feature Descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-[#32f932]/20 rounded-xl flex items-center justify-center mr-3">
                <Shield className="h-6 w-6 text-[#32f932]" />
              </div>
              <h3 className="text-xl font-bold text-[#32f932]">Secure your data on the node</h3>
            </div>
            <p className="text-gray-400">Your sensitive information stays completely private and under your control</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-[#32f932]/20 rounded-xl flex items-center justify-center mr-3">
                <Server className="h-6 w-6 text-[#32f932]" />
              </div>
              <h3 className="text-xl font-bold text-[#32f932]">Allow agents to run on your node</h3>
            </div>
            <p className="text-gray-400">Deploy AI agents that work with your data without compromising security</p>
          </div>
        </motion.div>
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