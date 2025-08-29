import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield } from 'lucide-react';

const StakesSection = () => {
  return (
    <section className="py-20 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Don't Let AI <span className="text-red-500">Control You</span> — <span className="text-green-500">Own It.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-red-500/10 border border-red-500/30 p-8 rounded-lg"
            >
              <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-red-400">Without PAI3</h3>
              <p className="text-gray-300 text-lg">
                Your data belongs to Big Tech. Your AI decisions are controlled by others. 
                Your privacy and profits go to corporations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-green-500/10 border border-green-500/30 p-8 rounded-lg"
            >
              <Shield className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-green-400">With PAI3</h3>
              <p className="text-gray-300 text-lg">
                You own your intelligence, earn from it, and protect what matters. 
                Your data stays private while you participate in the AI economy.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StakesSection;