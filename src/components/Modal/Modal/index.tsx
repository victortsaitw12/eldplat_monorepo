import React from "react";
import { Dialog } from "evergreen-ui";

const Modal = ({
  title = "預設標題",
  children = "預設內容",
  onCancel,
  onConfirm
}: I_Prop) => {
  return (
    <Dialog
      isShown={true}
      title={title}
      onCloseComplete={onCancel}
      onConfirm={onConfirm}
      confirmLabel="確定離開"
      cancelLabel="取消"
    >
      {children}
    </Dialog>
  );
};

export default Modal;

// ------- typing ------- //
interface I_Prop {
  title?: string;
  children?: string | React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
}
