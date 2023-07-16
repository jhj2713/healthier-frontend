import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;

  gap: 0.2rem;

  padding: 0.6rem 1rem;
  border-radius: 6rem;
  background-color: ${({ theme }) => theme.color.blue};

  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  color: ${({ theme }) => theme.color.white};

  cursor: pointer;
`;
