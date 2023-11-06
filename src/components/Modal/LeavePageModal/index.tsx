import React from "react";
import { Dialog } from "evergreen-ui";

const LeavePageModal = ({
  title = "確定要離開嗎？",
  isShown,
  onClose,
  onConfirm,
  children = "如果您現在離開，將會遺失未儲存的資料。"
}: I_Prop) => {
  if (!isShown) return null;

  return (
    <>
      <Dialog
        title={title}
        isShown={isShown}
        onCloseComplete={onClose}
        confirmLabel="確定"
        cancelLabel="取消"
      >
        {children}
      </Dialog>
    </>
  );
};

export default LeavePageModal;

// ------- typing ------- //
interface I_Prop {
  title?: string;
  isShown: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children?: string | React.ReactNode;
}
