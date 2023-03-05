import styled from "styled-components";
export const Item = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  padding: 5px;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ItemTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
export const ItemProfitRate = styled.div`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const ProfitRangeBar = styled.div`
  width: 180px;
  height: 12px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const ProfitRange = styled.div<{ profitRate: number }>`
  width: ${(props) =>
    props.profitRate >= 0
      ? `calc((${props.profitRate} / 300) * 100%)`
      : `calc((${props.profitRate} / (-300)) * 100%)`};
  height: 100%;
  border-radius: 10px 0 0 10px;
  background-color: ${(props) => (props.profitRate >= 0 ? "red " : "blue")};
  position: absolute;
`;
