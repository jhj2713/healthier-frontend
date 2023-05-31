import axios, { AxiosResponse } from "axios";
import { IDiagnoseResponse } from "src/interfaces/diagnoseApi/diagnosis";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/diagnose`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const diarrheaRequests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
};

export const DiarrheaDiagnose = {
  getDiarrhea: (): Promise<IDiagnoseResponse> => diarrheaRequests.get(`/diarrhea`),
};
