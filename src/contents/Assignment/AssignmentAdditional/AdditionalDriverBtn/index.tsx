import React from "react";
import { BodySTY } from "./style";
import { PlusIcon } from "evergreen-ui";

import { Label } from "@components/Button/Primary";

interface AdditionalDriverBtn_Type {
  id: string;
  disabled?: boolean;
  onBtnClick: (id: string) => void;
}
const AdditionalDriverBtn = ({
  id,
  disabled,
  onBtnClick
}: AdditionalDriverBtn_Type) => {
  return (
    <BodySTY>
      <Label
        style={{
          width: "unset",
          fontSize: "12px"
        }}
        text={
          <span>
            <PlusIcon style={{ height: "12px", width: "12px" }} />
            派工
          </span>
        }
        onClick={onBtnClick.bind(null, id)}
        disabled={disabled}
      ></Label>
    </BodySTY>
  );
};

export default AdditionalDriverBtn;
