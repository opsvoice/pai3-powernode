import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Zap, Coins, Shield, Server, ChevronDown, ChevronUp, Check, Star, Award, Clock } from 'lucide-react';

const NewNodesPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [rewardYears, setRewardYears] = useState(3);

  const powerNodeSpecs = [
    { icon: Cpu, label: "CPU", value: "12-core AMD Ryzen", detail: "Professional-grade processing" },
    { icon: Cpu, label: "GPU", value: "20-core NVIDIA RTX", detail: "AI acceleration optimized" },
    { icon: HardDrive, label: "RAM", value: "64GB DDR5-5600", detail: "High-speed memory" },
    { icon: HardDrive, label: "Storage", value: "5TB NVMe SSD", detail: "Enterprise storage" },
    { icon: Zap, label: "Power", value: "800W Titanium PSU", detail: "Maximum efficiency" },
    { icon: Server, label: "Network", value: "Gigabit Ethernet", detail: "High-speed connectivity" }
  ];

  const benefits = [
    "150,000 guaranteed PAI3 tokens over 3 years",
    "Network emission rewards (estimated 15-25% APY)",
    "Transaction fee sharing from all network activity",
    "Priority access to new AI models and features",
    "Governance voting rights in PAI3 protocol",
    "Early pioneer bonus multipliers",
    "Professional technical support and monitoring",
    "2-year hardware warranty with replacement guarantee"
  ];

  const faqs = [
    {
      question: "Why is the Power Node $31,415?",
      answer: "This isn't just hardware - it's your stake in the AI economy. You get enterprise-grade equipment plus 150,000 guaranteed tokens, emission rewards, and governance rights. Early pioneers capture the most value as the network grows."
    },
    {
      question: "How much can I realistically earn?",
      answer: "Beyond the 150,000 guaranteed tokens, you'll earn from network emissions (estimated 15-25% APY), transaction fees, and governance rewards. Early estimates suggest $8,000-15,000 annually, but this grows with network adoption."
    },
    {
      question: "What makes this different from mining crypto?",
      answer: "You're not just mining - you're providing AI infrastructure that professionals actually use. Your node earns from real economic activity: AI computations, data processing, and network services. It's productive capital, not speculative mining."
    },
    {
      question: "Do I need to be technical to run this?",
      answer: "No. Power Nodes come pre-configured with automatic updates and monitoring. Our 24/7 support team handles technical issues. You just plug it in, connect to internet, and start earning. Think of it like a smart appliance."
    },
    {
      question: "What about electricity costs and maintenance?",
      answer: "Power Nodes consume 400-600W (about $40-60/month in electricity). They're designed for 24/7 operation with minimal maintenance. The token rewards easily cover operating costs with significant profit margin."
    },
    {
      question: "When will my Power Node ship and be profitable?",
      answer: "Power Nodes ship within 4-6 weeks. You start earning tokens immediately upon activation. The network launches Q2 2025, with full earning potential beginning then. Early pioneers get bonus emissions during the bootstrap phase."
    },
    {
      question: "What if PAI3 doesn't succeed?",
      answer: "You still own enterprise hardware that can be repurposed. Plus our 30-day money-back guarantee covers your risk. But with our Consensus 2025 award and growing professional adoption, we're confident in the trajectory."
    },
    {
      question: "Can I buy multiple Power Nodes?",
      answer: "Yes! Many pioneers are buying 2-5 nodes to maximize their network stake. Each additional node increases your earning potential and governance influence. Volume discounts available for 3+ nodes."
    }
  ];

  const calculateRewards = (years: number) => {
    const baseTokens = 150000;
    const yearlyEmissions = 12000; // Estimated emissions per year
    const yearlyFees = 8000; // Estimated transaction fees per year
    const pioneerBonus = 5000; // Early pioneer bonus per year
    return baseTokens + (yearlyEmissions * years) + (yearlyFees * years) + (pioneerBonus * years);
  };

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
                ⚡ Limited Early Pioneer Slots Available
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                PAI3 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">
                  Power Node
                </span>
              </h1>
              
              <p className="text-2xl text-white mb-8 leading-relaxed">
                Your gateway into the AI economy. Own the infrastructure, 
                earn the rewards, control your intelligence.
              </p>
              
              <div className="bg-gradient-to-r from-gray-900 to-black border border-green-500/30 rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-6xl font-bold text-green-500 mb-4">
                      $31,415
                    </div>
                    <p className="text-white">Power Node Price</p>
                  </div>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">
                    🚀 Early Pioneer Bonus Multiplier Included
                  </p>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-black py-6 px-8 rounded-xl text-2xl font-bold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-2xl shadow-green-500/25 mb-6">
                Own Your Power Node
              </button>
              
              <p className="text-sm text-white text-center">
                30-day money-back guarantee • Free worldwide shipping • 2-year warranty
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900 border border-green-500/20 rounded-3xl p-8">
                <div className="w-full h-80 bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                  <Server className="h-32 w-32 text-green-400" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">150K+</div>
                    <div className="text-sm text-white">Guaranteed Tokens</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">15-25%</div>
                    <div className="text-sm text-white">Est. Annual Yield</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">24/7</div>
                    <div className="text-sm text-white">Earning Potential</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">Bonus</div>
                    <div className="text-sm text-white">Pioneer Bonus</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-5 w-5 text-green-400" />
                    <span className="text-green-400 font-semibold">Consensus 2025 Winner</span>
                  </div>
                  <p className="text-sm text-white">Top 5 AI Innovation Award</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">Specifications</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {powerNodeSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 border border-green-500/20 p-8 rounded-2xl hover:border-green-500/40 transition-all"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <spec.icon className="h-7 w-7 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{spec.label}</h3>
                    <p className="text-white font-bold text-lg">{spec.value}</p>
                  </div>
                </div>
                <p className="text-white text-sm">{spec.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward Calculator */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">Earning</span> Potential
            </h2>
            <p className="text-xl text-white">
              Calculate your projected returns from owning a Power Node
            </p>
          </motion.div>
          
          <div className="bg-black border border-green-400/30 rounded-3xl p-12">
            <div className="mb-12">
              <label className="block text-lg font-medium text-white mb-6 text-center">
                Project earnings over: <span className="text-green-400 font-bold">{rewardYears} year{rewardYears > 1 ? 's' : ''}</span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={rewardYears}
                onChange={(e) => setRewardYears(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-white mt-3">
                <span>1 year</span>
                <span>2 years</span>
                <span>3 years</span>
                <span>4 years</span>
                <span>5 years</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div className="bg-black border border-green-400/30 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">150,000</div>
                <div className="text-sm text-white">Guaranteed Tokens</div>
                <div className="text-xs text-white mt-1">One-time bonus</div>
              </div>
              <div className="bg-black border border-green-400/30 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">{(12000 * rewardYears).toLocaleString()}</div>
                <div className="text-sm text-white">Network Emissions</div>
                <div className="text-xs text-white mt-1">Annual rewards</div>
              </div>
              <div className="bg-black border border-green-400/30 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">{(8000 * rewardYears).toLocaleString()}</div>
                <div className="text-sm text-white">Transaction Fees</div>
                <div className="text-xs text-white mt-1">Network activity</div>
              </div>
              <div className="bg-black border border-green-400/30 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">{(5000 * rewardYears).toLocaleString()}</div>
                <div className="text-sm text-white">Pioneer Bonus</div>
                <div className="text-xs text-white mt-1">Early adopter bonus</div>
              </div>
            </div>
            
            <div className="border-t border-white pt-8 text-center">
              <div className="text-5xl font-bold text-green-400 mb-4">
                {calculateRewards(rewardYears).toLocaleString()} Tokens
              </div>
              <p className="text-xl text-white mb-2">Total Projected Earnings</p>
              <p className="text-white text-sm">
                *Conservative estimates based on current network projections. Actual rewards may be higher as network grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
           Why Pioneers Choose <span className="text-green-400">Power Nodes</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-black border border-green-400/30 p-6 rounded-xl hover:border-green-400/50 transition-all"
              >
                <Check className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-white leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
           Pioneer <span className="text-green-400">Questions</span>
          </motion.h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-black border border-green-400/30 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-black/50 transition-colors"
                >
                  <span className="font-semibold text-white text-lg pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-6 w-6 text-green-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-green-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-white leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-black to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-black to-gray-900 border border-green-500/30 rounded-3xl p-12">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
                🔥 Limited Pioneer Slots Available
              </div>
            
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Secure Your Stake in the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">
                  AI Economy
                </span>
              </h2>
            
              <p className="text-2xl text-white max-w-4xl mx-auto mb-12">
                The early pioneers always capture the most value. 
                <span className="text-green-400"> Your Power Node awaits.</span>
              </p>
            
              <div className="bg-black border border-green-400/30 rounded-3xl p-12 mb-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-left">
                    <ul className="space-y-3 text-white">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>150,000 guaranteed tokens</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Network emission rewards</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Transaction fee sharing</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Governance voting rights</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Pioneer bonus multipliers</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-6xl font-bold text-green-400 mb-4">
                      $31,415
                    </div>
                    <p className="text-xl text-white mb-8">Power Node Price</p>
                    <p className="text-xl text-white">One-time investment in your AI future</p>
                  </div>
                </div>
              </div>
            
              <button className="bg-gradient-to-r from-green-400 to-green-500 text-black px-12 py-6 rounded-xl text-2xl font-bold hover:from-green-500 hover:to-green-600 transition-all transform hover:scale-105 shadow-2xl shadow-green-400/25 w-full mb-8">
                Secure Your Power Node Now
              </button>
            
              <div className="bg-gradient-to-r from-green-400/10 to-green-500/10 border border-green-400/30 rounded-2xl p-6 mb-8">
                <div className="text-lg font-bold text-green-400 mb-2">⚡ Limited Early Access</div>
                <p className="text-white">Only 1,000 Power Nodes available in the first batch for early pioneers.</p>
              </div>
            
              <p className="text-sm text-white text-center">
                Secure checkout • Free worldwide shipping • 30-day guarantee
              </p>
            
              <p className="text-sm text-white text-center mt-4">
                Questions? Email <span className="text-green-400">pioneers@pai3.ai</span> or call +1 (555) PAI-3000
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewNodesPage;