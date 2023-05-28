import { Body_3 } from "src/lib/fontStyle";
import styled from "styled-components";

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
