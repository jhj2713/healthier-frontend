import styled from "styled-components";

export const Buttons = styled.section`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;

  margin: 0 2rem;
  padding-top: 6.8rem;
  padding-bottom: 3rem;

  background: linear-gradient(180deg, rgba(19, 20, 22, 0) 0%, #131416 49.48%);
`;

export const ButtonBox = styled.section`
  & + & {
    margin-top: 1.2rem;
  }
`;
