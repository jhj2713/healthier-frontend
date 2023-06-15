import { IDiagnosisItem } from "src/components/diagnosisCard";
import { TTreatmentType } from "src/components/treatmentTag";

export interface IDiagnosticResult {
  type: string;
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
      tags: { cause: string; details: string[] }[] | null;
      detail: string[];
    };
    solutions: { title: string; detail: string; emoji: string }[];
    medicine_flag: number;
    medicines:
      | {
          image: string;
          name: string;
          efficacy: string;
          dosage_and_uses?: { name: string; emoji: string }[];
          caution: { h1: string; h2: string; is_colored: string[] };
          sideeffects: { name: string; emoji: string }[];
        }[]
      | null;
    treatment_flag: number;
    treatments?: { title: string; detail: string; type: TTreatmentType }[];
  };
}

export interface IDiagnosisResultList {
  dataList: {
    results: {
      likely: IDiagnosisItem;
      predicted: IDiagnosisItem[];
    };
  };
}
