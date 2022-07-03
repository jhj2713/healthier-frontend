import styled from "styled-components";
import Description from "../common/Description";

const Container = styled.section`
  background-color: ${({ theme }) => theme.color.grey_800};
  border-radius: 0.8rem;

  padding: 2rem 2.4rem;

  & + & {
    margin-top: 1rem;
  }
`;
const Title = styled.section`
  font-size: 1.8rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.color.grey_200};

  margin-bottom: 0.6rem;
`;

const TreatmentBox = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description text={description} />
    </Container>
  );
};

export default TreatmentBox;
