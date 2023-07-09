import { Dispatch } from "react";
import { IQuestion, IAnswer } from "./diagnoseApi/diagnosis";

export interface IAnswerButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<React.SetStateAction<IAnswer[]>>;
  handleClickNextButton: () => void;
}
