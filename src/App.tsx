import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";

const Wrapper = styled.body`
  width: 1210px;
`;

function App() {
  return (
    <Wrapper>
      <NavBar />
      <Outlet />
    </Wrapper>
  );
}

export default App;
