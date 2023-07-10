import { Dispatch } from "react";
import { IQuestion, ISelectedAnswer } from "./diagnoseApi/diagnosis";

export interface IAnswerButtonProps {
  question: IQuestion;
  selectedAnswer: ISelectedAnswer;
  setSelectedAnswer: Dispatch<React.SetStateAction<ISelectedAnswer>>;
  handleClickNextButton: () => void;
  isNextButtonEnabled: () => boolean;
}
