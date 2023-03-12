import axios, { AxiosResponse } from "axios";
import { IDecisiveDate, IDiagnoseAnswer, IDiagnoseResponse, IDiagnosisResult, IQuestion } from "src/interfaces/diagnosisApi";
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
  IHeadacheAnswers,
} from "src/interfaces/headacheDiagnoseApi";

const sleepDisorderInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/diagnose`,
  timeout: 15000,
});
const headacheInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/v2/diagnose/headache`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const sleepDisorderRequests = {
  get: <T>(url: string) => sleepDisorderInstance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => sleepDisorderInstance.post<T>(url, body).then(responseBody),
};
const headacheRequests = {
  get: <T>(url: string) => headacheInstance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => headacheInstance.post<T>(url, body).then(responseBody),
};

export const SleepDisorderDiagnose = {
  getFirstQuestion: (): Promise<IQuestion> => sleepDisorderRequests.get(`/sleepdisorder/first`),
  postDecisiveQuestion: (body: IDecisiveDate): Promise<IDiagnosisResult> => sleepDisorderRequests.post(`/sleepdisorder/decisive`, body),
  postDiagnose: (body: IDiagnoseAnswer): Promise<IDiagnoseResponse> => sleepDisorderRequests.post(``, body),
};

export const HeadacheDiagnose = {
  getBasicQuestion: (): Promise<IHeadacheQuestions> => headacheRequests.get(`/basic`),
  getRedFlagSign: (): Promise<IHeadacheQuestions> => headacheRequests.get(`/red-flag-sign`),
  postRedFlagSign: (body: IBasicAnswers): Promise<ICaseQuestion> => headacheRequests.post(`/red-flag-sign`, body),
  postPrimaryHeadache: (body: IPrimaryAnswers): Promise<ICaseQuestion> => headacheRequests.post(`/primary-headache`, body),
  postNextPrimaryHeadache: (body: IHeadacheAnswer): Promise<ICaseQuestion> => headacheRequests.post(`/primary-headache/next`, body),
  postFirstHeadacheQuestion: (body: IPainAreaRequest): Promise<IHeadacheQuestions> => headacheRequests.post(`/pain-area/first`, body),
  postHeadacheQuestion: (body: IHeadacheAnswer): Promise<ICaseQuestion> => headacheRequests.post(`/pain-area/next`, body),
  getAdditionalQuestion: (): Promise<IHeadacheQuestions> => headacheRequests.get(`/additional-factor`),
  postAdditionalQuestion: (body: IHeadacheAnswers): Promise<IResultResponse> => headacheRequests.post(`/additional-factor`, body),
  postResult: (body: IResultRequest): Promise<IFinalResult> => headacheRequests.post(`/result`, body),
};
