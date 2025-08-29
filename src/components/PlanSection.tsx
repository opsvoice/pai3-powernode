import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Wallet, Play } from 'lucide-react';

const PlanSection = () => {
  const steps = [
    { icon: ShoppingCart, title: "Choose your Node", description: "Select the Power Node that fits your needs" },
    { icon: Wallet, title: "Connect wallet & activate", description: "Secure setup in minutes" },
    { icon: Play, title: "Run AI privately, earn tokens", description: "Start earning while protecting your data" }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Simple <span className="text-green-500">3 Steps</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-10 w-10 text-green-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/node"
              className="bg-green-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-400 transition-all transform hover:scale-105 inline-block"
            >
              Get Your Power Node
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanSection;