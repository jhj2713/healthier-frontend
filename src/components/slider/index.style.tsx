import { Body_3 } from "src/lib/fontStyle";
import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  position: relative;
  margin: 6.7rem 4.5rem 2.4rem 4.5rem;

  .label-texts {
    width: calc(100% - 10rem);
  }

  .label-numbers {
    width: 2.6rem;
    height: 36.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const SliderNumberLabel = styled(Body_3)`
  color: ${({ theme }) => theme.color.grey_400};
`;

export const SliderLabelText = styled.div<{ selected: boolean; length: number }>`
  display: flex;
  white-space: pre-wrap;
  width: 100%;
  height: ${({ length }) => `calc(36.7rem / ${length - 1})`};

  .label-text {
    font-size: 1.6rem;
    font-weight: 200;
    line-height: 150%;
    margin-top: -1rem;
    margin-right: 1.6rem;
    color: ${({ theme, selected }) => (selected ? theme.color.grey_200 : theme.color.grey_400)};
  }

  .label-indicator {
    flex: 1;
    height: 0;
    border: 0.08rem dashed #3f444f;
  }
`;

export const SliderInputContainer = styled.div`
  flex: 1;
  position: relative;

  height: 0.6rem;
  width: 36.7rem;
  transform: rotate(90deg) translate(50%, 0);
`;

export const SliderTrack = styled.div`
  position: absolute;
  top: 0.2rem;

  height: 0.6rem;
  width: 36.7rem;
  border-radius: 0.1rem;
  background: rgba(84, 100, 242, 0.33);
`;

export const SliderInput = styled.input`
  position: absolute;
  height: 0.6rem;
  width: 36.7rem;
  -webkit-appearance: none;
  background: none;
  cursor: pointer;

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
