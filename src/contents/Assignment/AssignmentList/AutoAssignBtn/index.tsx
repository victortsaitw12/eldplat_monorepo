import React from "react";
import { BodySTY } from "./style";
import { Label } from "@components/Button/Primary";

interface AutoAssignBtn_Type {
  id: string;
  disabled?: boolean;
  onBtnClick: (t: any) => void;
}
const AutoAssignBtn = ({ id, disabled, onBtnClick }: AutoAssignBtn_Type) => {
  return (
    <BodySTY>
      {disabled ? (
        <Label
          style={{
            width: "unset",
            fontSize: "12px"
          }}
          onClick={onBtnClick.bind(null, id)}
          text="設定排程"
          disabled
        />
      ) : (
        <Label
          style={{
            width: "unset",
            fontSize: "12px"
          }}
          onClick={onBtnClick.bind(null, id)}
          text="設定排程"
        />
      )}
    </BodySTY>
  );
};

export default AutoAssignBtn;
