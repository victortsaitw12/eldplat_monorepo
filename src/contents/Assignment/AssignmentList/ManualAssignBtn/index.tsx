import React from "react";
import { BodySTY } from "./style";
import { Label } from "@components/Button/Primary";

interface ManualAssignBtn_Type {
  id: string;
  onBtnClick: (id: string) => void;
}
const ManualAssignBtn = ({ id, onBtnClick }: ManualAssignBtn_Type) => {
  return (
    <BodySTY>
      <Label
        style={{
          width: "unset",
          fontSize: "12px"
        }}
        text="手動派單"
        value={id}
        onClick={onBtnClick.bind(null, id)}
      ></Label>
    </BodySTY>
  );
};

export default ManualAssignBtn;
