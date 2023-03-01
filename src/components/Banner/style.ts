import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 440px;
  background-color: var(--bgColor);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 50px;
  right: 0;
  z-index: -1;
`;
export const Wrapper = styled.div`
  width: 550px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 45px;
  font-weight: 700;
  margin: 10px 0;
  color: white;
`;
export const SubTitle = styled.div`
  font-size: 16px;
  color: white;
  margin: 10px 0;
  line-height: 130%;
  opacity: 0.6;
`;
