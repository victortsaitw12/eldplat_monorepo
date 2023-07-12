import React, { useState } from "react";
import { BodySTY } from "./style";
import { Alert, Button, toaster } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";
import { CloseAssignment } from "@services/maintenance/updateMaintenance";

interface FinishBtn_Type {
  id: string;
  disabled?: boolean;
  setListStatus: (t: string) => void;
}
const FinishBtn = ({ id, disabled, setListStatus }: FinishBtn_Type) => {
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const handleFinished = async () => {
    const maintenance_status = "3";
    try {
      // ⭐按下結案按鈕關閉派單表API
      const assignRes = await CloseAssignment(id, "03");

      // ⭐按下結案按鈕把維保狀態改為3結案
      UpdateMaintenanceStatus(id, maintenance_status)
        .then((res) => {
          console.log("UpdateMaintenanceStatus res", res);
          toaster.success("任務已完成並保留在維保紀錄中", {
            duration: 3
          });
          setListStatus(id);

          // router.push("/maintenance/record ");
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
      {/* {showSuccessAlert && (
        <Alert
          intent="success"
          title="任務已完成並保留在維保紀錄中"
          marginBottom={32}
        />
      )} */}
    </BodySTY>
  );
};

export default FinishBtn;
