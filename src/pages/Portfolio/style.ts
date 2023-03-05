import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  margin-top: 30px;
  width: 1200px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  row-gap: 20px;
`;

export const AddBtn = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  border-radius: 5px;
  background: var(--bgColor);
  color: var(--mainColor);
  cursor: pointer;
`;

export const ItemContainer = styled(motion.div)`
  width: 220px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;
