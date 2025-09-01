import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedNodeGraphic from '../components/AnimatedNodeGraphic';
import { 
  Server, 
  Laptop, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  X, 
  Mail, 
  User,
  ExternalLink,
  Zap,
  Shield,
  Database,
  Users,
  DollarSign,
  HardDrive,
  Cpu,
  Globe
} from 'lucide-react';

const NodeTypesPage = () => {
  const [fullComparisonOpen, setFullComparisonOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [waitlistForm, setWaitlistForm] = useState({
    name: '',
    email: '',
    consent: false,
    submitted: false,
    loading: false
  });

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistForm(prev => ({ ...prev, loading: true }));
    
    // Simulate API call
    setTimeout(() => {
      setWaitlistForm(prev => ({ ...prev, submitted: true, loading: false }));
      // Track analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'pro_node_waitlist_submit');
      }
    }, 1000);
  };

  const comparisonData = [
    {
      feature: "Cost",
      power: "$31,415",
      professional: "Details coming soon"
    },
    {
      feature: "Type",
      power: "Physical hardware",
      professional: "Software/virtual"
    },
    {
      feature: "Specs",
      power: "12-core CPU, 20-core GPU, 64GB RAM, 5TB SSD RAID",
      professional: "Runs on user/cloud or borrows compute"
    },
    {
      feature: "Primary Purpose",
      power: "Network infra + inference mining",
      professional: "Build/run/manage AI agents for business"
    },
    {
      feature: "Token Rewards",
      power: "150,000 PAI3/FIO over 3 yrs",
      professional: "1,500 PAI3 over 3 yrs"
    },
    {
      feature: "Earnings",
      power: "Gas/tx fees + cabinet rentals",
      professional: "Agent publishing/usage; no direct compute earnings"
    },
    {
      feature: "Operating Cost",
      power: "~$10/mo electricity",
      professional: "Varies (your device/cloud)"
    },
    {
      feature: "Storage",
      power: "25,000 cabinets (5TB, expandable)",
      professional: "250 cabinets"
    },
    {
      feature: "Management",
      power: "Via PAIneer",
      professional: "Via PAIneer"
    },
    {
      feature: "Scarcity",
      power: "3,141 max",
      professional: "314,159 max (reduced by 100 per Power Node sold)"
    },
    {
      feature: "Audience",
      power: "Web3/infra buyers",
      professional: "SMEs in privacy-critical fields"
    }
  ];

  const faqs = [
    {
      question: "Which node should I choose?",
      answer: "Power = hardware + earning; Professional = software for teams to run private AI workflows."
    },
    {
      question: "Do I need technical skills?",
      answer: "No. Both are designed to be user-friendly and managed via PAIneer."
    },
    {
      question: "How does privacy work?",
      answer: "Your data stays in your cabinets; agents run under your control on your node or borrowed compute."
    },
    {
      question: "What's PAIneer?",
      answer: "The unified web app to manage nodes, data, and rewards."
    },
    {
      question: "Can I convert nodes?",
      answer: "Power Node NFT can be split into 100 Professional Node NFTs; the reverse is no longer offered."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F14] text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          {/* Neon connector lines */}
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FF88" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#00FF88" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#00FF88" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M0,200 Q300,100 600,200 T1200,200" stroke="url(#neonGlow)" strokeWidth="1" fill="none" />
            <path d="M0,400 Q400,300 800,400 T1200,400" stroke="url(#neonGlow)" strokeWidth="1" fill="none" />
            <path d="M0,600 Q200,500 400,600 T1200,600" stroke="url(#neonGlow)" strokeWidth="1" fill="none" />
            <circle cx="300" cy="150" r="2" fill="#00FF88" opacity="0.6" />
            <circle cx="600" cy="250" r="2" fill="#00FF88" opacity="0.6" />
            <circle cx="900" cy="350" r="2" fill="#00FF88" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Extended Grid Background */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 800 600">
            <defs>
              <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#32f932" strokeWidth="0.5" opacity="0.6"/>
              </pattern>
              <linearGradient id="heroGridGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#32f932" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#32f932" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#32f932" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
            <rect width="100%" height="100%" fill="url(#heroGridGlow)" />
          </svg>
          
          {/* Animated grid lines across full hero */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#32f932]/40 to-transparent"
              style={{ top: `${8.33 * (i + 1)}%` }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#32f932]/40 to-transparent"
              style={{ left: `${6.25 * (i + 1)}%` }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleY: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                delay: i * 0.15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Fira Code, monospace' }}>
              Get to know <span className="text-[#32f932]">PAI3 Nodes</span>
            </h1>

            {/* Animated Node Graphic */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-16"
            >
              <AnimatedNodeGraphic />
            </motion.div>

            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto" style={{ fontFamily: 'Fira Code, monospace' }}>
              PAI3 node makes AI personal.
              Choose between high-performance infrastructure (Power Node) or a software workspace for private AI workflows (Professional Node).
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/nodes"
                className="bg-[#32f932] text-black px-10 py-4 rounded-xl text-xl font-bold hover:bg-[#32f932]/80 transition-all transform hover:scale-105 shadow-2xl shadow-[#32f932]/25"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click', { event_category: 'hero_cta', event_label: 'explore_power_node' });
                  }
                }}
              >
                Explore Power Node
              </Link>
              <button 
                className="border-2 border-[#32f932] text-[#32f932] px-10 py-4 rounded-xl text-xl font-bold hover:bg-[#32f932]/10 transition-all"
                onClick={() => {
                  document.getElementById('pro-node-waitlist')?.scrollIntoView({ behavior: 'smooth' });
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click', { event_category: 'hero_cta', event_label: 'professional_node_notify' });
                  }
                }}
              >
                Professional Node – notify me
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compact Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Power Node Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black/50 border border-[#32f932]/20 rounded-2xl p-8 hover:border-[#32f932]/40 transition-all hover:shadow-2xl hover:shadow-[#32f932]/10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#32f932]/20 rounded-2xl flex items-center justify-center">
                  <Server className="h-8 w-8 text-[#32f932]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Power Node</h3>
                  <p className="text-gray-400">Hardware</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#32f932] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Physical AI computer ("PAI in a box")</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#32f932] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Earning-ready: inference mining + token rewards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#32f932] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">5TB storage with 25,000 data cabinet rentals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#32f932] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Scarce: 3,141 units</span>
                </li>
              </ul>
              
              <Link 
                to="/nodes"
                className="w-full bg-[#32f932] text-black py-4 rounded-xl text-lg font-bold hover:bg-[#32f932]/80 transition-all block text-center"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click', { event_category: 'node_card', event_label: 'buy_power_node' });
                  }
                }}
              >
                Buy a Power Node
              </Link>
            </motion.div>

            {/* Professional Node Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black/50 border border-gray-500/20 rounded-2xl p-8 hover:border-gray-500/40 transition-all"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-500/20 rounded-2xl flex items-center justify-center">
                  <Laptop className="h-8 w-8 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Professional Node</h3>
                  <p className="text-gray-400">Software</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Software workspace for private AI</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Runs on your device/cloud or borrows compute</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">50GB storage with 250 data cabinets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Sales returning soon</span>
                </li>
              </ul>
              
              <button 
                className="w-full border border-gray-500 text-gray-400 py-4 rounded-xl text-lg font-bold hover:bg-gray-500/10 transition-all"
                onClick={() => {
                  document.getElementById('pro-node-waitlist')?.scrollIntoView({ behavior: 'smooth' });
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click', { event_category: 'node_card', event_label: 'get_notified' });
                  }
                }}
              >
                Get Notified
              </button>
            </motion.div>
          </div>
          
          {/* See Full Comparison Button */}
          <div className="text-center">
            <button
              onClick={() => {
                setFullComparisonOpen(!fullComparisonOpen);
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'click', { event_category: 'comparison', event_label: 'see_full_comparison' });
                }
              }}
              className="inline-flex items-center space-x-2 text-[#32f932] hover:text-[#32f932]/80 transition-colors text-lg font-semibold"
            >
              <span>{fullComparisonOpen ? 'Collapse comparison' : 'See full comparison'}</span>
              {fullComparisonOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Full Comparison Accordion */}
      {fullComparisonOpen && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="py-20 bg-[#0F1620]/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Comparison</h2>
            
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full bg-black/50 border border-gray-500/20 rounded-2xl overflow-hidden">
                <caption className="sr-only">Comparison between Power Node and Professional Node features</caption>
                <thead className="bg-black sticky top-0">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      Feature
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-[#32f932] uppercase tracking-wider">
                      Power Node
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      Professional Node
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-500/20">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-black/50' : 'bg-black'}>
                      <th scope="row" className="px-6 py-4 text-sm font-medium text-white">
                        {row.feature}
                      </th>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {row.power}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {row.professional}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile Stacked Cards */}
            <div className="lg:hidden space-y-6">
              {comparisonData.map((row, index) => (
                <div key={index} className="bg-black/50 border border-gray-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">{row.feature}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-[#32f932] mb-1">Power Node</div>
                      <div className="text-sm text-gray-300">{row.power}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-400 mb-1">Professional Node</div>
                      <div className="text-sm text-gray-300">{row.professional}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Conversion Note */}
            <div className="mt-8 p-6 bg-[#32f932]/10 border border-[#32f932]/20 rounded-xl">
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong className="text-[#32f932]">Note:</strong> A Power Node NFT can be "blown up" into 100 Professional Node NFTs. 
                Pooling 100 Professional Nodes into a Power Node is no longer offered due to hardware logistics.
              </p>
            </div>
          </div>
        </motion.section>
      )}

      {/* Professional Node Waitlist */}
      <section id="pro-node-waitlist" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/50 border border-gray-500/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Professional Node is returning soon</h2>
            <p className="text-lg text-gray-400 mb-8">
              We're finalizing how Professional Node will relaunch. Enter your email to get first access when it opens.
            </p>
            
            {!waitlistForm.submitted ? (
              <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your name"
                      value={waitlistForm.name}
                      onChange={(e) => setWaitlistForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full pl-12 pr-4 py-4 bg-black border border-gray-500/20 rounded-xl text-white placeholder-gray-400 focus:border-[#32f932] focus:ring-2 focus:ring-[#32f932]/20 focus:outline-none transition-colors"
                      required
                      aria-label="Your name"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Your email"
                      value={waitlistForm.email}
                      onChange={(e) => setWaitlistForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-12 pr-4 py-4 bg-black border border-gray-500/20 rounded-xl text-white placeholder-gray-400 focus:border-[#32f932] focus:ring-2 focus:ring-[#32f932]/20 focus:outline-none transition-colors"
                      required
                      aria-label="Your email address"
                    />
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={waitlistForm.consent}
                    onChange={(e) => setWaitlistForm(prev => ({ ...prev, consent: e.target.checked }))}
                    className="mt-1 h-4 w-4 text-[#32f932] bg-black border-gray-500/20 rounded focus:ring-[#32f932] focus:ring-2"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-400 text-left">
                    I agree to receive updates about Professional Node. We never sell your data.{' '}
                    <a href="/privacy" className="text-[#32f932] hover:text-[#32f932]/80 underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={waitlistForm.loading}
                  className="w-full bg-gray-500 text-black py-4 rounded-xl text-lg font-bold hover:bg-gray-500/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {waitlistForm.loading ? 'Adding you to the list...' : 'Notify me'}
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-[#32f932]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#32f932]" />
                </div>
                <h3 className="text-xl font-bold text-[#32f932] mb-2">You're on the list!</h3>
                <p className="text-gray-400">We'll email you when Professional Nodes open.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Power Node Highlight */}
      <section className="py-20 bg-[#0F1620]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-12">
              Power Node: <span className="text-[#32f932]">Ready to Earn</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#32f932]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-[#32f932]" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-2">Plug-and-play AI infra</h3>
                  <p className="text-sm text-gray-400">(no DevOps/Kubernetes)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#32f932]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cpu className="h-6 w-6 text-[#32f932]" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-2">Preloaded LLMs</h3>
                  <p className="text-sm text-gray-400">+ PAI3 agent runtime</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#32f932]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-[#32f932]" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-2">Earning-ready</h3>
                  <p className="text-sm text-gray-400">via inference mining, fees, and cabinets</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-8">
              Projected cabinet rental revenue from 25,000 cabinets at $2/year.
            </p>
            
            <Link 
              to="/nodes"
              className="bg-[#32f932] text-black px-10 py-4 rounded-xl text-xl font-bold hover:bg-[#32f932]/80 transition-all transform hover:scale-105 shadow-2xl shadow-[#32f932]/25 inline-block mb-8"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'click', { event_category: 'power_node_cta', event_label: 'buy_power_node' });
                }
              }}
            >
              Buy a Power Node
            </Link>
            
            {/* Affiliate Tile */}
            <div className="bg-[#32f932]/10 border border-[#32f932]/20 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-[#32f932] font-semibold mb-2">
                Earn $1,000 per Power Node referral. Buy 10, get 1 free.
              </p>
              <a 
                href="/affiliates" 
                className="text-sm text-gray-400 hover:text-[#32f932] transition-colors inline-flex items-center space-x-1"
              >
                <span>Learn more about our affiliate program</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-12">
              Frequently Asked <span className="text-[#32f932]">Questions</span>
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-black/50 border border-gray-500/20 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#32f932]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#32f932]/20"
                    aria-expanded={openFAQ === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-semibold text-white">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-[#32f932]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#32f932]" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Micro-CTA */}
      <section className="py-12 bg-[#0A0F14] border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-lg text-gray-400">Still choosing?</div>
            <div className="flex space-x-4">
              <a 
                href="mailto:support@pai3.ai"
                className="inline-flex items-center space-x-2 bg-black/50 border border-gray-500/20 text-gray-400 px-6 py-3 rounded-xl hover:border-[#32f932]/20 hover:text-[#32f932] transition-all"
              >
                <Users className="h-5 w-5" />
                <span>Talk to an expert</span>
              </a>
              <a 
                href="/docs"
                className="inline-flex items-center space-x-2 bg-black/50 border border-gray-500/20 text-gray-400 px-6 py-3 rounded-xl hover:border-[#32f932]/20 hover:text-[#32f932] transition-all"
              >
                <Globe className="h-5 w-5" />
                <span>Read the docs</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NodeTypesPage;