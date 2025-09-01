export type RoiInputs = {
  tokenPrice: number;          // $ per token
  cabinetCount: number;        // 0..25_000
  agentMonthlyUSD: number;     // $/month (default 500)

  // Advanced
  gpuUtilization: number;      // 0..1 (default 0.30)
  stakingPct: number;          // 0..1 (default 1.0)

  // Constants
  gpuHourly?: number;          // $/hr, default 10
  apr?: number;                // 12% APR, default 0.12
  nodeCost?: number;           // default 31415
};

export type RoiOutput = {
  kpis: {
    daily: number;
    monthly: number;
    yearly: number;
    total3yr: number;
    roiPct: number;
  };
  breakdown?: {
    baseToken3yr: number;
    cabinets3yr: number;
    agent3yr: number;
    gpu3yr: number;
    staking3yrUSD: number;
  };
};

export function computeRoi({
  tokenPrice,
  cabinetCount,
  agentMonthlyUSD,
  gpuUtilization,
  stakingPct,
  gpuHourly = 10,
  apr = 0.12,
  nodeCost = 31415,
}: RoiInputs): RoiOutput {
  // Emissions
  const guaranteedTokens = 150_000;
  const months = 36;
  const E = guaranteedTokens / months;  // monthly tokens
  const i = apr / 12;                   // monthly rate

  // Base tokens (3 yrs)
  const baseToken3yr = guaranteedTokens * tokenPrice;

  // Cabinets (3 yrs) @ $2/year
  const cabinets3yr = cabinetCount * 2 * 3;

  // Agent/CPU income (3 yrs)
  const agent3yr = agentMonthlyUSD * months;

  // GPU compute (3 yrs): $10 × 24 × utilization × 365 × 3
  const gpuAnnual = gpuHourly * 24 * gpuUtilization * 365;
  const gpu3yr = gpuAnnual * 3;

  // Staking (12% APR monthly comp), scaled by stakingPct and with one extra month on final deposit.
  // Deposit s*E at end of each month; FV at month n+1:
  // FV_total = s*E * (1+i) * [((1+i)^n - 1)/i]
  // Principal = s*E*n; Extra tokens = FV_total - Principal
  const s = Math.max(0, Math.min(1, stakingPct));
  const n = months;
  const annuityFactor = (((1 + i) ** n) - 1) / i;
  const fvTotalTokens = s * E * (1 + i) * annuityFactor;
  const principalTokens = s * E * n;
  const extraTokensFromStaking = Math.max(0, fvTotalTokens - principalTokens);
  const staking3yrUSD = extraTokensFromStaking * tokenPrice;

  // 3-year TOTAL (no fees/locks)
  const total3yr =
    baseToken3yr +
    cabinets3yr +
    agent3yr +
    gpu3yr +
    staking3yrUSD;

  // Averages
  const daily = total3yr / (3 * 365);
  const monthly = total3yr / months;
  const yearly = total3yr / 3;

  const roiPct = ((total3yr - nodeCost) / nodeCost) * 100;

  return {
    kpis: { daily, monthly, yearly, total3yr, roiPct },
    breakdown: { baseToken3yr, cabinets3yr, agent3yr, gpu3yr, staking3yrUSD },
  };
}