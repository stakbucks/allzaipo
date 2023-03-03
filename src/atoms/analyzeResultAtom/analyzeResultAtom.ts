import { atom } from "recoil";
import { IAnalyzeResult } from "../../components/forms/AnalyzeForm/interface";

export const analyzeResultAtom = atom<IAnalyzeResult[]>({
  key: "analyzeResult",
  default: [],
});
