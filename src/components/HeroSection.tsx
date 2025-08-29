import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-8">
            🏆 Consensus 2025 Top 5 AI Innovation Award
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
        >
          AI You Can <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">
            Finally Trust.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-300 mb-4"
        >
          Own Your Intelligence. <span className="text-green-400">Earn From It.</span>
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-white mb-12 max-w-3xl mx-auto"
        >
          Join 10,000+ professionals who've moved from Big Tech's surveillance AI 
          to their own sovereign intelligence network.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link 
            to="/nodes"
            className="bg-gradient-to-r from-green-500 to-green-600 text-black px-10 py-5 rounded-xl text-xl font-bold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-2xl shadow-green-500/25"
          >
            Own a Power Node Today
          </Link>
          <button className="border-2 border-green-400 text-green-400 px-10 py-5 rounded-xl text-xl font-bold hover:bg-green-400 hover:text-black transition-all">
            See How It Works
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">150,000+</div>
            <div className="text-white">Guaranteed Tokens</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">$31,415</div>
            <div className="text-white">Power Node Price</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">Limited</div>
            <div className="text-white">Early Pioneer Slots</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;