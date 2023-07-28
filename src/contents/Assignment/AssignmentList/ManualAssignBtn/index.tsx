import React, { useState } from "react";
import { BodySTY } from "./style";
import { Button } from "evergreen-ui";
import { Label } from "@components/Button/Primary";
import { UpdateMaintenanceStatus } from "@services/maintenance/getMaintenanceMission";
import router from "next/router";
import { getOrderInfo } from "@services/assignment/getOrderInfo";
import LoadingSpinner from "@components/LoadingSpinner";

interface ManualAssignBtn_Type {
  id: string;
  setFirstDrawerOpen: (v: string) => void;
  setOrderInfo: (t: any) => void;
}
const ManualAssignBtn = ({
  id,
  setFirstDrawerOpen,
  setOrderInfo
}: ManualAssignBtn_Type) => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleManualAssign = (e: any) => {
    setLoading(true);
    try {
      getOrderInfo(id).then((data) => {
        console.log("data", data);
        setOrderInfo(data?.dataList);
      });
    } catch (err) {
      console.log("err of click the finish button", err);
    }
    setFirstDrawerOpen("");
    setLoading(false);
  };
  // console.log("id", id);
  // if (loading && <LoadingSpinner></LoadingSpinner>)
  return (
    <BodySTY>
      <Label
        style={{
          width: "unset",
          fontSize: "12px"
        }}
        text="手動派單"
        value={id}
        onClick={(e) => {
          handleManualAssign(e);
        }}
      ></Label>
    </BodySTY>
  );
};

export default ManualAssignBtn;
