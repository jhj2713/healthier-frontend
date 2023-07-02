import BottomSheet from "src/components/bottomSheet";
import styled from "styled-components";
import Map from "./map";

const Appointment = () => {
  const handleMoveMap = () => {
    console.log("move");
  };

  return (
    <Container>
      <Map />
      <BottomSheet header="" background="transparent" onClickOverlay={handleMoveMap} isBottomSheetOpen>
        BottomSheet
      </BottomSheet>
    </Container>
  );
};

export default Appointment;

const Container = styled.div`
  position: relative;
`;
