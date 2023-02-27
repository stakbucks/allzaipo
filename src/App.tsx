import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import { useRecoilState } from "recoil";
import { loginModalAtom } from "./atoms/loginModalAtom/loginModalAtom";
import LoginModal from "./components/Modal/LoginModal/LoginModal";

const Wrapper = styled.div`
  width: 1210px;
`;

function App() {

  return (
    <Wrapper>
      <NavBar />
      <LoginModal />
      <Outlet />
    </Wrapper>
  );
}

export default App;
