import { Dispatch } from "react";

export interface IButton {
  outline: string;
  backgroundColor: string;
  color: string;
  text: string;
}

export interface IContentHeader {
  back: boolean;
  text: string;
}

export interface IGenderProps {
  gender: string;
  setGender: (gender: string) => void;
}

export interface ITagsProps {
  health: ITag[];
  setHealth: (health: ITag[]) => void;
}

export interface ITag {
  id: number;
  name: string;
  selected: boolean;
}

export interface IYearPickerProps {
  year: number;
  setYear: (year: number) => void;
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
}
