import React from "react";
import { useRouter } from "next/router";

import LightBox from "@components/Lightbox";
import LeavePageModal from "@components/Modal/LeavePageModal";

const defaultModal: any = null;
export const ModalContext = React.createContext(defaultModal);

export function ModalProvider({ children }: { children: any }) {
  const router = useRouter();
  const [modalContent, setModalContent] = React.useState<any>(null);

  //------ functions ------//
  const handleCancel = (onCancel?: () => void) => {
    setModalContent(null);
    if (onCancel) onCancel();
  };

  const handleConfirm = (onConfirm?: () => void) => {
    setModalContent(null);
    if (onConfirm) onConfirm();
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

  const showModal = (content: I_Content) => {
    const { title, children, onCancel, onConfirm, customBtns } = content;
    setModalContent(
      <LightBox
        title={title}
        onCancel={handleCancel.bind(null, onCancel)}
        onConfirm={handleConfirm.bind(null, onConfirm)}
        customBtns={customBtns}
        isOpen={true}
      >
        {children}
      </LightBox>
    );
  };

  const modalStore = {
    showLeavePageModal,
    showModal,
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

interface I_Content {
  title: string;
  children?: string | React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  customBtns?: string | React.ReactNode;
}
