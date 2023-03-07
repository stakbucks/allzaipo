import * as S from "../style";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getIpoList,
  postPortfolioCreate,
} from "../../../../apis/api/portfolioApi";
import { IIpoList } from "../../../../pages/Portfolio/interface";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { loggedInInfoAtom } from "../../../../atoms/loggedInInfo/loggedInInfoAtom";
import { ILoggedInInfoAtom } from "../../../../atoms/loggedInInfo/interface";
import { IPortfolioAddForm } from "../../../../interfaces/Portfolio/interface";

function PortfolioAdd({
  setAdding,
}: {
  setAdding: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { register, handleSubmit } = useForm<IPortfolioAddForm>();
  const loggedInInfo = useRecoilValue<ILoggedInInfoAtom>(loggedInInfoAtom);
  const queryClient = useQueryClient();

  const { data: ipoList } = useQuery<IIpoList>(["ipoList"], getIpoList, {
    staleTime: 30000,
  });

  const { mutateAsync } = useMutation((newPortfolio: IPortfolioAddForm) =>
    postPortfolioCreate(newPortfolio)
  );

  const handleXClick = () => {
    setAdding(false);
  };

  const onValid = async (newPortfolio: IPortfolioAddForm) => {
    await mutateAsync(newPortfolio);
    await queryClient.invalidateQueries([
      "portfolio",
      loggedInInfo.data.nickname,
    ]);
    setAdding(false);
  };

  return (
    <S.ModalWrapper>
      <S.Container>
        <S.Title>추가하기</S.Title>
        <S.Form onSubmit={handleSubmit(onValid)}>
          <S.InputWrapper>
            <S.InputLabel>종목명</S.InputLabel>
            <S.IpoSelect
              {...register("stockCode", { required: true })}
              name="stockCode"
            >
              <option value="none">=== 선택 ===</option>
              {ipoList?.data.map((i) => (
                <option value={i.stockCode} key={i.stockCode}>
                  {i.stockName}
                </option>
              ))}
            </S.IpoSelect>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputLabel>배정수량</S.InputLabel>
            <S.InputNumber
              {...register("sharesCnt", { required: true })}
              type="number"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputLabel>순수익</S.InputLabel>
            <S.InputNumber
              {...register("profit", { required: true })}
              type="number"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputLabel>증권사</S.InputLabel>
            <S.InputText
              {...register("agents", { required: true })}
              type="text"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputLabel>메모</S.InputLabel>
            <S.InputText {...register("memo")} type="text" />
          </S.InputWrapper>
          <S.AddBtn>제출</S.AddBtn>
        </S.Form>
        <S.XBtn onClick={handleXClick}>X</S.XBtn>
      </S.Container>
    </S.ModalWrapper>
  );
}
export default PortfolioAdd;
