import "leaflet/dist/leaflet.css";
import { Dispatch, useRef } from "react";
import { useEffect } from "react";
import MapGl, { Marker, ViewStateChangeEvent } from "react-map-gl";
import { IHospitalInfo } from "src/interfaces/map";
import styled from "styled-components";
import RefixButton from "./refixButton";
import "mapbox-gl/dist/mapbox-gl.css";

interface IMapProps {
  currentPosition: { lat: number; lng: number };
  doctorPositions: IHospitalInfo[];
  isDetail?: boolean;
  setSearchPosition?: Dispatch<{ left: { lat: number; lng: number }; right: { lat: number; lng: number } }>;
}

const Map = ({ currentPosition, doctorPositions, isDetail = false, setSearchPosition }: IMapProps) => {
  const throttleRef = useRef<boolean>(false);

  const handleMove = (e: ViewStateChangeEvent) => {
    if (throttleRef.current || !setSearchPosition) {
      return;
    }

    throttleRef.current = true;
    const timer = setTimeout(() => {
      setSearchPosition({
        left: { lat: e.target.getBounds().getNorthWest().lat, lng: e.target.getBounds().getNorthWest().lng },
        right: { lat: e.target.getBounds().getSouthEast().lat, lng: e.target.getBounds().getSouthEast().lng },
      });
      throttleRef.current = false;
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <Container>
      {currentPosition.lat !== 0 && currentPosition.lng !== 0 && (
        <MapGl
          mapboxAccessToken={process.env.REACT_APP_MAP_ACCESS_TOKEN}
          initialViewState={{
            longitude: currentPosition.lng,
            latitude: currentPosition.lat - 0.005,
            zoom: 14,
          }}
          style={{ width: "100%", height: "100vh" }}
          mapStyle={process.env.REACT_APP_MAP_STYLE}
          onMove={handleMove}
          dragPan={!isDetail}
          dragRotate={!isDetail}
        >
          {doctorPositions.map((doc, idx) => (
            <Marker key={idx} latitude={doc.point.y} longitude={doc.point.x}>
              <img src={`/images/doctorAppointment/${isDetail ? "selected" : "map"}-pin.svg`} width={28} height={28} />
            </Marker>
          ))}
          <Marker latitude={currentPosition.lat} longitude={currentPosition.lng}>
            <img src="/images/doctorAppointment/current-pin.png" width={128} height={128} />
          </Marker>
          <RefixButton currentPosition={currentPosition} />
        </MapGl>
      )}
    </Container>
  );
};

export default Map;

const Container = styled.div`
  .mapboxgl-ctrl-bottom-left,
  .mapboxgl-ctrl-bottom-right {
    display: none;
  }
`;
