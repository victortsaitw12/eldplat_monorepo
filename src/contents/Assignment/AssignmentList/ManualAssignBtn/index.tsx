import React, { useState } from "react";
import { BodySTY } from "./style";
import { Button } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";

interface ManualAssignBtn_Type {
  id: string;
  disabled?: boolean;
  isDrawerOpen: boolean;
  setDrawerOpen: (isDrawerOpen: boolean) => void;
}
const ManualAssignBtn = ({
  id,
  disabled,
  isDrawerOpen,
  setDrawerOpen
}: ManualAssignBtn_Type) => {
  const handleManualAssign = (e: any) => {
    console.log("e", e);
    try {
      setDrawerOpen(!isDrawerOpen);
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
        text="手動派單"
        value={id}
        onClick={(e) => {
          handleManualAssign(e);
        }}
        disabled={disabled}
      ></Label>
    </BodySTY>
  );
};

export default ManualAssignBtn;
