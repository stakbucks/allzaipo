import { baseApi } from "../utils/instance";

const getUserPortfoliosURI = "api/portfolio/list";
const deletePortfolioItemURI = "/api/portfolio/delete";
const getIpoListURI = "/api/ipo/list";

export const getUserPortfolios = () => baseApi.get(getUserPortfoliosURI);

export const deletePortfolioItem = ({ portfolioId }: { portfolioId: number }) =>
  baseApi.delete(deletePortfolioItemURI, {
    params: { portfolioId },
  });

export const getIpoList = () => baseApi.get(getIpoListURI);
