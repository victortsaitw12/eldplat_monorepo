import React, { useContext, useEffect, useState } from "react";
import { Heading, Pane, SelectField, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

import { v4 as uuid } from "uuid";

function DateTime() {
  const { companyData, setCompanyData, companyDDL, handleCompanyDDLChange } =
    useContext<I_Company_Context>(CompanyContext);

  console.log("companyDDL", companyDDL);
  const dateFormatDDL = companyDDL?.date_format_options;
  // TODO: 時區的部份等彥廷哥抓回
  const timeZoneDDL = [{ option_code: "01", option_name: "(GMT+08:00) 北京" }];

  return (
    <BodySTY>
      <Heading is="h4">日期 / 時區設定</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">日期格式</Text>
          <SelectField
            className=""
            label=""
            name="date_format"
            value={companyData?.date_format}
            onChange={(e: any) => {
              handleCompanyDDLChange(e);
            }}
            disabled
          >
            {dateFormatDDL?.map(
              (item: { option_code: string; option_name: string }) => (
                <option key={item.option_name} value={item.option_code}>
                  {item.option_name}
                </option>
              )
            )}
          </SelectField>
        </Pane>
        <Pane className="input-line">
          <Text className="">時區</Text>
          <SelectField
            className=""
            label=""
            name="time_zone"
            value={companyData?.time_zone}
            onChange={(e: any) => {
              handleCompanyDDLChange(e);
            }}
            disabled
          >
            {timeZoneDDL?.map(
              (item: { option_code: string; option_name: string }) => (
                <option key={item.option_code} value={item.option_code}>
                  {item.option_name}
                </option>
              )
            )}
          </SelectField>
        </Pane>
        <Pane className="input-line">
          <Text>時間格式</Text>
          <Text className="time-format">24小時制</Text>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default DateTime;
