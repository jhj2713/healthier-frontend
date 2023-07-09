import { useEffect } from "react";
import Slider from "src/components/slider";
import { Container } from "../index.style";
import NextButton from "../nextButton";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

const SLIDER_BUTTON_ANSWERS = [
  {
    answer_id: 0,
    answer: "경험해본 적이 없는\n극심한 통증",
    next_question: null,
  },
  {
    answer_id: 1,
    answer: "일상생활이 불가한\n심한 통증",
    next_question: null,
  },
  {
    answer_id: 2,
    answer: "일상생활에 상당한\n영향을 주는 통증",
    next_question: null,
  },
  {
    answer_id: 3,
    answer: "일상생활에 영향이 있지만\n참을 만한 고통",
    next_question: null,
  },
  {
    answer_id: 4,
    answer: "일상생활에는 문제가 없는\n경미한 고통",
    next_question: null,
  },
  {
    answer_id: 5,
    answer: "통증이 거의 없음",
    next_question: null,
  },
];

const DEFAULT_ANSWER_IDX = 2;
const SLIDER_MIN_VLAUE = 0;
const SLIDER_MAX_VALUE = 5;

interface ISliderButtonProps extends IAnswerButtonProps {
  handleActive: (id: number) => boolean;
}

const SliderButton = ({ selectedAnswer, setSelectedAnswer, handleClickNextButton, handleActive }: ISliderButtonProps) => {
  const handleChangeAnswer = (selectedIdx: number) => {
    setSelectedAnswer([
      {
        answer_id: SLIDER_BUTTON_ANSWERS[selectedIdx].answer_id,
        answer: SLIDER_BUTTON_ANSWERS[selectedIdx].answer,
        next_question: SLIDER_BUTTON_ANSWERS[selectedIdx].next_question,
      },
    ]);
  };

  useEffect(() => {
    setSelectedAnswer([
      {
        answer_id: SLIDER_BUTTON_ANSWERS[DEFAULT_ANSWER_IDX].answer_id,
        answer: SLIDER_BUTTON_ANSWERS[DEFAULT_ANSWER_IDX].answer,
        next_question: SLIDER_BUTTON_ANSWERS[DEFAULT_ANSWER_IDX].next_question,
      },
    ]);
  }, [setSelectedAnswer]);

  return (
    <Container>
      <Slider
        min={SLIDER_MIN_VLAUE}
        max={SLIDER_MAX_VALUE}
        defaultValue={DEFAULT_ANSWER_IDX}
        handleChangeAnswer={handleChangeAnswer}
        labels={SLIDER_BUTTON_ANSWERS.map(({ answer }) => answer)}
        isLabelActive={handleActive}
      />
      <NextButton enabled={selectedAnswer.length !== 0} onClick={handleClickNextButton} />
    </Container>
  );
};

export default SliderButton;
