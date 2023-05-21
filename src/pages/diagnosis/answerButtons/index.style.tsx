import styled from "styled-components";
import { Body_1, Body_3 } from "src/lib/fontStyle";

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
  position: relative;
  margin: 6.7rem 4.5rem 2.4rem 4.5rem;

  .range-answers {
    width: calc(100% - 10rem);
  }

  .range-numbers {
    width: 2.6rem;
    height: 36.7rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const RangeNumber = styled(Body_3)`
  color: ${({ theme }) => theme.color.grey_400};
`;

export const RangeAnswer = styled.div<{ selected: boolean; idx: number }>`
  height: 7rem;

  display: flex;
  align-items: center;

  .answer-text {
    width: 17rem;

    margin: ${({ idx }) => (idx < 3 ? `0 0 ${4 - idx}rem 0` : `${idx}rem 0 0 0`)};

    font-size: 1.6rem;
    font-weight: 200;
    line-height: 150%;
    color: ${({ theme, selected }) => (selected ? theme.color.grey_200 : theme.color.grey_400)};
  }

  .range-dots {
    width: calc(100% - 17rem);
    height: 0;
    border: 0.08rem dashed #3f444f;

    margin: ${({ idx }) => (idx < 3 ? `0 0 ${4 - idx}rem 0` : `${idx}rem 0 0 0`)};
  }
`;

export const RangeContainer = styled.div`
  flex: 1;
  position: relative;

  height: 0.6rem;
  width: 42rem;
  transform: rotate(90deg) translate(50%, 0);
`;

export const RangeBackground = styled.div`
  position: absolute;
  top: 0.2rem;

  height: 0.6rem;
  width: 42rem;
  border-radius: 0.1rem;
  background: rgba(84, 100, 242, 0.33);
`;

export const RangeInput = styled.input`
  position: absolute;
  height: 0.6rem;
  width: 42rem;
  -webkit-appearance: none;
  background: none;

  &::-webkit-slider-thumb {
    position: relative;
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 100%;
    box-shadow: 0 0 0 1.6rem rgba(183, 190, 255, 0.1);
    background-color: #5e6df3;
    -webkit-appearance: none;
  }
`;
