import axios, { AxiosResponse } from "axios";
import { IDiagnoseResponse } from "src/interfaces/diagnoseApi/diagnosis";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/diagnose`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const stomachRequests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
};

export const StomachDiagnose = {
  getStomach: (query: string): Promise<IDiagnoseResponse> => stomachRequests.get(`/stomach?gender=${query}`),
};
