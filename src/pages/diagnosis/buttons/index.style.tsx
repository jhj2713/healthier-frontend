import { Body_1 } from "src/lib/fontStyle";
import styled from "styled-components";

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
