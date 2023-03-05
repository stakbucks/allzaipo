import axios from "axios";
import { baseApi } from "../utils/instance";
import { IAnalyzeInputs } from "../../components/forms/AnalyzeForm/interface";

const ANALYZE_RESULT_URI = "/api/ipo/analyze";

export const getAnalyzeResult = ({
  from,
  competitionRate,
  to,
  lockupRate,
}: IAnalyzeInputs) =>
  baseApi(ANALYZE_RESULT_URI, {
    params: { from, competitionRate, to, lockupRate },
  });
