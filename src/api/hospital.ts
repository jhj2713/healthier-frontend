import axios, { AxiosResponse } from "axios";
import type { ISoap } from "src/interfaces/diagnoseApi/hospital";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOSPITAL_URL}`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const fetcher = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
};

export const hospitalFetcher = {
  postSoap({ userId, hospitalId }: ISoap) {
    return fetcher.post("/soaps", {
      user_id: userId,
      hospital_id: hospitalId,
    });
  },
};
