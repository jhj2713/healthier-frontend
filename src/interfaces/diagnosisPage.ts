import { Dispatch } from "react";

export interface IQuestion {
  question: string;
  answers: IAnswer[];
  is_multiple: boolean;
}

export interface IAnswer {
  a_id: number;
  answer: string;
  score?: number;
}

export interface IAnswerButtonProps {
  answers: IAnswer[];
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  handleNext: () => void;
  isMultiple: boolean;
  sleepScore: number;
  setSleepScore: Dispatch<number>;
}
