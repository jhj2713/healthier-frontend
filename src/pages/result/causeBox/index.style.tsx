import styled from "styled-components";
import { Body_2 } from "src/lib/fontStyle";

export const Container = styled.section`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1rem 1fr;

  .tag-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.color.grey_800};
    border-radius: 0.8rem;
  }

  .cause-detail {
    margin: 1.2rem 1.8rem 1.4rem 1.8rem;

    text-align: center;

    word-break: keep-all;
  }
`;

export const Tag = styled.section<{ num: number }>`
  display: flex;

  margin-top: 1.4rem;
  padding: 0.8rem 1rem;

  background-color: ${({ num, theme }) => (num % 2 === 0 ? theme.color.blue : theme.color.sub_blue_2)};
  color: ${({ theme }) => theme.color.grey_200};

  border-radius: 10rem;

  font-size: 1.3rem;
  font-weight: 300;
`;

export const Description = styled(Body_2)`
  color: ${({ theme }) => theme.color.grey_300};
`;
