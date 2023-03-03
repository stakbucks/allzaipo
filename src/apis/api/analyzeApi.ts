import axios from "axios";
import { baseApi } from "../utils/instance";
import { IAnalyzeInputs } from "../../components/forms/AnalyzeForm/interface";

const ANALYZE_RESULT_URI = "/api/ipo/analyze-result";

export const getAnalyzeResult = ({
  from,
  competitionRate,
  to,
  lockupRate,
}: IAnalyzeInputs) =>
  baseApi(`/api/getIpoAnalyzeResult`, {
    params: { from, competitionRate, to, lockupRate },
  });
