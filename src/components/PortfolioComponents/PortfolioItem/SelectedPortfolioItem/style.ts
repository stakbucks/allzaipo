import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const Item = styled(motion.div)`
  width: 600px;
  height: 400px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  justify-content: center;
`;

export const ItemTitle = styled.div`
  width: 560px;
  text-align: center;
  position: absolute;
  top: 30px;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
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
  width: 560px;
  height: 12px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
`;

export const ProfitRange = styled.div<{ profitRate: number }>`
  width: ${(props) =>
    props.profitRate >= 0
      ? `calc((${props.profitRate} / 300) * 100%)`
      : `calc((${props.profitRate} / (-300)) * 100%)`};
  height: 100%;
  border-radius: 10px
    ${(props) => (props.profitRate === 300 ? "10px 10px" : "0 0")} 10px;
  background-color: ${(props) => (props.profitRate >= 0 ? "red " : "blue")};
  position: absolute;
`;

export const InfoWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

export const InfoLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
`;
export const Info = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 25px;
  gap: 20px;
`;

export const Btn = styled.div`
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;
export const XBtn = styled.div`
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  top: 30px;
  right: 20px;
  cursor: pointer;
`;
