import { Dispatch, useEffect } from "react";
import { IAnswer } from "src/interfaces/diagnoseApi/diagnosis";
import theme from "src/lib/theme";
import Slider from "src/components/slider";
import RoundButton from "src/components/roundButton";
import { Container, NextButton } from "../answerButtons/index.style";

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

interface ISliderButtonProps {
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;

  handleNext: () => void;
  handleActive: (id: number) => boolean;
}

const SliderButton = ({ selectedAnswer, setSelectedAnswer, handleNext, handleActive }: ISliderButtonProps) => {
  const handleChangeAnswer = (selectedIdx: number) => {
    setSelectedAnswer([
      {
        answer_id: SLIDER_BUTTON_ANSWERS[selectedIdx].answer_id,
        answer: SLIDER_BUTTON_ANSWERS[selectedIdx].answer,
        next_question: SLIDER_BUTTON_ANSWERS[selectedIdx].next_question,
      },
    ]);
  };

  const handleNextButtonClick = () => {
    if (selectedAnswer.length === 0) {
      return;
    }

    handleNext();
  };

  useEffect(() => {
    setSelectedAnswer([
      {
        answer_id: SLIDER_BUTTON_ANSWERS[DEFAULT_ANSWER_IDX].answer_id,
        answer: SLIDER_BUTTON_ANSWERS[DEFAULT_ANSWER_IDX].answer,
        next_question: SLIDER_BUTTON_ANSWERS[DEFAULT_ANSWER_IDX].next_question,
      },
    ]);
  }, []);

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
      <NextButton onClick={handleNextButtonClick}>
        <RoundButton
          outline="none"
          backgroundColor={selectedAnswer.length === 0 ? theme.color.grey_650 : theme.color.blue}
          color={selectedAnswer.length === 0 ? theme.color.grey_400 : theme.color.grey_100}
        >
          다음 단계
        </RoundButton>
      </NextButton>
    </Container>
  );
};

export default SliderButton;
