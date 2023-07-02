import BottomSheet from "src/components/bottomSheet";
import DoctorCard from "./doctorCard";
import * as Styled from "./index.style";
import Map from "./map";
import Search from "./search";

const MockDoctorData = [
  {
    title: "세브란스병원",
    category: "대학병원",
    status: "진료중",
    distance: 9.7,
    address: "서울 서대문구 연세로 50-1 (신촌동)",
    time: "평일 8:30 ~ 17:00 ㅣ 토요일 8:30 ~ 12:30",
    inspection: ["MRI/CT 검사", "PCR검사", "초음파검사"],
  },
  {
    title: "서강신촌병원",
    category: "병원",
    status: "진료마감",
    distance: 13.1,
    address: "13.1km ㅣ 서울 마포구 서강로 300",
    time: "평일 8:30 ~ 17:00 ㅣ 토요일 8:30 ~ 12:30",
    inspection: ["PCR검사"],
  },
  {
    title: "세브란스병원",
    category: "대학병원",
    status: "진료중",
    distance: 9.7,
    address: "서울 서대문구 연세로 50-1 (신촌동)",
    time: "평일 8:30 ~ 17:00 ㅣ 토요일 8:30 ~ 12:30",
    inspection: ["MRI/CT 검사", "PCR검사", "초음파검사"],
  },
  {
    title: "서강신촌병원",
    category: "병원",
    status: "진료마감",
    distance: 13.1,
    address: "13.1km ㅣ 서울 마포구 서강로 300",
    time: "평일 8:30 ~ 17:00 ㅣ 토요일 8:30 ~ 12:30",
    inspection: ["PCR검사"],
  },
];

const Appointment = () => {
  const handleMoveMap = () => {
    console.log("move");
  };

  return (
    <Styled.Container>
      <Search />
      <Map />
      <BottomSheet background="transparent" onClickOverlay={handleMoveMap} height="374px" isBottomSheetOpen>
        <Styled.FilterContainer>거리순</Styled.FilterContainer>
        <Styled.CardContainer>
          {MockDoctorData.map((doctor, idx) => (
            <DoctorCard
              key={idx}
              title={doctor.title}
              category={doctor.category}
              status={doctor.status}
              distance={doctor.distance}
              address={doctor.address}
              time={doctor.time}
              inspection={doctor.inspection}
            />
          ))}
        </Styled.CardContainer>
      </BottomSheet>
    </Styled.Container>
  );
};

export default Appointment;
