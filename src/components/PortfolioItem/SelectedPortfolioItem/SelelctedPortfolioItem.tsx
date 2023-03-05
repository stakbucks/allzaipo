import { deletePortfolioItem } from "../../../apis/api/portfolioApi";
import { IPortfolioItem } from "../../../pages/Portfolio/interface";
import * as S from "./style";
import { useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { loggedInInfoAtom } from "../../../atoms/loggedInInfo/loggedInInfoAtom";
function SelectedPortfolioItem({ item }: { item: IPortfolioItem }) {
  const queryClient = useQueryClient();
  const loggedInInfo = useRecoilValue(loggedInInfoAtom);
  const handleEditClick = () => {};
  const handleDeleteClick = async () => {
    await deletePortfolioItem(item);
    queryClient.invalidateQueries(["portfolio", loggedInInfo.data.nickname]);
  };
  return (
    <S.Item layoutId={item.portfolioId + ""}>
      <S.ItemTitle>{item.stockName}</S.ItemTitle>
      <S.InfoWrapper>
        <S.InfoLabel>수익률: {item.profitRate}%</S.InfoLabel>
      </S.InfoWrapper>
      <S.ProfitRangeBar>
        <S.ProfitRange profitRate={item.profitRate} />
      </S.ProfitRangeBar>
      <S.InfoWrapper>
        <S.InfoLabel>청약일: </S.InfoLabel>
        <S.Info>{" " + item.subscribeStartDate}</S.Info>
      </S.InfoWrapper>
      <S.InfoWrapper>
        <S.InfoLabel>상장일: </S.InfoLabel>
        <S.Info>{" " + item.subscribeEndDate}</S.Info>
      </S.InfoWrapper>
      <S.InfoWrapper>
        <S.InfoLabel>증권사: </S.InfoLabel>
        <S.Info>{" " + item.agents}</S.Info>
      </S.InfoWrapper>
      <S.InfoWrapper>
        <S.InfoLabel>공모가: </S.InfoLabel>
        <S.Info>{" " + item.fixedOfferingPrice}</S.Info>
      </S.InfoWrapper>
      <S.InfoWrapper>
        <S.InfoLabel>수익: </S.InfoLabel>
        <S.Info>{" " + item.profit}</S.Info>
      </S.InfoWrapper>
      <S.InfoWrapper>
        <S.InfoLabel>메모: </S.InfoLabel>
        <S.Info>{" " + item.memo}</S.Info>
      </S.InfoWrapper>
      <S.Btns>
        <S.Btn onClick={handleEditClick}>수정</S.Btn>
        <S.Btn onClick={handleDeleteClick}>삭제</S.Btn>
      </S.Btns>
    </S.Item>
  );
}
export default SelectedPortfolioItem;
