import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://alzzaipo.com";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  withCredentials: true,
};
export const baseApi = axios.create(axiosConfig);
