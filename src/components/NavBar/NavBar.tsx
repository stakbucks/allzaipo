import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./style";

function NavBar() {
  const location = useLocation();

  const checkIsActive = (to: string) => {
    if (location.pathname === to) return true;
    else return false;
  };

  return (
    <S.Container>
      <S.Nav>
        <S.Section>
          <S.Row isActive={true}>
            <Link to="/">알짜공모주</Link>
          </S.Row>
        </S.Section>
        <S.Section>
          <S.Row isActive={checkIsActive("/")}>
            <Link to="/">홈</Link>
          </S.Row>
          <S.Row isActive={checkIsActive("/analyze")}>
            <Link to="/analyze">공모주 분석</Link>
          </S.Row>
          <S.Row isActive={checkIsActive("/portfolio")}>
            <Link to="/portfolio">포트폴리오</Link>
          </S.Row>
          <S.Row isActive={checkIsActive("/login")}>로그인</S.Row>
        </S.Section>
      </S.Nav>
    </S.Container>
  );
}
export default NavBar;
