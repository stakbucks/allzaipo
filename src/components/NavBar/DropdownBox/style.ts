import styled from "styled-components";
export const DropdownBoxContainer = styled.div`
  width: 200%;
  height: 60px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  padding: 5px;
  top: 35px;
  z-index: 100;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px black;
`;

export const DropdownItem = styled.div`
  margin: 5px;
  font-size: 16px;
  font-weight: 400;
  color: black;
  cursor: pointer;
`;
