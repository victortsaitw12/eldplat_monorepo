import React from "react";
import { Checkbox, Overlay, Button, Text } from "evergreen-ui";
import { DivSTY, ModalContentSTY } from "./style";
import Modal from "@components/Modal";

const TermOfUse = ({
  type,
  children,
  onCheck
}: {
  type: "checkbox" | "view";
  children?: React.ReactNode;
  onCheck?: (value: boolean) => void;
}) => {
  // ----- states ----- //
  const [checked, setChecked] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <DivSTY className="condiiton" type={type}>
        <Checkbox
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
            onCheck && onCheck(e.target.checked);
          }}
          style={{ margin: "0" }}
        />
        {children}
      </DivSTY>
      {isModalOpen && (
        <Modal onConfirm={() => setIsModalOpen(false)}>
          <ModalContentSTY>
            <Button
              className="condition__confirmBtn"
              appearance="primary"
              onClick={() => setIsModalOpen(false)}
            >
              確認
            </Button>
          </ModalContentSTY>
        </Modal>
      )}
    </>
  );
};

export default TermOfUse;
