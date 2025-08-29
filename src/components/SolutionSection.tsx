import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Shield, Users, Coins } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            AI That Runs Where Your <span className="text-green-500">Data Lives.</span>
          </h2>
          
          <div className="flex justify-center items-center mb-12">
            <div className="flex items-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                  <Server className="h-8 w-8 text-green-500" />
                </div>
                <span className="text-sm font-semibold">Node</span>
              </div>
              
              <div className="w-8 h-0.5 bg-green-500"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <span className="text-sm font-semibold">DIM</span>
              </div>
              
              <div className="w-8 h-0.5 bg-green-500"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <span className="text-sm font-semibold">Pioneer</span>
              </div>
              
              <div className="w-8 h-0.5 bg-green-500"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                  <Coins className="h-8 w-8 text-green-500" />
                </div>
                <span className="text-sm font-semibold">Risk Pool</span>
              </div>
            </div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            With PAI3, your data never leaves your node. Agents are certified, 
            transparent, and backed by a risk-sharing pool.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/node"
              className="bg-green-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-400 transition-all transform hover:scale-105 inline-block"
            >
              Buy Your Power Node Today
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;