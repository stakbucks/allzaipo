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
  top: 0;
`;

export const Container = styled.div`
  width: 800px;
  height: 600px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 35px;
  text-align: center;
  width: 760px;
  position: absolute;
  top: 30px;
`;

export const InputWrapper = styled.div`
  width: 800px;
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const InputLabel = styled.span`
  font-weight: 500;
  font-size: 20px;
  margin-right: 10px;
`;

export const IpoSelect = styled.select`
  width: 300px;
  height: 30px;
  font-weight: 400;
  font-size: 16px;
  position: absolute;
  left: 80px;
`;

export const InputNumber = styled.input`
  width: 300px;
  height: 25px;
  font-weight: 400;
  font-size: 16px;
  position: absolute;
  left: 80px;
`;
export const InputText = styled.input`
  width: 600px;
  height: 25px;
  font-weight: 400;
  font-size: 16px;
  position: absolute;
  left: 80px;
`;

export const AddBtn = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  border-radius: 5px;
  background: var(--bgColor);
  color: var(--mainColor);
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  right: 20px;
`;

export const XBtn = styled.div`
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  top: 30px;
  right: 20px;
  cursor: pointer;
`;
