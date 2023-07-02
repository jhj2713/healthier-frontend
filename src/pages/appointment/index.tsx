import styled from "styled-components";
import Map from "./map";

const Appointment = () => {
  return (
    <Container>
      <Map />
    </Container>
  );
};

export default Appointment;

const Container = styled.div`
  position: relative;
`;
