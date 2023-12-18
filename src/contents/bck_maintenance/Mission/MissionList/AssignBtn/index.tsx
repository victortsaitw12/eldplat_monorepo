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
      // const newData = {
      //   maintenance_no: choseData[0].maintenance_no,
      //   bus_no: choseData[0].bus_no,
      //   driver_no: choseData[0].driver_no,
      //   service_start_date: choseData[0].service_start_date,
      //   service_end_date: choseData[0].service_end_date
      // };
      // console.log("newData", newData);
      const createRes = await createMaintenanceAssignment(choseData[0]);
      const updateStatusRes = await UpdateMaintenanceStatus(id, "4");
      console.log("💛派單按鈕-派單", createRes);
      console.log("🧡派單按鈕-改狀態", updateStatusRes);
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
