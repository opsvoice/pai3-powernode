import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
      <section className="relative pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Get to know <span className="text-[#00FF88]">PAI nodes</span>
            </h1>
            
            <div className="space-y-4 mb-8 text-xl md:text-2xl text-[#9BB0C0]">
              <p>PAI3 node makes AI personal</p>
              <p className="text-[#00FF88] font-semibold">PAI3 Node</p>
              <p>Personal, business and sharing</p>
              <p>Secure your data on the node</p>
              <p>Allow agents to run on your node</p>
            </div>
            
            <p className="text-lg text-[#9BB0C0] mb-12 max-w-4xl mx-auto">
              Choose between high-performance infrastructure (Power Node) or a software workspace for private AI workflows (Professional Node).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/nodes"
                className="bg-[#00FF88] text-[#0A0F14] px-10 py-4 rounded-xl text-xl font-bold hover:bg-[#00D974] transition-all transform hover:scale-105 shadow-2xl shadow-[#00FF88]/25"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click', { event_category: 'hero_cta', event_label: 'explore_power_node' });
                  }
                }}
              >
                Explore Power Node
              </Link>
              <button 
                className="border-2 border-[#00FF88] text-[#00FF88] px-10 py-4 rounded-xl text-xl font-bold hover:bg-[#00FF88]/10 transition-all"
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
              className="bg-[#0F1620] border border-[#00FF88]/20 rounded-2xl p-8 hover:border-[#00FF88]/40 transition-all hover:shadow-2xl hover:shadow-[#00FF88]/10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#00FF88]/20 rounded-2xl flex items-center justify-center">
                  <Server className="h-8 w-8 text-[#00FF88]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Power Node</h3>
                  <p className="text-[#9BB0C0]">Hardware</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#00FF88] mt-0.5 flex-shrink-0" />
                  <span className="text-[#9BB0C0]">Physical AI computer ("PAI in a box")</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#00FF88] mt-0.5 flex-shrink-0" />
                  <span className="text-[#9BB0C0]">Earning-ready: inference mining + token rewards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#00FF88] mt-0.5 flex-shrink-0" />
                  <span className="text-[#9BB0C0]">5TB storage with cabinet rentals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#00FF88] mt-0.5 flex-shrink-0" />
                  <span className="text-[#9BB0C0]">Scarce: 3,141 units</span>
                </li>
              </ul>
              
              <Link 
                to="/nodes"
                className="w-full bg-[#00FF88] text-[#0A0F14] py-4 rounded-xl text-lg font-bold hover:bg-[#00D974] transition-all block text-center"
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
              className="bg-[#0F1620] border border-[#9BB0C0]/20 rounded-2xl p-8 hover:border-[#9BB0C0]/40 transition-all"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#9BB0C0]/20 rounded-2xl flex items-center justify-center">
                  <Laptop className="h-8 w-8 text-[#9BB0C0]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Professional Node</h3>
                  <p className="text-[#9BB0C0]">Software</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#9BB0C0] mt-0.5 flex-shrink-0" />
                  <span className="text-[#9BB0C0]">Software workspace for private AI</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#9BB0C0] mt-0.5 flex-shrink-0" />
                  <span className="text-[#9BB0C0]">Runs on your device/cloud or borrows compute</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#9BB0C0] mt-0.5 flex-shrink-0" />
                  <span className="text-[#9BB0C0]">Data cabinets + enterprise connectors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#9BB0C0] mt-0.5 flex-shrink-0" />
                  <span className="text-[#9BB0C0]">Sales returning soon</span>
                </li>
              </ul>
              
              <button 
                className="w-full border border-[#9BB0C0] text-[#9BB0C0] py-4 rounded-xl text-lg font-bold hover:bg-[#9BB0C0]/10 transition-all"
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
              className="inline-flex items-center space-x-2 text-[#00FF88] hover:text-[#00D974] transition-colors text-lg font-semibold"
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
              <table className="w-full bg-[#0F1620] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden">
                <caption className="sr-only">Comparison between Power Node and Professional Node features</caption>
                <thead className="bg-[#0A0F14] sticky top-0">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-[#9BB0C0] uppercase tracking-wider">
                      Feature
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-[#00FF88] uppercase tracking-wider">
                      Power Node
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-[#9BB0C0] uppercase tracking-wider">
                      Professional Node
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(255,255,255,0.08)]">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-[#0F1620]' : 'bg-[#0A0F14]'}>
                      <th scope="row" className="px-6 py-4 text-sm font-medium text-white">
                        {row.feature}
                      </th>
                      <td className="px-6 py-4 text-sm text-[#9BB0C0]">
                        {row.power}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#9BB0C0]">
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
                <div key={index} className="bg-[#0F1620] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">{row.feature}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-[#00FF88] mb-1">Power Node</div>
                      <div className="text-sm text-[#9BB0C0]">{row.power}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#9BB0C0] mb-1">Professional Node</div>
                      <div className="text-sm text-[#9BB0C0]">{row.professional}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Conversion Note */}
            <div className="mt-8 p-6 bg-[#00FF88]/10 border border-[#00FF88]/20 rounded-xl">
              <p className="text-sm text-[#9BB0C0] leading-relaxed">
                <strong className="text-[#00FF88]">Note:</strong> A Power Node NFT can be "blown up" into 100 Professional Node NFTs. 
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
            className="bg-[#0F1620] border border-[#9BB0C0]/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Professional Node is returning soon</h2>
            <p className="text-lg text-[#9BB0C0] mb-8">
              We're finalizing how Professional Node will relaunch. Enter your email to get first access when it opens.
            </p>
            
            {!waitlistForm.submitted ? (
              <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#9BB0C0]" />
                    <input
                      type="text"
                      placeholder="Your name"
                      value={waitlistForm.name}
                      onChange={(e) => setWaitlistForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full pl-12 pr-4 py-4 bg-[#0A0F14] border border-[rgba(255,255,255,0.08)] rounded-xl text-white placeholder-[#9BB0C0] focus:border-[#00FF88] focus:ring-2 focus:ring-[#00FF88]/20 focus:outline-none transition-colors"
                      required
                      aria-label="Your name"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#9BB0C0]" />
                    <input
                      type="email"
                      placeholder="Your email"
                      value={waitlistForm.email}
                      onChange={(e) => setWaitlistForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full pl-12 pr-4 py-4 bg-[#0A0F14] border border-[rgba(255,255,255,0.08)] rounded-xl text-white placeholder-[#9BB0C0] focus:border-[#00FF88] focus:ring-2 focus:ring-[#00FF88]/20 focus:outline-none transition-colors"
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
                    className="mt-1 h-4 w-4 text-[#00FF88] bg-[#0A0F14] border-[rgba(255,255,255,0.08)] rounded focus:ring-[#00FF88] focus:ring-2"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-[#9BB0C0] text-left">
                    I agree to receive updates about Professional Node. We never sell your data.{' '}
                    <a href="/privacy" className="text-[#00FF88] hover:text-[#00D974] underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={waitlistForm.loading}
                  className="w-full bg-[#9BB0C0] text-[#0A0F14] py-4 rounded-xl text-lg font-bold hover:bg-[#9BB0C0]/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {waitlistForm.loading ? 'Adding you to the list...' : 'Notify me'}
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00FF88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-[#00FF88]" />
                </div>
                <h3 className="text-xl font-bold text-[#00FF88] mb-2">You're on the list!</h3>
                <p className="text-[#9BB0C0]">We'll email you when Professional Nodes open.</p>
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
              Power Node: <span className="text-[#00FF88]">Ready to Earn</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#00FF88]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-[#00FF88]" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-2">Plug-and-play AI infra</h3>
                  <p className="text-sm text-[#9BB0C0]">(no DevOps/Kubernetes)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#00FF88]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cpu className="h-6 w-6 text-[#00FF88]" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-2">Preloaded LLMs</h3>
                  <p className="text-sm text-[#9BB0C0]">+ PAI3 agent runtime</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#00FF88]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-[#00FF88]" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-2">Earning-ready</h3>
                  <p className="text-sm text-[#9BB0C0]">via inference mining, fees, and cabinets</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-[#9BB0C0] mb-8">
              Projected cabinet rental revenue from 25,000 cabinets at $2/year.
            </p>
            
            <Link 
              to="/nodes"
              className="bg-[#00FF88] text-[#0A0F14] px-10 py-4 rounded-xl text-xl font-bold hover:bg-[#00D974] transition-all transform hover:scale-105 shadow-2xl shadow-[#00FF88]/25 inline-block mb-8"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'click', { event_category: 'power_node_cta', event_label: 'buy_power_node' });
                }
              }}
            >
              Buy a Power Node
            </Link>
            
            {/* Affiliate Tile */}
            <div className="bg-[#00FF88]/10 border border-[#00FF88]/20 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-[#00FF88] font-semibold mb-2">
                Earn $1,000 per Power Node referral. Buy 10, get 1 free.
              </p>
              <a 
                href="/affiliates" 
                className="text-sm text-[#9BB0C0] hover:text-[#00FF88] transition-colors inline-flex items-center space-x-1"
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
              Frequently Asked <span className="text-[#00FF88]">Questions</span>
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#0F1620] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#00FF88]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00FF88]/20"
                    aria-expanded={openFAQ === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-semibold text-white">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-[#00FF88]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#00FF88]" />
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
                      <p className="text-[#9BB0C0] leading-relaxed">{faq.answer}</p>
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
            <div className="text-lg text-[#9BB0C0]">Still choosing?</div>
            <div className="flex space-x-4">
              <a 
                href="mailto:support@pai3.ai"
                className="inline-flex items-center space-x-2 bg-[#0F1620] border border-[rgba(255,255,255,0.08)] text-[#9BB0C0] px-6 py-3 rounded-xl hover:border-[#00FF88]/20 hover:text-[#00FF88] transition-all"
              >
                <Users className="h-5 w-5" />
                <span>Talk to an expert</span>
              </a>
              <a 
                href="/docs"
                className="inline-flex items-center space-x-2 bg-[#0F1620] border border-[rgba(255,255,255,0.08)] text-[#9BB0C0] px-6 py-3 rounded-xl hover:border-[#00FF88]/20 hover:text-[#00FF88] transition-all"
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