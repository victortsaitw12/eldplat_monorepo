// useConfirmation.js
import React from "react";

export function useConfirmation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const open = () => {
    setIsOpen(true);
    return new Promise((resolve) => {
      const onConfirm = () => {
        setIsOpen(false);
        resolve(true);
      };

      const onCancel = () => {
        setIsOpen(false);
        resolve(false);
      };

      return { onConfirm, onCancel };
    });
  };

  return { isOpen, open };
}
