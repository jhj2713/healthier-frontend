import { Dispatch } from "react";
import { IQuestion, IAnswer } from "./diagnoseApi/diagnosis";

export interface IUseDiagnosis {
  state: string;
  curQuestion: IQuestion;
  setCurQuestion: Dispatch<IQuestion>;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  setLoading: Dispatch<boolean>;
}
