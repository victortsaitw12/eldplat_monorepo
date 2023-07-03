import React from "react";
import { BodySTY } from "./style";
import { Button } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";
import { CloseAssignment } from "@services/maintenance/updateMaintenance";

interface FinishBtn_Type {
  id: string;
  disabled?: boolean;
}
const FinishBtn = ({ id, disabled }: FinishBtn_Type) => {
  const handleFinished = async () => {
    const maintenance_status = "3";
    try {
      // ⭐按下結案按鈕關閉派單表API
      const assignRes = await CloseAssignment(id, "03");

      // ⭐按下結案按鈕把維保狀態改為3結案
      UpdateMaintenanceStatus(id, maintenance_status)
        .then((res) => {
          console.log("UpdateMaintenanceStatus res", res);
          router.push("/maintenance/record ");
        })
        .catch((err) => {
          console.log("err of update status ", err);
        });
      console.log("😁assignRes", assignRes);
    } catch (err) {
      console.log("err of click the finish button", err);
    }
  };
  return (
    <BodySTY>
      <Label text="結案" onClick={handleFinished} disabled={disabled}></Label>
    </BodySTY>
  );
};

export default FinishBtn;
