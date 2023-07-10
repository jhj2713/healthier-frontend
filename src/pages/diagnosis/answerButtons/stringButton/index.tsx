import { ChangeEvent, useState } from "react";
import TextFieldOutlined from "src/components/textFieldOutlined";
import { Container } from "../index.style";
import NextButton from "../nextButton";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

function StringButton({ selectedAnswer, setSelectedAnswer, handleClickNextButton, isNextButtonEnabled }: IAnswerButtonProps) {
  const [answer, setAnswer] = useState<string>("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
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
        <TextFieldOutlined value={answer} onChange={handleChangeInput} placeholder="답변을 입력해주세요" />
      </Styled.TextFieldContainer>

      <NextButton enabled={isNextButtonEnabled()} onClick={handleClickNextButton}></NextButton>
    </Container>
  );
}

export default StringButton;
