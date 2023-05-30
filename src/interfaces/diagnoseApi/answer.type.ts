import { ANSWER_TYPE } from "src/data/answer_type";

type TAnswerTypeKey = keyof typeof ANSWER_TYPE;
export type TAnswerType = typeof ANSWER_TYPE[TAnswerTypeKey];
