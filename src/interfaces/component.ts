import { Dispatch } from "react";

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
  diagnosis: {
    result_log_id: string;
    name: string;
    date: string;
    photo: string;
  };
}

export interface IModal {
  children: JSX.Element;
  setModal: Dispatch<boolean>;
}

export interface IResultModal {
  setModal: Dispatch<boolean>;
  setLoading: Dispatch<boolean>;
}

export interface IDiagnosisList {
  result_log_id: string;
  name: string;
  date: string;
  photo: string;
}
