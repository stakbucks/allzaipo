import * as S from "./style";
import { useRecoilValue } from "recoil";
import { IAnalyzeResult } from "../forms/AnalyzeForm/interface";
import { analyzeResultAtom } from "../../atoms/analyzeResultAtom/analyzeResultAtom";

function AnalyzeResult() {
  const analyzeResult = useRecoilValue<IAnalyzeResult[]>(analyzeResultAtom);
  const averageProfitRate = () => {
    let sum = 0;
    analyzeResult.forEach((i) => (sum += i.profitRate));
    return sum / analyzeResult.length;
  };
  console.log(analyzeResult);
  return (
    <>
      {analyzeResult.length ? (
        <S.Wrapper>
          <S.AverageProfitRate>
            평균 수익률: {Math.floor(averageProfitRate())}%
          </S.AverageProfitRate>
          <S.Container>
            <S.Labels>종목명</S.Labels>
            <S.Labels>희망공모가(원)</S.Labels>
            <S.Labels>최종공모가(원)</S.Labels>
            <S.Labels>기관경쟁률</S.Labels>
            <S.Labels>의무보유화약(%)</S.Labels>
            <S.Labels>주관사</S.Labels>
            <S.Labels>상장일</S.Labels>
            <S.Labels>시초가</S.Labels>
            <S.Labels>수익률</S.Labels>
            </S.Container>
            {analyzeResult.map((i) => (
              <S.Container>
                <S.Info>{i.stockName}</S.Info>
                <S.Info>
                  {i.expectedOfferingPriceMin}~{i.expectedOfferingPriceMax}
                </S.Info>
                <S.Info>{i.fixedOfferingPrice}</S.Info>
                <S.Info>{i.competitionRate}</S.Info>
                <S.Info>{i.lockupRate}</S.Info>
                <S.Info>{i.agents}</S.Info>
                <S.Info>{i.listedDate}</S.Info>
                <S.Info>{i.initialMarketPrice}</S.Info>
                <S.Info>{i.profitRate}</S.Info>
              </S.Container>
            ))}

        </S.Wrapper>
      ) : null}
    </>
  );
}
export default AnalyzeResult;
