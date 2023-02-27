import Banner from "../../components/Banner/Banner";
import { Outlet, useLocation } from "react-router-dom";
import * as S from "./style";
function Home() {
  const location = useLocation();
  console.log(location.search.split("=")[1]);
  return (
    <S.HomeContainer>
      <Banner />
    </S.HomeContainer>
  );
}
export default Home;
