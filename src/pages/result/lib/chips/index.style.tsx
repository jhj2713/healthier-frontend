import styled from "styled-components";

export const ChipsContainer = styled.div`
  display: flex;
  gap: 1rem;

  align-items: center;
  flex-wrap: wrap;
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
