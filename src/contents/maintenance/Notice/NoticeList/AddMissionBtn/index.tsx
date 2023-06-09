import React from "react";
import { BodySTY } from "./style";
import { Button } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";

interface AddMissionBtn_Type {
  id?: string;
  setDrawerOpen: (v: boolean) => void;
}
const AddMissionBtn = ({ id, setDrawerOpen }: AddMissionBtn_Type) => {
  const AddNewMission = (e: any) => {
    e.preventDefault();
    setDrawerOpen(true);
    // try {
    //   UpdateMaintenanceStatus(id)
    //     .then((res) => {
    //       console.log("UpdateMaintenanceStatus res", res);
    //       router.reload();
    //     })
    //     .catch((err) => {
    //       console.log("err of update status ", err);
    //     });
    // } catch (err) {
    //   console.log("err of click the finish button", err);
    // }
  };
  return (
    <BodySTY>
      <Label text="新增維保任務" onClick={AddNewMission}></Label>
    </BodySTY>
  );
};

export default AddMissionBtn;
