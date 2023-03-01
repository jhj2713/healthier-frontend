import { IHeadacheQuestion } from "src/interfaces/headacheDiagnoseApi";

export const isHeadache = (state: string) => {
  return state === "headache";
};

export const typeMapping = (curQuestion: IHeadacheQuestion) => {
  return {
    ...curQuestion,
    answers: curQuestion.answers.map((ans) => {
      return { ...ans, answer_id: ans.id };
    }),
    is_multiple: curQuestion.is_multiple ? 1 : 0,
  };
};

export const PAIN_AREA_MAP = ["", "관자놀이", "이마의 띠", "눈", "눈주위", "코주위", "턱", "뒷머리", "머리 전체", "뒷목"];
