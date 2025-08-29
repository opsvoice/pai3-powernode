import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Zap, Shield, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewAboutPage = () => {
  const milestones = [
    { year: "2023", title: "PAI3 Founded", description: "Vision for decentralized AI infrastructure born" },
    { year: "2024", title: "Protocol Development", description: "DIM and Risk Pool protocols built and tested" },
    { year: "2025", title: "Consensus Award", description: "Top 5 AI Innovation Award at Consensus 2025" },
    { year: "2025", title: "Power Node Launch", description: "First 1,000 Power Nodes available to pioneers" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Data Sovereignty",
      description: "Your data belongs to you, not Big Tech. Every byte stays under your control."
    },
    {
      icon: Users,
      title: "Professional Trust",
      description: "Built for healthcare, finance, and legal professionals who can't compromise on compliance."
    },
    {
      icon: Zap,
      title: "Economic Alignment",
      description: "When you own the infrastructure, you earn from the value you create."
    },
    {
      icon: Globe,
      title: "Decentralized Future",
      description: "No single point of failure. No corporate overlords. Just a network owned by its users."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Kim",
      role: "CEO & Co-Founder",
      background: "Former Google AI, Stanford PhD in Distributed Systems",
      focus: "Decentralized AI architecture and protocol design"
    },
    {
      name: "Marcus Chen",
      role: "CTO & Co-Founder", 
      background: "Ex-Ethereum Foundation, MIT Computer Science",
      focus: "Blockchain infrastructure and consensus mechanisms"
    },
    {
      name: "Dr. James Rodriguez",
      role: "Chief AI Officer",
      background: "Former OpenAI Research, Berkeley PhD in Machine Learning",
      focus: "AI model optimization and privacy-preserving techniques"
    },
    {
      name: "Lisa Thompson",
      role: "Head of Compliance",
      background: "Former FDA Digital Health, Harvard Law JD",
      focus: "Healthcare compliance and regulatory frameworks"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Building the Future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                Sovereign AI
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              PAI3 isn't just another AI company. We're the architects of a new economy where 
              intelligence belongs to those who create and use it.
            </p>
            
            <div className="flex justify-center mb-16">
              <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-400/10 border border-cyan-400/30 rounded-2xl p-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Award className="h-12 w-12 text-cyan-400" />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white">Consensus 2025</h3>
                    <p className="text-cyan-400">Top 5 AI Innovation Award</p>
                  </div>
                </div>
                <p className="text-gray-300">Recognized as a breakthrough in decentralized AI infrastructure</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Mission: AI Independence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We believe AI should serve humanity, not corporate interests. PAI3 creates the infrastructure 
              for a world where your intelligence amplifies your potential—without surveillance, 
              without data theft, without compromise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700 border border-cyan-500/20 p-6 rounded-2xl text-center"
              >
                <value.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The Journey to AI Sovereignty
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From vision to reality: How we're building the infrastructure for decentralized AI.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-cyan-600"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-slate-800 border border-cyan-500/30 p-6 rounded-2xl">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              World-Class Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Former leaders from Google, OpenAI, Ethereum Foundation, and FDA bringing decades 
              of experience in AI, blockchain, and regulatory compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700 border border-cyan-500/20 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 text-lg mb-4">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.background}</p>
                <p className="text-gray-400 italic">{member.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Join the AI Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Be part of the movement that's reshaping how AI serves humanity. 
              Own your intelligence. Own your future.
            </p>
            
            <Link 
              to="/nodes"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-6 rounded-xl text-xl font-bold hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-2xl shadow-red-500/25 inline-flex items-center space-x-3"
            >
              <span>Own a Power Node Today</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewAboutPage;