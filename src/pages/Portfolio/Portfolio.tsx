import * as S from "./style";
import { useQuery } from "react-query";
import { IPortfolio } from "./interface";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import { getUserPortfolios } from "../../apis/api/portfolioApi";
import { useRecoilValue } from "recoil";
import { loggedInInfoAtom } from "../../atoms/loggedInInfo/loggedInInfoAtom";
import { ILoggedInInfoAtom } from "../../atoms/loggedInInfo/interface";
import { useNavigate } from "react-router-dom";
function Portfolio() {
  const navigate = useNavigate();
  const loggedInInfo = useRecoilValue<ILoggedInInfoAtom>(loggedInInfoAtom);

  const { data } = useQuery<IPortfolio>(
    ["portfolio", loggedInInfo.data.nickname],
    getUserPortfolios
  );
  
  if (!loggedInInfo.data.status) navigate("/");


  return (
    <S.Wrapper>
      <S.Title>포트폴리오</S.Title>
      <S.Container>
        {data?.data.map((item) => (
          <PortfolioItem key={item.portfolioId} item={item} />
        ))}
      </S.Container>
    </S.Wrapper>
  );
}
export default Portfolio;
