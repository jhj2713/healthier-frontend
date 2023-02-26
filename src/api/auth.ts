import axios, { AxiosResponse, AxiosResponseHeaders } from "axios";
import { IKakaoToken } from "src/interfaces/modal";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/oauth`,
  timeout: 15000,
});

const responseHeaders = (response: AxiosResponse) => response.headers;

const authRequests = {
  get: <T>(url: string) => instance.get<T>(url).then(responseHeaders),
};

export const Auth = {
  login: (token: string): Promise<AxiosResponseHeaders> => authRequests.get(`/kakao?access_token=${token}`),
};
