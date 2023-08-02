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
}
const AutoAssignBtn = ({
  id,
  disabled,
  setFirstDrawerOpen,
  setOrderInfo
}: AutoAssignBtn_Type) => {
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

  return (
    <BodySTY>
      {/* // TODO 簡化button attribute "disabled"寫法 */}
      {disabled ? (
        <Label
          style={{
            width: "unset",
            fontSize: "12px"
          }}
          onClick={handleAutoAssign}
          text="設定排程"
          disabled
        />
      ) : (
        <Label
          style={{
            width: "unset",
            fontSize: "12px"
          }}
          onClick={handleAutoAssign}
          text="設定排程"
        />
      )}
    </BodySTY>
  );
};

export default AutoAssignBtn;
