import { ChangeEvent, ReactNode } from "react";

export interface IContentHeader {
  children: string;
  back: boolean;
  exit: boolean;
  backCallback?: () => void;
  exitCallback?: () => void;
}

export interface IRoundButton {
  outline: string;
  backgroundColor: string;
  color: string;
  children: string;
}

export interface IButton {
  selected: boolean;
  children: string;
}

export interface ITag {
  children: string;
  selected: boolean;
}

export type ITreatmentType = "therapy" | "inspection";
export interface ITreatmentTag {
  type: ITreatmentType;
}

export interface IDropdown {
  title: string;
  isSelected: boolean;
  options: string[];
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface IListComponent {
  diagnosis: IDiagnosisList;
  handleNavigate: () => void;
}

export interface IDiagnosisList {
  banner_illustration: string;
  record: {
    diagnosis_id: string;
    title: string;
    is_created: string;
    severity: number;
  };
}

export interface ISymptomTypeComponent {
  selected: boolean;
  title: string;
}

export interface ILoading {
  title: ReactNode;
  icon: ReactNode;
  bottomInformation?: ReactNode;
}
