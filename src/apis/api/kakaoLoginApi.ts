import { baseApi } from "../utils/instance";

const LOGIN_STATUS = "/api/login/status";
const LOGOUT = "/logout"

export const getLoginStatus = () => baseApi.get(LOGIN_STATUS);

export const getLogout = () => baseApi.get(LOGOUT);
