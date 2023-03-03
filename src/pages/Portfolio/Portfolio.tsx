import * as S from "./style";
import { useQuery } from "react-query";
import { IPortfolio } from "./interface";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import { getUserPortfolios } from "../../apis/api/portfolioApi";
import { useRecoilValue } from "recoil";
import { loggedInInfoAtom } from "../../atoms/loggedInInfo/loggedInInfoAtom";
import { ILoggedInInfoAtom } from "../../atoms/loggedInInfo/interface";
function Portfolio() {
  const loggedInInfo = useRecoilValue<ILoggedInInfoAtom>(loggedInInfoAtom);
  const { data } = useQuery<IPortfolio>(
    ["portfolio", loggedInInfo.nickname],
    getUserPortfolios
  );
  console.log(data?.data);
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
