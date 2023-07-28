import { Dispatch } from "react";
import { ANSWER_TYPE } from "src/data/answer_type";
import { ISelectedAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import DefButton from "./defButton";
import EtcButton from "./etcButton";
import ImgButton from "./imgButton";
import * as NumberButtons from "./numberButtons";
import SliderButton from "./sliderButton";
import StringButton from "./stringButton";

interface IAnswerButtonProps {
  question: IQuestion;
  selectedAnswer: ISelectedAnswer;
  setSelectedAnswer: Dispatch<React.SetStateAction<ISelectedAnswer>>;
  handleNext: () => void;
}

const AnswerButtons = ({ question, selectedAnswer, setSelectedAnswer, handleNext }: IAnswerButtonProps) => {
  const handleActive = (id: string): boolean => {
    return selectedAnswer.answer_id.includes(id);
  };

  const isNextButtonEnabled = (): boolean => {
    return selectedAnswer.answer_id.length > 0;
  };

  const handleClickNextButton = () => {
    if (!isNextButtonEnabled()) {
      return;
    }

    handleNext();
  };

  console.log(question.answer_type);

  if (question.answer_type === ANSWER_TYPE.NUMBER_1) {
    return (
      <NumberButtons.DurationButton
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
        isNextButtonEnabled={isNextButtonEnabled}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.NUMBER_2) {
    return (
      <NumberButtons.PreviousTimeButton
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
        isNextButtonEnabled={isNextButtonEnabled}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.NUMBER_4) {
    return (
      <NumberButtons.AlcoholButton
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
        isNextButtonEnabled={isNextButtonEnabled}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.NUMBER_5) {
    return (
      <NumberButtons.SmockingButton
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
        isNextButtonEnabled={isNextButtonEnabled}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.NUMBER_7) {
    return (
      <NumberButtons.DurationButton
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
        isNextButtonEnabled={isNextButtonEnabled}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.NUMBER_8) {
    return (
      <NumberButtons.AlcoholButton
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
        isNextButtonEnabled={isNextButtonEnabled}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.NUMBER_9) {
    return (
      <NumberButtons.CountButton
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
        isNextButtonEnabled={isNextButtonEnabled}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.NUMBER_10) {
    return (
      <NumberButtons.DurationButton
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
        isNextButtonEnabled={isNextButtonEnabled}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.DRAG_1) {
    return (
      <SliderButton
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
        handleActive={handleActive}
        isNextButtonEnabled={isNextButtonEnabled}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.STR) {
    return (
      <StringButton
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
        isNextButtonEnabled={isNextButtonEnabled}
      />
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
        isNextButtonEnabled={isNextButtonEnabled}
      />
    );
  } else if (question.answer_type === ANSWER_TYPE.IMG) {
    return (
      <ImgButton
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        handleClickNextButton={handleClickNextButton}
        isNextButtonEnabled={isNextButtonEnabled}
      />
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
      isNextButtonEnabled={isNextButtonEnabled}
    />
  );
};

export default AnswerButtons;
