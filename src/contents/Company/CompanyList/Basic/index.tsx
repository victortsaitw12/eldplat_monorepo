import React, { useCallback, useContext, useState } from "react";
import { Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

function Basic() {
  const C_data = useContext<I_Company_Context>(CompanyContext);
  const company_basic_data = C_data.companyData.company;

  return (
    <BodySTY>
      <Heading is="h4">公司基本資料</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">序號</Text>
          <Text>12346789</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司編號</Text>
          <Text>{C_data.companyData.company_No}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">代理商編號</Text>
          <Text>{company_basic_data.agent_No}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司名稱</Text>
          <Text>{company_basic_data.com_Name}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">統一編號</Text>
          <Text>{company_basic_data.invoice_No}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司類型</Text>
          <Text>{company_basic_data.company_Typ === "1" && "運輸業"}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">負責人</Text>
          <Text>{company_basic_data.owner}</Text>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default Basic;
