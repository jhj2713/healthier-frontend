import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.8rem;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 14.6rem;
  padding: 1.4rem 0.8rem 1.4rem 1.6rem;

  box-sizing: border-box;

  background: ${({ theme }) => theme.color.grey_900};
  border-radius: 1.6rem;
  resize: none;

  border: 0.1rem solid ${({ theme }) => theme.color.grey_600};
  outline: none;

  /* typo */
  font-family: Spoqa Han Sans Neo;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 150%;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.color.grey_300};

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

export const StyledBottomText = styled.p`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.color.grey_500};

  position: absolute;
  right: 2rem;
  bottom: 2rem;
`;
