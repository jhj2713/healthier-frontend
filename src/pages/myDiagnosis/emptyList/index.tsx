import imageUrl from "src/data/image_url";
import { Title, EmptyContainer, ImageBox, EmptyText } from "./index.style";

const EmptyPage = () => {
  return (
    <>
      <Title>
        <span className="highlight">빠른 진단</span>으로
        <br /> 내 몸의 <span className="highlight">정확한 증상</span>을
        <br />
        알아보세요!
      </Title>
      <EmptyContainer>
        <ImageBox>
          <img alt="empty" src={imageUrl.empty} />
        </ImageBox>
        <EmptyText>진단 내역이 없어요</EmptyText>
      </EmptyContainer>
    </>
  );
};

export default EmptyPage;
