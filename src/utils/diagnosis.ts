import { IHeadacheQuestion } from "src/interfaces/headacheDiagnoseApi";

export const isHeadache = (state: string) => {
  return state === "headache";
};
export const isSleepDisorder = (state: string) => {
  return state === "sleepdisorder";
};

export const typeMapping = (curQuestion: IHeadacheQuestion) => {
  return {
    ...curQuestion,
    is_multiple: curQuestion.is_multiple ? 1 : 0,
  };
};

export const insertType = (questions: IHeadacheQuestion[], type: string) => {
  return questions.map((question) => {
    return { ...question, type };
  });
};

export const PAIN_AREA_MAP = ["", "관자놀이", "이마의 띠", "눈", "눈 주위", "코 주위", "턱", "뒷머리", "머리 전체", "뒷목"];
