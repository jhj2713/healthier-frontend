import styled from "styled-components";

const Container = styled.section`
  display: flex;

  margin-top: 2.4rem;
`;
const TagBox = styled.section`
  background-color: ${({ theme }) => theme.color.grey_800};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-left: 1rem;
  }
`;
const Tag = styled.section<{ num: number }>`
  margin-top: 1.4rem;
  padding: 0.8rem 1rem;

  background-color: ${({ num, theme }) =>
    num % 2 === 0 ? theme.color.blue : theme.color.sub_blue_2};
  color: ${({ theme }) => theme.color.grey_200};

  border-radius: 10rem;

  font-size: 1.3rem;
`;
const Description = styled.section`
  margin: 1.2rem 1.9rem 1.4rem 1.9rem;

  font-size: 1.5rem;
  line-height: 150%;

  color: ${({ theme }) => theme.color.grey_300};

  text-align: center;
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
      <TagBox>
        <Tag num={1}>#유전요인</Tag>
        <Description>{description_2}</Description>
      </TagBox>
    </Container>
  );
};

export default CauseBox;
