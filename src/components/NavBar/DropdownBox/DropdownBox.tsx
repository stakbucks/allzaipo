import { getLoginStatus, getLogout } from "../../../apis/api/kakaoLoginApi";
import { ILoggedInInfoAtom } from "../../../atoms/loggedInInfo/interface";
import * as S from "./style";
import { useSetRecoilState } from "recoil";
import { loggedInInfoAtom } from "../../../atoms/loggedInInfo/loggedInInfoAtom";
function DropdownBox({ nickname }: { nickname: string | undefined }) {
  const setLoggedInInfo = useSetRecoilState(loggedInInfoAtom);
  const handleLogoutClick = async () => {
    await getLogout();
    await getLoginStatus().then((res) => setLoggedInInfo(res.data));
  };
  return (
    <S.DropdownBoxContainer>
      <S.DropdownItem>마이페이지</S.DropdownItem>
      <S.DropdownItem onClick={handleLogoutClick}>로그아웃</S.DropdownItem>
    </S.DropdownBoxContainer>
  );
}
export default DropdownBox;
