import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/inquiry`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const fetcher = {
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
};

export interface IPostInquiryRequest {
  hospitalId: string;
  hospitalName: string;
  inquiryType: "INFO_UPDATE_INQUIRY" | "CHALLENGE_INQUIRY" | "OTHERS";
  inquiryContent: string;
}

export const inquiryFetcher = {
  postInquiry(body: IPostInquiryRequest) {
    return fetcher.post(``, body);
  },
};
