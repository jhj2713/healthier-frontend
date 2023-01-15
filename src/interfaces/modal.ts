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

export interface IKakaoToken {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}
