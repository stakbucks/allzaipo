import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import LoginModal from "../Modal/LoginModal/LoginModal";
import * as S from "./style";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginModalAtom } from "../../atoms/loginModalAtom/loginModal/loginModalAtom";
import { loggedInInfoAtom } from "../../atoms/loggedInInfo/loggedInInfoAtom";
import DropdownBox from "./DropdownBox/DropdownBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const loggedInInfo = useRecoilValue(loggedInInfoAtom);
  const [loginModalOpen, setLoginModalOpen] = useRecoilState(loginModalAtom);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const checkIsActive = (to: string) => {
    if (location.pathname === to) return true;
    else return false;
  };

  const handleClick = () => {
    setLoginModalOpen(true);
  };

  const handlePortfolioClick = () => {
    loggedInInfo.status ? navigate("/portfolio") : setLoginModalOpen(true);
  };

  const toggleDropdownOpen = () => setDropdownOpen((cur) => !cur);

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
          <S.Row
            onClick={handlePortfolioClick}
            isActive={checkIsActive("/portfolio")}
          >
            포트폴리오
          </S.Row>
          {loggedInInfo.status ? (
            <S.Row
              onClick={toggleDropdownOpen}
              style={{ color: "#1E90FF" }}
              isActive={true}
            >
              {loggedInInfo.nickname}님{" "}
              <S.DropdownBtn isDropdownOpen={dropdownOpen}>
                <FontAwesomeIcon icon={faChevronUp} />
              </S.DropdownBtn>
              {dropdownOpen ? (
                <DropdownBox nickname={loggedInInfo.nickname} />
              ) : null}
            </S.Row>
          ) : (
            <S.Row
              style={{ cursor: "pointer" }}
              isActive={false}
              onClick={handleClick}
            >
              로그인
            </S.Row>
          )}
        </S.Section>
      </S.Nav>
    </S.Container>
  );
}
export default NavBar;
