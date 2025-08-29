import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Shield, Network, Coins } from 'lucide-react';

const NewDiscoverySection = () => {
  const features = [
    {
      icon: Home,
      title: "Your Sovereign AI Home",
      description: "Move from Big Tech's skyscrapers to your own intelligent estate. Your data never leaves your property."
    },
    {
      icon: Shield,
      title: "Certified & Accountable",
      description: "Every AI agent comes with credentials, audit trails, and insurance backing. No more black box decisions."
    },
    {
      icon: Network,
      title: "Network That Pays You",
      description: "Instead of paying monthly subscriptions, earn tokens as your node powers the decentralized AI economy."
    },
    {
      icon: Coins,
      title: "Early Pioneer Advantage",
      description: "First movers capture the most value. Your Power Node becomes more valuable as the network grows."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            What If AI Worked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              For You Instead?
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            PAI3 isn't just another AI tool. It's the infrastructure for a new economy 
            where <span className="text-cyan-400">you own your intelligence.</span>
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6"
            >
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-lg text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-slate-800 border border-cyan-500/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-white">The PAI3 Difference</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-3">Big Tech AI</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Your data in their servers</li>
                  <li>• Monthly subscription fees</li>
                  <li>• No transparency or control</li>
                  <li>• Compliance risks</li>
                  <li>• They profit from your data</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-3">PAI3 Network</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Your data on your node</li>
                  <li>• Earn tokens while you use it</li>
                  <li>• Full audit trails & accountability</li>
                  <li>• Built for compliance</li>
                  <li>• You own the infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link 
              to="/new-nodes"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-2xl shadow-red-500/25"
            >
              Claim Your Power Node
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewDiscoverySection;