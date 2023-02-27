import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;
export const Modal = styled.div`
  width: 400px;
  height: 250px;
  background-color: var(--bgColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  border-radius: 15px;
  position: absolute;
`;
export const Title = styled.div`
  font-weight: 400;
  font-size: 25px;
  color: white;
`;
export const XBtn = styled.button`
  border: none;
  background: inherit;
  font-size: 15px;
  position: absolute;
  right: 20px;
  top: 20px;
  color: white;
  opacity: 0.7;
  cursor: pointer;
`;

export const KakaoLoginBtn = styled.img`
  margin-top: 70px;
  cursor: pointer;
`;
