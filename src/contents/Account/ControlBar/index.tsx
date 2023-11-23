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
  handleEdit: () => void;
}

function ControlBar({ isEdit, handleNavigation, handleEdit }: I_Props) {
  const router = useRouter();

  //------ functions ------//
  const handleRedirectBack = () => {
    handleNavigation("/account");
  };

  const handleCancel = () => {
    handleNavigation("/account");

    console.log("cancel");
  };
  const handleSave = () => {
    console.log("cancel");
  };

  //------ render ------//

  return (
    <DivSTY className="controlRow">
      {isEdit ? (
        <div className="actionRow">
          <SecondaryBtn text="取消" onClick={handleCancel} />
          <PrimaryBtn text="儲存" onClick={handleSave} />
        </div>
      ) : (
        <div className="actionRow">
          <SecondaryBtn text="回列表" onClick={handleRedirectBack} />
          <PrimaryBtn text="編輯" onClick={handleEdit}>
            <EditIcon size={14} />
          </PrimaryBtn>
        </div>
      )}
    </DivSTY>
  );
}

export default ControlBar;
