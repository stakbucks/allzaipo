import Banner from "../../components/Banner/Banner";
import { Outlet, useLocation } from "react-router-dom";
import * as S from "./style";
import { useEffect } from "react";
import { getLoginStatus } from "../../api/kakaoLoginApi";
function Home() {
  useEffect(() => {
    getLoginStatus().then((res) => console.log(res));
  });
  return (
    <S.HomeContainer>
      <Banner />
    </S.HomeContainer>
  );
}
export default Home;
