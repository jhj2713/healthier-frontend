import { ChangeEvent, useState } from "react";
import RoundButton from "src/components/roundButton";
import TextFieldOutlined from "src/components/textFieldOutlined";
import theme from "src/lib/theme";
import { NextButton } from "../answerButtons/index.style";
import { Container } from "../answerButtons/index.style";
import * as Styled from "./index.style";
import type { IAnswerButtonProps } from "src/interfaces/diagnosisPage";

function StringButton({ selectedAnswer, setSelectedAnswer, handleClickNextButton }: IAnswerButtonProps) {
  const [answer, setAnswer] = useState<string>("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);

    if (e.target.value === "") {
      setSelectedAnswer([]);

      return;
    }

    setSelectedAnswer([
      {
        answer_id: 0,
        answer: e.target.value,
        next_question: null,
      },
    ]);
  };

  return (
    <Container>
      <Styled.TextFieldContainer>
        <TextFieldOutlined value={answer} onChange={handleChangeInput} placeholder="답변을 입력해주세요" />
      </Styled.TextFieldContainer>
      <NextButton onClick={handleClickNextButton}>
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
}

export default StringButton;
