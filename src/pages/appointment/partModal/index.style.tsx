import { Body_2 } from "src/lib/fontStyle";
import styled from "styled-components";

export const BoxContainer = styled.div`
  border-radius: 0.8rem;
  padding: 2rem 1.6rem;

  display: "flex";
  justify-content: center;

  background-color: ${({ theme }) => theme.color.grey_850};
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.6rem;
  row-gap: 1.4rem;

  height: 28.2rem;
  overflow-y: scroll;
`;

export const Title = styled(Body_2)`
  color: ${({ theme }) => theme.color.grey_200};
  margin-top: 2rem;
`;

export const Card = styled.div<{ selected: boolean }>`
  width: 9.2rem;
  height: 6rem;
  border-radius: 0.8rem;

  display: "flex";
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, selected }) => (selected ? theme.color.grey_800 : theme.color.sub_blue)};

  font-size: 1.4rem;
  font-style: normal;
  font-weight: ${({ selected }) => (selected ? 500 : 400)};
  line-height: 150%;
  letter-spacing: -0.03rem;
  color: ${({ theme, selected }) => (selected ? theme.color.blue : theme.color.grey_400)};
`;
