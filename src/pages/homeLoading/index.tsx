import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Title, Description, Icon } from "./index.style";
import imageUrl from "src/data/image_url";
import Loading from "src/components/loading";

const HomeLoading = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => navigate("/"), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Loading
      title={
        <>
          <Title>
            <span className="highlight">홈으로 이동중이에요</span>
          </Title>
          <Description>
            다음에 더 <span className="highlight">다양한 진단</span>으로 만나요!
          </Description>
        </>
      }
      icon={<Icon loading="eager" alt="icon" src={imageUrl.home_loading} />}
    />
  );
};

export default HomeLoading;
