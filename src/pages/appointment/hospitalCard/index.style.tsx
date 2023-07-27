import { Body_2 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 2rem 1.8rem;

  background: ${({ theme }) => theme.color.grey_850};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & + & {
    margin-top: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .left-content {
    display: flex;

    p + p {
      margin-left: 0.6rem;
    }
  }
`;

export const Title = styled.p`
  max-width: 13rem;
  word-break: break-all;

  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.color.grey_200};
`;

export const Category = styled.p`
  align-self: flex-end;
  margin-bottom: 0.4rem;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.color.grey_500};
`;

export const Status = styled.p<{ isEnd: boolean }>`
  align-self: flex-start;

  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.03rem;
  color: ${({ theme, isEnd }) => (isEnd ? theme.color.grey_600 : theme.color.green)};
`;

export const Description = styled(Body_2)`
  color: ${({ theme }) => theme.color.grey_400};
  display: inline-block;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 0.6rem;
`;
