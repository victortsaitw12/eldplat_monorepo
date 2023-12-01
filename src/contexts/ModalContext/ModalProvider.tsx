import React from "react";
import LeavePageModal from "@components/Modal/LeavePageModal";
import { useRouter } from "next/router";

const defaultModal: any = null;
export const ModalContext = React.createContext(defaultModal);

export function ModalProvider({ children }: { children: any }) {
  const router = useRouter();
  const [modalContent, setModalContent] = React.useState<any>(null);
  const [url, setUrl] = React.useState("");

  //------ functions ------//
  const onCancel = () => {
    setModalContent(null);
  };

  const onConfirm = () => {
    router.push(url);
  };

  const showLeavePageModal = (url: string) => {
    setUrl(url);
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
