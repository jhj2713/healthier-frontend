import axios, { AxiosResponse } from "axios";
import { IDiagnoseResponse } from "src/interfaces/diagnoseApi/diagnosis";
import { TDiagnoseType } from "src/interfaces/diagnoseApi/diagnosis";

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
    if (diagnosisType === "급성복통") {
      return fetcher.get(`/stomach?gender=${gender === "f" ? "female" : "male"}`);
    } else if (diagnosisType === "허리통증") {
      return fetcher.get(`/backpain`);
    }

    throw new Error(`Invalid diagnosis type: ${diagnosisType}`);
  },
};