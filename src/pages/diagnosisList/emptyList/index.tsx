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
          <img
            alt="empty"
            src="https://healthier.s3.ap-northeast-2.amazonaws.com/client/%EC%A7%84%EB%8B%A8+%EB%82%B4%EC%97%AD%EC%9D%B4+%EC%97%86%EC%96%B4%EC%9A%94.png"
          />
        </ImageBox>
        <EmptyText>진단 내역이 없어요</EmptyText>
      </EmptyContainer>
    </>
  );
};

export default EmptyPage;
