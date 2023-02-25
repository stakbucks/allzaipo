import { useEffect, useState } from "react";
import { Link, useLocation, useMatches } from "react-router-dom";
import * as S from "./style";

function NavBar() {
  const location = useLocation();
  const matches = useMatches();

  return (
    <S.Container>
      <S.Nav>
        <S.Section>
          <S.Row location={location.pathname} to={"/"}>
            <Link to="/">알짜공모주</Link>
          </S.Row>
        </S.Section>
        <S.Section>
          <S.Row location={`${location.pathname}`} to={"/analyze"}>
            <Link to="/analyze">공모주 분석</Link>
          </S.Row>
          <S.Row location={`${location.pathname}`} to={"/portfolio"}>
            <Link to="/portfolio">포트폴리오</Link>
          </S.Row>
          <S.Row location={`${location.pathname}`} to={"/login"}>
            로그인
          </S.Row>
        </S.Section>
      </S.Nav>
    </S.Container>
  );
}
export default NavBar;
