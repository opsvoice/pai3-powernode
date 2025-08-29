import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Eye, AlertTriangle, Lock } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    { 
      icon: Building2, 
      title: "Big Tech's Skyscrapers", 
      description: "Your data lives in their towers. You're just a tenant paying rent with your privacy." 
    },
    { 
      icon: Eye, 
      title: "Black Box Decisions", 
      description: "AI makes choices that affect your business, but you can't see how or why." 
    },
    { 
      icon: AlertTriangle, 
      title: "Professional Liability", 
      description: "When AI hallucinates, your reputation and clients pay the price." 
    },
    { 
      icon: Lock, 
      title: "Compliance Nightmares", 
      description: "HIPAA, SOX, GDPR violations waiting to happen with every query." 
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            The AI Revolution <br />
            <span className="text-red-500">Left You Behind.</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-16">
            While everyone rushed to ChatGPT, professionals like you got stuck with 
            <span className="text-green-400"> dangerous compromises.</span>
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-green-500/20 p-8 rounded-2xl hover:border-green-500/40 transition-all"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                <problem.icon className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{problem.title}</h3>
              <p className="text-white leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 border border-green-500/30 p-12 rounded-3xl max-w-5xl mx-auto text-center"
        >
          <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-6">
            "I can't risk my clients' financial data with OpenAI. But I also can't compete without AI. 
            <span className="text-green-400"> I need intelligence I can control.</span>"
          </blockquote>
          <cite className="text-lg text-white">— Sarah Chen, CPA & Financial Advisor</cite>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;