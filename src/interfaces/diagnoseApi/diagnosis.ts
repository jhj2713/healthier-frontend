export interface IDiagnosisPatchData {
  diagnosis_id: string;
}

export interface IDiagnosisList {
  nickname: string;
  diagnosis: {
    banner_illustration: string;
    record: {
      diagnosis_id: string;
      is_created: string;
      severity: number;
      title: string;
    };
  }[];
}

export interface IDiagnosisResult {
  is_result: number;
  diagnostic_result: {
    id: string;
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

export interface IAnswer {
  answer_id: number;
  answer: string;
}

export interface IQuestion {
  id: number;
  question: string;
  answers: IAnswer[];
  is_multiple: boolean;
}

export interface IDecisiveDate {
  question_id: string | number;
  answer_id: number;
  gender: string;
  birth_year: number;
  interests: number[];
  tracks: {
    question_id: string | number;
    answer_id: number[];
  }[];
}

export interface IDiagnoseResponse {
  questions: IQuestion;
}

export interface IDiagnoseAnswers {
  question_id: number;
  answer_id: number[];
}

export interface IDiagnoseAnswer {
  question_id: string;
  answer_id: number;
}

export interface ISiteDiagnose {
  site_id: number;
}
