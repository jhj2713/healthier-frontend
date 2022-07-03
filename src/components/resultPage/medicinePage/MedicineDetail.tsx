import styled from "styled-components";
import Description from "../common/Description";

const Container = styled.section``;
const Contents = styled.section`
  margin-top: 2.2rem;
`;
const SubTitle = styled.section`
  font-size: 1.6rem;
  line-height: 150%;
  font-weight: bolder;

  color: ${({ theme }) => theme.color.grey_200};

  margin-bottom: 0.2rem;
`;
const Highlight = styled.section`
  color: ${({ theme }) => theme.color.green};

  font-size: 1.5rem;
  line-height: 150%;
`;
const Tags = styled.section`
  display: -webkit-flexbox;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
`;
const Tag = styled.section`
  background-color: ${({ theme }) => theme.color.grey_750};
  color: ${({ theme }) => theme.color.grey_300};

  padding: 0.8rem 1.4rem;

  border-radius: 6rem;

  font-size: 1.2rem;
  font-weight: bolder;
  font-weight: bolder;
  letter-spacing: 0;

  margin-right: 0.8rem;
  margin-top: 0.8rem;
`;

const tag_arr = [
  "😴 오전 졸림증",
  "🚽 변비",
  "👄 구강건조",
  "😡 맥박 증가",
  "😞 배뇨장애",
];

const MedicineDetail = () => {
  return (
    <Container>
      <Contents>
        <SubTitle>효능•효과</SubTitle>
        <Description text="수면에 도움을 주는 의약품으로 뇌에서 잠을 깨게하는 '히스타민'의 억제를 도와줘요." />
      </Contents>
      <Contents>
        <SubTitle>복용 시 주의해주세요</SubTitle>
        <Highlight>잠들기 30분~1시간 전에 복용해야 해요.</Highlight>
        <Description text="항히스타민제 장기복용은 치매를 유발할 수 있어 2주 이상 쓰지 않는 것을 권고하고 있어요." />
      </Contents>
      <Contents>
        <SubTitle>부작용</SubTitle>
        <Tags>
          {tag_arr.map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
        </Tags>
      </Contents>
    </Container>
  );
};

export default MedicineDetail;
