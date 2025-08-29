import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Shield, Users, Coins, Store, ArrowRight, Zap, Network, Brain } from 'lucide-react';

const NewEcosystemPage = () => {
  const components = [
    { 
      icon: Server, 
      title: "Power Nodes", 
      description: "Your sovereign AI infrastructure",
      detail: "High-performance servers that run AI models privately on your premises. Each node is a stake in the decentralized AI economy.",
      benefits: ["Complete data sovereignty", "24/7 earning potential", "Enterprise-grade hardware", "Governance voting rights"]
    },
    { 
      icon: Shield, 
      title: "DIM Protocol", 
      description: "Decentralized Identity Management",
      detail: "Cryptographic identity system that ensures every AI agent is accountable, traceable, and backed by real economic stakes.",
      benefits: ["Agent accountability", "Audit trails", "Compliance ready", "Zero-knowledge proofs"]
    },
    { 
      icon: Users, 
      title: "PAIneer Network", 
      description: "Certified AI agent marketplace",
      detail: "Vetted AI agents with transparent credentials, performance history, and professional certifications for every industry.",
      benefits: ["Certified agents", "Performance metrics", "Industry specialization", "Risk assessment"]
    },
    { 
      icon: Coins, 
      title: "Risk Pool", 
      description: "Shared accountability layer",
      detail: "Insurance mechanism that backs AI decisions with real economic stakes. When AI makes mistakes, the network pays.",
      benefits: ["Economic backing", "Shared risk", "Professional insurance", "Liability coverage"]
    },
    { 
      icon: Store, 
      title: "AI Marketplace", 
      description: "Trade intelligence & data",
      detail: "Decentralized exchange for AI services, models, and data insights. Monetize your AI capabilities and access premium models.",
      benefits: ["Model trading", "Data monetization", "Service exchange", "Revenue sharing"]
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      icon: Brain,
      challenge: "HIPAA compliance with AI diagnostics",
      solution: "Private nodes ensure patient data never leaves your facility while providing cutting-edge AI analysis.",
      result: "99.9% compliance rate with 40% faster diagnoses"
    },
    {
      industry: "Finance",
      icon: Shield,
      challenge: "SOX compliance for AI trading algorithms",
      solution: "Auditable AI decisions with full transaction trails and risk pool backing for algorithmic trading.",
      result: "Zero compliance violations with 25% better returns"
    },
    {
      industry: "Legal",
      icon: Users,
      challenge: "Attorney-client privilege in AI research",
      solution: "Sovereign nodes maintain privilege while providing powerful legal research and document analysis.",
      result: "90% faster case preparation with full confidentiality"
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
              The Complete{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
                AI Economy
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              PAI3 isn't just a product—it's the infrastructure for a new economy where 
              intelligence creates value, privacy is preserved, and professionals own their AI future.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10,000+</div>
                <div className="text-gray-400">Active Nodes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-gray-400">Total Value Locked</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-400">Certified AI Agents</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Components */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Five Pillars of Sovereign AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each component works together to create a trustless, accountable, and profitable AI ecosystem.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {components.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
                      <component.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{component.title}</h3>
                      <p className="text-cyan-400">{component.description}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {component.detail}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {component.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-8 h-80 flex items-center justify-center">
                    <component.icon className="h-32 w-32 text-cyan-400/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How It All Works Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A seamless flow from your private node to the global AI economy.
            </p>
          </motion.div>
          
          <div className="bg-slate-800 border border-cyan-500/20 rounded-3xl p-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-lg flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Your Power Node Activates</h3>
                  <p className="text-gray-300">High-performance AI server runs models privately on your premises, earning tokens 24/7.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-lg flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">DIM Protocol Ensures Accountability</h3>
                  <p className="text-gray-300">Every AI decision is cryptographically signed, creating an immutable audit trail for compliance.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-lg flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">PAIneer Network Provides Certified Agents</h3>
                  <p className="text-gray-300">Access vetted AI agents specialized for your industry with transparent performance metrics.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-lg flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Risk Pool Backs Every Decision</h3>
                  <p className="text-gray-300">Economic stakes ensure AI agents are accountable, with insurance covering professional liability.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-lg flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Marketplace Monetizes Your Intelligence</h3>
                  <p className="text-gray-300">Trade AI services, models, and insights while earning from network activity and governance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Real-World Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how professionals across industries are using PAI3 to maintain compliance while leveraging cutting-edge AI.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-cyan-500/20 p-8 rounded-2xl"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <useCase.icon className="h-12 w-12 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">Challenge</h4>
                    <p className="text-gray-400 text-sm">{useCase.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">PAI3 Solution</h4>
                    <p className="text-gray-300 text-sm">{useCase.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Result</h4>
                    <p className="text-gray-300 text-sm font-medium">{useCase.result}</p>
                  </div>
                </div>
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
              Ready to Own Your Stake in the AI Economy?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join the pioneers building the future of decentralized AI. Your Power Node awaits.
            </p>
            
            <Link 
              to="/nodes"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-6 rounded-xl text-xl font-bold hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-2xl shadow-red-500/25 inline-flex items-center space-x-3"
            >
              <span>Own a Power Node Today</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
            
            <p className="text-sm text-gray-500 mt-6">
              $31,415 • Limited Pioneer Slots • 30-day guarantee
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewEcosystemPage;