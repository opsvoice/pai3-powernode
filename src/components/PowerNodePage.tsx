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
  
  // Basic ROI inputs
  const [tokenPrice, setTokenPrice] = useState(0.21);
  const [cabinetCount, setCabinetCount] = useState(0);
  const [agentMonthlyUSD, setAgentMonthlyUSD] = useState(500);
  
  // Advanced inputs  
  const [gpuHourly, setGpuHourly] = useState(10);
  const [gpuUtilization, setGpuUtilization] = useState(0.30);
  const [stakingPct, setStakingPct] = useState(1.0);

  const { kpis, breakdown } = useMemo(
    () =>
      computeRoi({
      tokenPrice,
      cabinetCount,
      agentMonthlyUSD,
      gpuHourly,
      gpuUtilization,
      stakingPct,
      apr: 0.12,
      nodeCost: 31415,
      }),
    [tokenPrice, cabinetCount, agentMonthlyUSD, gpuHourly, gpuUtilization, stakingPct]
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
              How the Power Node <span className="text-[#32f932]">Earns</span>
            </h2>
            
            <p className="text-gray-400 mb-8 text-center">
              Disclaimer: Baseline expectations under normal operation. Actual results vary with token price, utilization, and demand.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {earningCards.map((card, index) => (
                <div key={index} className="bg-black/50 border border-[#32f932]/20 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#32f932] mb-2">{card.value}</div>
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400">{card.subtitle}</p>
                </div>
              ))}
            </div>

            {/* ROI Calculator */}
            <div className="bg-black/50 border border-[#32f932]/30 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Interactive ROI Calculator</h3>
              
              {/* Basic Controls */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">Token Price: ${tokenPrice.toFixed(2)}</label>
                <input
                  type="range"
                  min="0.21"
                  max="10"
                  step="0.01"
                  value={tokenPrice}
                  onChange={(e) => setTokenPrice(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$0.21 (TGE)</span>
                  <span>$10.00</span>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2 text-white">
                  Cabinet Leasing @ $2/year: {cabinetCount.toLocaleString()} cabinets
                  <button
                    type="button"
                    className="ml-2 w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                    title="Each cabinet contributes $2 per year. Power Nodes support up to 25,000 cabinets."
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Each cabinet contributes $2 per year. Power Nodes support up to 25,000 cabinets.");
                    }}
                  >
                    i
                  </button>
                </label>
                <input
                  type="range"
                  min="0"
                  max="25000"
                  step="1"
                  value={cabinetCount}
                  onChange={(e) => setCabinetCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0 cabinets</span>
                  <span>12,500 cabinets</span>
                  <span>25,000 cabinets ($50K/year)</span>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2 text-white">
                  Agent Income (per month): ${agentMonthlyUSD.toLocaleString()}
                  <button
                    type="button"
                    className="ml-2 w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                    title="Income from CPU/agent services. Flat monthly amount."
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Income from CPU/agent services. Flat monthly amount.");
                    }}
                  >
                    i
                  </button>
                </label>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={agentMonthlyUSD}
                  onChange={(e) => setAgentMonthlyUSD(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$500</span>
                  <span>$2,750</span>
                  <span>$5,000</span>
                </div>
              </div>
              
              {/* Preset Buttons */}
              <div className="flex gap-2 mb-8">
                <button 
                  className="px-3 py-1 rounded border border-[#32f932]/30 text-[#32f932] hover:bg-[#32f932]/10 transition-colors text-sm"
                  onClick={() => {
                    setTokenPrice(0.21); 
                    setCabinetCount(0); 
                    setAgentMonthlyUSD(500);
                    setGpuHourly(10);
                    setGpuUtilization(0.30); 
                    setStakingPct(1.0);
                  }}
                >
                  Baseline
                </button>
                
                <button 
                  className="px-3 py-1 rounded border border-[#32f932]/30 text-[#32f932] hover:bg-[#32f932]/10 transition-colors text-sm"
                  onClick={() => {
                    setTokenPrice(1.00); 
                    setCabinetCount(5000); 
                    setAgentMonthlyUSD(1000);
                    setGpuHourly(15);
                    setGpuUtilization(0.50); 
                    setStakingPct(1.0);
                  }}
                >
                  Moderate
                </button>
                
                <button 
                  className="px-3 py-1 rounded border border-[#32f932]/30 text-[#32f932] hover:bg-[#32f932]/10 transition-colors text-sm"
                  onClick={() => {
                    setTokenPrice(5.00); 
                    setCabinetCount(15000); 
                    setAgentMonthlyUSD(2500);
                    setGpuHourly(20);
                    setGpuUtilization(0.75); 
                    setStakingPct(1.0);
                  }}
                >
                  Aggressive
                </button>
              </div>
              
              {/* Advanced Settings */}
              <div className="mb-8 bg-gradient-to-r from-[#32f932]/10 to-[#32f932]/5 border border-[#32f932]/30 rounded-lg p-4">
                <button
                  onClick={() => setAdvancedOpen(!advancedOpen)}
                  className="flex items-center justify-between w-full"
                >
                  <div>
                    <span className="text-lg font-semibold text-[#32f932]">⚙️ Advanced Earnings Settings</span>
                    <p className="text-sm text-gray-300 mt-1">Customize your node's earning potential</p>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-[#32f932] transition-transform ${advancedOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {advancedOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-4 p-4 bg-black/30 rounded-lg border border-[#32f932]/20"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        GPU Price ($/hr): ${gpuHourly}
                        <button
                          type="button"
                          className="ml-2 w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                          title="Conservative baseline is $10/hr (L40 ballpark). Higher-demand workloads can clear $15–$50/hr depending on hardware class and market."
                          onClick={(e) => {
                            e.preventDefault();
                            alert("Conservative baseline is $10/hr (L40 ballpark). Higher-demand workloads can clear $15–$50/hr depending on hardware class and market.");
                          }}
                        >
                          i
                        </button>
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="50"
                        step="1"
                        value={gpuHourly}
                        onChange={(e) => setGpuHourly(parseInt(e.target.value))}
                        className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>$10</span>
                        <span>$15</span>
                        <span>$20</span>
                        <span>$30</span>
                        <span>$40</span>
                        <span>$50</span>
                      </div>
                      <div className="text-xs mt-1 text-gray-300">
                        ≈ ${Math.round(gpuHourly * 24 * gpuUtilization * 365).toLocaleString()} / year at {Math.round(gpuUtilization*100)}% utilization
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        GPU Utilization: {(gpuUtilization * 100).toFixed(0)}%
                        <button
                          type="button"
                          className="ml-2 w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                          title="GPU revenue = ($/hr) × 24 × utilization × 365. Utilization reflects demand; reputation (age, uptime, stake, history) helps over time."
                          onClick={(e) => {
                            e.preventDefault();
                            alert("GPU revenue = ($/hr) × 24 × utilization × 365. Utilization reflects demand; reputation (age, uptime, stake, history) helps over time.");
                          }}
                        >
                          i
                        </button>
                      </label>
                      <input
                        type="range"
                        min="0.02"
                        max="1.0"
                        step="0.01"
                        value={gpuUtilization}
                        onChange={(e) => setGpuUtilization(parseFloat(e.target.value))}
                        className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>2%</span>
                        <span>25%</span>
                        <span>50%</span>
                        <span>75%</span>
                        <span>100%</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Staking % of Rewards: {(stakingPct * 100).toFixed(0)}%
                        <button
                          type="button"
                          className="ml-2 w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                          title="Portion of monthly token emissions you restake. 12% APR, monthly compounding. Includes one extra month on the final deposit."
                          onClick={(e) => {
                            e.preventDefault();
                            alert("Portion of monthly token emissions you restake. 12% APR, monthly compounding. Includes one extra month on the final deposit.");
                          }}
                        >
                          i
                        </button>
                      </label>
                      <input
                        type="range"
                        min="0.2"
                        max="1.0"
                        step="0.1"
                        value={stakingPct}
                        onChange={(e) => setStakingPct(parseFloat(e.target.value))}
                        className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>20%</span>
                        <span>50%</span>
                        <span>80%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* ROI Estimates */}
              <div className="mt-8 p-8 bg-[#32f932]/5 border-2 border-[#32f932]/20 rounded-lg">
                <h3 className="text-[#32f932] font-semibold text-lg">ROI Estimates</h3>
                <p className="text-xs opacity-70 -mt-1 mb-4">
                  Projected earnings based on current settings. Actual results vary with token price, utilization, and demand.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                  <div>
                    <div className="text-4xl font-bold text-[#32f932]">${Math.round(kpis.daily).toLocaleString()}</div>
                    <div className="text-sm text-gray-400">Daily Earnings</div>
                    <div className="text-xs text-gray-500 mt-1">Average daily revenue</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#32f932]">${Math.round(kpis.monthly).toLocaleString()}</div>
                    <div className="text-sm text-gray-400">Monthly Earnings</div>
                    <div className="text-xs text-gray-500 mt-1">Average monthly revenue</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#32f932]">${Math.round(kpis.yearly).toLocaleString()}</div>
                    <div className="text-sm text-gray-400">Yearly Earnings</div>
                    <div className="text-xs text-gray-500 mt-1">Average annual revenue</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#32f932]">${Math.round(kpis.total3yr).toLocaleString()}</div>
                    <div className="text-sm text-gray-400">3-Year Total</div>
                    <div className="text-xs text-gray-500 mt-1">Total projected earnings</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#32f932]">{kpis.roiPct.toFixed(1)}%</div>
                    <div className="text-sm text-gray-400">ROI %</div>
                    <div className="text-xs text-gray-500 mt-1">Return on investment</div>
                  </div>
                </div>
              </div>
              
              {/* Collapsible Breakdown */}
              <div className="mb-8">
                <button
                  onClick={() => setShowBreakdown(!showBreakdown)}
                  className="text-[#32f932] underline text-sm hover:text-[#32f932]/80 transition-colors"
                >
                  {showBreakdown ? "Hide detailed revenue sources" : "Show detailed revenue sources"}
                </button>
                
                {showBreakdown && (
                  <div className="mt-4 p-6 bg-black/30 border border-[#32f932]/20 rounded-xl">
                    <h4 className="text-lg font-semibold text-[#32f932] mb-4 text-center">Earnings Breakdown (3 Years)</h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${Math.round(breakdown?.baseToken3yr || 0).toLocaleString()}</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center">
                          Base Tokens
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${Math.round(breakdown?.cabinets3yr || 0).toLocaleString()}</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center">
                          Cabinets
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${Math.round(breakdown?.agent3yr || 0).toLocaleString()}</div>
                        <div className="text-xs text-gray-400">Agent Income</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${Math.round(breakdown?.gpu3yr || 0).toLocaleString()}</div>
                        <div className="text-xs text-gray-400">GPU Compute</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${Math.round(breakdown?.staking3yrUSD || 0).toLocaleString()}</div>
                        <div className="text-xs text-gray-400">Staking</div>
                      </div>
                    </div>
                    
                    <p className="text-xs opacity-70 mt-4 p-3 bg-gray-800/50 rounded-lg">
                      Note: Token rewards and staking are guaranteed for the first 36 months. Future earnings depend on network adoption and tokenomics updates.
                    </p>
                  </div>
                )}
              </div>
              
              <p className="text-xs text-gray-400 p-4 bg-gray-800/50 rounded-lg">
                Disclaimer: These ROI estimates are modeled projections, not financial advice. They assume standard operating conditions.
              </p>
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