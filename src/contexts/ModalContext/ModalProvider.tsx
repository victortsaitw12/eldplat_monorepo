import React from "react";
import LeavePageModal from "@components/Modal/LeavePageModal";
import { useRouter } from "next/router";

const defaultModal: any = null;
export const ModalContext = React.createContext(defaultModal);

export function ModalProvider({ children }: { children: any }) {
  const router = useRouter();
  const [modalContent, setModalContent] = React.useState<any>(null);

  //------ functions ------//
  const handleCancel = () => {
    setModalContent(null);
  };

  const handleRedirect = (url: string) => {
    router.push(url);
    setModalContent(null);
  };

  const showLeavePageModal = (url: string) => {
    setModalContent(
      <LeavePageModal
        onCancel={handleCancel}
        onConfirm={handleRedirect.bind(null, url)}
      />
    );
  };

  const modalStore = {
    showLeavePageModal,
    handleRedirect,
    handleCancel
  };

  // ------- useEffect ------- //
  return (
    <ModalContext.Provider value={modalStore}>
      {children}
      {modalContent}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
