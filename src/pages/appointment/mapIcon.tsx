import styled from "styled-components";

export const CurrentPinIcon = ({ title }: { title: string }) => {
  return (
    <Container>
      <img src="/images/doctorAppointment/map-pin.svg" />
      {title}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;
