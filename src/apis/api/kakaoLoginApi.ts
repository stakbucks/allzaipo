import { baseApi } from "../utils/instance";

const LOGIN_STATUS = "/api/login/status";
const LOGIN = "/api/login";
const LOGOUT = "/api/logout";

export const getLoginStatus = () => baseApi.get("/api/getLoginStatus");

export const getLogout = () => baseApi.get("/logout");
