import LoadingContainer from "src/components/loadingContainer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Title, Description, Highlight, Icon } from "./index.style";
import imageUrl from "src/data/image_url";

const HomeLoading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContainer>
      <Title>
        <Highlight>홈으로 이동중이에요</Highlight>
      </Title>
      <Description>
        다음에 더 <Highlight>다양한 진단</Highlight>으로 만나요!
      </Description>
      <Icon>
        <img loading="eager" alt="icon" src={imageUrl.home_loading} width={260} />
      </Icon>
    </LoadingContainer>
  );
};

export default HomeLoading;
