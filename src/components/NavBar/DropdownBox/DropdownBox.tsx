import { getLoginStatus, getLogout } from "../../../apis/api/kakaoLoginApi";
import { ILoggedInInfoAtom } from "../../../atoms/loggedInInfo/interface";
import * as S from "./style";
import { useSetRecoilState } from "recoil";
import { loggedInInfoAtom } from "../../../atoms/loggedInInfo/loggedInInfoAtom";
import useLogout from "../../../hooks/useLogout";
function DropdownBox({ nickname }: { nickname: string | undefined }) {
  const { handleLogout } = useLogout();
  const handleLogoutClick = () => {
    handleLogout();
  };
  return (
    <S.DropdownBoxContainer>
      <S.DropdownItem>마이페이지</S.DropdownItem>
      <S.DropdownItem onClick={handleLogoutClick}>로그아웃</S.DropdownItem>
    </S.DropdownBoxContainer>
  );
}
export default DropdownBox;
