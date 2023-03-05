import * as S from "./style";
import * as PS from "../../styles/PageStyle";
import { useQuery } from "react-query";
import { IPortfolio } from "./interface";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import { getUserPortfolios } from "../../apis/api/portfolioApi";
import { useRecoilValue } from "recoil";
import { loggedInInfoAtom } from "../../atoms/loggedInInfo/loggedInInfoAtom";
import { ILoggedInInfoAtom } from "../../atoms/loggedInInfo/interface";
import { Outlet, useNavigate } from "react-router-dom";
function Portfolio() {
  const navigate = useNavigate();
  const loggedInInfo = useRecoilValue<ILoggedInInfoAtom>(loggedInInfoAtom);
  const { data } = useQuery<IPortfolio>(
    ["portfolio", loggedInInfo.data.nickname],
    getUserPortfolios,
    { staleTime: 30000 }
  );

  if (!loggedInInfo.data.status) navigate("/");

  const handleAdd = () => {
    navigate("/");
  };

  return (
    <PS.Wrapper>
      <PS.Title>포트폴리오</PS.Title>
      <S.AddBtn onClick={handleAdd}>추가하기</S.AddBtn>
      <S.Container>
        {data?.data.map((item) => (
          <PortfolioItem key={item.portfolioId} item={item} />
        ))}
      </S.Container>
    </PS.Wrapper>
  );
}
export default Portfolio;
