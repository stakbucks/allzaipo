import { useMutation, useQueryClient } from "react-query";
import { getLogout, getLoginStatus } from "../apis/api/kakaoLoginApi";

function useLogout() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(getLogout, {
    onSuccess: () => queryClient.invalidateQueries(["loginStatus"]),
  });

  const handleLogout = async () => {
    mutate();
  };
  return { handleLogout };
}
export default useLogout;
