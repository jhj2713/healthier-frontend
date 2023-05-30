import RoundButton from "src/components/roundButton";
import theme from "src/lib/theme";
import { Dispatch, useEffect } from "react";
import { saveAnswer } from "src/state/answerSlice";
import { useAppDispatch } from "src/state";
import { Container, NextButton } from "./index.style";
import { IAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import Buttons from "../buttons";

interface IAnswerButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  handleNext: () => void;
}

const AnswerButtons = ({ question, selectedAnswer, setSelectedAnswer, handleNext }: IAnswerButtonProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    selectedAnswer.sort((a, b) => a.answer_id - b.answer_id);
    if (!question.is_multiple && selectedAnswer.length !== 0) {
      const timer = setTimeout(() => {
        handleNext();
        clearTimeout(timer);
      }, 300);
    }
  }, [selectedAnswer]);

  const handleActive = (id: number): boolean => {
    return selectedAnswer.findIndex((ans) => ans.answer_id === id) !== -1;
  };
  const handleMultipleAnswer = () => {
    if (selectedAnswer.length === 0) return;

    dispatch(
      saveAnswer({
        question_id: question.id,
        answer_id: selectedAnswer.map((ans) => ans.answer_id),
      })
    );

    handleNext();
  };

  return (
    <Container>
      {/* 답변 유형에 따라 다른 컴포넌트 렌더링할 수 있도록 */}
      <Buttons
        answers={question.answers ?? []}
        question={question}
        selectedAnswer={selectedAnswer}
        handleActive={handleActive}
        setSelectedAnswer={setSelectedAnswer}
      />

      {question.is_multiple && (
        <NextButton onClick={handleMultipleAnswer}>
          <RoundButton
            outline="none"
            backgroundColor={selectedAnswer.length === 0 ? theme.color.grey_650 : theme.color.blue}
            color={selectedAnswer.length === 0 ? theme.color.grey_400 : theme.color.grey_100}
          >
            다음 단계
          </RoundButton>
        </NextButton>
      )}
    </Container>
  );
};

export default AnswerButtons;
