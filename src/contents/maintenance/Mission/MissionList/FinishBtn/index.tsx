import React from "react";
import { BodySTY } from "./style";
import { Button } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";

interface FinishBtn_Type {
  id: string;
  disabled?: boolean;
}
const FinishBtn = ({ id, disabled }: FinishBtn_Type) => {
  const handleFinished = () => {
    try {
      UpdateMaintenanceStatus(id)
        .then((res) => {
          console.log("UpdateMaintenanceStatus res", res);
          router.push("/maintenance/record ");
        })
        .catch((err) => {
          console.log("err of update status ", err);
        });
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
