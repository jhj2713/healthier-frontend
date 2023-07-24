import { useEffect } from "react";
import Slider from "src/components/slider";
import { Container } from "../index.style";
import NextButton from "../nextButton";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

const SLIDER_BUTTON_ANSWERS = [
  {
    answer_id: "100",
    answer: "경험해본 적이 없는\n극심한 통증",
    next_question: null,
  },
  {
    answer_id: "80",
    answer: "일상생활이 불가한\n심한 통증",
    next_question: null,
  },
  {
    answer_id: "60",
    answer: "일상생활에 상당한\n영향을 주는 통증",
    next_question: null,
  },
  {
    answer_id: "40",
    answer: "일상생활에 영향이 있지만\n참을 만한 고통",
    next_question: null,
  },
  {
    answer_id: "20",
    answer: "일상생활에는 문제가 없는\n경미한 고통",
    next_question: null,
  },
  {
    answer_id: "0",
    answer: "통증이 거의 없음",
    next_question: null,
  },
];

const DEFAULT_ANSWER_IDX = 2;
const SLIDER_MIN_VALUE = 0;
const SLIDER_MAX_VALUE = 5;

interface ISliderButtonProps extends IAnswerButtonProps {
  handleActive: (id: string) => boolean;
}

const SliderButton = ({ setSelectedAnswer, handleClickNextButton, handleActive, isNextButtonEnabled }: ISliderButtonProps) => {
  const handleChangeAnswer = (selectedIdx: number) => {
    setSelectedAnswer((sa) => ({ ...sa, answer_id: [SLIDER_BUTTON_ANSWERS[selectedIdx].answer_id] }));
  };

  useEffect(() => {
    setSelectedAnswer((sa) => ({ ...sa, answer_id: [SLIDER_BUTTON_ANSWERS[DEFAULT_ANSWER_IDX].answer_id] }));
  }, [setSelectedAnswer]);

  return (
    <Container>
      <Slider
        min={SLIDER_MIN_VALUE}
        max={SLIDER_MAX_VALUE}
        defaultValue={DEFAULT_ANSWER_IDX}
        handleChangeAnswer={handleChangeAnswer}
        labels={SLIDER_BUTTON_ANSWERS.map(({ answer }) => answer)}
        isLabelActive={handleActive}
      />
      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton} />
    </Container>
  );
};

export default SliderButton;
