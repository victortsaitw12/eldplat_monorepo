import React from "react";
import { BodySTY } from "./style";
import { Button, PlusIcon } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";

interface AdditionalVehicleBtn_Type {
  id?: string;
  disabled?: boolean;
}
const AdditionalVehicleBtn = ({ id, disabled }: AdditionalVehicleBtn_Type) => {
  const handleAddVehicle = () => {
    try {
      alert("+派車");

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
        text={
          <span>
            <PlusIcon />
            派車
          </span>
        }
        onClick={handleAddVehicle}
        disabled={disabled}
      ></Label>
    </BodySTY>
  );
};

export default AdditionalVehicleBtn;
