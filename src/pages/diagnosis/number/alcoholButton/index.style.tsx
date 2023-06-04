import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonBox = styled.div`
  color: ${({ theme }) => theme.color.white};
`;
