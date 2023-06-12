import React from "react";
import { BodySTY } from "./style";
import { Button } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";

interface AssignBtn_Type {
  id: string;
  disabled?: boolean;
}
const AssignBtn = ({ id, disabled }: AssignBtn_Type) => {
  const handleAssign = () => {
    try {
      alert("尚未開通，敬請期待!");
    } catch (err) {
      console.log("err of click the assign button", err);
    }
  };
  return (
    <BodySTY>
      <Label text="派單" onClick={handleAssign} disabled={disabled}></Label>
    </BodySTY>
  );
};

export default AssignBtn;
