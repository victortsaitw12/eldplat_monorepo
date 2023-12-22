import React, { useEffect, useState } from "react";
import { DivSTY } from "./style";
import Detail from "./Detail";
import Docs from "./Docs";
import Missions from "./Missions";
import Records from "./Records";

interface I_Props {
  isEdit: boolean;
  orderId: string;
  formType: string;
}


const OrderContent = ({
  isEdit,
  formType,
  orderId,
}: I_Props) => {
  const [visibleForm, setVisibleForm] = useState("1");
  useEffect(() => {
    setVisibleForm(formType);
  }, [formType]);

  useEffect(() => {
    setVisibleForm(formType);
  }, [formType]);

  return (
    <DivSTY>
        {visibleForm === "1" && <Detail />}
        {visibleForm === "2" && <Records />}
        {visibleForm === "3" && <Missions />}
        {visibleForm === "4" && <Docs />}
    </DivSTY>
  );
};

export default OrderContent;
