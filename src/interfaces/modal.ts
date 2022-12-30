import { Dispatch, ReactNode } from "react";

export interface IModal {
  children: ReactNode;
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
