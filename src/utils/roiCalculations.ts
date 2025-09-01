export type RoiInputs = {
  pai3Price: number;
  cabinetCount: number;
  agentMonthlyUSD: number;
  modelUtilization: number;
  modelHourlyUSD?: number;
  stakingPct?: number;
  apr?: number;
};

export type RoiOutput = {
  kpis: {
    daily: number;
    monthly: number;
    yearly: number;
    total3yr: number;
    objectiveReturnPct: number;
  };
  breakdown: {
    baseTokens3yrUSD: number;
    cabinets3yrUSD: number;
    agent3yrUSD: number;
    model3yrUSD: number;
    staking3yrUSD: number;
    extraTokensFromStaking: number;
    totalTokensWithStaking: number;
  };
};

export function computeRoi({
  pai3Price,
  cabinetCount,
  agentMonthlyUSD,
  modelUtilization,
  modelHourlyUSD = 10,
  stakingPct = 0.25,
  apr = 0.12,
}: RoiInputs): RoiOutput {
  const months = 36;
  const totalTokens = 150_000;
  const E = totalTokens / months;
  const i = apr / 12;
  const s = Math.max(0, Math.min(1, stakingPct));

  // Base tokens (3 years)
  const baseTokens3yrUSD = totalTokens * pai3Price;

  // Cabinets (3 years) @ $2/year
  const cabinets3yrUSD = cabinetCount * 2 * 3;

  // Agent income (3 years)
  const agent3yrUSD = agentMonthlyUSD * months;

  // Model revenue (3 years)
  const modelAnnual = modelHourlyUSD * 24 * modelUtilization * 365;
  const model3yrUSD = modelAnnual * 3;

  // Staking calculation with extra month
  const AF = (((1 + i) ** months) - 1) / i;
  const FV = s * E * (1 + i) * AF;
  const principal = s * E * months;
  const extraTokensFromStaking = Math.max(0, FV - principal);
  const staking3yrUSD = extraTokensFromStaking * pai3Price;
  const totalTokensWithStaking = totalTokens + extraTokensFromStaking;

  // Totals
  const total3yr = baseTokens3yrUSD + cabinets3yrUSD + agent3yrUSD + model3yrUSD + staking3yrUSD;
  const daily = total3yr / (3 * 365);
  const monthly = total3yr / months;
  const yearly = total3yr / 3;
  
  // Node cost for ROI calculation
  const nodeCost = 31415;
  const objectiveReturnPct = ((total3yr - nodeCost) / nodeCost) * 100;

  return {
    kpis: { daily, monthly, yearly, total3yr, objectiveReturnPct },
    breakdown: {
      baseTokens3yrUSD,
      cabinets3yrUSD,
      agent3yrUSD,
      model3yrUSD,
      staking3yrUSD,
      extraTokensFromStaking,
      totalTokensWithStaking,
    },
  };
}