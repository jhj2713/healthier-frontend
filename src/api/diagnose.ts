import axios, { AxiosResponse } from "axios";
import { IDecisiveDate, IDiagnoseAnswer, IDiagnoseResponse, IDiagnosisResult, IQuestion, ISiteDiagnose } from "src/interfaces/diagnosisApi";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/diagnose`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const diagnoseRequests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
};

export const Diagnose = {
  getFirstQuestion: (state: string): Promise<IQuestion> => diagnoseRequests.get(`/${state}/first`),
  postDecisiveQuestion: (state: string, body: IDecisiveDate): Promise<IDiagnosisResult> =>
    diagnoseRequests.post(`/${state}/decisive`, body),
  postDiagnose: (body: IDiagnoseAnswer): Promise<IDiagnoseResponse> => diagnoseRequests.post(``, body),
  postSiteDiagnose: (body: ISiteDiagnose): Promise<IDiagnoseResponse> => diagnoseRequests.post(`/headache/last-default`, body),
};
