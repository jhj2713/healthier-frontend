import styled from "styled-components";
import { Body_2 } from "src/lib/fontStyle";

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
  align-items: center;

  .left-content {
    display: flex;
    align-items: center;

    p + p {
      margin-left: 0.6rem;
    }
  }
`;

export const Title = styled.p`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.color.grey_200};
`;

export const Category = styled.p`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.color.grey_500};
`;

export const Status = styled.p<{ isEnd: boolean }>`
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

export const InspectionTag = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: rgba(84, 100, 242, 0.18);
  padding: 0 0.2rem;

  color: ${({ theme }) => theme.color.blue_300};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.03rem;

  & + & {
    margin-left: 0.6rem;
  }
`;
