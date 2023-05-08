import React, { useCallback, useContext, useState } from "react";
import { Heading, Pane, Text, TextInput } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  CompanyContext,
  I_Company_Context
} from "@contexts/companyContext/companyProvider";

function Basic({}) {
  const C_data = useContext<I_Company_Context>(CompanyContext);

  return (
    <BodySTY>
      <Heading is="h4">公司基本資料</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">序號</Text>
          <Text>123456789</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司編號</Text>
          <Text>{C_data.companyData.company_No}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">代理商編號</Text>
          <Text>{C_data.companyData.company.agent_No}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司名稱</Text>
          <Pane>
            <TextInput
              name="com_Name"
              value={C_data.companyData.company.com_Name}
              onChange={C_data.handleCompanyBasicChange}
            />
            {C_data.errMsg["errField"] === "com_Name" && (
              <Text color="red !important">{C_data.errMsg["errText"]}</Text>
            )}
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text className="">統一編號</Text>
          <Text>{C_data.companyData.company.invoice_No}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司類型</Text>
          <Text>運輸業</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">負責人</Text>
          <TextInput
            name="owner"
            value={C_data.companyData.company.owner}
            onChange={C_data.handleCompanyBasicChange}
          />
        </Pane>
      </form>
    </BodySTY>
  );
}

export default Basic;
