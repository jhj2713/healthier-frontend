import styled from "styled-components";
import { Description } from "src/lib/fontStyle";

export const Container = styled.article<{ agreementDetail: number }>`
  margin-top: 5.6rem;
  padding: 2rem 2.4rem;

  word-break: break-all;
  white-space: pre-line;

  height: calc(100vh - 9.6rem);
  overflow: ${({ agreementDetail }) => (agreementDetail === 1 ? "auto" : "hidden")};
`;

export const Contents = styled.section`
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.color.grey_300};

  .sub-title {
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 150%;

    margin-top: 2.8rem;
  }
`;

export const Text = styled(Description)`
  margin-top: 0.6rem;
`;

export const SubText = styled(Text)`
  margin-left: 1.6rem;

  & + & {
    margin-top: 0.2rem;
  }
`;

export const Table = styled.section`
  margin-top: 0.6rem;
  margin-left: 0.9rem;

  font-size: 1rem;
  font-weight: 200;
  line-height: 150%;

  display: flex;

  word-break: keep-all;

  color: ${({ theme }) => theme.color.grey_300};

  & + & {
    margin-top: 0.1rem;
  }

  .table-title {
    width: 6.6rem;
    padding: 1rem;

    background: ${({ theme }) => theme.color.grey_800};
  }

  .table-description {
    width: 100%;
    padding: 1rem 1.2rem;

    background: ${({ theme }) => theme.color.grey_850};
  }
`;
