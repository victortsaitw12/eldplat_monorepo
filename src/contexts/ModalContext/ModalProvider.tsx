import React from "react";
import LeavePageModal from "@components/Modal/LeavePageModal";
import { useConfirmation } from "@hooks/useConfirmation";

let defaultModal: any;
export const ModalContext = React.createContext(defaultModal);

export function ModalProvider({ children }: { children: any }) {
  const [modalContent, setModalContent] = React.useState<any>(null);
  const { confirmation } = useConfirmation();

  //------ functions ------//
  const onCancel = () => {
    setModalContent(null);
  };

  const onConfirm = () => {
    console.log("onConfirm");
  };

  const showLeavePageModal = () => {
    setModalContent(
      <LeavePageModal onCancel={onCancel} onConfirm={onConfirm} />
    );
  };

  const modal = {
    showLeavePageModal,
    onConfirm,
    onCancel
  };

  // ------- useEffect ------- //
  return (
    <ModalContext.Provider value={{ modal }}>
      {children}
      {modalContent}
    </ModalContext.Provider>
  );
}
