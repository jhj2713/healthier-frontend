import { IAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";

interface IGetNextQuestionParams {
  selectedAnswer: IAnswer[];
  curQuestion: IQuestion;
  questions: IQuestion[];
}

export const getNextQuestion = ({ selectedAnswer, curQuestion, questions }: IGetNextQuestionParams): IQuestion | null => {
  const nextQuestionIdx = questions.findIndex((question) => question.id > curQuestion.id);

  if (nextQuestionIdx === questions.length) {
    return null;
  }

  return selectedAnswer[0]?.next_question ?? questions[nextQuestionIdx];
};
