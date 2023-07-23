import axios, { AxiosResponse } from "axios";
import { IUserMapResponse, IHospitalDetailInfo } from "src/interfaces/map";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/map`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const fetcher = {
  get: <T>(url: string, params?: object) => instance.get<T>(url, { params }).then(responseBody),
};

export interface mapBoxRequest {
  mapSearchCondition: {
    userLongitude: number;
    userLatitude: number;
    leftLongitude: number;
    leftLatitude: number;
    rightLongitude: number;
    rightLatitude: number;
    emergencyNight: string;
    nightService: string;
    departments?: string;
    page: number;
    size: number;
  };
}

export const mapFetcher = {
  getUserMap(params: mapBoxRequest): Promise<IUserMapResponse> {
    return fetcher.get(`/box`, params);
  },
  getMapDetail(id: string): Promise<IHospitalDetailInfo> {
    return fetcher.get(`/${id}`);
  },
};
