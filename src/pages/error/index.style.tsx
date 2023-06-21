import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Dialog = styled.div`
  text-align: center;
`;
export const Message = styled.p`
  font-size: 1.6rem;
  line-height: 1.5em;
  font-weight: 300;
  color: #fff;
`;
export const Button = styled.button`
  background: ${({ theme }) => theme.color.blue};
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 2.2rem;
  margin-top: 2rem;
`;
