import { IDiagnosisItem } from "src/components/diagnosisCard";
import { TAnswerType } from "./answer.type";

export interface IDiagnosisPatchData {
  diagnosis_id: number;
}

export interface ITrackData {
  question_id: number;
  answer_id: number[];
}

export interface IDiagnosisList {
  nickname: string;
  diagnosis: IDiagnosisItem[];
}

export interface IDiagnosisResult {
  is_result: number;
  diagnostic_result: {
    id: number;
    illustration: string;
    h1: string;
    title: string;
    h2: string[];
    severity: number;
    explanation: { title: string; details: string[] };
    cause: {
      tag_flag: number;
      tags?: { cause: string; details: string[] }[];
      detail: string[];
    };
    solutions: { title: string; detail: string; emoji: string }[];
    medicine_flag: number;
    medicines?: {
      image: string;
      name: string;
      efficacy: string;
      dosage_and_uses?: { name: string; emoji: string }[];
      caution: { h1: string; h2: string; is_colored: string[] };
      sideeffects: { name: string; emoji: string }[];
    }[];
    treatment_flag: number;
    treatments?: { title: string; detail: string }[];
  };
}

export interface ISelectedAnswer {
  answer_id: string[];
  next_question: IQuestion | null;
}

export interface IAnswer extends Omit<ISelectedAnswer, "next_question"> {
  question_id: string;
  answer_type: TAnswerType;
}

export interface IAnswerData {
  answer_id: number;
  answer: string;
  next_question: IQuestion | null;
}

export interface IQuestion {
  id: number;
  question: string;
  is_multiple: boolean;
  image_url: string | null;
  answer_type: TAnswerType;
  answers: IAnswerData[] | null;
}

export interface IPostAnswersBody {
  user: {
    gender: string;
    age: number;
  };
  answers: IAnswer[];
}

export interface IDecisiveDate {
  question_id: number;
  answer_id: number;
  gender: string;
  birth_year: number;
  interests: number[];
  tracks: ITrackData[];
}

export interface IDiagnoseResponse {
  category: string;
  question: IQuestion[];
}

export interface IDiagnoseAnswers {
  question_id: number;
  answer_id: number[];
}

export interface IDiagnoseAnswer {
  question_id: number;
  answer_id: number;
}

export interface ISiteDiagnose {
  site_id: number;
}
