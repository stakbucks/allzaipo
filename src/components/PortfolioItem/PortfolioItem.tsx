import * as S from "./style";
import { IPortfolioItem } from "../../pages/Portfolio/interface";
function PortfolioItem({ item }: { item: IPortfolioItem }) {
  return (
    <S.Item key={item.portfolioId}>
      <S.ItemTitle>{item.agents}</S.ItemTitle>
      <S.ItemProfitRate>
        수익률: {item.profitRate}%
        <S.ProfitRangeBar>
          <S.ProfitRange profitRate={item.profitRate} />
        </S.ProfitRangeBar>
      </S.ItemProfitRate>
    </S.Item>
  );
}
export default PortfolioItem;
