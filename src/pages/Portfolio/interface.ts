export interface IPortfolioItem {
  agents: string;
  fixedOfferingPrice: number;
  listedDate: string;
  memo: string;
  portfolioId: number;
  profit: number;
  profitRate: number;
  sharesCnt: number;
  stockCode: number;
  stockName: string;
  subscribeEndDate: string;
  subscribeStartDate: string;
}
export interface IPortfolio {
  data: IPortfolioItem[];
}
