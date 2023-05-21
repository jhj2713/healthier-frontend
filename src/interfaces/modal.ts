import { Dispatch, ReactNode } from "react";

export interface IModalContainer {
  children: ReactNode;
}

export interface IResultModal {
  closeModal: () => void;
  setLoading: Dispatch<string>;
  resultId: string;
}

export interface ISymptomModal {
  closeModal: () => void;
  select: number;
}

export interface IMainModal {
  closeModal: () => void;
}

export interface IKakaoToken {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}
export interface ILoginModal {
  handleLogin: () => void;
  closeModal: () => void;
  handleContinue: () => void;
  title: ReactNode;
  continueText: string;
}
