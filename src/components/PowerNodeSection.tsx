import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, HardDrive, Zap, Coins } from 'lucide-react';

const PowerNodeSection = () => {
  const specs = [
    { icon: Cpu, label: "12-core CPU + 20-core GPU" },
    { icon: HardDrive, label: "64GB RAM + 5TB SSD" },
    { icon: Zap, label: "High-performance AI server" },
    { icon: Coins, label: "150,000 tokens over 3 years" }
  ];

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The PAI3 <span className="text-green-500">Power Node</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Your Gateway Into the AI Economy.
          </p>
          
          <div className="bg-black border border-green-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-green-500 mb-2">$31,415</div>
              <p className="text-gray-400">One-time purchase</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <spec.icon className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-300">{spec.label}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8">
              <p className="text-green-400 font-semibold text-sm">
                🎯 Early Adopter Bonus: 150,000 guaranteed tokens + emissions + transaction fees
              </p>
            </div>
            
            <p className="text-gray-300 text-sm mb-6">
              Get a high-powered AI server + guaranteed token rewards. 
              <span className="text-green-500"> Early adopters capture the most upside.</span>
            </p>
            
            <Link 
              to="/node"
              className="w-full bg-green-500 text-black py-4 rounded-lg text-lg font-bold hover:bg-green-400 transition-colors inline-block text-center"
            >
              Buy Power Node
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PowerNodeSection;