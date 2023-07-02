import { useMap } from "react-leaflet";
import styled from "styled-components";

interface IRefixButtonProps {
  currentPosition: { lat: number; lng: number };
}

const RefixButton = ({ currentPosition }: IRefixButtonProps) => {
  const map = useMap();

  const handleRefixPosition = () => {
    map.setView(currentPosition);
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

  position: absolute;
  right: 2rem;
  bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.1rem;
  border-radius: 6rem;
  background-color: ${({ theme }) => theme.color.grey_850};
`;
