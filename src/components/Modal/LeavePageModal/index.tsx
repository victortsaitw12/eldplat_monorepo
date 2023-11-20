import React from "react";
import { Dialog } from "evergreen-ui";

const LeavePageModal = ({
  title = "確定要離開嗎？",
  message = "如果您現在離開，將會遺失未儲存的資料。",
  onCancel,
  onConfirm
}: I_Prop) => {
  return (
    <Dialog
      isShown={true}
      title={title}
      onCloseComplete={onCancel}
      onConfirm={onConfirm}
      confirmLabel="確定"
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
