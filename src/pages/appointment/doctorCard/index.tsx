import * as Styled from "./index.style";

interface IDoctorCardProps {
  title: string;
  category: string;
  status: string;
  distance: number;
  address: string;
  time: string;
  inspection: string[];
}

const DoctorCard = ({ title, category, status, distance, address, time, inspection }: IDoctorCardProps) => {
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <div className="left-content">
          <Styled.Title>{title}</Styled.Title>
          <Styled.Category>{category}</Styled.Category>
        </div>
        <Styled.Status isEnd={status === "진료마감"}>{status}</Styled.Status>
      </Styled.HeaderContainer>
      <div>
        <Styled.Description>
          {distance}km ㅣ {address}
        </Styled.Description>
        <Styled.Description>{time}</Styled.Description>
      </div>
      <div>
        {inspection.map((inspect, idx) => (
          <Styled.InspectionTag key={idx}>{inspect}</Styled.InspectionTag>
        ))}
      </div>
    </Styled.Container>
  );
};

export default DoctorCard;
