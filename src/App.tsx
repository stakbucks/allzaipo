import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loginModalAtom } from "./atoms/loginModalAtom/loginModal/loginModalAtom";
import LoginModal from "./components/Modal/LoginModal/LoginModal";
import { getLoginStatus } from "./apis/api/kakaoLoginApi";
import { loggedInInfoAtom } from "./atoms/loggedInInfo/loggedInInfoAtom";
import { useQuery } from "react-query";
import { ILoggedInInfoAtom } from "./atoms/loggedInInfo/interface";

const Wrapper = styled.div`
  width: 1210px;
`;

function App() {
  const setLoggedInInfo = useSetRecoilState(loggedInInfoAtom);
  const { data } = useQuery<ILoggedInInfoAtom>(
    ["loginStatus"],
    getLoginStatus,
    {
      onSuccess: (data) => setLoggedInInfo(data),
    }
  );
  return (
    <Wrapper>
      <NavBar />
      <LoginModal />
      <Outlet />
    </Wrapper>
  );
}

export default App;
