import React from "react";
import { BodySTY } from "./style";
import { Button } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";

interface AutoAssignBtn_Type {
  id?: string;
  disabled?: boolean;
}
const AutoAssignBtn = ({ id, disabled }: AutoAssignBtn_Type) => {
  const handleAutoAssign = () => {
    try {
      alert("設定排程");

      // UpdateMaintenanceStatus(id)
      //   .then((res) => {
      //     console.log("UpdateMaintenanceStatus res", res);
      //     router.push("/maintenance/record ");
      //   })
      //   .catch((err) => {
      //     console.log("err of update status ", err);
      //   });
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
