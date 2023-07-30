import { ChangeEvent, useState } from "react";
import { Container } from "../index.style";
import NextButton from "../nextButton";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

function StringButton({ selectedAnswer, setSelectedAnswer, handleClickNextButton, isNextButtonEnabled }: IAnswerButtonProps) {
  const [answer, setAnswer] = useState<string>("");

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);

    if (e.target.value === "") {
      setSelectedAnswer({ ...selectedAnswer, answer_id: [] });

      return;
    }

    setSelectedAnswer({ ...selectedAnswer, answer_id: [e.target.value] });
  };

  return (
    <Container>
      <Styled.TextFieldContainer>
        <Styled.TextArea
          value={answer}
          onChange={handleChangeTextArea}
          placeholder="입력해주신 내용은 의사선생님이 그대로 볼 수 있어요"
          spellCheck={false}
        />
      </Styled.TextFieldContainer>

      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton}></NextButton>
    </Container>
  );
}

export default StringButton;
