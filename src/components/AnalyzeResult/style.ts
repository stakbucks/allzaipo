import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AverageProfitRate = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: var(--mainColor);
`;

export const Container = styled.div`
  margin-top: 20px;
  width: 1300px;
  height: 80px;
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 1fr 2fr 2fr 1fr 1fr 1fr;
  justify-items: center;
  margin: 0px;
  align-items: center;

  &:nth-child(2n-1) {
    background-color: wheat;
  }
  &:first-child {
    align-items: flex-end;
  }
`;

export const Labels = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

export const Info = styled.div`
  font-weight: 500;
  font-size: 15px;
`;
