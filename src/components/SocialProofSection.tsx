import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Award, Users } from 'lucide-react';

const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "Finally, AI that works for my practice without risking patient data. PAI3 is the only HIPAA-safe AI I trust.",
      name: "Dr. Michael Rodriguez",
      title: "Cardiologist, Houston Medical Center",
      industry: "Healthcare"
    },
    {
      quote: "My Power Node paid for itself in 8 months through token rewards. Now I'm earning while protecting client confidentiality.",
      name: "Sarah Chen",
      title: "CPA & Financial Advisor",
      industry: "Finance"
    },
    {
      quote: "PAI3 gives me the AI capabilities of a Fortune 500 company, but with complete data sovereignty. Game changer.",
      name: "James Thompson",
      title: "Managing Partner, Thompson & Associates",
      industry: "Legal"
    }
  ];

  const metrics = [
    { icon: Users, value: "10,000+", label: "Active Professionals" },
    { icon: Award, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Star, value: "4.9/5", label: "User Satisfaction" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Trusted by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Join thousands of professionals who've made the switch to sovereign AI.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all"
            >
              <Quote className="h-8 w-8 text-cyan-400 mb-6" />
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-700 pt-6">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400 mb-2">{testimonial.title}</div>
                <div className="inline-flex items-center px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                  {testimonial.industry}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800 to-slate-700 border border-cyan-500/30 p-12 rounded-3xl text-center"
        >
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Award className="h-12 w-12 text-yellow-400" />
            <div className="text-left">
              <div className="text-2xl font-bold text-white">Consensus 2025</div>
              <div className="text-cyan-400">Top 5 AI Innovation Award</div>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            "PAI3 represents the future of decentralized AI infrastructure. 
            Their approach to data sovereignty and professional compliance is revolutionary."
          </p>
          <cite className="text-gray-400 mt-4 block">— Consensus 2025 Judging Panel</cite>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;