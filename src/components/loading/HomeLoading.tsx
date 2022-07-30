import styled from "styled-components";
import LoadingContainer from "./LoadingContainer";
import { Heading_3, Heading_5 } from "../../lib/fontStyle";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Highlight = styled.span`
  font-weight: 500;
`;
const Title = styled(Heading_3)`
  font-weight: 200;
  text-align: center;
  color: ${({ theme }) => theme.color.grey_200};
`;
const Description = styled(Heading_5)`
  font-weight: 200;
  color: ${({ theme }) => theme.color.grey_200};

  margin-top: 0.6rem;
`;
const Icon = styled.section`
  width: 26rem;
  height: 24rem;

  margin: 2rem 5rem 1.2rem 5rem;
`;

const LoadingBox = styled.section`
  height: 7.7rem;
`;

const HomeLoading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContainer>
      <>
        <Title>
          <Highlight>홈으로 이동중이에요</Highlight>
        </Title>
        <Description>
          다음에 더 <Highlight>다양한 진단</Highlight>으로 만나요!
        </Description>
        <Icon>
          <img
            alt="icon"
            src="/images/loading/MainLoadingImage.png"
            width={260}
          />
        </Icon>
        <LoadingBox />
      </>
    </LoadingContainer>
  );
};

export default HomeLoading;
