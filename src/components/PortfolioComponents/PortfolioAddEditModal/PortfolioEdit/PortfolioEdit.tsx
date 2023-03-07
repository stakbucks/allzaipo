import { useForm } from "react-hook-form";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import {
  getIpoList,
  postPortfolioCreate,
  putPortfolioUpdate,
} from "../../../../apis/api/portfolioApi";
import { ILoggedInInfoAtom } from "../../../../atoms/loggedInInfo/interface";
import { loggedInInfoAtom } from "../../../../atoms/loggedInInfo/loggedInInfoAtom";
import {
  IIpoList,
  IPortfolioItem,
} from "../../../../pages/Portfolio/interface";
import {
  IPortfolioAddForm,
  IPortfolioEditForm,
} from "../../../../interfaces/Portfolio/interface";
import * as S from "../style";

function PortfolioEdit({
  item,
  setEditing,
  setSelected,
}: {
  item: IPortfolioItem;
  setEditing: React.Dispatch<
    React.SetStateAction<IPortfolioItem | null | undefined>
  >;
  setSelected: React.Dispatch<
    React.SetStateAction<IPortfolioItem | null | undefined>
  >;
}) {
  const { register, handleSubmit } = useForm<IPortfolioAddForm>();
  const loggedInInfo = useRecoilValue<ILoggedInInfoAtom>(loggedInInfoAtom);
  const queryClient = useQueryClient();

  const { data: ipoList } = useQuery<IIpoList>(["ipoList"], getIpoList, {
    staleTime: 30000,
  });

  const { mutateAsync } = useMutation((editedPortfolio: IPortfolioEditForm) =>
    putPortfolioUpdate(editedPortfolio)
  );

  const handleXClick = () => {
    setEditing(null);
  };

  const onValid = async (editedPortfolioForm: IPortfolioAddForm) => {
    await mutateAsync({
      portfolioId: item.portfolioId,
      ...editedPortfolioForm,
    });
    await queryClient.invalidateQueries([
      "portfolio",
      loggedInInfo.data.nickname,
    ]);
    setEditing(null);
  };

  return (
    <S.ModalWrapper>
      <S.Container>
        <S.Title>수정</S.Title>
        <S.Form onSubmit={handleSubmit(onValid)}>
          <S.InputWrapper>
            <S.InputLabel>종목명</S.InputLabel>
            <S.IpoSelect
              defaultValue={item.stockCode}
              {...register("stockCode", { required: true })}
              name="stockCode"
            >
              <option value={item.stockCode}>{item.stockName}</option>
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
              defaultValue={item.sharesCnt}
              {...register("sharesCnt", { required: true })}
              type="number"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputLabel>순수익</S.InputLabel>
            <S.InputNumber
              defaultValue={item.profit}
              {...register("profit", { required: true })}
              type="number"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputLabel>증권사</S.InputLabel>
            <S.InputText
              defaultValue={item.agents}
              {...register("agents", { required: true })}
              type="text"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputLabel>메모</S.InputLabel>
            <S.InputText
              defaultValue={item.memo}
              {...register("memo")}
              type="text"
            />
          </S.InputWrapper>
          <S.AddBtn>제출</S.AddBtn>
        </S.Form>
        <S.XBtn onClick={handleXClick}>X</S.XBtn>
      </S.Container>
    </S.ModalWrapper>
  );
}
export default PortfolioEdit;
