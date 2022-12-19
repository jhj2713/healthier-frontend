import { Dispatch } from "react";

export interface IModal {
  children: JSX.Element;
}

export interface IResultModal {
  closeModal: () => void;
  setLoading: Dispatch<boolean>;
  resultId: string;
}

export interface ISymptomModal {
  closeModal: () => void;
  select: number;
}

export interface ILoginModal {
  closeModal: () => void;
}
