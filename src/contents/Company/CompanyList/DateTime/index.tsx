import React, { useContext, useEffect } from "react";
import { Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import {
  I_Region_Context,
  RegionContext
} from "@contexts/regionContext/regionProvider";

function DateTime() {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);
  const { handleCountrySwitch } = useContext<I_Region_Context>(RegionContext);
  const company_language_data = companyData?.company_language;
  const company_currency_data = companyData?.company_currency;

  return (
    <BodySTY>
      <Heading is="h4">日期 / 時區設定</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">日期格式</Text>
          <Text>{handleCountrySwitch(companyData?.company_country)}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">時區</Text>
          <Pane className="option-tags">
            {company_language_data?.map((item) => (
              <div key={item.language_code} className="tags">
                <Text>{item.language_name}</Text>
              </div>
            ))}
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text className="">時間格式</Text>
          <Pane className="option-tags">
            {company_currency_data?.map((item) => (
              <div key={item.currency_code} className="tags">
                <Text>{item.currency_name}</Text>
              </div>
            ))}
          </Pane>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default DateTime;
