import * as S from "./style";
import { useMatch, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginModalAtom } from "../../../atoms/loginModalAtom/loginModal/loginModalAtom";
import axios from "axios";

const REST_API_KEY = "18f4aac8de07396e2c22375ac689ee09";
const REDIRECT_URI = "http://localhost:3000";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

function LoginModal() {
  const [loginModalOpen, setLoginModalOpen] = useRecoilState(loginModalAtom);
  const handleXClick = () => {
    setLoginModalOpen(false);
  };
  const handleLoginClick = () => {
    window.location.href = "https://alzzaipo.com/login/kakao";
  };
  return (
    <>
      {loginModalOpen ? (
        <S.Wrapper>
          <S.Modal>
            <S.Title>알짜 공모주</S.Title>
            <S.XBtn onClick={handleXClick}>X</S.XBtn>
            <S.KakaoLoginBtn
              onClick={handleLoginClick}
              src="images/KakaoLogin/kakao.png"
            />
          </S.Modal>
        </S.Wrapper>
      ) : null}
    </>
  );
}
export default LoginModal;
