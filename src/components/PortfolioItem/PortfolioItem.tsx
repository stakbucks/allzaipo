import * as S from "./style";
import { IPortfolioItem } from "../../pages/Portfolio/interface";
import { useState } from "react";
import SelectedPortfolioItem from "./SelectedPortfolioItem/SelelctedPortfolioItem";

function PortfolioItem({ item }: { item: IPortfolioItem }) {
  return (
    <S.Item whileHover={{ scale: 1.1 }}>
      <S.ItemTitle>{item.stockName}</S.ItemTitle>
      <S.ItemProfitRate>
        수익률: {item.profitRate}%
        <S.ProfitRangeBar>
          <S.ProfitRange
            profitRate={item.profitRate >= 300 ? 300 : item.profitRate}
          />
        </S.ProfitRangeBar>
      </S.ItemProfitRate>
    </S.Item>
  );
}
export default PortfolioItem;
