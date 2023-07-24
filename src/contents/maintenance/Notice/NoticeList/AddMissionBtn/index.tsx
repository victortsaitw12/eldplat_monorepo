import React from "react";
import { BodySTY } from "./style";
import { Label } from "@components/Button/Primary";
import { useRouter } from "next/router";

interface AddMissionBtn_Type {
  item: any;
  setDrawerOpen: (v: boolean) => void;
  setBusNo: (v: string) => void;
}
const AddMissionBtn = ({
  item,
  setDrawerOpen,
  setBusNo
}: AddMissionBtn_Type) => {
  const router = useRouter();
  const AddNewMission = (e: any) => {
    e.preventDefault();
    setBusNo(item.bus_no.value);
    setDrawerOpen(true);
  };
  return (
    <BodySTY>
      <Label text="新增維保任務" onClick={AddNewMission}></Label>
    </BodySTY>
  );
};

export default AddMissionBtn;
