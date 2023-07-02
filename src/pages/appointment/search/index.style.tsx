import styled from "styled-components";

export const Container = styled.div`
  z-index: 1000;
  position: absolute;
  left: 2rem;
  top: 5rem;
  width: calc(100% - 4rem);
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  padding: 1.4rem 1.8rem;
  border-radius: 3rem;

  background: ${({ theme }) => theme.color.grey_850};
`;

export const Input = styled.input`
  width: 100%;

  color: ${({ theme }) => theme.color.grey_400};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.03rem;
`;
