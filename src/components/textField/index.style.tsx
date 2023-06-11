import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 14.6rem;
  padding: 1.4rem 0.8rem 1.4rem 1.6rem;

  box-sizing: border-box;

  background: ${({ theme }) => theme.color.grey_800};
  border-radius: 0.8rem;
  resize: none;

  border: 0.1rem solid ${({ theme }) => theme.color.grey_600};

  /* typo */
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.color.grey_600};

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.grey_600};
  }
  ::-webkit-scrollbar {
    width: 1.2rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.grey_600};
    background-clip: padding-box;
    border: 0.4rem solid transparent;
    border-radius: 0.8rem;
  }
`;

export const StyledLabel = styled.p`
  /* typo */
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  letter-spacing: -0.3px;

  color: ${({ theme }) => theme.color.grey_300};
`;
