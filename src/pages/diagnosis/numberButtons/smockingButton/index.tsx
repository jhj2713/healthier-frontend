import { Dispatch, useState, useEffect } from "react";
import TextFieldOutlined from "src/components/textFieldOutlined";
import { IQuestion, IAnswer } from "src/interfaces/diagnoseApi/diagnosis";
import { validateNumber } from "src/utils/inputUtils";
import { Container } from "../../answerButtons/index.style";
import * as Styled from "./index.style";

interface ISmockingButtonProps {
  question: IQuestion;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
}

interface ISmokingAnswer {
  year: number;
  count: number;
}

function SmockingButton({ setSelectedAnswer }: ISmockingButtonProps) {
  const [smokingAnswer, setSmokingAnswer] = useState<ISmokingAnswer>({
    year: 0,
    count: 0,
  });

  const handleChangeSmoking = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue = validateNumber(value);

    setSmokingAnswer({ ...smokingAnswer, [name]: parsedValue });
  };

  useEffect(() => {
    if (smokingAnswer.year === 0 || smokingAnswer.count === 0) {
      setSelectedAnswer([]);

      return;
    }

    setSelectedAnswer([
      {
        answer_id: 0,
        answer: smokingAnswer.year + "년/" + smokingAnswer.count + "번",
        next_question: null,
      },
    ]);
  }, [setSelectedAnswer, smokingAnswer]);

  return (
    <Container>
      <Styled.InputsContainer>
        <Styled.InputContainer>
          <Styled.InputWrapper>
            <TextFieldOutlined value={smokingAnswer.year || ""} onChange={handleChangeSmoking} placeholder="횟수 입력" name="year" />
          </Styled.InputWrapper>
          <Styled.Text>년동안</Styled.Text>
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Text>하루</Styled.Text>
          <Styled.InputWrapper>
            <TextFieldOutlined value={smokingAnswer.count || ""} onChange={handleChangeSmoking} placeholder="횟수 입력" name="count" />
          </Styled.InputWrapper>
          <Styled.Text>번 피웠어요</Styled.Text>
        </Styled.InputContainer>
      </Styled.InputsContainer>
    </Container>
  );
}

export default SmockingButton;
