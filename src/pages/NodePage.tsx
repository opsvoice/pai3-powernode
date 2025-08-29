import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Zap, Coins, Shield, Server, ChevronDown, ChevronUp, Check } from 'lucide-react';

const NodePage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [rewardYears, setRewardYears] = useState(3);

  const specs = [
    { icon: Cpu, label: "CPU", value: "12-core AMD Ryzen" },
    { icon: Cpu, label: "GPU", value: "20-core NVIDIA RTX" },
    { icon: HardDrive, label: "RAM", value: "64GB DDR5" },
    { icon: HardDrive, label: "Storage", value: "5TB NVMe SSD" },
    { icon: Zap, label: "Power", value: "800W Efficient PSU" },
    { icon: Server, label: "Network", value: "Gigabit Ethernet" }
  ];

  const benefits = [
    "150,000 guaranteed PAI3 tokens over 3 years",
    "Transaction fee sharing from network activity",
    "Emission rewards for participating in consensus",
    "Priority access to new AI models and features",
    "Hardware warranty and technical support",
    "Early adopter bonus multipliers"
  ];

  const faqs = [
    {
      question: "What's included with the Power Node?",
      answer: "Your Power Node includes the complete hardware setup, pre-installed PAI3 software, 150,000 guaranteed tokens over 3 years, technical support, and a 2-year hardware warranty."
    },
    {
      question: "How much can I earn from running a Power Node?",
      answer: "Beyond the 150,000 guaranteed tokens, you'll earn from transaction fees, emission rewards, and network participation. Early estimates suggest 15-25% annual returns, but this varies with network growth."
    },
    {
      question: "When will my Power Node ship?",
      answer: "Power Nodes ship within 4-6 weeks of order confirmation. You'll receive tracking information and setup guides before arrival."
    },
    {
      question: "Do I need technical expertise to run a node?",
      answer: "No! Power Nodes come pre-configured and include a simple setup wizard. Our support team provides 24/7 assistance for any questions."
    },
    {
      question: "What's the power consumption and operating costs?",
      answer: "Power Nodes consume approximately 400-600W under normal operation, costing $30-50/month in electricity for most users. This is offset by token rewards."
    },
    {
      question: "Can I upgrade my Power Node later?",
      answer: "Yes! Power Nodes are designed for upgrades. You can add more storage, RAM, or even additional compute modules as the network grows."
    }
  ];

  const calculateRewards = (years: number) => {
    const baseTokens = 150000;
    const yearlyFees = 8000; // Estimated transaction fees per year
    const emissions = 5000; // Estimated yearly emissions
    return baseTokens + (yearlyFees * years) + (emissions * years);
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                PAI3 <span className="text-green-500">Power Node</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Your gateway into the decentralized AI economy. Own your intelligence, 
                earn rewards, and help build the future of private AI.
              </p>
              
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
                <div className="text-4xl font-bold text-green-500 mb-2">$31,415</div>
                <p className="text-gray-400">One-time purchase • Free shipping worldwide</p>
              </div>
              
              <button className="w-full bg-green-500 text-black py-4 px-8 rounded-lg text-lg font-bold hover:bg-green-400 transition-colors mb-4">
                Buy Power Node
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                30-day money-back guarantee • 2-year warranty
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900 border border-green-500/20 rounded-2xl p-8">
                <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-lg mb-6 flex items-center justify-center">
                  <Server className="h-24 w-24 text-green-500" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">What's Included</h3>
                <ul className="space-y-2">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Specs */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Technical <span className="text-green-500">Specifications</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 border border-green-500/20 p-6 rounded-lg hover:border-green-500/40 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <spec.icon className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-300">{spec.label}</h3>
                    <p className="text-white font-bold">{spec.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward Calculator */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-green-500">Reward</span> Calculator
            </h2>
            <p className="text-gray-300">
              Estimate your potential earnings from running a Power Node
            </p>
          </motion.div>
          
          <div className="bg-black border border-green-500/20 rounded-2xl p-8">
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Calculate rewards for: {rewardYears} year{rewardYears > 1 ? 's' : ''}
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={rewardYears}
                onChange={(e) => setRewardYears(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1 year</span>
                <span>3 years</span>
                <span>5 years</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-500">150,000</div>
                <div className="text-sm text-gray-400">Guaranteed Tokens</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">{(8000 * rewardYears).toLocaleString()}</div>
                <div className="text-sm text-gray-400">Est. Transaction Fees</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">{(5000 * rewardYears).toLocaleString()}</div>
                <div className="text-sm text-gray-400">Est. Emission Rewards</div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-6 pt-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {calculateRewards(rewardYears).toLocaleString()} Total Tokens
              </div>
              <p className="text-gray-400 text-sm">
                *Estimates based on current network projections. Actual rewards may vary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Owning Nodes Has <span className="text-green-500">Benefits</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-gray-900/50 p-4 rounded-lg border border-green-500/20"
              >
                <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Frequently Asked <span className="text-green-500">Questions</span>
          </motion.h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black border border-green-500/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-900/50 transition-colors"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-500" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Own Your <span className="text-green-500">AI Future?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join the decentralized AI revolution with your own Power Node.
            </p>
            
            <button className="bg-green-500 text-black px-12 py-6 rounded-lg text-xl font-bold hover:bg-green-400 transition-all transform hover:scale-105">
              Buy Power Node - $31,415
            </button>
            
            <p className="text-sm text-gray-500 mt-6">
              Limited quantities available • Secure checkout • 30-day guarantee
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NodePage;