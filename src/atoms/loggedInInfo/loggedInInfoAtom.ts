import { atom } from "recoil";
import { ILoggedInInfoAtom } from "./interface";

export const loggedInInfoAtom = atom<ILoggedInInfoAtom>({
  key: "loggedInInfo",
  default: {
    data: {
      status: false,
      nickname: "",
    },
  },
});
