import { Dispatch } from "react";
import { IQuestion, ISelectedAnswer } from "./diagnoseApi/diagnosis";

export interface IUseDiagnosis {
  state: string;
  curQuestion: IQuestion;
  setCurQuestion: Dispatch<IQuestion>;
  selectedAnswer: ISelectedAnswer | null;
  setSelectedAnswer: Dispatch<ISelectedAnswer | null>;
  setLoading: Dispatch<boolean>;
}
