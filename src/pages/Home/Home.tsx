import Banner from "../../components/Banner/Banner";
import { Outlet, useLocation } from "react-router-dom";
import * as S from "./style";
import { useEffect } from "react";
import { getLoginStatus } from "../../apis/api/kakaoLoginApi";
import { useSetRecoilState } from "recoil";
import { loggedInInfoAtom } from "../../atoms/loggedInInfo/loggedInInfoAtom";
function Home() {
  return (
    <S.HomeContainer>
      <Banner />
    </S.HomeContainer>
  );
}
export default Home;
