import * as S from "./style";
import { IPortfolioItem } from "../../pages/Portfolio/interface";
function PortfolioItem({ item }: { item: IPortfolioItem }) {
  return (
    <S.Item key={item.portfolioId}>
      <S.ItemTitle>{item.agents}</S.ItemTitle>
      <S.ItemProfitRate>{item.profitRate}</S.ItemProfitRate>
    </S.Item>
  );
}
export default PortfolioItem;
