import { AnimatePresence } from "framer-motion";
import { ReactNode, HTMLAttributes } from "react";
import * as Styled from "./index.style";

export interface IBottomSheetProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
  height?: string;
  background?: string;
  children?: React.ReactNode;
  onClickOverlay: () => void;
  isBottomSheetOpen: boolean;
}

function BottomSheet({
  header,
  height = "auto",
  background = "rgba(0, 0, 0, 0.5)",
  children,
  onClickOverlay,
  isBottomSheetOpen,
  ...props
}: IBottomSheetProps) {
  return (
    <AnimatePresence>
      {isBottomSheetOpen && (
        <Styled.Overlay headerHeight="5.6rem" background={background} onClick={onClickOverlay} {...props}>
          <Styled.Container
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.1,
            }}
            height={height}
            onClick={(e: any) => e.stopPropagation()}
          >
            {header && <Styled.Header>{header}</Styled.Header>}
            <Styled.Content>{children}</Styled.Content>
          </Styled.Container>
        </Styled.Overlay>
      )}
    </AnimatePresence>
  );
}
export default BottomSheet;
