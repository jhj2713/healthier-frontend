import axios, { AxiosResponse } from "axios";
import { IDiagnosisList, IDiagnosisPatchData, IDiagnosisResult } from "src/interfaces/diagnosisApi";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/diagnosis`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const diagnosisRequests = {
  get: <T>(url: string, token?: string) =>
    instance
      .get<T>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(responseBody),
  patch: <T>(url: string, body: T, token: string) =>
    instance
      .patch<T>(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(responseBody),
};

export const Diagnosis = {
  patchDiagnosis: (body: IDiagnosisPatchData, token: string): Promise<IDiagnosisList> => diagnosisRequests.patch(`/results`, body, token),
  getDiagnosis: (token: string): Promise<IDiagnosisList> => diagnosisRequests.get(`/results`, token),
  getDiagnosisDetail: (id: string): Promise<IDiagnosisResult> => diagnosisRequests.get(`/results/${id}`),
};
