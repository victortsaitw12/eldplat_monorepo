import React from "react";

export function useConfirmation() {
  const confirmation = () => {
    return new Promise((resolve) => {
      const onConfirm = () => {
        resolve(true);
      };

      const onCancel = () => {
        resolve(false);
      };

      return { onConfirm, onCancel };
    });
  };

  return { confirmation };
}
