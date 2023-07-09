import { Dispatch } from "react";
import { ANSWER_TYPE } from "src/data/answer_type";
import { IAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import DefButton from "../defButton";
import EtcButton from "../etcButton";
import ImgButton from "../imgButton";
import NumberButtons from "../numberButtons";
import DurationButton from "../numberButtons/durationButton";
import SliderButton from "../sliderButton";
import StringButton from "../stringButton";

interface IAnswerButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<React.SetStateAction<IAnswer[]>>;
  handleNext: () => void;
}

const AnswerButtons = ({ question, selectedAnswer, setSelectedAnswer, handleNext }: IAnswerButtonProps) => {
  const handleActive = (id: number): boolean => {
    return selectedAnswer.findIndex((ans) => ans.answer_id === id) !== -1;
  };

  const handleClickNextButton = () => {
    if (selectedAnswer.length === 0) {
      return;
    }

    handleNext();
  };

  if (question.answer_type === "NUMBER_1") {
    return (
      <DurationButton
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
      />
    );
  } else if (question.answer_type.startsWith("NUMBER")) {
    return (
      <NumberButtons question={question} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} handleNext={handleNext} />
    );
  } else if (question.answer_type === ANSWER_TYPE.DRAG_1) {
    return (
      <SliderButton
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
        handleActive={handleActive}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.STR) {
    return (
      <StringButton selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} handleClickNextButton={handleClickNextButton} />
    );
  } else if (question.answer_type === ANSWER_TYPE.ETC) {
    return (
      <EtcButton
        answers={question.answers ?? []}
        selectedAnswer={selectedAnswer}
        question={question}
        handleActive={handleActive}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.IMG) {
    return (
      <ImgButton selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} handleClickNextButton={handleClickNextButton} />
    );
  }

  return (
    <DefButton
      answers={question.answers ?? []}
      question={question}
      selectedAnswer={selectedAnswer}
      handleActive={handleActive}
      setSelectedAnswer={setSelectedAnswer}
      handleClickNextButton={handleClickNextButton}
    />
  );
};

export default AnswerButtons;
