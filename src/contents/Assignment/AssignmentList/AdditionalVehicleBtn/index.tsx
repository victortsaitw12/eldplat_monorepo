import React from "react";
import { BodySTY } from "./style";
import { Button, PlusIcon } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";

import { useAssignmentStore } from "@contexts/filter/assignmentStore";
import { getOrderInfo } from "@services/assignment/getOrderInfo";

interface AdditionalVehicleBtn_Type {
  id?: string;
  disabled?: boolean;
  setOrderInfo: (t: any) => void;
}
const AdditionalVehicleBtn = ({
  id,
  disabled,
  setOrderInfo
}: AdditionalVehicleBtn_Type) => {
  const { isDrawerOpen, setDrawerOpen, setDrawerType, drawerType } =
    useAssignmentStore();
  const [loading, setLoading] = React.useState<boolean>(false);

  const renderAddVehicle = () => {
    setLoading(true);
    try {
      setDrawerType("add");
      getOrderInfo(id).then((data) => {
        console.log("data", data);
        setOrderInfo(data.dataList);
      });
      console.log("+派車");
      setDrawerOpen(true);
    } catch (err) {
      console.log("err of click the finish button", err);
    }
    console.log(drawerType);
    setLoading(false);
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
        onClick={renderAddVehicle}
        disabled={disabled}
      ></Label>
    </BodySTY>
  );
};

export default AdditionalVehicleBtn;
