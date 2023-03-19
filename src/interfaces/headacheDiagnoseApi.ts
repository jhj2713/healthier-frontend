export interface IHeadacheQuestion {
  id: number | string;
  question: string;
  type?: string;
  is_multiple: boolean;
  answers: {
    id: number;
    answer: string;
  }[];
}

export interface IHeadacheAnswers {
  question_id: number | string;
  answer_id: number[];
}

export interface IHeadacheAnswer {
  question_id: number | string;
  answer_id: number;
}

interface IHeadacheResult {
  id: number;
  content: string;
}

export interface IHeadacheQuestions {
  questions: IHeadacheQuestion[];
}

export interface IBasicAnswers {
  questions: IHeadacheAnswers[];
  pain_area: string[];
}

export interface ICaseQuestion {
  type: number;
  message: string;
  questions: IHeadacheQuestion[];
  result?: null | IHeadacheResult;
}

export interface IPrimaryAnswers {
  type: number;
  questions: IHeadacheAnswer[];
}

export type IPainArea = "관자놀이" | "이마의 띠" | "눈" | "눈주위" | "코주위" | "머리 전체" | "턱" | "뒷머리" | "뒷목" | "얼굴피부";

export interface IPainAreaRequest {
  pain_area: IPainArea;
}

export interface IResultResponse {
  result: IHeadacheResult;
}

interface IResultCard {
  id: number;
  content: string;
  image: string;
}

export interface IFinalResult {
  type: number;
  results: {
    most_likely: IResultCard | null;
    suspicious: IResultCard[] | null;
    likely: IResultCard[] | null;
  };
}

export interface IResultRequest {
  results: { id: number }[];
}
