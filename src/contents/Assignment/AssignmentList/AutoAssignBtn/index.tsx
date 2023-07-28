import React from "react";
import { BodySTY } from "./style";
import { Label } from "@components/Button/Primary";
import router from "next/router";
import { getOrderInfo } from "@services/assignment/getOrderInfo";

interface AutoAssignBtn_Type {
  id: string;
  disabled?: boolean;
  setFirstDrawerOpen: (v: string) => void;
  setOrderInfo: (t: any) => void;
  // disabledAutoAssign: any[];
}
const AutoAssignBtn = ({
  id,
  disabled,
  setFirstDrawerOpen,
  setOrderInfo
}: // disabledAutoAssign
AutoAssignBtn_Type) => {
  const handleAutoAssign = () => {
    try {
      setFirstDrawerOpen("autoAssign");
      getOrderInfo(id).then((data) => {
        console.log("AUTO data", data);
        setOrderInfo(data?.dataList);
      });
    } catch (err) {
      console.log("err of click the finish button", err);
    }
  };

  // console.log("🍅🍅🍅disabledAutoAssign:", disabledAutoAssign);
  // console.log("🍅🍅🍅disabled:", disabled);

  return (
    <BodySTY>
      <Label
        style={{
          width: "unset",
          fontSize: "12px"
        }}
        onClick={handleAutoAssign}
        disabled={disabled}
        text="設定排程"
      />
    </BodySTY>
  );
};

export default AutoAssignBtn;
