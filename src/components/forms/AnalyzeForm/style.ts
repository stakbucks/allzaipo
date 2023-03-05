import styled from "styled-components";

export const Form = styled.form`
  width: 800px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: flex-end;
  font-size: 16px;
  border: 1.5px solid black;
  border-radius: 5px;
`;

export const SubmitBtn = styled.button`
  width: 60px;
  height: 40px;
  border: none;
  font-weight: 400;
  font-size: 18px;
  border-radius: 5px;
  background: var(--bgColor);
  color: var(--mainColor);
  grid-column-start: 1;
  grid-column-end: 3;
  cursor: pointer;
`;
