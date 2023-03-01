import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 50px;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin: 50px 0;
`;

export const Container = styled.div`
  padding-top: 50px;
  width: 1200px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
