import AnalyzeResult from "../../components/AnalyzeResult/AnalyzeResult";
import AnalyzeForm from "../../components/forms/AnalyzeForm/AnalyzeForm";
import * as PS from "../../styles/PageStyle";
import * as S from "./style";

function Analyze() {
  return (
    <PS.Wrapper>
      <PS.Title>공모주 분석</PS.Title>
      <AnalyzeForm />
      <AnalyzeResult />
    </PS.Wrapper>
  );
}
export default Analyze;
