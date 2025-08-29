import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, TrendingUp, Shield } from 'lucide-react';

const NewFinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 bg-red-500/10 border border-red-500/30 rounded-full px-6 py-3">
              <Clock className="h-6 w-6 text-red-400" />
              <span className="text-red-400 font-semibold">Limited Time: Early Pioneer Pricing</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Own Your AI Future. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              Starting Today.
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            The AI revolution is happening with or without you. 
            <span className="text-cyan-400"> Choose to own it instead of renting it.</span>
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-cyan-500/20 p-6 rounded-2xl"
            >
              <TrendingUp className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Early Pioneer Advantage</h3>
              <p className="text-gray-400">First 1,000 nodes get the best token emission rates and governance rights.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-cyan-500/20 p-6 rounded-2xl"
            >
              <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Risk-Free Investment</h3>
              <p className="text-gray-400">30-day money-back guarantee plus 2-year hardware warranty.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-cyan-500/20 p-6 rounded-2xl"
            >
              <Clock className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Price Increases Soon</h3>
              <p className="text-gray-400">$31,415 today. $45,000 after the first 1,000 nodes are sold.</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 border border-cyan-500/30 rounded-3xl p-12 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white mb-4">What You Get Today</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Enterprise-grade AI server ($31,415 value)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>150,000 guaranteed PAI3 tokens</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Lifetime network emission rewards</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Priority access to new AI models</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Governance voting rights</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 mb-4">
                  $31,415
                </div>
                <p className="text-xl text-gray-400 mb-8">Early Pioneer Price</p>
                
                <Link 
                  to="/new-nodes"
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-6 rounded-xl text-2xl font-bold hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-2xl shadow-red-500/25 inline-block"
                >
                  Own Your Power Node
                </Link>
              </div>
            </div>
          </motion.div>
          
          <p className="text-lg text-gray-500">
            Secure checkout • Free worldwide shipping • 30-day guarantee
          </p>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Questions? Email us at <span className="text-cyan-400">pioneers@pai3.ai</span> or call +1 (555) PAI-3000
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewFinalCTA;