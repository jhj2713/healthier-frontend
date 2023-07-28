import type { TSeverity } from "./diagnosis";

export interface IDescription {
  title: string;
  content: string;
  keySymptom: string[];
}

export interface ICauseTag {
  title: string;
  content: string;
}

export interface ICause {
  description: string;
  tags: ICauseTag[];
}

export interface ILifestyleHabit {
  title: string;
  content: string;
  emoji: string;
}

export interface IMedicine {
  name: string;
  img: string;
  efficacyEffectiveness: string[];
  ingredient: string[];
  types: string[];
  dosageUsage: string[];
  caution: string;
  sideEffects: string[];
}

export interface IExaminationTreatment {
  name: string;
  type: string;
  content: string;
}

export interface IDDXResultResponse {
  id: number;
  mainImg: null | string;
  typicalSymptom: string;
  name: string;
  necessaryMeasures: string;
  medicalDepartments: string[];
  severity: TSeverity;
  description: IDescription;
  cause: ICause;
  lifestyleHabits: ILifestyleHabit[];
  medicines: IMedicine[];
  examinationTreatments: IExaminationTreatment;
}
