import * as S from "./style";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { getAnalyzeResult } from "../../../apis/api/analyzeApi";
import { IAnalyzeInputs, IAnalyzeResult } from "./interface";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { analyzeResultAtom } from "../../../atoms/analyzeResultAtom/analyzeResultAtom";

function AnalyzeForm() {
  const { register, handleSubmit, watch } = useForm();
  const [submit, setSubmit] = useState(false);
  const analyzeInputs = watch();
  const setAnalyzeResultAtom = useSetRecoilState(analyzeResultAtom);
  const { data, refetch } = useQuery(
    ["analyzeResult"],
    () => getAnalyzeResult(analyzeInputs),
    {
      enabled: !!submit,
      onSuccess: ({ data }: { data: IAnalyzeResult[] }) =>
        setAnalyzeResultAtom(data),
    }
  );
  const onValid = () => {
    submit ? refetch() : setSubmit(true);
  };

  return (
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
      <S.SubmitBtn>제출</S.SubmitBtn>
    </S.Form>
  );
}
export default AnalyzeForm;
