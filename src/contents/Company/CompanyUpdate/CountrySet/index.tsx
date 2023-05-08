import React, { useCallback, useContext, useEffect, useState } from "react";
import { Heading, Pane, SelectField, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import TagSelect from "@components/TagSelect";

const languageOptions = [
  { value: "no", label: "請選擇" },
  { value: "zh", label: "繁體中文" },
  { value: "cn", label: "簡體中文" },
  { value: "en", label: "英文" },
  { value: "jp", label: "日文" }
];
const currencyOptions = [
  { value: "no", label: "請選擇" },
  { value: "nt", label: "新台幣" },
  { value: "us", label: "美金" },
  { value: "hk", label: "港幣" },
  { value: "jp", label: "日幣" }
];

function CountrySet() {
  const C_data = useContext<I_Company_Context>(CompanyContext);
  const company_language_data = C_data?.companyData?.company_Language;
  const [langData, setLangData] = useState<any[]>([]);
  const [currencyData, setCurrencyData] = useState<any[]>([]);
  // 把選出的語系陣列更新回要打API的大物件
  useEffect(() => {
    const apiData = { ...C_data.companyData };
    // 語言
    const newLangData = langData.map((obj) => {
      return {
        language_Code: obj.value,
        language_Name: obj.label
      };
    });
    apiData["company_Language"] = newLangData;

    // 貨幣
    const newCurData = currencyData.map((obj) => {
      return {
        currency_Code: obj.value,
        currency_Name: obj.label
      };
    });
    apiData["company_Currency"] = newCurData;

    C_data.setCompanyData(apiData);
  }, [langData, currencyData]);

  return (
    <BodySTY>
      <Heading is="h4">國別 / 語系 / 幣別設定</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">國別</Text>
          <SelectField
            className="com_Country"
            marginBottom="0px"
            name="com_Country"
            value={C_data.companyData.company.com_Country}
            onChange={(e: any) => {
              C_data.handleCompanyCountrySetChange(e);
            }}
          >
            <option value="TW">台灣</option>
            <option value="JP">日本</option>
            <option value="US">美國</option>
          </SelectField>
        </Pane>
        <Pane className="input-line">
          <Text className="">語系</Text>
          <TagSelect
            options={languageOptions}
            handleCustomData={setLangData}
            // apiData={company_language_data}
          />
        </Pane>
        <Pane className="input-line">
          <Text className="">幣別</Text>
          <TagSelect
            options={currencyOptions}
            handleCustomData={setCurrencyData}
          />
        </Pane>
      </form>
    </BodySTY>
  );
}

export default CountrySet;
