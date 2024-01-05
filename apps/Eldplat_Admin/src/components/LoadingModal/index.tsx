import React, { ReactNode } from "react";

import { createPortal } from "react-dom";
import { BackDropSTY, ModalSTY } from "./style";

interface ModalProps {
  children: ReactNode;
  onConfirm?: (event: any) => void;
}

function Backdrop(props: { onClick: (event: any) => void }) {
  return <BackDropSTY onClick={props.onClick} />;
}

function ModalOverlay(props: any) {
  return <ModalSTY>{props.children}</ModalSTY>;
}

function Modal({
  onConfirm = () => {
    console.log("deafult confirm!");
  },
  children
}: ModalProps) {
  return (
    <>
      {createPortal(
        <Backdrop onClick={onConfirm} />,
        document.getElementById("backdrop-root")!
      )}
      {createPortal(
        <ModalOverlay onConfirm={onConfirm}>{children}</ModalOverlay>,
        document.getElementById("overlay-root")!
      )}
    </>
  );
}

export default Modal;
