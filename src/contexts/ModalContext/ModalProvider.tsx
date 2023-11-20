import React from "react";
import LeavePageModal from "@components/Modal/LeavePageModal";
import { useConfirmation } from "@hooks/useConfirmation";

const defaultModal: any = null;
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

  const modalStore = {
    showLeavePageModal,
    onConfirm,
    onCancel
  };

  // ------- useEffect ------- //
  return (
    <ModalContext.Provider value={modalStore}>
      {children}
      {modalContent}
    </ModalContext.Provider>
  );
}
