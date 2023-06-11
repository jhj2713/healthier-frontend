import { BodyPart } from "src/interfaces/symptomPage";

export const DIAGNOSE_TYPE = {
  stomach: "급성복통",
  backpain: "허리통증",
  diarrhea: "배변이상/설사",
  bloodystool: "혈변",
  gum: "잇몸통증",
  chestpain: "흉통",
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
