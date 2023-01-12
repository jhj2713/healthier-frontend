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

export interface IMainModal {
  closeModal: () => void;
}

export interface ILoginModal {
  handleLogin: () => void;
  closeModal: () => void;
  handleContinue: () => void;
  title: ReactNode;
  continueText: string;
}
