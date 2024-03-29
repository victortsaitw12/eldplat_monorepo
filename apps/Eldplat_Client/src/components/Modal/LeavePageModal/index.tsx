import React from "react";
import { Dialog } from "evergreen-ui";

const LeavePageModal = ({
  title = "您將會遺失未儲存的資料",
  message = "確定要離開嗎？",
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
      {message}
    </Dialog>
  );
};

export default LeavePageModal;

// ------- typing ------- //
interface I_Prop {
  title?: string;
  message?: string | React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
}
