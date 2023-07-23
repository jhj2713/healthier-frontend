import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { mapFetcher } from "src/api/map/fetcher";
import BottomSheet from "src/components/bottomSheet";
import Loading from "src/components/loading";
import imageUrl from "src/data/image_url";
import { IUserMapResponse } from "src/interfaces/map";
import theme from "src/lib/theme";
import { emergencyNightData } from "./data";
import HospitalCard from "./hospitalCard";
import HospitalDetail from "./hospitalDetail";
import * as Styled from "./index.style";
import Map from "./map";
import { IPart } from "./partModal/index";
import Search from "./search";
import { EmergencyNightTag } from "./tags";

interface ISelectedFilter {
  emergencyNight: boolean;
  nightService: boolean;
}

const Appointment = () => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 0,
    lng: 0,
  });
  const [searchPosition, setSearchPosition] = useState({
    left: { lat: 0, lng: 0 },
    right: { lat: 0, lng: 0 },
  });
  const [isSettingPosition, setIsSettingPosition] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<ISelectedFilter>({ emergencyNight: false, nightService: false });
  const [selectedPart, setSelectedPart] = useState<IPart[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<string>("");
  const [mapSearchCount, setMapSearchCount] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");

  /* eslint "@tanstack/query/exhaustive-deps": 0 */
  const {
    data: mapData,
    isFetching: isFetchingMapData,
    isSuccess: isSuccessMapData,
  } = useQuery<IUserMapResponse, AxiosError>({
    queryKey: ["appointment", "map"],
    queryFn: () =>
      mapFetcher.getUserMap({
        mapSearchCondition: {
          userLatitude: String(currentPosition.lat),
          userLongitude: String(currentPosition.lng),
          leftLatitude: String(searchPosition.left.lat),
          leftLongitude: String(searchPosition.left.lng),
          rightLatitude: String(searchPosition.right.lat),
          rightLongitude: String(searchPosition.right.lng),
          emergencyNight: selectedFilter.emergencyNight ? "Y" : "",
          nightService: selectedFilter.nightService ? "Y" : "",
          departments: selectedPart.map((part) => part.name).join(","),
          page: mapSearchCount,
          size: 15,
        },
      }),
    staleTime: Infinity,
    enabled: isSettingPosition,
  });
  const {
    data: searchMapData,
    isFetching: isFetchingSearchMapData,
    isSuccess: isSuccessSearchMapData,
    refetch: refetchSearchData,
  } = useQuery<IUserMapResponse, AxiosError>({
    queryKey: ["appointment", "search", mapSearchCount],
    queryFn: () =>
      mapFetcher.getSearchMap({
        mapSearchCondition: {
          userLatitude: currentPosition.lat,
          userLongitude: currentPosition.lng,
          nameContaining: searchText,
          departments: selectedPart.map((part) => part.name).join(","),
          page: mapSearchCount,
          size: 15,
        },
      }),
    staleTime: Infinity,
    enabled: mapSearchCount !== 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const curLat = position.coords.latitude;
      const curLng = position.coords.longitude;

      setCurrentPosition({
        lat: curLat,
        lng: curLng,
      });
      setSearchPosition({
        left: { lat: curLat - 0.01, lng: curLng - 0.01 },
        right: { lat: curLat + 0.01, lng: curLng + 0.01 },
      });
      setIsSettingPosition(true);
    });
  }, []);

  const handleMoveMap = () => {
    console.log("move");
  };

  const handleClickHospitalCard = (id: string) => {
    setSelectedHospital(id);
  };

  const handleSearch = () => {
    refetchSearchData();
  };

  const isReadyMap = isSettingPosition && !isFetchingMapData && isSuccessMapData && mapData;
  const hospitalData = !isFetchingSearchMapData && isSuccessSearchMapData ? searchMapData : mapData;

  return (
    <>
      {isSettingPosition ? (
        <Styled.Container>
          {!selectedHospital && (
            <Search
              selectedPart={selectedPart}
              setSelectedPart={setSelectedPart}
              handleSearch={handleSearch}
              searchText={searchText}
              setSearchText={setSearchText}
            />
          )}

          {isSettingPosition && (
            <Map
              currentPosition={currentPosition}
              doctorPositions={
                hospitalData
                  ? hospitalData.hospitals.filter(
                      (hospital) =>
                        (selectedFilter.emergencyNight ? hospital.emergencyNight === "Y" : true) &&
                        (selectedFilter.nightService ? hospital.nightService === "Y" : true)
                    )
                  : []
              }
              selectedHospital={selectedHospital}
              setSelectedHospital={setSelectedHospital}
              setSearchPosition={setSearchPosition}
              setMapSearchCount={setMapSearchCount}
            />
          )}
          {!selectedHospital && (
            <Styled.MoreSearchContainer>
              <p style={{ color: theme.color.blue }}>결과 {mapSearchCount === 0 ? "재검색" : "더보기"}</p>
              {mapSearchCount === 0 ? (
                <img alt="search again" src="/images/doctorAppointment/refresh-rotate.svg" />
              ) : (
                <>
                  <p style={{ color: theme.color.blue }}>{mapSearchCount}</p>/5
                </>
              )}
            </Styled.MoreSearchContainer>
          )}
          {selectedHospital ? (
            <HospitalDetail selectedHospital={selectedHospital} />
          ) : (
            <BottomSheet background="transparent" onClickOverlay={handleMoveMap} height="374px" isBottomSheetOpen>
              <Styled.FilterContainer>
                <p className="sort">거리순 정렬</p>
                <div className="filter-tags">
                  {emergencyNightData.map((text, idx) => (
                    <EmergencyNightTag
                      key={idx}
                      isSelected={selectedFilter[text.key]}
                      onClick={() => setSelectedFilter({ ...selectedFilter, [text.key]: !selectedFilter[text.key] })}
                    >
                      {text.label}
                    </EmergencyNightTag>
                  ))}
                </div>
              </Styled.FilterContainer>
              <Styled.CardContainer>
                {isReadyMap &&
                  hospitalData &&
                  hospitalData.hospitals
                    .filter(
                      (hospital) =>
                        (selectedFilter.emergencyNight ? hospital.emergencyNight === "Y" : true) &&
                        (selectedFilter.nightService ? hospital.nightService === "Y" : true)
                    )
                    .map((doctor, idx) => (
                      <HospitalCard
                        key={idx}
                        title={doctor.name}
                        category={doctor.type}
                        status={doctor.operatingStatus}
                        distance={doctor.meToHospitalDistance}
                        address={doctor.address}
                        operatingTime={
                          doctor.operatingTime.start || doctor.operatingTime.end
                            ? `${doctor.operatingTime.start} ~ ${doctor.operatingTime.end}`
                            : ""
                        }
                        lunchTime={
                          doctor.lunchTime.start || doctor.lunchTime.end ? `${doctor.lunchTime.start} ~ ${doctor.lunchTime.end}` : ""
                        }
                        phoneNumber={doctor.phoneNumber}
                        emergencyNight={doctor.emergencyNight}
                        nightService={doctor.nightService}
                        onClick={() => handleClickHospitalCard(doctor.id)}
                      />
                    ))}
              </Styled.CardContainer>
            </BottomSheet>
          )}
        </Styled.Container>
      ) : (
        <Loading
          title={<Styled.LoadingTitle>지도 로딩중</Styled.LoadingTitle>}
          icon={<img loading="eager" alt="icon" style={{ width: "26rem", height: "24.8rem" }} src={imageUrl.map_loading} />}
        />
      )}
    </>
  );
};

export default Appointment;
