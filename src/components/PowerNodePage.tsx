import React, { useState } from 'react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Zap, Server, ChevronDown, ChevronUp, Check, Award, Calculator, Box, Wifi, Settings, Shield } from 'lucide-react';
import { computeRoi, type RoiInputs } from '../utils/roiCalculations';

const PowerNodePage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [specsOpen, setSpecsOpen] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [tokenPrice, setTokenPrice] = useState(0.21);
  const [cabinetCount, setCabinetCount] = useState(0);
  
  // Advanced inputs
  const [reputationMultiplier, setReputationMultiplier] = useState(1.0);
  const [serviceRevenueTokens, setServiceRevenueTokens] = useState(0);
  const [deflationPct, setDeflationPct] = useState(0.30);

  // Compute ROI using new advanced logic
  const roiInputs: RoiInputs = {
    tokenPrice,
    cabinetCount,
    reputationMultiplier,
    serviceRevenueTokens,
    deflationPct,
  };
  
  const roiResult = useMemo(
    () => computeRoi({
      tokenPrice,
      cabinetCount,
      reputationMultiplier,
      serviceRevenueTokens,
      deflationPct,
      // defaults (no UI change yet)
      gpuHourly: 10,
      gpuUtilization: 0.5,
      cpuMonthly: 500,
      stakingOn: true,
      apr: 0.12,
      txBoostPct: 0.05,
    }),
    [tokenPrice, cabinetCount, reputationMultiplier, serviceRevenueTokens, deflationPct]
  );

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
                      <div key={index} className="flex items-start space-x-4">
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
              <p className="text-gray-400 mb-8">
                At TGE price ($0.21), the guaranteed 150,000 tokens equal the $31,415 node cost after 3 years. 
                This effectively makes the hardware free at baseline.
              </p>
              
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
                  <span>$1.00</span>
                  <span>$5.00</span>
                  <span>$10.00</span>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">
                  Cabinet Leasing: {cabinetCount.toLocaleString()} cabinets (${(cabinetCount * 2).toLocaleString()}/year)
                  <span 
                    className="ml-2 text-sm text-[#32f932] cursor-help" 
                    title="Each cabinet generates $2/year. Power Nodes support up to 25,000 cabinets"
                  >ℹ️</span>
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
              
              {/* Advanced Settings */}
              <div className="mb-8 bg-gradient-to-r from-[#32f932]/10 to-[#32f932]/5 border border-[#32f932]/30 rounded-lg p-4">
                <button
                  onClick={() => setAdvancedOpen(!advancedOpen)}
                  className="w-full flex items-center justify-between text-left hover:bg-[#32f932]/10 transition-colors p-3 rounded-lg"
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
                        Performance Bonus: {reputationMultiplier.toFixed(1)}x
                        <span
                          className="ml-1 text-xs text-[#32f932] cursor-help"
                          title="Extra bonus tokens if your node earns high reputation. A top score can double your guaranteed rewards."
                        >ℹ️</span>
                      </label>
                      <input
                        type="range"
                        min="1.0"
                        max="2.0"
                        step="0.1"
                        value={reputationMultiplier}
                        onChange={(e) => setReputationMultiplier(parseFloat(e.target.value))}
                        className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>1.0x (base)</span>
                        <span>1.5x</span>
                        <span>2.0x (max)</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Extra Jobs Income: {serviceRevenueTokens.toLocaleString()} tokens/month
                        <span
                          className="ml-1 text-xs text-[#32f932] cursor-help"
                          title="Tokens you can earn each month from extra jobs like hosting AI agents, providing storage, or running inference."
                        >ℹ️</span>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        value={serviceRevenueTokens}
                        onChange={(e) => setServiceRevenueTokens(parseInt(e.target.value))}
                        className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>0 tokens</span>
                        <span>5,000 tokens</span>
                        <span>10,000 tokens</span>
                      </div>
                      <div className="text-xs text-gray-300 mt-2 p-2 bg-gray-800/50 rounded">
                        Converts to $ = tokens × 36 × token price
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Network Fees & Locks: {(deflationPct * 100).toFixed(0)}%
                        <span
                          className="ml-1 text-xs text-[#32f932] cursor-help"
                          title="The network burns 5% and time-locks 25% of revenue. That means ~70% is immediately available."
                        >ℹ️</span>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="0.5"
                        step="0.05"
                        value={deflationPct}
                        onChange={(e) => setDeflationPct(parseFloat(e.target.value))}
                        className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>0%</span>
                        <span>13%</span>
                        <span>25%</span>
                        <span>38%</span>
                        <span>50%</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#32f932]">${(roiResult.net3yr / (3 * 365)).toFixed(2)}</div>
                  <div className="text-sm text-gray-400">Daily Earnings</div>
                  <div className="text-xs text-gray-500">
                    after network fees & locks
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#32f932]">${(roiResult.net3yr / 3).toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Yearly Earnings</div>
                  <div className="text-xs text-gray-500">
                    net annual average • cabinets + compute included
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#32f932]">${roiResult.net3yr.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Total (3-Year)</div>
                  <div className="text-xs text-gray-500">net after network fees & locks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#32f932]">{Number.isFinite(roiResult.breakEvenDays) ? Math.ceil(roiResult.breakEvenDays) : "—"}</div>
                  <div className="text-sm text-gray-400">Break-Even (Days)</div>
                  <div className="text-xs text-gray-500">node cost ÷ daily earnings</div>
                </div>
              </div>
              
              {/* Collapsible Breakdown */}
              <div className="mb-8">
                <button
                  onClick={() => setShowBreakdown(!showBreakdown)}
                  className="text-lg text-[#32f932] underline hover:text-[#32f932]/80 transition-colors"
                >
                  {showBreakdown ? "Hide detailed revenue sources" : "Show detailed revenue sources"}
                </button>
                
                {showBreakdown && (
                  <div className="mt-4 p-6 bg-black/30 border border-[#32f932]/20 rounded-xl">
                    <h4 className="text-lg font-semibold text-[#32f932] mb-4 text-center">Earnings Breakdown (3 Years)</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${roiResult.breakdown.baseTokenValue.toLocaleString()}</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center">
                          Base Tokens
                          <span 
                            className="ml-1 text-[#32f932] cursor-help" 
                            title="Guaranteed 150,000 tokens over 36 months (≈4,167/month)"
                          >ℹ️</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${roiResult.breakdown.reputationBonusValue.toLocaleString()}</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center">
                          Performance Bonus
                          <span 
                            className="ml-1 text-[#32f932] cursor-help" 
                            title="Extra bonus tokens if your node achieves high reputation (up to 2×)"
                          >ℹ️</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${roiResult.breakdown.serviceRevenueValue.toLocaleString()}</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center">
                          Extra Jobs Income
                          <span 
                            className="ml-1 text-[#32f932] cursor-help" 
                            title="Tokens earned each month from hosting agents, storage, or inference workloads"
                          >ℹ️</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${roiResult.breakdown.cabinets3yr.toLocaleString()}</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center">
                          Cabinets
                          <span 
                            className="ml-1 text-[#32f932] cursor-help" 
                            title="Each cabinet generates $2/year. Power Nodes support up to 25,000 cabinets"
                          >ℹ️</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${roiResult.breakdown.compute3yr.toLocaleString()}</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center">
                          Compute
                          <span 
                            className="ml-1 text-[#32f932] cursor-help" 
                            title="Revenue from GPU ($10/hr baseline) + CPU ($500/mo). Defaults assume 50% GPU utilization"
                          >ℹ️</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${roiResult.breakdown.tx3yr.toLocaleString()}</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center">
                          TX Boost
                          <span 
                            className="ml-1 text-[#32f932] cursor-help" 
                            title="Modeled as a % of token value representing transaction/network activity"
                          >ℹ️</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">${roiResult.breakdown.stakingValue3yr.toLocaleString()}</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center">
                          Staking
                          <span 
                            className="ml-1 text-[#32f932] cursor-help" 
                            title="12% APR auto-compounded monthly over 36 months adds ~29,500 tokens"
                          >ℹ️</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#32f932]">${roiResult.gross3yr.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">Gross Total</div>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-400 mt-4 p-3 bg-gray-800/50 rounded-lg">
                      <strong>Note:</strong> Token rewards and staking are guaranteed for the first 36 months. 
                      Future earnings depend on network adoption and tokenomics updates.
                    </p>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => {
                  setTokenPrice(0.21);
                  setCabinetCount(0);
                  setReputationMultiplier(1.0);
                  setServiceRevenueTokens(0);
                  setDeflationPct(0.30);
                }}
                className="bg-[#32f932]/20 text-[#32f932] px-4 py-2 rounded-lg text-sm hover:bg-[#32f932]/30 transition-colors"
              >
                Reset to Baseline
              </button>
              
              <p className="text-xs text-gray-400 mt-6 p-4 bg-gray-800/50 rounded-lg">
                <strong>Disclaimer:</strong> This is not financial advice. Rewards are projected based on token emissions schedule and TGE price. 
                Actual earnings may vary depending on network growth, fees, and token price.
              </p>
              
              <div className="mt-4 p-4 bg-[#32f932]/5 border border-[#32f932]/20 rounded-lg">
                <h4 className="text-lg font-semibold text-[#32f932] mb-2">Additional Earning Sources</h4>
                <p className="text-sm text-gray-300">
                  Includes GPU compute revenue (${(10 * 24 * 0.5 * 365 * 3).toLocaleString()}/3yr), CPU services (${(500 * 12 * 3).toLocaleString()}/3yr), 
                  12% APR staking rewards, transaction fee boosts, and performance multipliers. 
                  Net values account for {(deflationPct * 100).toFixed(0)}% network fees & locks.
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
                <div key={index} className="bg-black/50 border border-green-500/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-green-500/5 transition-colors"
                  >
                    <span className="font-semibold">{faq.question}</span>
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
            className="bg-black/50 border border-green-500/30 rounded-lg p-12 text-center"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-8">
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