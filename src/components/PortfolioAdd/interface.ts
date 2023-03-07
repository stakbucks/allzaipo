export interface IPortfolioAddForm {
  stockCode: number;
  sharesCnt: number;
  profit: number;
  agents: string;
  memo: string;
}

export interface IPortfolioEditForm extends IPortfolioAddForm {
  portfolioId: number;
}
