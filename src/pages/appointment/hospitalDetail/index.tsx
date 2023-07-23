import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { mapFetcher } from "src/api/map/fetcher";
import { IHospitalDetailInfo } from "src/interfaces/map";
import theme from "src/lib/theme";
import { convertWeekDay } from "src/utils/appointment";
import { AppointmentTag } from "../tags";
import * as Styled from "./index.style";

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

const HospitalDetail = ({ selectedHospital }: { selectedHospital: string }) => {
  const { data, isFetching, isSuccess } = useQuery<IHospitalDetailInfo, AxiosError>({
    queryKey: ["appointment", "map", selectedHospital],
    queryFn: () => mapFetcher.getMapDetail(selectedHospital),
    staleTime: Infinity,
  });

  const [isOpenSchedule, setIsOpenSchedule] = useState<boolean>(false);

  const renderSchedule = () => {
    if (!data) {
      return [];
    }

    const scheduleArr = [] as { day: string; time: string }[];

    for (const key in data.schedule) {
      const scheduleKey = key as TScheduleDay;

      if (data.schedule[scheduleKey].start === "" && data.schedule[scheduleKey].end === "") {
        continue;
      }

      scheduleArr.push({
        day: scheduleMap[scheduleKey],
        time: `${data.schedule[scheduleKey].start} ~ ${data.schedule[scheduleKey].end}`,
      });
    }

    return scheduleArr;
  };

  return (
    <Styled.Container>
      {!isFetching && isSuccess && (
        <>
          <Styled.ContentContainer direction="column" gap={1} align="flex-start">
            <Styled.Flex gap={1}>
              <Styled.Title>{data.name}</Styled.Title>
              <Styled.Description color={theme.color.grey_400}>
                {data.type} | {data.meToHospitalDistance}
              </Styled.Description>
            </Styled.Flex>

            {data.address && (
              <Styled.Flex gap={0.6} align="flex-start">
                <img alt="position" src="/images/doctorAppointment/detail-position.svg" />
                <Styled.Description color={theme.color.grey_300}>{data.address}</Styled.Description>
              </Styled.Flex>
            )}

            <Styled.Flex gap={0.6} align="flex-start">
              <img alt="position" src="/images/doctorAppointment/detail-time.svg" />
              <Styled.Flex direction="column" align="flex-start">
                <Styled.Flex>
                  <Styled.Description color={data.operatingStatus === "OPEN" ? theme.color.green : theme.color.grey_600}>
                    {statusMap[data.operatingStatus]}
                    {data.operatingStatus !== "UNKNOWN" &&
                      ` ・ ${data.schedule[convertWeekDay()].start ?? "00:00"} ~ ${data.schedule[convertWeekDay()].end ?? "00:00"}`}
                  </Styled.Description>
                  <img
                    alt="dropdown"
                    src="/images/doctorAppointment/chevron-down.svg"
                    style={{ marginLeft: "0.2rem", transform: `rotate(${isOpenSchedule ? "180deg" : "0"})` }}
                    onClick={() => setIsOpenSchedule(!isOpenSchedule)}
                  />
                </Styled.Flex>
                {isOpenSchedule &&
                  renderSchedule().map((schedule, idx) => (
                    <Styled.Description key={schedule.day} color={theme.color.grey_300}>
                      <p
                        style={{
                          color: idx === renderSchedule().length - 1 ? theme.color.sub_blue : theme.color.grey_300,
                          display: "inline",
                        }}
                      >
                        {schedule.day}
                      </p>{" "}
                      | {schedule.time}
                    </Styled.Description>
                  ))}
              </Styled.Flex>
            </Styled.Flex>

            {data.homepage && (
              <Styled.Flex gap={0.6} align="flex-start">
                <img alt="position" src="/images/doctorAppointment/detail-site.svg" />
                <a href={data.homepage} target="_blank" rel="noreferrer">
                  <Styled.Description color={theme.color.grey_300} style={{ textDecoration: "underline" }}>
                    {data.homepage}
                  </Styled.Description>
                </a>
              </Styled.Flex>
            )}

            {data.phoneNumber && (
              <Styled.Flex gap={0.6} align="flex-start">
                <img alt="position" src="/images/doctorAppointment/detail-phone.svg" />
                <Styled.Description color={theme.color.grey_300}>{data.phoneNumber}</Styled.Description>
              </Styled.Flex>
            )}

            <Styled.Button>전화로 병원 예약하기</Styled.Button>
          </Styled.ContentContainer>

          <Styled.Line />
          <Styled.ContentContainer direction="column" align="flex-start">
            <Styled.Flex gap={1} direction="column">
              <Styled.SubTitle color={theme.color.grey_300}>주차 정보</Styled.SubTitle>
            </Styled.Flex>
          </Styled.ContentContainer>

          <Styled.Line />
          <Styled.ContentContainer direction="column" align="flex-start">
            <Styled.SubTitle color={theme.color.grey_300}>진료 정보</Styled.SubTitle>
            <div style={{ height: "1.2rem" }} />
            <Styled.Flex gap={2} direction="column" align="flex-start">
              <div>
                <Styled.Description color={theme.color.grey_300}>진료 과목</Styled.Description>
                <Styled.TagContainer>
                  {data.department.map((part, idx) => (
                    <AppointmentTag key={idx}>{part.name}</AppointmentTag>
                  ))}
                </Styled.TagContainer>
              </div>

              <div>
                <Styled.Description color={theme.color.grey_300}>진료 과목별 전문의 정보</Styled.Description>
                <Styled.Table>
                  <thead>
                    <tr>
                      <th>
                        <Styled.Description color={theme.color.grey_300}>진료 과목명</Styled.Description>
                      </th>
                      <th>
                        <Styled.Description color={theme.color.grey_300}>전문의 수</Styled.Description>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.department.map((part, idx) => (
                      <tr key={idx}>
                        <td>
                          <Styled.Description color={theme.color.grey_400}>{part.name}</Styled.Description>
                        </td>
                        <td>
                          <Styled.Description color={theme.color.grey_400}>{part.count}</Styled.Description>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Styled.Table>
              </div>

              <div>
                <Styled.Description color={theme.color.grey_300}>의료 장비</Styled.Description>
                <Styled.TagContainer>
                  {data.equipment.map((part, idx) => (
                    <AppointmentTag key={idx}>{part.name}</AppointmentTag>
                  ))}
                </Styled.TagContainer>
              </div>

              <div>
                <Styled.Description color={theme.color.grey_300}>특수 진료 목록</Styled.Description>
                <Styled.TagContainer>
                  {data.specialTreatment.map((part, idx) => (
                    <AppointmentTag key={idx}>{part.name}</AppointmentTag>
                  ))}
                </Styled.TagContainer>
              </div>

              <div>
                <Styled.Description color={theme.color.grey_300}>우수기관 평가 정보</Styled.Description>
                <Styled.Table>
                  <thead>
                    <tr>
                      <th>
                        <Styled.Description color={theme.color.grey_300}>평가항목</Styled.Description>
                      </th>
                      <th>
                        <Styled.Description color={theme.color.grey_300}>평가정보</Styled.Description>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.excellentAgency.map((part, idx) => (
                      <tr key={idx}>
                        <td>
                          <Styled.Description color={theme.color.grey_400}>{part.name}</Styled.Description>
                        </td>
                        <td>
                          <Styled.Description color={theme.color.grey_400}>{part.grade} 우수기관</Styled.Description>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Styled.Table>
              </div>
            </Styled.Flex>

            <Styled.SubDescription style={{ marginTop: "1.2rem" }}>
              헬시어에서 제공하는 정보는 건강보험심사평가원, 국민건강보험공단의 의료빅데이터 정보를 기반으로 작성되었습니다.
            </Styled.SubDescription>
          </Styled.ContentContainer>
        </>
      )}
    </Styled.Container>
  );
};

export default HospitalDetail;
