import styled from "styled-components";

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
  margin-top: 50px;
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
