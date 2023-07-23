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

export const TagContainer = styled.div`
  display: flex;
  gap: 0.6rem;
`;

export const Tag = styled.div`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.05rem;
  color: ${({ theme }) => theme.color.sub_blue};

  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  background: rgba(84, 100, 242, 0.2);
`;
