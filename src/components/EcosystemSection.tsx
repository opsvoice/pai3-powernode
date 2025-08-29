import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Users, Coins, Store, ArrowRight } from 'lucide-react';

const EcosystemSection = () => {
  const components = [
    { 
      icon: Server, 
      title: "Power Nodes", 
      description: "Your sovereign AI infrastructure",
      detail: "High-performance servers that run AI models privately on your premises"
    },
    { 
      icon: Shield, 
      title: "DIM Protocol", 
      description: "Decentralized Identity Management",
      detail: "Cryptographic identity system that ensures AI agent accountability"
    },
    { 
      icon: Users, 
      title: "PAIneer Network", 
      description: "Certified AI agent marketplace",
      detail: "Vetted AI agents with transparent credentials and performance history"
    },
    { 
      icon: Coins, 
      title: "Risk Pool", 
      description: "Shared accountability layer",
      detail: "Insurance mechanism that backs AI decisions with real economic stakes"
    },
    { 
      icon: Store, 
      title: "AI Marketplace", 
      description: "Trade intelligence & data",
      detail: "Decentralized exchange for AI services, models, and data insights"
    }
  ];

  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            More Than Hardware. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              An Entire Economy.
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Your Power Node connects you to a thriving ecosystem where intelligence creates value.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {components.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-cyan-500/20 p-6 rounded-2xl hover:border-cyan-500/40 transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <component.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white text-center">{component.title}</h3>
              <p className="text-sm text-gray-400 text-center mb-4">{component.description}</p>
              <p className="text-xs text-gray-500 text-center leading-relaxed">{component.detail}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 border border-cyan-500/30 rounded-3xl p-12"
        >
          <div className="grid md:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-6">How It All Works Together</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm">1</div>
                  <p className="text-gray-300">Your Power Node runs AI models privately and securely</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm">2</div>
                  <p className="text-gray-300">DIM Protocol ensures every AI decision is traceable and accountable</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm">3</div>
                  <p className="text-gray-300">PAIneer Network provides certified AI agents for your specific needs</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm">4</div>
                  <p className="text-gray-300">Risk Pool backs decisions with economic stakes and insurance</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm">5</div>
                  <p className="text-gray-300">Marketplace lets you monetize your AI capabilities and data</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 bg-slate-800 border border-cyan-500/20 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">Network Effects</h4>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10,000+</div>
                  <div className="text-gray-400">Active Nodes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">$50M+</div>
                  <div className="text-gray-400">Total Value Locked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-400">Certified AI Agents</div>
                </div>
              </div>
              
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <p className="text-sm text-cyan-400 text-center">
                  <strong>Network Value Grows:</strong> As more professionals join, your node becomes more valuable through increased transaction fees and network effects.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;