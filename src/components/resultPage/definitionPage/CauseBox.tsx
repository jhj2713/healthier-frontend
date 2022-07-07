import styled from "styled-components";
import { ICauseBox } from "../../../interfaces/resultPage";
import { Body_2 } from "../../../lib/fontStyle";

const Container = styled.section`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1rem 1fr;
`;
const TagBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.color.grey_800};
  border-radius: 0.8rem;
`;
const Tag = styled.section<{ num: number }>`
  display: flex;

  margin-top: 1.4rem;
  padding: 0.8rem 1rem;

  background-color: ${({ num, theme }) =>
    num % 2 === 0 ? theme.color.blue : theme.color.sub_blue_2};
  color: ${({ theme }) => theme.color.grey_200};

  border-radius: 10rem;

  font-size: 1.3rem;
  font-weight: 300;
`;
const CauseDetailBox = styled.section`
  margin: 1.2rem 1.9rem 1.4rem 1.9rem;

  text-align: center;

  word-break: keep-all;
`;
const Description = styled(Body_2)`
  color: ${({ theme }) => theme.color.grey_300};
`;

const CauseBox = ({ cause_1, cause_2 }: ICauseBox) => {
  return (
    <Container>
      <TagBox>
        <Tag num={0}>{cause_1.cause}</Tag>
        <CauseDetailBox>
          {cause_1.details.map((cause, idx) => (
            <Description key={idx}>{cause}</Description>
          ))}
        </CauseDetailBox>
      </TagBox>
      <section />
      <TagBox>
        <Tag num={1}>{cause_2.cause}</Tag>
        <CauseDetailBox>
          {cause_2.details.map((cause, idx) => (
            <Description key={idx}>{cause}</Description>
          ))}
        </CauseDetailBox>
      </TagBox>
    </Container>
  );
};

export default CauseBox;
