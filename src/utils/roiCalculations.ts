export type RoiInputs = {
  tokenPrice: number;          // existing slider
  cabinetCount: number;        // existing slider (0..25000)

  // new but defaulted; you can keep them hidden at first:
  reputationMultiplier?: number;   // default 1.0 (1x..2x)
  serviceRevenueTokens?: number;   // default 0 (tokens/month)
  deflationPct?: number;           // default 0.30

  // defaults only (no UI changes now)
  gpuHourly?: number;            // default 10
  gpuUtilization?: number;       // default 0.5 (50%)
  cpuMonthly?: number;           // default 500
  stakingOn?: boolean;           // default true
  apr?: number;                  // default 0.12
  txBoostPct?: number;           // default 0.05
};

export type RoiOutput = {
  gross3yr: number;
  net3yr: number;
  breakEvenDays: number;
  breakdown: {
    baseTokenValue: number;
    reputationBonusValue: number;
    serviceRevenueValue: number;
    cabinets3yr: number;
    compute3yr: number;
    tx3yr: number;
    stakingValue3yr: number;
  };
};

export function computeRoi(input: RoiInputs): RoiOutput {
  const {
    tokenPrice,
    cabinetCount,

    reputationMultiplier = 1.0,
    serviceRevenueTokens = 0,
    deflationPct = 0.30,

    gpuHourly = 10,
    gpuUtilization = 0.5,
    cpuMonthly = 500,
    stakingOn = true,
    apr = 0.12,
    txBoostPct = 0.05,
  } = input;

  const guaranteedTokens = 150_000;
  const nodeCost = 31_415;

  // emissions
  const tokensPerYear = guaranteedTokens / 3;
  const baseAnnualTokenValue = tokensPerYear * tokenPrice;
  const baseTokenValue = guaranteedTokens * tokenPrice;

  // rep bonus (1x..2x; value on top of base)
  const reputationBonusValue = baseTokenValue * (reputationMultiplier - 1);

  // service revenue (tokens/month)
  const serviceRevenueValue = serviceRevenueTokens * 36 * tokenPrice;

  // cabinets
  const cabinetAnnual = cabinetCount * 2; // $2 per cabinet per year
  const cabinets3yr = cabinetAnnual * 3;

  // compute revenue (defaults only right now)
  const gpuDaily = gpuHourly * 24 * Math.max(0, Math.min(1, gpuUtilization));
  const cpuDaily = (cpuMonthly * 12) / 365;
  const computeAnnual = (gpuDaily + cpuDaily) * 365;
  const compute3yr = computeAnnual * 3;

  // network/tx boost as % of token value
  const txBoostAnnual = txBoostPct * baseAnnualTokenValue;
  const tx3yr = txBoostAnnual * 3;

  // staking (12% APR, compounded monthly; deposits are monthly emissions)
  let stakingValue3yr = 0;
  if (stakingOn) {
    const months = 36;
    const E = guaranteedTokens / months;
    const i = apr / 12;
    const AF = ((1 + i) ** months - 1) / i; // ordinary annuity factor
    const extraTokens = E * (AF - months);  // interest tokens only
    stakingValue3yr = extraTokens * tokenPrice;
  }

  // gross 3-yr cash value
  const gross3yr =
    baseTokenValue +
    reputationBonusValue +
    serviceRevenueValue +
    cabinets3yr +
    compute3yr +
    tx3yr +
    stakingValue3yr;

  // deflation/liveness adjustment (5% burn + 25% lock = 30% removed)
  const net3yr = gross3yr * (1 - deflationPct);

  // daily revenue for break-even (simple: 3yr/1095)
  const dailyRevenue =
    (baseTokenValue + cabinets3yr + compute3yr + tx3yr + serviceRevenueValue) / (3 * 365);
  const breakEvenDays = dailyRevenue > 0 ? nodeCost / dailyRevenue : Infinity;

  return {
    gross3yr,
    net3yr,
    breakEvenDays,
    breakdown: {
      baseTokenValue,
      reputationBonusValue,
      serviceRevenueValue,
      cabinets3yr,
      compute3yr,
      tx3yr,
      stakingValue3yr,
    },
  };
}