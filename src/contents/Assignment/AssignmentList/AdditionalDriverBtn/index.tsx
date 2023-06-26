import React from "react";
import { BodySTY } from "./style";
import { Button, PlusIcon } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";

interface AdditionalDriverBtn_Type {
  id?: string;
  disabled?: boolean;
}
const AdditionalDriverBtn = ({ id, disabled }: AdditionalDriverBtn_Type) => {
  const handleAddDriver = () => {
    try {
      alert("+派工");

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
            派工
          </span>
        }
        onClick={handleAddDriver}
        disabled={disabled}
      ></Label>
    </BodySTY>
  );
};

export default AdditionalDriverBtn;
