import { Group, EditIcon } from "evergreen-ui";
import React from "react";
import { useRouter } from "next/router";
import { DivSTY } from "./style";
import LoadingSpinner from "@components/LoadingSpinner";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import SecondaryBtn from "@components/Button/Secondary/Label";
import { on } from "events";

interface I_Props {
  isEdit: boolean;
  onCancel?: () => void;
  onEdit?: () => void;
  onSave?: () => void;
  primaryDisable: boolean;
}

function ControlBar({
  isEdit,
  onCancel,
  onEdit,
  onSave,
  primaryDisable
}: I_Props) {
  const router = useRouter();

  const handleCancel = () => {
    if (isEdit) return;
    onCancel && onCancel();
  };
  const handleSave = () => {
    onSave && onSave();
  };

  const handleEdit = () => {
    onEdit && onEdit();
  };

  const buttonStates = {
    isEdit: {
      secondaryBtnText: "取消",
      secondaryBtnOnClick: handleCancel,
      primaryBtnText: "儲存",
      primaryBtnOnClick: handleSave,
      primaryBtnIcon: ""
    },
    isView: {
      secondaryBtnText: "回列表",
      secondaryBtnOnClick: handleCancel,
      primaryBtnText: "編輯",
      primaryBtnOnClick: handleEdit,
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
          onClick={currentState.primaryBtnOnClick}
          disabled={primaryDisable}
        >
          {currentState.primaryBtnIcon && currentState.primaryBtnIcon}
        </PrimaryBtn>
      </>
    </DivSTY>
  );
}

export default ControlBar;
