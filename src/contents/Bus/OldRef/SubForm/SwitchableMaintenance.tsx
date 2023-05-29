import React, { useState } from "react";
import { SubFromProps } from "./type";
import FlexWrapper from "@layout/FlexWrapper";
import Card from "@components/Card";
function Maintenance({
  hide,
  register,
  errors,
  control,
  isDisabled = false
}: SubFromProps) {
  const [schedule, setSchedule] = useState("0");
  return (
    <div style={{ display: hide ? "none" : "block" }}>
      <FlexWrapper>
        <Card title="維保計畫"> </Card>
      </FlexWrapper>
    </div>
  );
}

export default Maintenance;
