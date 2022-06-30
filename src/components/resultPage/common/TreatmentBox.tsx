import styled from "styled-components";
import Description from "./Description";

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
  margin-bottom: 1.4rem;
  color: ${({ theme }) => theme.color.grey_200};

  font-weight: bolder;
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
