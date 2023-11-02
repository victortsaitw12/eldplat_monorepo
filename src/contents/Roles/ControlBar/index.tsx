import { Group, EditIcon } from "evergreen-ui";
import React from "react";
import { DivSTY } from "./style";
import LoadingSpinner from "@components/LoadingSpinner";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import SecondaryBtn from "@components/Button/Secondary/Label";

interface I_Props {
  children?: React.ReactNode;
  updateFilter: (key: string, value: string) => void;
  resetFilter?: () => void;
  filter: any;
  btns?: React.ReactNode;
}

function ControlBar() {
  //------ functions ------//

  const handleCancel = () => {
    console.log("cancel");
  };
  const handleSave = () => {
    console.log("cancel");
  };

  //------ render ------//

  return (
    <DivSTY className="controlRow">
      <Group>
        <SecondaryBtn text="回列表" onClick={handleCancel} />
        <PrimaryBtn text="編輯" onClick={handleSave}>
          <EditIcon size={14} />
        </PrimaryBtn>
      </Group>
    </DivSTY>
  );
}

export default ControlBar;
