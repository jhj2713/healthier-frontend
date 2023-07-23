import { HTMLAttributes } from "react";
import * as Styled from "./index.style";

interface IHospitalCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  category: string;
  status: "OPEN" | "CLOSED" | "UNKNOWN";
  distance: string;
  address: string;
  operatingTime: string;
  lunchTime: string;
  phoneNumber: string;
  emergencyNight: string;
  nightService: string;
}
const statusMap = {
  OPEN: "진료중",
  CLOSED: "진료마감",
  UNKNOWN: "정보없음",
} as const;

const HospitalCard = ({
  title,
  category,
  status,
  distance,
  address,
  operatingTime,
  lunchTime,
  phoneNumber,
  emergencyNight,
  nightService,
  ...props
}: IHospitalCardProps) => {
  return (
    <Styled.Container {...props}>
      <Styled.HeaderContainer>
        <div className="left-content">
          <Styled.Title>{title}</Styled.Title>
          <Styled.Category>{category}</Styled.Category>
        </div>
        <Styled.Status isEnd={status !== "OPEN"}>{statusMap[status]}</Styled.Status>
      </Styled.HeaderContainer>
      <div>
        <Styled.Description>
          {distance}
          {distance && address && " ㅣ "}
          {address}
        </Styled.Description>
        <Styled.Description>
          {operatingTime && `운영시간 ${operatingTime}`}
          {operatingTime && lunchTime && " | "}
          {lunchTime && `점심시간 ${lunchTime}`}
        </Styled.Description>
        <Styled.Description>{phoneNumber}</Styled.Description>
      </div>
      <Styled.TagContainer>
        {nightService && <Styled.Tag>야간진료</Styled.Tag>}
        {emergencyNight && <Styled.Tag>응급실운영</Styled.Tag>}
      </Styled.TagContainer>
    </Styled.Container>
  );
};

export default HospitalCard;
