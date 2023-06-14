import React, { useEffect } from "react";
import { BodySTY } from "./style";
import { Button } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";
import { createMaintenanceAssignment } from "@services/maintenance/createMaintenance";

interface AssignBtn_Type {
  id: string;
  disabled?: boolean;
  assignmentData: any;
}
const AssignBtn = ({ id, disabled, assignmentData }: AssignBtn_Type) => {
  const handleAssign = async () => {
    try {
      console.log("id", id);
      const choseData = assignmentData.filter(
        (v: { maintenance_no: string }) => v.maintenance_no === id
      );
      console.log("choseData", choseData);
      const res = await createMaintenanceAssignment(choseData[0]);
      alert("新增派單完成!");
      router.reload();
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
