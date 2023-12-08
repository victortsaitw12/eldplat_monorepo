import { EditIcon } from "evergreen-ui";
import React from "react";
import { DivSTY } from "./style";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import SecondaryBtn from "@components/Button/Secondary/Label";

interface I_Props {
  isEdit: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
  primaryDisable: boolean;
}

function ControlBar({ isEdit, onCancel, onConfirm, primaryDisable }: I_Props) {
  const handleCancel = () => {
    onCancel && onCancel();
  };
  const handleConfirm = () => {
    onConfirm && onConfirm();
  };

  const buttonStates = {
    isEdit: {
      secondaryBtnText: "取消",
      primaryBtnText: "儲存",
      primaryBtnIcon: ""
    },
    isView: {
      secondaryBtnText: "回列表",
      primaryBtnText: "編輯",
      primaryBtnIcon: <EditIcon size={14} />
    }
  };

  const currentState = isEdit ? buttonStates.isEdit : buttonStates.isView;

  return (
    <DivSTY className="controlRow">
      <>
        <SecondaryBtn
          text={currentState.secondaryBtnText}
          onClick={handleCancel}
        />
        <PrimaryBtn
          text={currentState.primaryBtnText}
          onClick={handleConfirm}
          disabled={primaryDisable}
        >
          {currentState.primaryBtnIcon && currentState.primaryBtnIcon}
        </PrimaryBtn>
      </>
    </DivSTY>
  );
}

export default ControlBar;
