import styled from "styled-components";
import { IMedicineTag } from "../../../interfaces/resultPage";

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

  font-size: 1.3rem;
  font-weight: 300;
  letter-spacing: 0;

  margin-right: 0.8rem;
  margin-top: 0.8rem;
`;

const MedicineTag = ({ tags }: IMedicineTag) => {
  return (
    <Tags>
      {tags.map((medicine, idx) => (
        <Tag key={idx}>{`${medicine.emoji} ${medicine.name}`}</Tag>
      ))}
    </Tags>
  );
};

export default MedicineTag;
