import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loginModalAtom } from "./atoms/loginModalAtom/loginModal/loginModalAtom";
import LoginModal from "./components/Modal/LoginModal/LoginModal";
import { getLoginStatus } from "./apis/api/kakaoLoginApi";
import { loggedInInfoAtom } from "./atoms/loggedInInfo/loggedInInfoAtom";

const Wrapper = styled.div`
  width: 1210px;
`;

function App() {
  const setLoggedInInfo = useSetRecoilState(loggedInInfoAtom);
  useEffect(() => {
    getLoginStatus().then((res) => {
      console.log(res.data);
      setLoggedInInfo(res.data);
    });
  });
  return (
    <Wrapper>
      <NavBar />
      <LoginModal />
      <Outlet />
    </Wrapper>
  );
}

export default App;
