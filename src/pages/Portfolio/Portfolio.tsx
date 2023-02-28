import { getUserPortfolios } from "../../api/kakaoLoginApi";

import { useEffect } from "react";
function Portfolio() {
  useEffect(() => {
    getUserPortfolios().then((res) => console.log(res));
  }, []);
  return <></>;
}
export default Portfolio;
