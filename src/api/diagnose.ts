import axios, { AxiosResponse } from "axios";
import { IDecisiveDate, IDiagnoseAnswer, IDiagnoseResponse, IDiagnosisResult, IQuestion, ISiteDiagnose } from "src/interfaces/diagnosisApi";
import {
  IHeadacheAnswer,
  IBasicAnswers,
  ICaseQuestion,
  IFinalResult,
  IHeadacheQuestions,
  IPainAreaRequest,
  IPrimaryAnswers,
  IResultResponse,
  IResultRequest,
} from "src/interfaces/headacheDiagnoseApi";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/diagnose`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const diagnoseRequests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
};

export const SleepDisorderDiagnose = {
  getFirstQuestion: (): Promise<IQuestion> => diagnoseRequests.get(`/sleepdisorder/first`),
  postDecisiveQuestion: (body: IDecisiveDate): Promise<IDiagnosisResult> => diagnoseRequests.post(`/sleepdisorder/decisive`, body),
  postDiagnose: (body: IDiagnoseAnswer): Promise<IDiagnoseResponse> => diagnoseRequests.post(``, body),
};

export const HeadacheDiagnose = {
  getBasicQuestion: (): Promise<IHeadacheQuestions> => diagnoseRequests.get(`/headache/basic`),
  getRedFlagSign: (): Promise<IHeadacheQuestions> => diagnoseRequests.get(`/headache/red-flag-sign`),
  postRedFlagSign: (body: IBasicAnswers): Promise<ICaseQuestion> => diagnoseRequests.post(`/headache/red-flag-sign`, body),
  postPrimaryHeadache: (body: IPrimaryAnswers): Promise<ICaseQuestion> => diagnoseRequests.post(`/headache/primary-headache`, body),
  postNextPrimaryHeadache: (body: IHeadacheAnswer): Promise<ICaseQuestion> =>
    diagnoseRequests.post(`/headache/primary-headache/next`, body),
  postFirstHeadacheQuestion: (body: IPainAreaRequest): Promise<IHeadacheQuestions> =>
    diagnoseRequests.post(`/headache/pain-area/first`, body),
  postHeadacheQuestion: (body: IHeadacheAnswer): Promise<ICaseQuestion> => diagnoseRequests.post(`/headache/pain-area/next`, body),
  getAdditionalQuestion: (): Promise<IHeadacheQuestions> => diagnoseRequests.get(`/headache/additional-factor`),
  postAdditionalQuestion: (body: IHeadacheAnswer): Promise<IResultResponse> => diagnoseRequests.post(`/headache/additional-factor`, body),
  postResult: (body: IResultRequest): Promise<IFinalResult> => diagnoseRequests.post(`/headache/result`, body),
};
