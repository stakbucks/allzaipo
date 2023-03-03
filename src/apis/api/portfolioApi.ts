import { baseApi } from "../utils/instance";

const getUserPortfoliosURI = "api/ipo/user-portfolios";

export const getUserPortfolios = () => baseApi.get("/api/getUserPortfolios");
