import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import MapGl, { Marker, ViewStateChangeEvent } from "react-map-gl";
import styled from "styled-components";
import RefixButton from "./refixButton";
import "mapbox-gl/dist/mapbox-gl.css";

const DoctorPositions = [
  { lat: 37.562, lng: 126.94 },
  { lat: 37.561, lng: 126.938 },
];

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 0,
    lng: 0,
  });
  const throttleRef = useRef<boolean>(false);

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   setCurrentPosition({
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   });
    // });
    setCurrentPosition({
      lat: 37.561,
      lng: 126.946,
    });
  }, []);

  const handleMove = (e: ViewStateChangeEvent) => {
    if (throttleRef.current) {
      return;
    }

    throttleRef.current = true;
    const timer = setTimeout(() => {
      console.log(e, e.viewState.latitude, e.viewState.longitude);
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
        >
          {DoctorPositions.map((doc, idx) => (
            <Marker key={idx} latitude={doc.lat} longitude={doc.lng}>
              <img src="/images/doctorAppointment/map-pin.svg" width={28} height={28} />
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
