import React from "react";
import { BodySTY } from "./style";
import { Label } from "@components/Button/Primary";

interface AddMissionBtn_Type {
  id?: string;
  setDrawerOpen: (v: boolean) => void;
}
const AddMissionBtn = ({ setDrawerOpen }: AddMissionBtn_Type) => {
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
