import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { currentPositionIcon, markerIcon } from "./mapInfo";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Appointment = () => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 37.541,
    lng: 126.986,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <Container>
      <MapContainer
        center={currentPosition}
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=exBCwycrpCQgSErKz3miLeuYFMkFX70rSFqS0VmN6BMBQ3EWyOIyQtSrh4revSxF" />
        <Marker position={currentPosition} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={currentPosition} icon={currentPositionIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default Appointment;

const Container = styled.div`
  .leaflet-control-attribution {
    display: none;
  }
`;
