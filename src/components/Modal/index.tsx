import React, { ReactNode } from "react";

import { createPortal } from "react-dom";
import { BackDropSTY, ModalSTY } from "./style";

interface ModalProps {
  children: ReactNode;
  onConfirm: (event: any) => void;
}

function Backdrop(props: { onClick: (event: any) => void }) {
  return <BackDropSTY onClick={props.onClick} />;
}

function ModalOverlay(props: any) {
  return <ModalSTY>{props.children}</ModalSTY>;
}

function Modal(props: ModalProps) {
  return (
    <>
      {createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdop-root")!
      )}
      {createPortal(
        <ModalOverlay onConfirm={props.onConfirm}>
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlay-root")!
      )}
    </>
  );
}

export default Modal;
