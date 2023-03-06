import { IPortfolioAddForm } from "../../components/PortfolioAdd/interface";
import { baseApi } from "../utils/instance";

const getUserPortfoliosURI = "api/portfolio/list";
const deletePortfolioItemURI = "/api/portfolio/delete";
const getIpoListURI = "/api/ipo/list";
const postPortfolioCreateURI = "/api/portfolio/create";

export const getUserPortfolios = () => baseApi.get(getUserPortfoliosURI);

export const deletePortfolioItem = ({ portfolioId }: { portfolioId: number }) =>
  baseApi.delete(deletePortfolioItemURI, {
    params: { portfolioId },
  });

export const getIpoList = () => baseApi.get(getIpoListURI);

export const postPortfolioCreate = ({
  stockCode,
  sharesCnt,
  profit,
  agents,
  memo,
}: IPortfolioAddForm) =>
  baseApi.post(postPortfolioCreateURI, null, {
    params: {
      stockCode: Number(stockCode),
      sharesCnt: Number(sharesCnt),
      profit: Number(profit),
      agents,
      memo,
    },
  });
