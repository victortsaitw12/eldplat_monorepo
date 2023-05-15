import React, { useContext } from "react";
import { Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import { handleCountrySwitch } from "@pages/company";

function CountrySet() {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);
  const company_language_data = companyData.company_language;
  const company_currency_data = companyData.company_currency;

  return (
    <BodySTY>
      <Heading is="h4">國別 / 語系 / 幣別設定</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">國別</Text>
          <Text>{handleCountrySwitch(companyData.company_country)}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">語系</Text>
          <Pane className="option-tags">
            {company_language_data?.map((item) => (
              <div key={item.language_code} className="tags">
                <Text>{item.language_name}</Text>
              </div>
            ))}
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text className="">幣別</Text>
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

export default CountrySet;
