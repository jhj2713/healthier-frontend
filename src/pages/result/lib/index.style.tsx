import { Heading_2 } from "src/lib/fontStyle";
import styled from "styled-components";

export const ChipsContainer = styled.div`
  display: flex;
  gap: 1rem;

  align-items: center;
`;

export const Chip = styled.div`
  background: ${({ theme }) => theme.color.grey_700};
  color: ${({ theme }) => theme.color.grey_300};

  font-size: 1.3rem;
  font-weight: 100;
  line-height: 100%;
  letter-spacing: -0.5px;

  padding: 0.8rem 1rem;

  border-radius: 100px;
`;

export const Separator = styled.div`
  width: 2.4rem;
  height: 0.2rem;

  background: ${({ theme }) => theme.color.green};

  margin-bottom: 1.2rem;
`;

export const Title = styled(Heading_2)`
  color: ${({ theme }) => theme.color.grey_200};

  margin-bottom: 2rem;
`;
