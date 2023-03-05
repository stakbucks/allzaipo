import { baseApi } from "../utils/instance";

const getUserPortfoliosURI = "api/portfolio/list";
const deletePortfolioItemURI = "/api/portfolio/delete";

export const getUserPortfolios = () => baseApi.get(getUserPortfoliosURI);

export const deletePortfolioItem = ({ portfolioId }: { portfolioId: number }) =>
  baseApi.delete(deletePortfolioItemURI, {
    params: { portfolioId },
  });
