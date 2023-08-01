import type { TDiagnoseType } from "src/interfaces/symptomPage";

export const symptom_type = [
  { type: "정신건강•수면", detail: "수면장애" },
  { type: "신체 건강", detail: "두통" },
];

export const DENTAL_SYMPTOMS_MAP = {
  tooth: "치아",
  gum: "잇몸통증",
  tlm: "혀 / 입술 / 점막",
  tjt: "턱 관절 / 관자놀이 부위 / 두통",
} as const;
export const DENTAL_SYMPTOMS = Object.values(DENTAL_SYMPTOMS_MAP);

export const DIGESTIVE_SYMPTOMS_MAP = {
  jaundice: "황달",
  diarrhea: "설사",
  constipation: "변비",
  stomach: "배 아픔",
  indigestion: "속이 불편함 & 소화 안됨",
  bloodystool: "변에 피가 나옴",
  hematemesis: "피를 토함",
  vomit: "토함",
} as const;
export const DIGESTIVE_SYMPTOMS = Object.values(DIGESTIVE_SYMPTOMS_MAP);

export const SYMPTOMS_TYPES_MAP = { ...DENTAL_SYMPTOMS_MAP, ...DIGESTIVE_SYMPTOMS_MAP } as const;
export const SYMPTOM_TYPES = Object.values(SYMPTOMS_TYPES_MAP);

export const DIAGNOSE_TYPES: TDiagnoseType[] = [
  {
    category: "치과",
    symptoms: DENTAL_SYMPTOMS,
  },
  {
    category: "소화기 내과",
    symptoms: DIGESTIVE_SYMPTOMS,
  },
];
