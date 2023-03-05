import * as S from "./style";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { getAnalyzeResult } from "../../../apis/api/analyzeApi";
import { IAnalyzeInputs, IAnalyzeResult } from "./interface";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { analyzeResultAtom } from "../../../atoms/analyzeResultAtom/analyzeResultAtom";

function AnalyzeForm() {
  const { register, handleSubmit, watch, getValues } = useForm();
  const [submit, setSubmit] = useState(false);
  const [noData, setNoData] = useState(false);
  const analyzeInputs = watch();
  const values = getValues();
  const setAnalyzeResultAtom = useSetRecoilState(analyzeResultAtom);
  const { data, refetch } = useQuery(
    ["analyzeResult"],
    () => getAnalyzeResult(analyzeInputs),
    {
      enabled: !!submit,
      onSuccess: ({ data }: { data: IAnalyzeResult[] }) => {
        if (data.length === 0) {
          //조건에 맞는 공모주가 없는 경우
          setNoData(true);
        } else setNoData(false);
        return setAnalyzeResultAtom(data);
      },
      onError: () => {
        //에러가 난 경우, 조건에 맞는 공모주가 없는 걸로 판단
        setNoData(true);
        return setAnalyzeResultAtom([]);
      },
      retry: false,
    }
  );
  const onValid = () => {
    submit ? refetch() : setSubmit(true);
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onValid)}>
        <S.InputWrapper>
          <S.InputLabel>언제부터</S.InputLabel>
          <S.Input {...register("from", { required: true })} type="number" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputLabel>최소 기관경쟁률</S.InputLabel>
          <S.Input
            {...register("competitionRate", { required: true })}
            type="number"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputLabel>언제까지</S.InputLabel>
          <S.Input {...register("to", { required: true })} type="number" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputLabel>최소 의무보유확약비율</S.InputLabel>
          <S.Input
            {...register("lockupRate", { required: true })}
            type="number"
          />
        </S.InputWrapper>
        <S.SubmitBtn>확인</S.SubmitBtn>
      </S.Form>
      {noData ? (
        <S.InputLabel>조건에 맞는 공모주가 없습니다.</S.InputLabel>
      ) : null}
    </>
  );
}
export default AnalyzeForm;
