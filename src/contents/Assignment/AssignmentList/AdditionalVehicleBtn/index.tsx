import React from "react";
import { BodySTY } from "./style";
import { PlusIcon } from "evergreen-ui";

import { Label } from "@components/Button/Primary";
import { useAssignmentStore } from "@contexts/filter/assignmentStore";
import { getOrderInfo } from "@services/assignment/getOrderInfo";

interface AdditionalVehicleBtn_Type {
  id: string;
  disabled?: boolean;
  setOrderInfo: (t: any) => void;
  setCreatDrawerOpen: (v: "car" | "driver" | "") => void;
}
const AdditionalVehicleBtn = ({
  id,
  disabled,
  setOrderInfo,
  setCreatDrawerOpen
}: AdditionalVehicleBtn_Type) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const renderAddVehicle = () => {
    setLoading(true);
    try {
      getOrderInfo(id).then((data) => {
        console.log("data", data);
        setOrderInfo(data.dataList);
      });
      setCreatDrawerOpen("car");
    } catch (err) {
      console.log("err of click the finish button", err);
    }
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
