import { diagnosisFetcher } from "./fetcher";
import { IDiagnoseResponse } from "src/interfaces/diagnoseApi/diagnosis";

export const BackpainDiagnose = {
  getQuestions: (): Promise<IDiagnoseResponse> => diagnosisFetcher.get(`/backpain`),
};
