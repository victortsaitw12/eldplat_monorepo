import React, { useContext, useEffect } from "react";
import { Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

function Unit() {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);

  return (
    <BodySTY>
      <Heading is="h4">單位設定</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">里程</Text>
          <Text>{companyData?.milage_name}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">燃料容量</Text>
          <Text>{companyData?.fuel_unit_name}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">測量系統 </Text>
          <Text>{companyData?.measurement_units_name}</Text>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default Unit;
