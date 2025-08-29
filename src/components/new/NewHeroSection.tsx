import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NewParticleBackground from './NewParticleBackground';

const NewHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <NewParticleBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8">
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
            Finally Trust.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-300 mb-4"
        >
          Own Your Intelligence. <span className="text-cyan-400">Earn From It.</span>
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
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
            to="/new-nodes"
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-2xl shadow-red-500/25"
          >
            Own a Power Node Today
          </Link>
          <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl text-xl font-bold hover:bg-cyan-400 hover:text-slate-900 transition-all">
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
            <div className="text-3xl font-bold text-cyan-400">150,000+</div>
            <div className="text-gray-400">Guaranteed Tokens</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">$31,415</div>
            <div className="text-gray-400">Power Node Price</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">Limited</div>
            <div className="text-gray-400">Early Pioneer Slots</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHeroSection;