import axios, { AxiosResponse } from "axios";
import { SYMPTOMS_TYPES_MAP } from "src/data/symptom_type";
import { IDiagnoseResponse } from "src/interfaces/diagnoseApi/diagnosis";
import { TSymptomType } from "src/interfaces/symptomPage";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/diagnose`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const fetcher = {
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => instance.post<T>(url, body).then(responseBody),
};

export const diagnosisFetcher = {
  getQuestions(diagnosisType: TSymptomType, gender: string): Promise<IDiagnoseResponse> {
    if (diagnosisType === SYMPTOMS_TYPES_MAP.stomach) {
      return fetcher.get(`/stomach?gender=${gender}`);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.indigestion) {
      return fetcher.get("/indigestion");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.hematemesis) {
      return fetcher.get("/hematemesis");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.bloodystool) {
      return fetcher.get("/bloodystool");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.vomit) {
      return fetcher.get("/vomit");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.diarrhea) {
      return fetcher.get("/diarrhea");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.constipation) {
      return fetcher.get("/constipation");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.jaundice) {
      return fetcher.get(`/jaundice?gender=${gender}`);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.tooth) {
      return fetcher.get("/tooth");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.gum) {
      return fetcher.get("/gum");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.tlm) {
      return fetcher.get("/tlm");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.tjt) {
      return fetcher.get("/tjt");
    }
    throw new Error(`Invalid diagnosis type: ${diagnosisType}`);
  },
  getFollowingQuestions(diagnosisType: TSymptomType, gender: string): Promise<IDiagnoseResponse> {
    if (diagnosisType === SYMPTOMS_TYPES_MAP.stomach) {
      return fetcher.get(`/stomach?type=after&gender=${gender}`);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.indigestion) {
      return fetcher.get("/idigestion?type=after");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.hematemesis) {
      return fetcher.get("/hematemesis?type=after");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.bloodystool) {
      return fetcher.get("/bloodystool?type=after");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.vomit) {
      return fetcher.get("/vomit?type=after");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.diarrhea) {
      return fetcher.get("/diarrhea?type=after");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.constipation) {
      return fetcher.get("/constipation?type=after");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.jaundice) {
      return fetcher.get("jaundice?type=after");
    }

    throw new Error(`Invalid diagnosis type: ${diagnosisType}`);
  },
};
