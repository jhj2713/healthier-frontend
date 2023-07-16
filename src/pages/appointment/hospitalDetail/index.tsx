import theme from "src/lib/theme";
import * as Styled from "./index.style";

interface IHospitalDetailProps {
  id: string;
  name: string;
  type: string;
  phoneNumber: string;
  address: string;
  homepage: string;
  establishedDate: string;
  meToHospitalDistance: string;
  operatingTime: {
    start: string;
    end: string;
  };
  lunchTime: {
    start: string;
    end: string;
  };
  point: {
    x: number;
    y: number;
  };
  nearbyPublicBuilding: string;
  direction: string;
  distance: string;
  parkingSpace: string;
  parkingFee: string;
  parkingExtraInfo: string;
  emergencyNight: string;
  emergencyNightPhone: string;
  nightService: string;
  operatingStatus: "OPEN" | "CLOSED" | "UNKNOWN";
  schedule: {
    Mon: {
      start: string;
      end: string;
    };
    Tue: {
      start: string;
      end: string;
    };
    Wed: {
      start: string;
      end: string;
    };
    Thu: {
      start: string;
      end: string;
    };
    Fri: {
      start: string;
      end: string;
    };
    Sat: {
      start: string;
      end: string;
    };
    Sun: {
      start: string;
      end: string;
    };
    lunch: {
      start: string;
      end: string;
    };
  };
  department: {
    name: string;
    count: string;
  }[];
  specialTreatment: {
    name: string;
  }[];
  equipment: {
    name: string;
  }[];
  excellentAgency: {
    name: string;
    grade: string;
  }[];
}

const MockData = {
  id: "64b243db26351725672428b7",
  name: "가람내과의원",
  type: "의원",
  phoneNumber: "02-427-7575",
  address: "서울특별시 강동구 아리수로50길 50 4층 11호 (고덕동, 래미안힐스테이트고덕)",
  homepage: "http://www.가람내과.한국",
  establishedDate: "20070927",
  meToHospitalDistance: "991m",
  operatingTime: {
    start: "",
    end: "",
  },
  lunchTime: {
    start: "13:00",
    end: "14:00",
  },
  point: {
    x: 127.1489063,
    y: 37.559109,
    type: "Point",
    coordinates: [127.1489063, 37.559109],
  },
  nearbyPublicBuilding: "고덕래미안힐스테이트상가",
  direction: "4층",
  distance: "아리수로50길 50",
  parkingSpace: "120",
  parkingFee: "N",
  parkingExtraInfo: "진료시 무료",
  emergencyNight: "N",
  emergencyNightPhone: "",
  nightService: "Y",
  operatingStatus: "UNKNOWN",
  schedule: {
    Mon: {
      start: "09:00",
      end: "18:30",
    },
    Tue: {
      start: "09:00",
      end: "18:30",
    },
    Wed: {
      start: "09:00",
      end: "18:30",
    },
    Thu: {
      start: "09:00",
      end: "18:30",
    },
    Fri: {
      start: "09:00",
      end: "18:30",
    },
    Sat: {
      start: "09:00",
      end: "16:00",
    },
    Sun: {
      start: "",
      end: "",
    },
    lunch: {
      start: "13:00",
      end: "14:00",
    },
  },
  department: [
    {
      name: "내과",
      count: "1",
    },
    {
      name: "소아청소년과",
      count: "0",
    },
    {
      name: "이비인후과",
      count: "0",
    },
    {
      name: "피부과",
      count: "0",
    },
  ],
  specialTreatment: [],
  equipment: [
    {
      name: "초음파영상진단기",
    },
  ],
  excellentAgency: [
    {
      name: "천식",
      grade: "2회연속",
    },
  ],
} as IHospitalDetailProps;

const statusMap = {
  OPEN: "진료중",
  CLOSED: "진료마감",
  UNKNOWN: "정보없음",
} as const;
const scheduleMap = {
  Mon: "월요일",
  Tue: "화요일",
  Wed: "수요일",
  Thu: "목요일",
  Fri: "금요일",
  Sat: "토요일",
  Sun: "일요일",
  lunch: "점심시간",
} as const;

type TScheduleDay = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

const HospitalDetail = () => {
  const renderSchedule = () => {
    const scheduleArr = [] as { day: string; time: string }[];

    for (const key in MockData.schedule) {
      const scheduleKey = key as TScheduleDay;

      if (MockData.schedule[scheduleKey].start === "" && MockData.schedule[scheduleKey].end === "") {
        continue;
      }

      scheduleArr.push({
        day: scheduleMap[scheduleKey],
        time: `${MockData.schedule[scheduleKey].start} ~ ${MockData.schedule[scheduleKey].end}`,
      });
    }

    return scheduleArr;
  };

  return (
    <Styled.Container>
      <Styled.ContentContainer direction="column" gap={1} align="flex-start">
        <Styled.Flex gap={1}>
          <Styled.Title>{MockData.name}</Styled.Title>
          <Styled.Description color={theme.color.grey_400}>
            {MockData.type} | {MockData.meToHospitalDistance}
          </Styled.Description>
        </Styled.Flex>

        <Styled.Flex gap={0.6} align="flex-start">
          <img alt="position" src="/images/doctorAppointment/detail-position.svg" />
          <Styled.Description color={theme.color.grey_300}>{MockData.address}</Styled.Description>
        </Styled.Flex>

        <Styled.Flex gap={0.6} align="flex-start">
          <img alt="position" src="/images/doctorAppointment/detail-time.svg" />
          <Styled.Flex direction="column" align="flex-start">
            <Styled.Description color={theme.color.grey_300}>{statusMap[MockData.operatingStatus]}</Styled.Description>
            {renderSchedule().map((schedule) => (
              <Styled.Description key={schedule.day} color={theme.color.grey_300}>
                {schedule.day} | {schedule.time}
              </Styled.Description>
            ))}
          </Styled.Flex>
        </Styled.Flex>

        <Styled.Flex gap={0.6} align="flex-start">
          <img alt="position" src="/images/doctorAppointment/detail-site.svg" />
          <a href={MockData.homepage} target="_blank" rel="noreferrer">
            <Styled.Description color={theme.color.grey_300} style={{ textDecoration: "underline" }}>
              {MockData.homepage}
            </Styled.Description>
          </a>
        </Styled.Flex>

        <Styled.Flex gap={0.6} align="flex-start">
          <img alt="position" src="/images/doctorAppointment/detail-phone.svg" />
          <Styled.Description color={theme.color.grey_300}>{MockData.phoneNumber}</Styled.Description>
        </Styled.Flex>

        <Styled.Button>전화로 병원 예약하기</Styled.Button>
      </Styled.ContentContainer>

      <Styled.Line />

      <Styled.ContentContainer direction="column" gap={3.2} align="flex-start">
        <Styled.Flex gap={1} direction="column">
          <Styled.Description color={theme.color.grey_300}>상세 정보</Styled.Description>
        </Styled.Flex>

        <Styled.Flex gap={1} direction="column">
          <Styled.Description color={theme.color.grey_300}>주차 정보</Styled.Description>
        </Styled.Flex>
      </Styled.ContentContainer>
    </Styled.Container>
  );
};

export default HospitalDetail;
