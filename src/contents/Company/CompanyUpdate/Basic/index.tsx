import React, { useContext } from "react";
import { Heading, Pane, Text, TextInput } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  CompanyContext,
  I_Company_Context
} from "@contexts/companyContext/companyProvider";

function Basic({}) {
  const { companyData, handleCompanyBasicChange, errMsg } =
    useContext<I_Company_Context>(CompanyContext);

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
          <Text>{companyData.company_no}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">代理商編號</Text>
          <Text>{companyData.agent_no}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司名稱</Text>
          <Pane>
            <TextInput
              name="company_name"
              value={companyData.company_name}
              onChange={handleCompanyBasicChange}
            />
            {errMsg["errField"] === "company_name" && (
              <Text color="red !important">{errMsg["errText"]}</Text>
            )}
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text className="">統一編號</Text>
          <Text>{companyData.company_gui_no}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司類型</Text>
          <Text>運輸業</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">負責人</Text>
          <TextInput
            name="owner"
            value={companyData.company_owner}
            onChange={handleCompanyBasicChange}
          />
        </Pane>
      </form>
    </BodySTY>
  );
}

export default Basic;
