import axios from "axios";

const BASE_URL = "https://alzzaipo.com";

export const getLoginStatus = () => axios.get(`${BASE_URL}/api/getLoginStatus`);

export const getUserPortfolios = () =>
  axios.get(`${BASE_URL}/api/getUserPortfolios`);
