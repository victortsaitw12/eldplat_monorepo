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
  const handleRedirectBack = (e: any) => {
    e.prevenDefault();
    handleNavigation("/role");
  };

  const handleCancel = (e: any) => {
    e.prevenDefault();
    handleNavigation("/role");

    console.log("cancel");
  };

  const handleSave = () => {
    console.log();
  };

  //------ render ------//

  return (
    <DivSTY className="controlRow">
      {isEdit ? (
        <Group>
          <SecondaryBtn text="取消" type="button" onClick={handleCancel} />
          <PrimaryBtn text="儲存" type="submit" />
        </Group>
      ) : (
        <Group>
          <SecondaryBtn
            text="回列表"
            type="button"
            onClick={handleRedirectBack}
          />
          <PrimaryBtn text="編輯" type="button" onClick={handleEdit}>
            <EditIcon size={14} />
          </PrimaryBtn>
        </Group>
      )}
    </DivSTY>
  );
}

export default ControlBar;
