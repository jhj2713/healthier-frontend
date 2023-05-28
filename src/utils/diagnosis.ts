import { IHeadacheQuestion } from "src/interfaces/headacheDiagnoseApi";
import { BodyPart } from "src/interfaces/symptomPage";

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

export const PAIN_AREA_MAP = {
  [BodyPart.NONE]: "",
  [BodyPart.TEMPLE]: "관자놀이",
  [BodyPart.FOREHEAD]: "이마의 띠",
  [BodyPart.EYE]: "눈",
  [BodyPart.NEAREYE]: "눈 주위",
  [BodyPart.NEARNOSE]: "코 주위",
  [BodyPart.CHIN]: "턱",
  [BodyPart.REARHEAD]: "뒷머리",
  [BodyPart.HEAD]: "머리 전체",
  [BodyPart.BACKNECK]: "뒷목",
};
