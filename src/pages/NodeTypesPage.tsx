import React, { useState, useEffect } from 'react';
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
  Globe,
  Building2,
  Wrench,
  Lightbulb
} from 'lucide-react';

const NodeTypesPage = () => {
  const [fullComparisonOpen, setFullComparisonOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [currentTagline, setCurrentTagline] = useState(0);
  const [cubeHovered, setCubeHovered] = useState(false);
  const [waitlistForm, setWaitlistForm] = useState({
    name: '',
    email: '',
    consent: false,
    submitted: false,
    loading: false
  });

  const taglines = [
    "Secure your data.",
    "Run agents.", 
    "Earn rewards."
  ];

  // Rotate taglines every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
      professional: "$314"
    },
    {
      feature: "Type",
      power: "Hardware",
      professional: "Software"
    },
    {
      feature: "Specs",
      power: "12-core CPU, 20-core GPU, 64GB RAM, 5TB SSD RAID",
      professional: "Runs on your laptop, desktop, in your cloud account, or on Power Nodes"
    },
    {
      feature: "Primary Purpose",
      power: "Network infra + inference mining",
      professional: "Build, run, manage AI agents for your life and your business"
    },
    {
      feature: "Token Rewards",
      power: "150,000 $PAI3 over 3 yrs",
      professional: "1,500 $PAI3 over 3 yrs"
    },
    {
      feature: "Earnings Model",
      power: "Agent, cabinet, and model revenue",
      professional: "Agent revenue"
    },
    {
      feature: "Operating Cost",
      power: "~$10/month electricity (US rates)",
      professional: "Varies by your device or cloud account"
    },
    {
      feature: "Storage",
      power: "25,000 cabinets (5TB, expandable)",
      professional: "250 cabinets (50GB, expandable)"
    },
    {
      feature: "Management",
      power: "Managed via PAIneer",
      professional: "Managed via PAIneer"
    },
    {
      feature: "Scarcity",
      power: "3,141 max",
      professional: "314,159 max (reduced by 100 per Power Node sold)"
    }
  ];

  const faqs = [
    {
      question: "Which node should I choose?",
      answer: "Choose a Power Node if you want physical infrastructure that earns significant token rewards, rents cabinets, and provides scarce ownership in the PAI3 network. Choose a Professional Node if you want a lower-cost software workspace to train, verify, and run AI agents for your business or practice."
    },
    {
      question: "Do both nodes earn tokens?",
      answer: "Yes — both nodes earn $PAI3 tokens, but on very different scales: Power Node: 150,000 $PAI3 over 3 years, plus additional rewards from network activity and cabinet rentals. Professional Node: 1,500 $PAI3 over 3 years. Rewards may be phased out in future versions as we position Professional Nodes more as a business utility."
    },
    {
      question: "Do I need technical skills?",
      answer: "No. Both nodes are designed to be simple: Power Node is plug-and-play hardware with preloaded software. Professional Node runs on your existing computer or cloud with a guided setup."
    },
    {
      question: "How does privacy work?",
      answer: "All your data is stored inside encrypted cabinets on your node. Agents run locally (on your hardware or cloud for Professional Nodes, or directly on the Power Node), so your information never leaves your control."
    },
    {
      question: "What's PAIneer?",
      answer: "PAIneer is the unified web app that lets you manage your node, cabinets, agents, and token rewards from one simple dashboard."
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
      <section className="relative pt-32 pb-32 overflow-hidden w-full bg-gradient-to-b from-[#0A0F14] via-[#0F1A0F] to-[#0A0F14] min-h-screen flex items-center">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <svg className="w-full h-full opacity-30" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="animatedGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#32f932" strokeWidth="1" opacity="0.4"/>
              </pattern>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#32f932" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#32f932" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#32f932" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#animatedGrid)" />
            <rect width="100%" height="100%" fill="url(#waveGradient)" />
          </svg>
          
          {/* Wave motion lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#32f932]/30 to-transparent"
              style={{ 
                top: `${15 * (i + 1)}%`
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Drifting glowing dots */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute w-2 h-2 bg-[#32f932] rounded-full opacity-40"
              style={{ 
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Fira Code, monospace' }}>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Get to know <span className="text-[#32f932]">PAI3 Nodes</span>
              </motion.span>
            </h1>

            {/* Updated Subheading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              style={{ fontFamily: 'Fira Code, monospace' }}
            >
              Two ways to own AI: hardware that earns, or software that empowers.
            </motion.div>

            {/* 3D Cube Centerpiece */}
            <div className="mb-12 flex justify-center">
              <motion.div
                className="relative w-96 h-96 cursor-pointer"
                onHoverStart={() => setCubeHovered(true)}
                onHoverEnd={() => setCubeHovered(false)}
                onTap={() => setCubeHovered(!cubeHovered)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Hero Image */}
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* Green Glowing Cube Visual */}
                  <div className="relative w-80 h-80">
                    {/* Main Cube */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#32f932]/30 to-[#32f932]/10 border-2 border-[#32f932]/60 rounded-2xl backdrop-blur-sm transform rotate-12 shadow-2xl shadow-[#32f932]/20">
                      <div className="absolute inset-4 bg-gradient-to-br from-[#32f932]/20 to-transparent rounded-xl">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#32f932] font-bold text-xl">
                          Your Node
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Labels */}
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#32f932]/20 border border-[#32f932]/60 px-4 py-2 rounded-lg backdrop-blur-sm"
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="text-[#32f932] font-semibold text-sm">RUN AGENTS</span>
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-1/2 -left-16 transform -translate-y-1/2 bg-[#32f932]/20 border border-[#32f932]/60 px-4 py-2 rounded-lg backdrop-blur-sm"
                      animate={{ x: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      <span className="text-[#32f932] font-semibold text-sm">SECURE YOUR DATA</span>
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-[#32f932]/20 border border-[#32f932]/60 px-4 py-2 rounded-lg backdrop-blur-sm"
                      animate={{ x: [5, -5, 5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    >
                      <span className="text-[#32f932] font-semibold text-sm">EARN REWARDS</span>
                    </motion.div>
                    
                    {/* Bottom Labels */}
                    <div className="absolute -bottom-12 left-8 text-[#32f932] font-semibold text-sm">Your Data</div>
                    <div className="absolute -bottom-12 right-8 text-[#32f932] font-semibold text-sm">Your Agents</div>
                  </div>
                </motion.div>
                
                {/* Hover overlay text */}
                {cubeHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-[#32f932] whitespace-nowrap z-50 bg-black/80 px-4 py-2 rounded-lg"
                    style={{ fontFamily: 'Fira Code, monospace' }}
                  >
                    Own your node, own your future
                  </motion.div>
                )}
                
                {/* Pulsing glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "radial-gradient(circle, rgba(50, 249, 50, 0.1) 0%, transparent 70%)",
                    filter: "blur(20px)"
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
            
            {/* Rotating Tagline */}
            <motion.div
              className="text-2xl md:text-3xl font-bold text-[#32f932] h-12 flex items-center justify-center"
              style={{ fontFamily: 'Fira Code, monospace' }}
            >
              <motion.span
                key={currentTagline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {taglines[currentTagline]}
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why own a PAI3 Node Section */}
      <section className="py-12 bg-[#0F1620]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Side by side layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Why own a PAI3 Node */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Fira Code, monospace' }}>
                Why own a <span className="text-[#32f932]">PAI3 Node?</span>
              </h2>
              
              {/* Universal Benefits - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 border border-[#32f932]/20 rounded-xl p-4 text-center hover:border-[#32f932]/40 transition-all">
                  <div className="w-10 h-10 bg-[#32f932]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-5 w-5 text-[#32f932]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Fira Code, monospace' }}>
                    Protect Data
                  </h3>
                  <p className="text-sm text-gray-400" style={{ fontFamily: 'Fira Code, monospace' }}>
                    Your data stays private and under your control
                  </p>
                </div>

                <div className="bg-black/30 border border-[#32f932]/20 rounded-xl p-4 text-center hover:border-[#32f932]/40 transition-all">
                  <div className="w-10 h-10 bg-[#32f932]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Server className="h-5 w-5 text-[#32f932]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Fira Code, monospace' }}>
                    Run Agents
                  </h3>
                  <p className="text-sm text-gray-400" style={{ fontFamily: 'Fira Code, monospace' }}>
                    Execute AI agents securely on your own node
                  </p>
                </div>

                <div className="bg-black/30 border border-[#32f932]/20 rounded-xl p-4 text-center hover:border-[#32f932]/40 transition-all">
                  <div className="w-10 h-10 bg-[#32f932]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Database className="h-5 w-5 text-[#32f932]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Fira Code, monospace' }}>
                    Share Data
                  </h3>
                  <p className="text-sm text-gray-400" style={{ fontFamily: 'Fira Code, monospace' }}>
                    Securely share or monetize data through encrypted cabinets
                  </p>
                </div>

                <div className="bg-black/30 border border-[#32f932]/20 rounded-xl p-4 text-center hover:border-[#32f932]/40 transition-all">
                  <div className="w-10 h-10 bg-[#32f932]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="h-5 w-5 text-[#32f932]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Fira Code, monospace' }}>
                    Earn Tokens
                  </h3>
                  <p className="text-sm text-gray-400" style={{ fontFamily: 'Fira Code, monospace' }}>
                    Earn $PAI3 tokens by running or contributing your node to the network
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Who should own a PAI3 Node */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Fira Code, monospace' }}>
                Who should own a <span className="text-[#32f932]">PAI3 Node?</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8" style={{ fontFamily: 'Fira Code, monospace' }}>
                Different people, different needs. Here's who each node is built for:
              </p>

              <div className="space-y-6">
                {/* Target Audience Categories */}
                <div className="bg-black/30 border border-[#32f932]/20 rounded-xl p-6 hover:border-[#32f932]/40 transition-all">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#32f932]/20 rounded-xl flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-[#32f932]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Professionals, SMEs, enterprises</h3>
                      <p className="text-gray-400 text-sm">Doctors, lawyers, accountants, dentists, chiropractors, real estate agents, and other professionals who handle sensitive data</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 border border-[#32f932]/20 rounded-xl p-6 hover:border-[#32f932]/40 transition-all">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#32f932]/20 rounded-xl flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-[#32f932]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Infrastructure Operators, node operatives</h3>
                      <p className="text-gray-400 text-sm">Web3 node operators, compute providers, and DePIN providers</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 border border-[#32f932]/20 rounded-xl p-6 hover:border-[#32f932]/40 transition-all">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#32f932]/20 rounded-xl flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-[#32f932]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Visionaries and Thought Leaders</h3>
                      <p className="text-gray-400 text-sm">People at the forefront of AI, Web3 decentralization, and data sovereignty</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Which Node to Own Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Fira Code, monospace' }}>
              Which Node to <span className="text-[#32f932]">Own?</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
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
                  <p className="text-sm text-[#32f932] font-semibold">Everyone can run a Power Node</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#32f932] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Physical AI computer ("PAI3 in a box")</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#32f932] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-[#32f932]">150,000 $PAI3 token rewards</strong> over 3 years</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#32f932] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Agent, model and cabinet revenue</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#32f932] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">25,000 rentable data cabinets (projected $50k/yr at $2 each)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-[#32f932] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Scarce: only 3,141 units</span>
                </li>
              </ul>

              {/* Value Proposition */}
              <div className="mb-6 p-4 bg-[#32f932]/5 border border-[#32f932]/20 rounded-xl">
                <p className="text-gray-300 text-sm italic text-center">
                  Own your AI infrastructure. Run AI privately on your own node. Earn from AI.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button className="bg-[#32f932] text-black py-4 rounded-xl text-lg font-bold hover:bg-[#32f932]/80 transition-all">
                  Buy Now
                </button>
                <Link 
                  to="/nodes"
                  className="border-2 border-[#32f932] text-[#32f932] py-4 rounded-xl text-lg font-bold hover:bg-[#32f932]/10 transition-all text-center flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>

              {/* ROI Calculator Link */}
              <div className="text-center">
                <Link 
                  to="/nodes#calculator"
                  className="text-[#32f932] hover:text-[#32f932]/80 transition-colors text-sm underline"
                >
                  See ROI Calculator
                </Link>
              </div>
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
                  <p className="text-sm text-[#32f932] font-semibold">Professionals and Enterprises that purpose built agents, chose of models, and data security</p>
                </div>
              </div>
              
              <div className="bg-gray-500/10 border border-gray-500/30 rounded-xl p-4 mb-6">
                <p className="text-gray-300 text-sm">
                  Next-gen Professional Node coming Q4 2025. Current operators and users remain fully supported with no interruptions.
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Software workspace for AI agents</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">1,500 $PAI3 token rewards over 3 years</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Train, verify, and run custom AI agents</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">250 data cabinets for secure storage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Perfect for privacy-critical businesses</span>
                </li>
              </ul>
              
              <button 
                className="w-full border-2 border-gray-500 text-gray-400 py-4 rounded-xl text-lg font-bold hover:bg-gray-500/10 transition-all"
                onClick={() => setShowWaitlist(!showWaitlist)}
                aria-expanded={showWaitlist}
                aria-controls="pro-node-waitlist"
              >
                Get Notified
              </button>
              
              {/* Inline Waitlist Form */}
              {showWaitlist && (
                <motion.div
                  id="pro-node-waitlist"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-6 bg-gray-800/50 border border-gray-500/30 rounded-xl"
                  role="region"
                  aria-label="Professional Node waitlist signup"
                >
                  <h3 className="text-xl font-bold text-white mb-4">Professional Node — Next-Gen Coming Q4 2025</h3>
                  <p className="text-gray-400 mb-6">
                    We're developing the next generation of Professional Nodes. Enter your email to get first access when it launches.
                  </p>
                  
                  {!waitlistForm.submitted ? (
                    <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Your name"
                            value={waitlistForm.name}
                            onChange={(e) => setWaitlistForm(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full pl-12 pr-4 py-3 bg-black border border-gray-500/20 rounded-xl text-white placeholder-gray-400 focus:border-[#32f932] focus:ring-2 focus:ring-[#32f932]/20 focus:outline-none transition-colors"
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
                            className="w-full pl-12 pr-4 py-3 bg-black border border-gray-500/20 rounded-xl text-white placeholder-gray-400 focus:border-[#32f932] focus:ring-2 focus:ring-[#32f932]/20 focus:outline-none transition-colors"
                            required
                            aria-label="Your email address"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="consent-inline"
                          checked={waitlistForm.consent}
                          onChange={(e) => setWaitlistForm(prev => ({ ...prev, consent: e.target.checked }))}
                          className="mt-1 h-4 w-4 text-[#32f932] bg-black border-gray-500/20 rounded focus:ring-[#32f932] focus:ring-2"
                          required
                        />
                        <label htmlFor="consent-inline" className="text-sm text-gray-400 text-left">
                          I agree to receive updates about Professional Node. We never sell your data.{' '}
                          <a href="/privacy" className="text-[#32f932] hover:text-[#32f932]/80 underline">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={waitlistForm.loading}
                        className="w-full bg-gray-500 text-black py-3 rounded-xl text-lg font-bold hover:bg-gray-500/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {waitlistForm.loading ? 'Adding you to the list...' : 'Notify Me'}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#32f932]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="h-8 w-8 text-[#32f932]" />
                      </div>
                      <h4 className="text-xl font-bold text-[#32f932] mb-2">You're on the list!</h4>
                      <p className="text-gray-400">We'll email you when Professional Nodes open.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Toggle Full Comparison - moved here */}
          <div className="text-center mt-12 mb-8">
            <button
              onClick={() => setFullComparisonOpen(!fullComparisonOpen)}
              className="inline-flex items-center space-x-2 text-[#32f932] hover:text-[#32f932]/80 transition-colors"
            >
              <span>See detailed comparison</span>
              {fullComparisonOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
          </div>
          
          {/* Full Comparison Accordion - moved here */}
          {fullComparisonOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-12"
            >
              <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl font-bold text-center mb-8">Detailed Comparison</h3>
                
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
                      <h4 className="text-lg font-semibold text-white mb-4">{row.feature}</h4>
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
              </div>
            </motion.div>
          )}
          
          {/* CTA Before FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#32f932]/10 to-[#32f932]/5 border border-[#32f932]/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Power Nodes Are <span className="text-[#32f932]">Limited & Scarce!</span>
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Only 3,141 Power Nodes will ever exist. Once they sell out, they're gone forever. 
              Power Nodes power the entire network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#32f932] text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#32f932]/80 transition-all">
                Buy Power Node Now
              </button>
              <Link 
                to="/nodes#calculator"
                className="border-2 border-[#32f932] text-[#32f932] px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#32f932]/10 transition-all"
              >
                See ROI Calculator
              </Link>
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