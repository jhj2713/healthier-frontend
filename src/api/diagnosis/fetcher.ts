import axios, { AxiosResponse } from "axios";
import type { IDDXResultResponse } from "src/interfaces/diagnoseApi/result";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/diagnosis`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const fetcher = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
};

export const diagnosisFetcher = {
  getDDXResult(dx_id: number): Promise<IDDXResultResponse> {
    return fetcher.get(`/${dx_id}`);
  },
};
