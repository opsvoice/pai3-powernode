import React, { useState } from 'react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Zap, Server, ChevronDown, ChevronUp, Check, Award, Calculator, Box, Wifi, Settings, Shield } from 'lucide-react';
import { computeRoi } from '../utils/roiCalculations';

const PowerNodePage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [specsOpen, setSpecsOpen] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
  // Close tooltip when clicking outside
  const handleTooltipToggle = (tooltipId: string) => {
    setActiveTooltip(activeTooltip === tooltipId ? null : tooltipId);
  };

  // ROI inputs
  const [pai3Price, setPai3Price] = useState(0.21);
  const [cabinetCount, setCabinetCount] = useState(2500);
  const [agentMonthlyUSD, setAgentMonthlyUSD] = useState(50);
  const [modelUtilization, setModelUtilization] = useState(0.30);
  const [modelHourlyUSD, setModelHourlyUSD] = useState(10);
  const [stakingPct, setStakingPct] = useState(0.25);

  const { kpis, breakdown } = useMemo(
    () =>
      computeRoi({
      pai3Price,
      cabinetCount,
      agentMonthlyUSD,
      modelUtilization,
      modelHourlyUSD,
      stakingPct,
      apr: 0.12,
      }),
    [pai3Price, cabinetCount, agentMonthlyUSD, modelUtilization, modelHourlyUSD, stakingPct]
  );


  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const specs = [
    { icon: Cpu, label: "CPU", value: "12-Core AMD Ryzen", detail: "High-performance processing for AI workloads" },
    { icon: Cpu, label: "GPU", value: "20-Core NVIDIA RTX", detail: "Dedicated AI acceleration and compute" },
    { icon: HardDrive, label: "RAM", value: "64 GB DDR5", detail: "High-speed memory for large model inference" },
    { icon: HardDrive, label: "Storage", value: "5 TB SSD (RAID)", detail: "Enterprise-grade storage with redundancy" },
    { icon: Server, label: "Network", value: "Gigabit / Wi-Fi", detail: "High-speed connectivity options" },
    { icon: Zap, label: "Power", value: "~$10/mo electricity", detail: "Typical residential power consumption" }
  ];

  const valueProps = [
    {
      icon: Server,
      title: "Own the infrastructure",
      subtitle: "Hardware + token stake + reputation"
    },
    {
      icon: Calculator,
      title: "Earn on-chain", 
      subtitle: "Token emissions, fees, compute leasing"
    },
    {
      icon: Shield,
      title: "Stay private",
      subtitle: "Agents run where your data lives"
    }
  ];

  const earningCards = [
    {
      title: "150,000 guaranteed $PAI3",
      subtitle: "over 3 years (≈50,000/year, ~137/day)",
      value: "150,000"
    },
    {
      title: "12% APR auto-staking",
      subtitle: "compound your earnings automatically with network rewards",
      value: "12%"
    },
    {
      title: "Cabinet leasing potential",
      subtitle: "up to 25,000 cabinets available per node",
      value: "$2/cabinet/yr"
    },
    {
      title: "Gas & transaction fees",
      subtitle: "from models + agents run on your node",
      value: "Variable"
    }
  ];

  const steps = [
    {
      icon: Box,
      title: "Unbox & power the node",
      subtitle: "12-core CPU, 20-core GPU, 64 GB, 5 TB"
    },
    {
      icon: Wifi,
      title: "Connect to Wi-Fi",
      subtitle: "guided setup"
    },
    {
      icon: Settings,
      title: "Manage in PAIneer",
      subtitle: "monitor earnings, lease cabinets, and run agents"
    }
  ];

  const checklist = [
    "150,000 guaranteed tokens (3 years, daily emission)",
    "12% APR auto-staking (1-yr lock)",
    "Network fee share + leasing marketplace access",
    "Governance rights (enhanced for Power Node owners)",
    "3-year hardware warranty + support"
  ];

  const trustTiles = [
    "HIPAA-ready, GDPR-aligned",
    "Data stays on-node", 
    "Transparent / auditable agent behavior",
    "Community Risk Pool (compensates for failures/misuse)"
  ];

  const faqs = [
    {
      question: "Why is the Power Node $31,415?",
      answer: "This isn't just hardware - it's your stake in the AI economy. You get enterprise-grade equipment plus 150,000 guaranteed tokens, emission rewards, and governance rights. Early pioneers capture the most value as the network grows."
    },
    {
      question: "How much can I realistically earn?",
      answer: "Beyond the 150,000 guaranteed tokens, you'll earn from network emissions (estimated 15-25% APY), transaction fees, and governance rewards."
    },
    {
      question: "What makes this different from crypto mining?",
      answer: "You're not just mining - you're providing AI infrastructure that professionals actually use. Your node earns from real economic activity: AI computations, data processing, and network services."
    },
    {
      question: "Do I need to be technical?",
      answer: "No—plug & play, managed in PAIneer. Power Nodes come pre-configured with automatic updates and monitoring. Our 24/7 support team handles technical issues."
    },
    {
      question: "Electricity & maintenance?",
      answer: "~$10/mo typical. Power Nodes consume 400-600W (about $40-60/month in electricity). They're designed for 24/7 operation with minimal maintenance."
    },
    {
      question: "When does it ship / when profitable?",
      answer: "25/day capacity; after order developed in 2-3 weeks. You start earning tokens immediately upon activation. Early pioneers get bonus emissions during the bootstrap phase."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#32f932] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm font-mono">P3</span>
            </div>
            <span className="font-mono text-xl font-bold">PAI3</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/nodes" className="text-white hover:text-[#32f932] transition-colors font-semibold">Power Node</a>
            <a href="/node-types" className="text-white hover:text-[#32f932] transition-colors">Node Types</a>
          </nav>
          
          <button className="bg-[#32f932] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#32f932]/80 transition-colors">
            Buy a Power Node
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#32f932]/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-mono text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Own Your Piece of the<br />
              <span className="text-[#32f932]">Decentralized AI Future.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The world's first sovereign AI infrastructure that transforms your space into an intelligent data center, earning rewards while maintaining complete data sovereignty and professional-grade compliance.
            </p>

            <div className="flex items-center justify-center space-x-8 mb-12 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-[#32f932]" />
                <span>Top 5 @ Consensus 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-[#32f932]" />
                <span>Top 10 BNB Incubation Alliance</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="bg-[#32f932] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#32f932]/80 transition-all transform hover:scale-105">
                Buy a Power Node →
              </button>
              <button className="border border-[#32f932] text-[#32f932] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#32f932]/10 transition-colors">
                How it Works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-4xl md:text-5xl font-bold mb-12">
              Your AI Data Center <span className="text-[#32f932]">in a Box.</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Pre-configured with LLMs + agent runtime. No cloud account. No DevOps.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {valueProps.map((prop, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#32f932]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <prop.icon className="h-8 w-8 text-[#32f932]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{prop.title}</h3>
                  <p className="text-gray-400">{prop.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Clickable Specs Box */}
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSpecsOpen(!specsOpen)}
                className="w-full bg-black/50 border border-[#32f932]/30 rounded-lg p-8 hover:border-[#32f932]/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-left">Technical Specifications</h3>
                  <ChevronDown className={`h-6 w-6 text-[#32f932] transition-transform ${specsOpen ? 'rotate-180' : ''}`} />
                </div>
                <p className="text-gray-400 text-left mt-2">Click to view detailed hardware specs</p>
              </button>
              
              {specsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 bg-black/30 border border-[#32f932]/20 rounded-lg p-6"
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specs.map((spec, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-[#32f932]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <spec.icon className="h-6 w-6 text-[#32f932]" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{spec.label}</h4>
                          <p className="text-[#32f932] font-bold">{spec.value}</p>
                          <p className="text-sm text-gray-400">{spec.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gray-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-4xl md:text-5xl font-bold mb-12">
              ROI <span className="text-[#32f932]">Estimates</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {earningCards.map((card, index) => (
                <div key={index} className="bg-black/50 border border-[#32f932]/20 p-6 rounded-lg relative">
                  <div className="text-2xl font-bold text-[#32f932] mb-2">{card.value}</div>
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400">{card.subtitle}</p>
                  
                  {/* Info icon and tooltip */}
                  <div className="absolute top-4 right-4">
                    <button
                      type="button"
                      className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                      onClick={() => setActiveTooltip(activeTooltip === `card-${index}` ? null : `card-${index}`)}
                    >
                      i
                    </button>
                    {activeTooltip === `card-${index}` && (
                      <div className="absolute z-50 top-8 right-0 w-80 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                        <div className="text-sm text-white leading-relaxed">
                          {index === 0 && "Fixed token allocation distributed daily over 36 months. This is guaranteed regardless of network performance."}
                          {index === 1 && "Automatic compounding of your token rewards at 12% APR with 1-year lock periods for maximum growth."}
                          {index === 2 && "Rent out encrypted data storage cabinets to other users at $2/cabinet/year. Up to 25,000 cabinets per node."}
                          {index === 3 && "Revenue from AI model inference and agent execution fees. Varies based on network usage and demand."}
                        </div>
                        <div className="absolute -top-1 right-2 w-2 h-2 bg-black border-l border-t border-[#32f932]/30 transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ROI Calculator */}
            <div className="bg-black/50 border border-[#32f932]/30 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Interactive ROI Calculator</h3>
              <p className="text-gray-400 mb-8 text-center">
                Modeled projections based on baseline assumptions. Actual results vary with token price, utilization, and demand.
              </p>
              
              {/* Basic Controls */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">$PAI3 Price: ${pai3Price.toFixed(2)}</label>
                  <div className="relative">
                    <button
                      type="button"
                      className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                      onClick={() => handleTooltipToggle('pai3-price')}
                    >
                      i
                    </button>
                    {activeTooltip === 'pai3-price' && (
                      <div className="absolute z-50 bottom-8 right-0 w-80 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                        <div className="text-sm text-white leading-relaxed">
                          The projected market price of $PAI3 tokens. TGE (Token Generation Event) price is $0.21. Higher token prices increase the USD value of your rewards.
                        </div>
                        <div className="absolute -bottom-1 right-2 w-2 h-2 bg-black border-r border-b border-[#32f932]/30 transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
                <input
                  type="range"
                  min="0.21"
                  max="10"
                  step="0.01"
                  value={pai3Price}
                  onChange={(e) => setPai3Price(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$0.21 (TGE)</span>
                  <span>$10.00</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-white">Cabinet Leasing: {cabinetCount.toLocaleString()} cabinets</label>
                  <div className="relative">
                    <button
                      type="button"
                      className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                      onClick={() => handleTooltipToggle('cabinet-leasing')}
                    >
                      i
                    </button>
                    {activeTooltip === 'cabinet-leasing' && (
                      <div className="absolute z-50 bottom-8 right-0 w-80 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                        <div className="text-sm text-white leading-relaxed">
                          Rent out encrypted data storage cabinets to other users at $2/cabinet/year. Each Power Node can host up to 25,000 cabinets, providing potential passive income.
                        </div>
                        <div className="absolute -bottom-1 right-2 w-2 h-2 bg-black border-r border-b border-[#32f932]/30 transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25000"
                  step="1"
                  value={cabinetCount}
                  onChange={(e) => setCabinetCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center text-sm text-gray-400 mt-1">≈ ${(cabinetCount * 2).toLocaleString()}/year</div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0 cabinets</span>
                  <span>12,500 cabinets</span>
                  <span>25,000 cabinets ($50K/year)</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-white">Agent Income (per month): ${agentMonthlyUSD}</label>
                  <div className="relative">
                    <button
                      type="button"
                      className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                      onClick={() => handleTooltipToggle('agent-income')}
                    >
                      i
                    </button>
                    {activeTooltip === 'agent-income' && (
                      <div className="absolute z-50 bottom-8 right-0 w-80 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                        <div className="text-sm text-white leading-relaxed">
                          Monthly revenue from AI agents running on your node. This includes fees from agent execution, data processing, and specialized AI services you provide to the network.
                        </div>
                        <div className="absolute -bottom-1 right-2 w-2 h-2 bg-black border-r border-b border-[#32f932]/30 transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2500"
                  step="50"
                  value={agentMonthlyUSD}
                  onChange={(e) => setAgentMonthlyUSD(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$50</span>
                  <span>$1,275</span>
                  <span>$2,500</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-white">
                    Model utilization (scenario): {(modelUtilization * 100).toFixed(0)}%
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                      onClick={() => handleTooltipToggle('utilization')}
                    >
                      i
                    </button>
                    {activeTooltip === 'utilization' && (
                      <div className="absolute z-50 bottom-8 right-0 w-80 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                        <div className="text-sm text-white leading-relaxed">
                          Driven by (1) network demand (job distribution) and (2) reputation (age, uptime, history, stake).
                        </div>
                        <div className="absolute -bottom-1 right-2 w-2 h-2 bg-black border-r border-b border-[#32f932]/30 transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.75"
                  step="0.05"
                  value={modelUtilization}
                  onChange={(e) => setModelUtilization(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>5%</span>
                  <span>10%</span>
                  <span>25%</span>
                  <span>30%</span>
                  <span>50%</span>
                  <span>75%</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 italic">
                  Utilization reflects network growth and allocation. It is not user-controlled.
                </p>
              </div>
              
              {/* Preset Buttons */}
              <div className="flex gap-3 mb-8 justify-center">
                <button 
                  className="px-4 py-2 rounded-lg border border-[#32f932]/30 text-[#32f932] hover:bg-[#32f932]/10 transition-colors text-sm font-semibold"
                  onClick={() => {
                    setPai3Price(0.21);
                    setCabinetCount(2500);
                    setAgentMonthlyUSD(50);
                    setModelUtilization(0.30);
                    setModelHourlyUSD(10);
                    setStakingPct(0.25);
                  }}
                >
                  Baseline
                </button>
                
                <button 
                  className="px-4 py-2 rounded-lg border border-[#32f932]/30 text-[#32f932] hover:bg-[#32f932]/10 transition-colors text-sm font-semibold"
                  onClick={() => {
                    setPai3Price(1.00);
                    setCabinetCount(10000);
                    setAgentMonthlyUSD(500);
                    setModelUtilization(0.50);
                    setModelHourlyUSD(15);
                    setStakingPct(0.50);
                  }}
                >
                  Moderate
                </button>
                
                <button 
                  className="px-4 py-2 rounded-lg border border-[#32f932]/30 text-[#32f932] hover:bg-[#32f932]/10 transition-colors text-sm font-semibold"
                  onClick={() => {
                    setPai3Price(5.00);
                    setCabinetCount(15000); 
                    setAgentMonthlyUSD(2500);
                    setModelUtilization(0.75);
                    setModelHourlyUSD(30);
                    setStakingPct(1.00);
                  }}
                >
                  Aggressive
                </button>
              </div>
              
              {/* Advanced Settings */}
              <div className="mb-8 bg-gradient-to-r from-[#32f932]/10 to-[#32f932]/5 border border-[#32f932]/30 rounded-lg p-6">
                <button
                  onClick={() => setAdvancedOpen(!advancedOpen)}
                  className="flex items-center justify-between w-full"
                >
                  <div>
                    <span className="text-lg font-semibold text-[#32f932]">⚙️ Advanced Settings</span>
                    <p className="text-sm text-gray-300 mt-1">Additional earning parameters</p>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-[#32f932] transition-transform ${advancedOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {advancedOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 space-y-6 p-6 bg-black/30 rounded-lg border border-[#32f932]/20"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-white">Model revenue ($/hr): ${modelHourlyUSD}</label>
                        <div className="relative">
                          <button
                            type="button"
                            className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                            onClick={() => handleTooltipToggle('model-revenue')}
                          >
                            i
                          </button>
                          {activeTooltip === 'model-revenue' && (
                            <div className="absolute z-50 bottom-8 right-0 w-80 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                              <div className="text-sm text-white leading-relaxed">
                                Hourly revenue rate for AI model inference and compute services. Higher rates reflect premium models or specialized AI services your node provides.
                              </div>
                              <div className="absolute -bottom-1 right-2 w-2 h-2 bg-black border-r border-b border-[#32f932]/30 transform rotate-45"></div>
                            </div>
                          )}
                        </div>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="30"
                        step="1"
                        value={modelHourlyUSD}
                        onChange={(e) => setModelHourlyUSD(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>$10</span>
                        <span>$15</span>
                        <span>$20</span>
                        <span>$25</span>
                        <span>$30</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-white">Staking % of rewards: {(stakingPct * 100).toFixed(1)}%</label>
                        <div className="relative">
                          <button
                            type="button"
                            className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                            onClick={() => handleTooltipToggle('staking-pct')}
                          >
                            i
                          </button>
                          {activeTooltip === 'staking-pct' && (
                            <div className="absolute z-50 bottom-8 right-0 w-80 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                              <div className="text-sm text-white leading-relaxed">
                                Percentage of your token rewards automatically staked at 12% APR with 1-year lock periods. Higher staking percentages generate more compound growth.
                              </div>
                              <div className="absolute -bottom-1 right-2 w-2 h-2 bg-black border-r border-b border-[#32f932]/30 transform rotate-45"></div>
                            </div>
                          )}
                        </div>
                      </div>
                      <input
                        type="range"
                        min="0.25"
                        max="1.00"
                        step="0.05"
                        value={stakingPct}
                        onChange={(e) => setStakingPct(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>25%</span>
                        <span>50%</span>
                        <span>75%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* ROI Estimates */}
              <div className="mt-8 p-8 bg-[#32f932]/5 border-2 border-[#32f932]/20 rounded-lg text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-[#32f932]">${Math.round(kpis.daily)}</div>
                    <div className="text-sm text-white font-semibold">Avg Daily Earnings</div>
                    <div className="text-xs text-gray-400 mt-1">Gross average over 3 years</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#32f932]">${Math.round(kpis.monthly).toLocaleString()}</div>
                    <div className="text-sm text-white font-semibold">Avg Monthly Earnings</div>
                    <div className="text-xs text-gray-400 mt-1">Gross average over 3 years</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#32f932]">${Math.round(kpis.yearly).toLocaleString()}</div>
                    <div className="text-sm text-white font-semibold">Avg Annual Earnings</div>
                    <div className="text-xs text-gray-400 mt-1">Gross average</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#32f932]">${Math.round(kpis.total3yr).toLocaleString()}</div>
                    <div className="text-sm text-white font-semibold">Projected 3-Year Total</div>
                    <div className="text-xs text-gray-400 mt-1">Tokens × $PAI3 + cabinets + agent + model + staking</div>
                  </div>
                </div>
              </div>
              
              {/* Collapsible Breakdown */}
              <div className="mb-8">
                <button
                  onClick={() => setShowBreakdown(!showBreakdown)}
                  className="text-[#32f932] underline text-sm hover:text-[#32f932]/80 transition-colors block mx-auto"
                >
                  {showBreakdown ? "Hide breakdown" : "Show earnings breakdown (3 years)"}
                </button>
                
                {showBreakdown && (
                  <div className="mt-4 p-6 bg-black/30 border border-[#32f932]/20 rounded-xl">
                    <h4 className="text-lg font-semibold text-[#32f932] mb-6 text-center">Earnings Breakdown (3 Years)</h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                      <div className="text-center">
                        <div className="text-xl font-bold text-white">${Math.round(breakdown?.baseTokens3yrUSD || 0).toLocaleString()}</div>
                        <div className="text-sm text-gray-400">Base Tokens</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white">${Math.round(breakdown?.cabinets3yrUSD || 0).toLocaleString()}</div>
                        <div className="text-sm text-gray-400">Cabinets</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white">${Math.round(breakdown?.agent3yrUSD || 0).toLocaleString()}</div>
                        <div className="text-sm text-gray-400">Agent Income</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white">${Math.round(breakdown?.model3yrUSD || 0).toLocaleString()}</div>
                        <div className="text-sm text-gray-400">Model (GPU)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${Math.round(breakdown?.staking3yrUSD || 0).toLocaleString()}</div>
                        <div className="text-sm text-gray-400">Staking</div>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-400 mt-6 text-center">
                      Token rewards and staking are guaranteed for the first 36 months.
                    </p>
                  </div>
                )}
              </div>
              
              <p className="text-xs text-gray-400 text-center">
                Power Node electricity ~ $10/month (US rates).
              </p>
              
              <div className="mt-6 p-4 bg-gray-800/50 border border-gray-500/20 rounded-lg">
                <p className="text-sm text-gray-400 text-center">
                  <strong>Disclaimer:</strong> These ROI estimates are modeled projections, not financial advice. They assume standard operating conditions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-4xl md:text-5xl font-bold mb-12">
              Frequently Asked <span className="text-[#32f932]">Questions</span>
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-black/50 border border-[#32f932]/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-green-500/5 transition-colors"
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-green-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-green-500" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
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

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-mono text-4xl md:text-5xl font-bold mb-12">
              Own the Future of <span className="text-green-500">AI Infrastructure.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-green-500 text-black px-12 py-4 rounded-lg text-xl font-bold hover:bg-green-400 transition-all transform hover:scale-105">
                Buy a Power Node
              </button>
              <button className="border border-green-500 text-green-500 px-12 py-4 rounded-lg text-xl font-semibold hover:bg-green-500/10 transition-colors">
                Talk to Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PowerNodePage;