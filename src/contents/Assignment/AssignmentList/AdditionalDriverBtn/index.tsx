import React from "react";
import { BodySTY } from "./style";
import { PlusIcon } from "evergreen-ui";

import { Label } from "@components/Button/Primary";
import { getOrderInfo } from "@services/assignment/getOrderInfo";

interface AdditionalDriverBtn_Type {
  id: string;
  disabled?: boolean;
  setOrderInfo: (t: any) => void;
  setCreatDrawerOpen: (v: "car" | "driver" | "") => void;
}
const AdditionalDriverBtn = ({
  id,
  disabled,
  setOrderInfo,
  setCreatDrawerOpen
}: AdditionalDriverBtn_Type) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const renderAddDriver = () => {
    setLoading(true);

    try {
      getOrderInfo(id).then((data) => {
        console.log("data", data);
        setOrderInfo(data.dataList);
      });
      setCreatDrawerOpen("driver");
    } catch (err) {
      console.log("err of click the finish button", err);
    }
    setLoading(false);
  };
  return (
    <BodySTY>
      <Label
        style={{
          width: "unset",
          fontSize: "12px"
        }}
        text={
          <span>
            <PlusIcon style={{ height: "12px", width: "12px" }} />
            派工
          </span>
        }
        onClick={renderAddDriver}
        disabled={disabled}
      ></Label>
    </BodySTY>
  );
};

export default AdditionalDriverBtn;
