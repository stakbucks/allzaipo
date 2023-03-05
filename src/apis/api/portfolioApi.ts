import { baseApi } from "../utils/instance";

const getUserPortfoliosURI = "api/portfolio/list";

export const getUserPortfolios = () => baseApi.get(getUserPortfoliosURI);
