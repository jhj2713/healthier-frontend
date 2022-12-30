import styled from "styled-components";
import { Description } from "src/lib/fontStyle";

export const Container = styled.article<{ agreementDetail: number }>`
  margin-top: 5.6rem;
  padding: 2rem 2.4rem;

  word-break: break-all;
  white-space: pre-line;

  height: calc(100vh - 9.6rem);
  overflow: ${({ agreementDetail }) => (agreementDetail === 2 ? "auto" : "hidden")};
`;

export const Contents = styled.section`
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.color.grey_300};
`;

export const Prefix = styled(Description)`
  margin-top: 3.2rem;
`;

export const Text = styled(Description)`
  margin-top: 0.6rem;
`;

export const AgreementItem = styled.section`
  margin-top: 2rem;

  .sub-title {
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 150%;
  }

  .sub-description {
    margin-top: 1.2rem;
    margin-left: 1.6rem;
  }
`;

export const Reference = styled.section<{ tab: number }>`
  font-size: 1rem;
  font-weight: 200;
  line-height: 150%;

  color: ${({ theme }) => theme.color.grey_400};

  margin-top: 0.6rem;

  margin-left: ${({ tab }) => tab}rem;
`;

export const Table = styled.section`
  margin-top: 0.7rem;

  font-size: 1rem;
  font-weight: 200;
  line-height: 150%;

  word-break: keep-all;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  color: ${({ theme }) => theme.color.grey_300};

  .table-title {
    padding: 1.6rem 0.8rem;
    background: ${({ theme }) => theme.color.grey_800};

    text-align: center;

    + .table-title {
      margin-left: 0.1rem;
    }
  }

  .table-description {
    padding: 1.2rem 0.8rem;
    background: ${({ theme }) => theme.color.grey_850};

    text-align: center;

    + .table-description {
      margin-left: 0.1rem;
    }
  }
`;
