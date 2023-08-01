import React, { useCallback, useContext, useState } from "react";
import { Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

function Basic() {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);

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
          <Text>{companyData?.company_no}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">代理商編號</Text>
          <Text>{companyData?.agent_no}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司名稱</Text>
          <Text>{companyData?.company_name}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">統一編號</Text>
          <Text>{companyData?.company_gui_no}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司類型</Text>
          <Text>{companyData?.company_typ === "01" && "運輸業"}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">負責人</Text>
          <Text>{companyData?.company_owner}</Text>
        </Pane>

        {/* 圖片區域 */}
        <Pane className="company-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cizoo.com/upload/pad/1597127572112_Lion_02.jpg"
            alt=""
          />
        </Pane>
      </form>
    </BodySTY>
  );
}

export default Basic;
