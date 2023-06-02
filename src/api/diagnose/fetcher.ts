import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/diagnose`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const diagnosisFetcher = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
};
