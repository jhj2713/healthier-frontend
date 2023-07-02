import { useMap } from "react-map-gl";
import styled from "styled-components";

interface IRefixButtonProps {
  currentPosition: { lat: number; lng: number };
}

const RefixButton = ({ currentPosition }: IRefixButtonProps) => {
  const { current: map } = useMap();

  const handleRefixPosition = () => {
    if (!map) {
      return;
    }
    map.flyTo({ center: [currentPosition.lng, currentPosition.lat - 0.005], zoom: 14 });
  };

  return (
    <Container onClick={handleRefixPosition}>
      <img src="/images/doctorAppointment/position.svg" />
    </Container>
  );
};

export default RefixButton;

const Container = styled.div`
  z-index: 1000;
  cursor: pointer;

  position: absolute;
  right: 2rem;
  bottom: 39rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.1rem;
  border-radius: 6rem;
  background-color: ${({ theme }) => theme.color.grey_850};
`;
