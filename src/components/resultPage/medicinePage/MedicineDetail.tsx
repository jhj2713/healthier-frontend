import styled from "styled-components";
import { IMedicineDetail } from "../../../interfaces/resultPage";
import Description from "../common/Description";

const Container = styled.section``;
const Contents = styled.section`
  margin-top: 2.2rem;
`;
const SubTitle = styled.section`
  font-size: 1.6rem;
  line-height: 150%;
  font-weight: 300;

  color: ${({ theme }) => theme.color.grey_200};

  margin-bottom: 0.2rem;
`;
const Highlight = styled.section`
  color: ${({ theme }) => theme.color.green};

  font-size: 1.5rem;
  font-weight: 100;
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
  font-weight: 300;
  letter-spacing: 0;

  margin-right: 0.8rem;
  margin-top: 0.8rem;
`;

const MedicineDetail = ({ selected, medicine }: IMedicineDetail) => {
  return (
    <Container>
      <Contents>
        <SubTitle>효능•효과</SubTitle>
        <Description text={medicine[selected - 1].efficacy} />
      </Contents>
      <Contents>
        <SubTitle>복용 시 주의해주세요</SubTitle>
        <Highlight>{medicine[selected - 1].caution.h1}</Highlight>
        <Description text={medicine[selected - 1].caution.h2} />
      </Contents>
      <Contents>
        <SubTitle>부작용</SubTitle>
        <Tags>
          {medicine[selected - 1].sideeffects.map((tag, idx) => (
            <Tag key={idx}>{tag.emoji + " " + tag.name}</Tag>
          ))}
        </Tags>
      </Contents>
    </Container>
  );
};

export default MedicineDetail;
