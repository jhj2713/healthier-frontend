import styled from "styled-components";
import { Body_1 } from "src/lib/fontStyle";

export const Container = styled.section`
  background: transparent;
  width: 100%;

  margin-bottom: 13rem;
`;

export const AnswersContainer = styled.section<{ ansCount: number }>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${({ ansCount }) => (ansCount === 2 ? 13.4 : ansCount === 3 ? 10.2 : 7)}rem;
`;

export const ButtonBox = styled.section<{ selected: boolean }>`
  width: calc(var(--vw, 1vw) * 100 - 4rem);

  & + & {
    margin-top: 1.2rem;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: ${({ selected }) => (selected ? "1.4rem 2.3rem" : "1.3rem 2.3rem")};

    background-color: ${({ selected, theme }) => (selected ? theme.color.sub_blue : "transparent")};
    color: ${({ selected, theme }) => (selected ? theme.color.blue : theme.color.grey_300)};

    border: ${({ selected, theme }) => !selected && `0.1rem solid ${theme.color.grey_650}`};
    border-radius: 9rem;

    cursor: pointer;
  }
`;

export const Button = styled.section``;

export const ButtonText = styled(Body_1)`
  font-weight: 200;
  text-align: center;

  width: 26rem;
`;

export const NextButton = styled.section`
  width: calc(var(--vw, 1vw) * 100);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;
  padding-bottom: 3rem;
  padding-top: 0.6rem;

  background: linear-gradient(180deg, rgba(31, 37, 79, 0) 0%, #23284b 50%);
`;

export const RangeAnswerContainer = styled.div`
  display: flex;
`;

export const RangeAnswers = styled.div`
  flex: 4;
`;

export const RangeAnswer = styled(Body_1)<{ selected: boolean }>`
  width: 23.1rem;
  height: 5rem;
  color: ${({ theme, selected }) => (selected ? theme.color.grey_200 : theme.color.grey_400)};
`;

export const RangeContainer = styled.div`
  flex: 1;
  position: relative;

  height: 0.6rem;
  width: 36.7rem;
  background: rgba(84, 100, 242, 0.33);
  border-radius: 0.1rem;
  transform: rotate(90deg);
`;

export const RangeInput = styled.input`
  position: absolute;
  height: 0.6rem;
  width: 36.7rem;
  -webkit-appearance: none;
  background: none;

  &::-webkit-slider-thumb {
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    background-color: #5e6df3;
    -webkit-appearance: none;
  }
`;
