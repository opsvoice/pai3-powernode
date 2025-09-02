import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { computeRoi } from '../utils/roiCalculations';

const PowerNodeEarnings = () => {
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
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

  const handleTooltipToggle = (tooltipId: string) => {
    setActiveTooltip(activeTooltip === tooltipId ? null : tooltipId);
  };

  const earningCards = [
    {
      title: "guaranteed $PAI3",
      subtitle: "over 3 years (~50k/year)",
      value: "150,000"
    },
    {
      title: "APR compounded monthly",
      subtitle: "auto staking $PAI3 tokens",
      value: "12%"
    },
    {
      title: "annual revenue potential",
      subtitle: "25,000 cabinets available per node",
      value: "$2 / cabinet",
      whiteText: "annual rate → $50,000 / year",
      grayText: "at full capacity (25,000 cabinets)"
    },
    {
      title: "demand-based earnings",
      subtitle: "from running AI agents & models",
      value: "Agent & Model Revenue"
    }
  ];

  return (
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
            How You Earn with <span className="text-[#32f932]">Power Nodes</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {earningCards.map((card, index) => (
              <div key={index} className="bg-black/50 border border-[#32f932]/20 p-6 rounded-lg relative">
                <div className="text-2xl font-bold text-[#32f932] mb-2">{card.value}</div>
                <h3 className="font-semibold mb-2 text-white">{card.whiteText || card.title}</h3>
                <p className="text-sm text-gray-400">{card.grayText || card.subtitle}</p>
                
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
                        {index === 0 && "Fixed allocation of 150,000 $PAI3 tokens distributed daily over 36 months. This is guaranteed regardless of network performance."}
                        {index === 1 && "Automatic compounding of your token rewards at 12% APR. Tokens are auto-staked for maximum growth with no lock periods."}
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
                        Current or future market price of $PAI3. This sets the value of your token rewards.
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
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-white">Cabinet Revenue: {cabinetCount.toLocaleString()} cabinets</label>
                  <span className="text-sm text-gray-400">≈ ${(cabinetCount * 2).toLocaleString()}/year</span>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                    onClick={() => handleTooltipToggle('cabinet-revenue')}
                  >
                    i
                  </button>
                  {activeTooltip === 'cabinet-revenue' && (
                    <div className="absolute z-50 bottom-8 right-0 w-80 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                      <div className="text-sm text-white leading-relaxed">
                        Each cabinet earns $2 per year. You can lease up to 25,000 cabinets per Power Node.
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
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>0 cabinets</span>
                <span>12,500 cabinets</span>
                <span>25,000 cabinets ($50K/year)</span>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-white">Monthly Agent Revenue: ${agentMonthlyUSD}</label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                    onClick={() => handleTooltipToggle('agent-revenue')}
                  >
                    i
                  </button>
                  {activeTooltip === 'agent-revenue' && (
                    <div className="absolute z-50 bottom-8 right-0 w-80 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                      <div className="text-sm text-white leading-relaxed">
                        Monthly income from running AI agents on your node. Varies by demand.
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
                <label className="text-sm font-medium text-white">Annual Model Utilization (scenario): {(modelUtilization * 100).toFixed(0)}%</label>
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
                        % of time your node is running AI models. Not user-controlled—grows with network demand and reputation.
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
                Not user-controlled; grows with demand + reputation.
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
                      <label className="text-sm font-medium text-white">Model Hourly Revenue Rate: ${modelHourlyUSD}</label>
                      <div className="relative">
                        <button
                          type="button"
                          className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                          onClick={() => handleTooltipToggle('model-hourly-rate')}
                        >
                          i
                        </button>
                        {activeTooltip === 'model-hourly-rate' && (
                          <div className="absolute z-50 bottom-8 right-0 w-80 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                            <div className="text-sm text-white leading-relaxed">
                              Estimated hourly rate for AI model compute. $10/hr is conservative; higher demand can push rates to $15–30/hr.
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
                      <label className="text-sm font-medium text-white">% of Tokens Staked: {(stakingPct * 100).toFixed(1)}%</label>
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
                              Portion of your token rewards automatically restaked. 12% APR, compounded monthly. Higher % = more growth.
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
            <div className="mt-8 p-8 bg-[#32f932]/5 border-2 border-[#32f932]/20 rounded-lg">
              <h4 className="text-2xl font-bold text-[#32f932] mb-6 text-center">How You Earn with Power Nodes</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div>
                  <div className="relative">
                    <div className="text-2xl font-bold text-[#32f932]">${Math.round(kpis.daily)}</div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-xs text-white font-semibold">Avg Daily Revenue</div>
                      <button
                        type="button"
                        className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                        onClick={() => handleTooltipToggle('daily-revenue')}
                      >
                        i
                      </button>
                    </div>
                    {activeTooltip === 'daily-revenue' && (
                      <div className="absolute z-50 bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                        <div className="text-sm text-white leading-relaxed">
                          Average daily income based on all selected assumptions. Gross projection before expenses.
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-[#32f932]/30 rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="text-2xl font-bold text-[#32f932]">${Math.round(kpis.monthly).toLocaleString()}</div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-xs text-white font-semibold">Avg Monthly Revenue</div>
                      <button
                        type="button"
                        className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                        onClick={() => handleTooltipToggle('monthly-revenue')}
                      >
                        i
                      </button>
                    </div>
                    {activeTooltip === 'monthly-revenue' && (
                      <div className="absolute z-50 bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                        <div className="text-sm text-white leading-relaxed">
                          Average monthly income based on all selected assumptions. Gross projection before expenses.
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-[#32f932]/30 rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="text-2xl font-bold text-[#32f932]">${Math.round(kpis.yearly).toLocaleString()}</div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-xs text-white font-semibold">Avg Annual Revenue</div>
                      <button
                        type="button"
                        className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                        onClick={() => handleTooltipToggle('annual-revenue')}
                      >
                        i
                      </button>
                    </div>
                    {activeTooltip === 'annual-revenue' && (
                      <div className="absolute z-50 bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                        <div className="text-sm text-white leading-relaxed">
                          Average yearly income based on all selected assumptions. Gross projection before expenses.
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-[#32f932]/30 rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="text-2xl font-bold text-[#32f932]">${Math.round(kpis.total3yr).toLocaleString()}</div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-xs text-white font-semibold">Projected 3-Year Total</div>
                      <button
                        type="button"
                        className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                        onClick={() => handleTooltipToggle('total-3yr')}
                      >
                        i
                      </button>
                    </div>
                    {activeTooltip === 'total-3yr' && (
                      <div className="absolute z-50 bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                        <div className="text-sm text-white leading-relaxed">
                          Total modeled income over 3 years. Includes token rewards, cabinet leasing, agent revenue, model compute, and staking. Gross projection before expenses.
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-[#32f932]/30 rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="text-2xl font-bold text-[#32f932]">{Math.round(kpis.objectiveReturnPct)}%</div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-xs text-white font-semibold">Objective Return %</div>
                      <button
                        type="button"
                        className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs cursor-help hover:bg-blue-600 transition-colors"
                        onClick={() => handleTooltipToggle('objective-return')}
                      >
                        i
                      </button>
                    </div>
                    {activeTooltip === 'objective-return' && (
                      <div className="absolute z-50 bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 bg-black border border-[#32f932]/30 rounded-lg p-3 shadow-2xl">
                        <div className="text-sm text-white leading-relaxed">
                          Calculated as (Projected 3-Year Total − Node Cost) ÷ Node Cost. Gross return before expenses.
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-[#32f932]/30 rotate-45"></div>
                      </div>
                    )}
                  </div>
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
                    Token rewards and staking rewards are guaranteed for the first 36 months.
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
  );
};

export default PowerNodeEarnings;