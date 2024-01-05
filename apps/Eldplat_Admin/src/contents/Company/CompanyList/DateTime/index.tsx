import React, { useContext, useEffect } from "react";
import { Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

function DateTime() {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);

  return (
    <BodySTY>
      <Heading is="h4">日期 / 時區設定</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">日期格式</Text>
          <Text>{companyData?.date_format_name}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">時區</Text>
          <Text>(GMT+08:00) 北京</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">時間格式</Text>
          <Text>24小時制</Text>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default DateTime;
