import * as S from "./style";
import { useRecoilValue } from "recoil";
import { IAnalyzeResult } from "../forms/AnalyzeForm/interface";
import { analyzeResultAtom } from "../../atoms/analyzeResultAtom/analyzeResultAtom";

function AnalyzeResult() {
  const analyzeResult = useRecoilValue<IAnalyzeResult[]>(analyzeResultAtom);
  console.log(analyzeResult);
  return <S.Wrapper></S.Wrapper>;
}
export default AnalyzeResult;
