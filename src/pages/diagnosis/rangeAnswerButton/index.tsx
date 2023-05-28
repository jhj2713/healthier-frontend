import { ChangeEvent, Dispatch } from "react";
import { IAnswer, IQuestion } from "src/interfaces/diagnoseApi/diagnosis";
import { RangeAnswerContainer, RangeBackground, RangeAnswer, RangeContainer, RangeInput, RangeNumber } from "./index.style";

interface IRangeAnswer {
  answers: IAnswer[];
  selectedAnswer: IAnswer[];
  question: IQuestion;
  handleActive: (id: number) => boolean;
  setSelectedAnswer: Dispatch<IAnswer[]>;
}

const RangeAnswerButton = ({ answers, selectedAnswer, question, setSelectedAnswer, handleActive }: IRangeAnswer) => {
  const handleRangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedIdx = Number(e.target.value);
    setSelectedAnswer([{ answer_id: question.answers[selectedIdx].answer_id, answer: question.answers[selectedIdx].answer }]);
  };

  return (
    <RangeAnswerContainer>
      <div className="range-answers">
        {answers.length !== 0 &&
          answers.map((ans, idx) => (
            <RangeAnswer key={idx} idx={idx} selected={handleActive(5 - ans.answer_id)}>
              <div className="answer-text">{ans.answer}</div>
              <div className="range-dots" />
            </RangeAnswer>
          ))}
      </div>
      <RangeContainer>
        <RangeBackground />
        <RangeInput
          type="range"
          min={0}
          max={5}
          value={selectedAnswer.length >= 1 ? selectedAnswer[0].answer_id : answers[3].answer_id}
          onChange={handleRangeInput}
        />
      </RangeContainer>
      <div className="range-numbers">
        {[100, 50, 0].map((num) => (
          <RangeNumber key={num}>{num}</RangeNumber>
        ))}
      </div>
    </RangeAnswerContainer>
  );
};

export default RangeAnswerButton;
