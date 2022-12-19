import styled from "styled-components";
import { Body_4, Description } from "../../../lib/fontStyle";

export const Container = styled.article`
  margin-top: 3.2rem;
`;

export const Title = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_300};
`;

export const AgreementList = styled.section`
  margin-top: 1.2rem;
`;

export const AgreementBox = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.6rem;

  .agreement-detail {
    font-size: 1.3rem;
    font-weight: 200;
    line-height: 1.8rem;

    color: ${({ theme }) => theme.color.sub_blue};
    text-decoration-line: underline;

    cursor: pointer;
  }
`;

export const AgreementCheck = styled.section`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const CheckText = styled(Description)`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.grey_300};
  margin-left: 0.9rem;
`;

export const TotalCheckText = styled(CheckText)`
  font-size: 1.6rem;
`;
