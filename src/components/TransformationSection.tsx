import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Cpu, HardDrive, Zap } from 'lucide-react';

const TransformationSection = () => {
  const specs = [
    { icon: Cpu, label: "12-Core CPU + 20-Core GPU", detail: "Enterprise-grade processing power" },
    { icon: HardDrive, label: "64GB RAM + 5TB SSD", detail: "Massive capacity for AI workloads" },
    { icon: Zap, label: "800W Efficient PSU", detail: "Optimized for 24/7 operation" },
    { icon: Server, label: "Gigabit Networking", detail: "High-speed network connectivity" }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Your Gateway to the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              AI Economy
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            The PAI3 Power Node isn't just hardware. It's your stake in the future of intelligence.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-cyan-500/30 rounded-3xl p-12">
              <div className="text-center mb-12">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 mb-4">
                  $31,415
                </div>
                <p className="text-xl text-gray-400">One-time investment in your AI future</p>
              </div>
              
              <div className="space-y-6 mb-12">
                {specs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                      <spec.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">{spec.label}</div>
                      <div className="text-sm text-gray-400">{spec.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">150,000 Tokens Guaranteed</div>
                  <p className="text-gray-400">Plus emissions + transaction fees over 3 years</p>
                </div>
              </div>
              
              <Link 
                to="/nodes"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-5 rounded-xl text-xl font-bold hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-2xl shadow-red-500/25 block text-center"
              >
                Own Your Power Node
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800 border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Early Pioneer Benefits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>First access to premium AI models</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Higher token emission rates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Governance voting rights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Network reputation multipliers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Use Cases</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-cyan-400">Healthcare</div>
                  <div className="text-sm text-gray-400">HIPAA-compliant AI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-cyan-400">Finance</div>
                  <div className="text-sm text-gray-400">SOX-compliant analysis</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-cyan-400">Legal</div>
                  <div className="text-sm text-gray-400">Privileged data protection</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-cyan-400">Enterprise</div>
                  <div className="text-sm text-gray-400">Private AI infrastructure</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-lg font-bold text-red-400 mb-2">⚡ Limited Early Access</div>
                <p className="text-gray-300">Only 1,000 Power Nodes in the first batch. Price increases to $45,000 after launch.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;