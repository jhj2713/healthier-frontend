import { Dispatch } from "react";

export interface IContentHeader {
  text: string;
  back: boolean;
}

export interface IButton {
  outline: string;
  backgroundColor: string;
  color: string;
  text: string;
}

export interface ITag {
  text: string;
  selected: boolean;
}

export interface IListComponent {
  diagnosis: IDiagnosisList;
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
