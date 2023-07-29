import styled from "styled-components";

export const Separator = styled.div`
  width: 2.4rem;
  height: 0.2rem;

  background: ${({ theme }) => theme.color.green};

  margin-bottom: 1.2rem;
`;

export const Title = styled.h2<{ marginBottom: string }>`
  color: ${({ theme }) => theme.color.grey_200};

  white-space: pre-line;

  font-size: 2.4rem;
  font-weight: 300;
  line-height: 140%;

  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

export const RootContainer = styled.div`
  padding-bottom: 10.6rem;
`;

export const SubTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 150%;
  letter-spacing: -0.5px;

  color: ${({ theme }) => theme.color.grey_300};
`;
