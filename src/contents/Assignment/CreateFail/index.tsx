import { Pane, Dialog, Button } from "evergreen-ui";
import React, { useState } from "react";

interface I_CreateFail {
  failIsShown: boolean;
  setFailIsShown: (failIsShown: boolean) => void;
  failMessage: string;
  onClose: () => void;
}

const CreateFail = ({
  failIsShown,
  setFailIsShown,
  failMessage,
  onClose
}: I_CreateFail) => {
  return (
    <Pane>
      <Dialog
        isShown={failIsShown}
        title={failMessage}
        onCloseComplete={() => {
          setFailIsShown(false);
          onClose();
        }}
        confirmLabel="確定"
        cancelLabel="取消"
      ></Dialog>
    </Pane>
  );
};

export default CreateFail;
