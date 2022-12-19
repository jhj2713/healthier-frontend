import LoadingContainer from "../loadingContainer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Title, Description, Highlight, Icon } from "./index.style";

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
            loading="eager"
            alt="icon"
            src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/%ED%8C%9D%EC%97%85-%EC%A7%84%EB%8B%A8+%EA%B0%80%EB%8A%A5%ED%95%9C+%EC%A6%9D%EC%83%81-%EC%88%98%EB%A9%B4%EC%9E%A5%EC%95%A0-1.png"
            width={260}
          />
        </Icon>
      </>
    </LoadingContainer>
  );
};

export default HomeLoading;
