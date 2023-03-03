export interface IAnalyzeInputs {
  from?: number;
  competitionRate?: number;
  to?: number;
  lockupRate?: number;
}

export interface IAnalyzeResult {
  agents: string;
  competitionRate: number;
  expectedOfferingPriceMax: number;
  expectedOfferingPriceMin: number;
  fixedOfferingPrice: number;
  initialMarketPrice: number;
  listedDate: string;
  lockupRate: number;
  profitRate: number;
  stockCode: number;
  stockName: string;
  totalAmount: number;
}
