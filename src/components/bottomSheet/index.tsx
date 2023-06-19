import { AnimatePresence } from "framer-motion";
import * as Styled from "./index.style";

export interface IBottomSheetProps {
  header: string;
  children?: React.ReactNode;
  onClickOverlay: () => void;
  isBottomSheetOpen: boolean;
}

function BottomSheet({ header, children, onClickOverlay, isBottomSheetOpen }: IBottomSheetProps) {
  return (
    <AnimatePresence>
      {isBottomSheetOpen && (
        <Styled.Overlay headerHeight="5.6rem" onClick={onClickOverlay}>
          <Styled.Container
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.1,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Styled.Header>{header}</Styled.Header>
            <Styled.Content>{children}</Styled.Content>
          </Styled.Container>
        </Styled.Overlay>
      )}
    </AnimatePresence>
  );
}
export default BottomSheet;
