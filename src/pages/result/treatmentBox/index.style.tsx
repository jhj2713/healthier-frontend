import styled from "styled-components";
import { Heading_5 } from "src/lib/fontStyle";
import { Text } from "../description/index.style";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.color.grey_800};
  border-radius: 0.8rem;

  padding: 1.8rem 2rem;

  & + & {
    margin-top: 1rem;
  }

  ${Text} {
    margin-top: 0.8rem;
  }
`;

export const TitleContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleBox = styled.section`
  display: flex;

  section {
    margin-left: 0.8rem;
  }
`;

export const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
`;

export const DropdownIcon = styled.img<{ toggle: boolean }>`
  cursor: pointer;
  transform: ${({ toggle }) => (toggle ? "rotate(180deg)" : "rotate(0)")};
`;
