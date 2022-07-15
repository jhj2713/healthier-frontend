import { Dispatch } from "react";

export interface IModal {
  children: JSX.Element;
  setModal: Dispatch<boolean>;
}

export interface IResultModal {
  setModal: Dispatch<boolean>;
  setLoading: Dispatch<boolean>;
}

export interface ISymptomModal {
  setModal: Dispatch<boolean>;
  select: number;
}
