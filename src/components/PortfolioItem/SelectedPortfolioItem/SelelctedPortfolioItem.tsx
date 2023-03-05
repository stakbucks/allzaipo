import { IPortfolioItem } from "../../../pages/Portfolio/interface";
import * as S from "./style";
function SelectedPortfolioItem({ item }: { item: IPortfolioItem }) {
  return (
    <S.Item
      layoutId={item.portfolioId + ""}
    >
      <S.ItemTitle>{item.stockName}</S.ItemTitle>
      <S.ItemProfitRate>수익률: {item.profitRate}%</S.ItemProfitRate>
      <S.ProfitRangeBar>
        <S.ProfitRange profitRate={item.profitRate} />
      </S.ProfitRangeBar>
    </S.Item>
  );
}
export default SelectedPortfolioItem;
