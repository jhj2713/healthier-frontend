import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { currentPositionIcon, markerIcon } from "./mapInfo";
import styled from "styled-components";
import RefixButton from "./refixButton";
import { useEffect, useState } from "react";

const DoctorPositions = [
  { lat: 37.562, lng: 126.94 },
  { lat: 37.561, lng: 126.938 },
];

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 0,
    lng: 0,
  });

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

  return (
    <Container>
      {currentPosition.lat !== 0 && currentPosition.lng !== 0 && (
        <MapContainer
          center={currentPosition}
          zoom={15}
          scrollWheelZoom={true}
          zoomControl={false}
          style={{ width: "100%", height: "100vh" }}
        >
          <TileLayer url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=exBCwycrpCQgSErKz3miLeuYFMkFX70rSFqS0VmN6BMBQ3EWyOIyQtSrh4revSxF" />
          {DoctorPositions.map((doc, idx) => (
            <Marker key={idx} position={{ lat: doc.lat, lng: doc.lng }} icon={markerIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
          <Marker position={currentPosition} icon={currentPositionIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <RefixButton currentPosition={currentPosition} />
        </MapContainer>
      )}
    </Container>
  );
};

export default Map;

const Container = styled.div`
  .leaflet-control-attribution {
    display: none;
  }
`;
