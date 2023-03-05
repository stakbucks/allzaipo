import * as S from "./style";
import { useQuery } from "react-query";
import { getIpoList } from "../../apis/api/portfolioApi";
import { IIpoList } from "../../pages/Portfolio/interface";

function PortfolioAdd() {
  const { data: ipoList } = useQuery<IIpoList>(["ipoList"], getIpoList, {
    staleTime: 30000,
  });
  return (
    <S.Container>
      <S.Title>추가하기</S.Title>
      <S.InputWrapper>
        <S.InputLabel>공모주</S.InputLabel>
        <S.IpoSelect name="ipoList">
          {ipoList?.data.map((i) => (
            <option value={i.stockName} key={i.stockCode}>
              {i.stockName}
            </option>
          ))}
        </S.IpoSelect>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputLabel>수량</S.InputLabel>
        <S.InputNumber type="number" />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputLabel>수익</S.InputLabel>
        <S.InputNumber type="number" />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputLabel>주관사</S.InputLabel>
        <S.InputNumber type="number" />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputLabel>메모</S.InputLabel>
        <S.InputText type="text" />
      </S.InputWrapper>
    </S.Container>
  );
}
export default PortfolioAdd;
