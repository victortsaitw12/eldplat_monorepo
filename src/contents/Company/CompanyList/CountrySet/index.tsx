import React, { useCallback, useContext, useState } from "react";
import { Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import { handleCountrySwitch } from "@pages/company";

function CountrySet() {
  const C_data = useContext<I_Company_Context>(CompanyContext);
  const company_language_data = C_data.companyData.company_Language;
  const company_currency_data = C_data.companyData.company_Currency;

  return (
    <BodySTY>
      <Heading is="h4">國別 / 語系 / 幣別設定</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">國別</Text>
          <Text>
            {handleCountrySwitch(C_data.companyData.company.com_Country)}
          </Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">語系</Text>
          <Pane className="option-tags">
            {company_language_data.map((item) => (
              <div key={item.language_Code} className="tags">
                <Text>{item.language_Name}</Text>
              </div>
            ))}
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text className="">幣別</Text>
          <Pane className="option-tags">
            {company_currency_data.map((item) => (
              <div key={item.currency_Code} className="tags">
                <Text>{item.currency_Name}</Text>
              </div>
            ))}
          </Pane>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default CountrySet;
