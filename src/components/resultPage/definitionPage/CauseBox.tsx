import styled from "styled-components";

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
const Description = styled.section`
  margin: 1.2rem 1.9rem 1.4rem 1.9rem;

  font-size: 1.5rem;
  font-weight: 100;
  line-height: 150%;

  color: ${({ theme }) => theme.color.grey_300};

  text-align: center;

  word-break: keep-all;
`;

const CauseBox = ({
  description_1,
  description_2,
}: {
  description_1: string;
  description_2: string;
}) => {
  return (
    <Container>
      <TagBox>
        <Tag num={0}>#생활요인</Tag>
        <Description>{description_1}</Description>
      </TagBox>
      <section />
      <TagBox>
        <Tag num={1}>#유전요인</Tag>
        <Description>{description_2}</Description>
      </TagBox>
    </Container>
  );
};

export default CauseBox;
