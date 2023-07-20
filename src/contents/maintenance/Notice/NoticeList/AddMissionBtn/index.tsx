import React from "react";
import { BodySTY } from "./style";
import { Label } from "@components/Button/Primary";
import { useRouter } from "next/router";

interface AddMissionBtn_Type {
  id?: string;
  setDrawerOpen: (v: boolean) => void;
}
const AddMissionBtn = ({ setDrawerOpen }: AddMissionBtn_Type) => {
  const router = useRouter();
  const AddNewMission = (e: any) => {
    e.preventDefault();
    setDrawerOpen(true);
  };
  return (
    <BodySTY>
      <Label text="新增維保任務" onClick={AddNewMission}></Label>
    </BodySTY>
  );
};

export default AddMissionBtn;
