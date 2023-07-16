import axios, { AxiosResponse } from "axios";
import { IUserMapResponse } from "src/interfaces/map";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/user/map`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const fetcher = {
  get: <T>(url: string, params?: object) => instance.get<T>(url, { params }).then(responseBody),
};

export const mapFetcher = {
  getUserMap(longitude: number, latitude: number): Promise<IUserMapResponse> {
    return fetcher.get(``, { longitude, latitude });
  },
};
