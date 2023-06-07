import axios, { AxiosResponse } from "axios";
import { IDiagnoseResponse } from "src/interfaces/diagnoseApi/diagnosis";
import { TDiagnoseType } from "src/interfaces/diagnoseApi/diagnosis";
import { DIAGNOSE_TYPE } from "../../utils/diagnosis";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/diagnose`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const fetcher = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
};

export const diagnosisFetcher = {
  getQuestions(diagnosisType: TDiagnoseType, gender: string): Promise<IDiagnoseResponse> {
    if (diagnosisType === DIAGNOSE_TYPE.stomach) {
      return fetcher.get(`/stomach?gender=${gender === "f" ? "female" : "male"}`);
    } else if (diagnosisType === DIAGNOSE_TYPE.backpain) {
      return fetcher.get(`/backpain`);
    } else if (diagnosisType === DIAGNOSE_TYPE.diarrhea) {
      return fetcher.get(`/diarrhea`);
    } else if (diagnosisType === DIAGNOSE_TYPE.bloodystool) {
      return fetcher.get(`/bloodystool`);
    }

    throw new Error(`Invalid diagnosis type: ${diagnosisType}`);
  },
};
