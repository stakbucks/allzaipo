import { motion } from "framer-motion";
import styled from "styled-components";

export const Item = styled(motion.div)`
  width: 600px;
  height: 400px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemTitle = styled.div`
  position: absolute;
  top: 30px;
  font-size: 30px;
  font-weight: 700;
`;
export const ItemProfitRate = styled.div`
  margin-top: 50px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const ProfitRangeBar = styled.div`
  width: 400px;
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
