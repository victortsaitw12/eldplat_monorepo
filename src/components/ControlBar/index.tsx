import { Group, EditIcon } from "evergreen-ui";
import React from "react";
import { useRouter } from "next/router";
import { DivSTY } from "./style";
import LoadingSpinner from "@components/LoadingSpinner";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import SecondaryBtn from "@components/Button/Secondary/Label";

interface I_Props {
  isEdit: boolean;
  handleNavigation: (path: string) => void;
  primaryDisable: boolean;
}

function ControlBar({ isEdit, handleNavigation, primaryDisable }: I_Props) {
  const router = useRouter();

  const handleRedirectBack = () => {
    handleNavigation("/role");
  };

  const handleCancel = () => {
    handleNavigation("/role");

    console.log("cancel");
  };
  const handleSave = () => {
    console.log("cancel");
  };

  const buttonStates = {
    isEdit: {
      secondaryBtnText: "取消",
      primaryBtnText: "儲存",
      primaryBtnOnClick: handleSave,
      primaryBtnIcon: ""
    },
    isView: {
      secondaryBtnText: "回列表",
      primaryBtnText: "編輯",
      primaryBtnOnClick: handleSave,
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
