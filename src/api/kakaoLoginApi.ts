import axios from "axios";

const BASE_URL = "https://alzzaipo.com";

export const getLoginStatus = () =>
  axios.get(`${BASE_URL}/api/getLoginStatus`, {
    headers: { "Access-Control-Allow-Origin": "https://alzzaipo.com" },
    baseURL: "https://alzzaipo.com",
    withCredentials: true,
  });

export const getUserPortfolios = () =>
  axios.get(`${BASE_URL}/api/getUserPortfolios`, {
    headers: { "Access-Control-Allow-Origin": "https://alzzaipo.com" },
    baseURL: "https://alzzaipo.com",
    withCredentials: true,
  });
