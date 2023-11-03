import { Group, EditIcon } from "evergreen-ui";
import React from "react";
import { useRouter } from "next/router";
import { DivSTY } from "./style";
import LoadingSpinner from "@components/LoadingSpinner";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import SecondaryBtn from "@components/Button/Secondary/Label";

interface I_Props {
  isEdit: boolean;
}

function ControlBar({ isEdit }: I_Props) {
  const router = useRouter();

  //------ functions ------//
  const handleRedirectBack = () => {
    router.push("/role");
  };

  const handleCancel = () => {
    console.log("cancel");
  };
  const handleSave = () => {
    console.log("cancel");
  };

  //------ render ------//

  return (
    <DivSTY className="controlRow">
      {isEdit ? (
        <Group>
          <SecondaryBtn text="取消" onClick={handleCancel} />
          <PrimaryBtn text="儲存" onClick={handleSave} />
        </Group>
      ) : (
        <Group>
          <SecondaryBtn text="回列表" onClick={handleRedirectBack} />
          <PrimaryBtn text="編輯" onClick={handleSave}>
            <EditIcon size={14} />
          </PrimaryBtn>
        </Group>
      )}
    </DivSTY>
  );
}

export default ControlBar;
