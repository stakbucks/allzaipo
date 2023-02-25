import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 50px;
  background-color: var(--bgColor);
`;

export const Nav = styled.nav`
  height: 100%;
  width: 1210px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Row = styled.div<{ isActive: boolean }>`
  margin: 12px;
  font-size: 18px;
  ${(props) =>
    props.isActive
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.6;
        `}
  color:white;
`;
