import { useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";
import * as Styled from "./index.style";
import type { FallbackProps } from "react-error-boundary";

export default function Error({ resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate();

  const handleClickRetryButton = () => {
    resetErrorBoundary();
  };

  const handleClickBackButton = () => {
    resetErrorBoundary();
    navigate(-1);
  };

  return (
    <Layout>
      <ContentHeader back={true} backCallback={handleClickBackButton} exit={false}>
        감별진단
      </ContentHeader>
      <Styled.Container>
        <Styled.Dialog>
          <Styled.Message>에러입니당</Styled.Message>
          <Styled.Button onClick={handleClickRetryButton}>다시 시도하기</Styled.Button>
        </Styled.Dialog>
      </Styled.Container>
    </Layout>
  );
}
