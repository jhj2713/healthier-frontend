import { IMedicineTag } from "src/interfaces/resultPage";
import { Tags, Tag } from "./index.style";

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
