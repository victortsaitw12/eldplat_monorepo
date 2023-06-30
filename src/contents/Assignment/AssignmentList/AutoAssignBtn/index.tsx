import React from "react";
import { BodySTY } from "./style";
import { Button } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";
import { getOrderInfo } from "@services/assignment/getOrderInfo";

interface AutoAssignBtn_Type {
  id: string;
  disabled?: boolean;
  setAutoDrawerOpen: (t: boolean) => void;
  setOrderInfo: (t: any) => void;
}
const AutoAssignBtn = ({
  id,
  disabled,
  setAutoDrawerOpen,
  setOrderInfo
}: AutoAssignBtn_Type) => {
  const handleAutoAssign = () => {
    try {
      setAutoDrawerOpen(true);
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
      <Label
        text="設定排程"
        onClick={handleAutoAssign}
        disabled={disabled}
      ></Label>
    </BodySTY>
  );
};

export default AutoAssignBtn;
