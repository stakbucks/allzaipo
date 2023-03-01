import axios from "axios";

const BASE_URL = "https://alzzaipo.com";

export const getLoginStatus = () =>
  axios.get(`${BASE_URL}/api/getLoginStatus`, {
    withCredentials: true,
  });

export const getLogout = () =>
  axios.get(`${BASE_URL}/logout`, { withCredentials: true });

export const getUserPortfolios = () =>
  axios.get(`${BASE_URL}/api/getUserPortfolios`, {
    withCredentials: true,
  });
