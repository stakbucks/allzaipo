import {
  IPortfolioAddForm,
  IPortfolioEditForm,
} from "../../interfaces/Portfolio/interface";
import { baseApi } from "../utils/instance";

const getUserPortfoliosURI = "api/portfolio/list";
const deletePortfolioItemURI = "/api/portfolio/delete";
const getIpoListURI = "/api/ipo/list";
const postPortfolioCreateURI = "/api/portfolio/create";
const putPortfolioUpdateURI = "/api/portfolio/update";

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

export const putPortfolioUpdate = ({
  portfolioId,
  stockCode,
  sharesCnt,
  profit,
  agents,
  memo,
}: IPortfolioEditForm) =>
  baseApi.put(putPortfolioUpdateURI, null, {
    params: {
      portfolioId: Number(portfolioId),
      stockCode: Number(stockCode),
      sharesCnt: Number(sharesCnt),
      profit: Number(profit),
      agents,
      memo,
    },
  });
