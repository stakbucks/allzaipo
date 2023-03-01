import styled, { css, keyframes } from "styled-components";
import { rootCertificates } from "tls";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 50px;
  z-index: 0;
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
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const rotateBtn = keyframes`
  from{transform:none}
  to{transform: rotateZ(180deg)}
`;
const rotateBackBtn = keyframes`
  from{transform: rotateZ(180deg)}
  to{}
`;

export const DropdownBtn = styled.div<{ isDropdownOpen: boolean }>`
  ${(props) =>
    props.isDropdownOpen
      ? css`
          animation: ${rotateBtn} 0.2s linear alternate;
          transform: rotate(180deg);
        `
      : css`
          transform: 0;
          animation: ${rotateBackBtn} 0.2s linear alternate;
        `}

  box-sizing: border-box;
  margin-left: 5px;
  cursor: pointer;
`;
