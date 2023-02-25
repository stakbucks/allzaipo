import * as S from "./style";
import { Container } from "../NavBar/style";

function Banner() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>돈이 되는 공모주만</S.Title>
        <S.Title>알림 받아보세요!</S.Title>
        <S.SubTitle>
          공모주 분석, 사용자 맞춤 알림, 개인 포트폴리오 등 다양한 기능을
          제공합니다.
        </S.SubTitle>
      </S.Wrapper>
    </S.Container>
  );
}
export default Banner;
