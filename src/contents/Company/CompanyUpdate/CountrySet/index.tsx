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
  const [editLangData, setEditLangData] = useState<any[]>();
  const company_currency_data = C_data?.companyData?.company_Currency;
  const [editCurData, setEditCurData] = useState<any[]>();
  const [langData, setLangData] = useState<any[]>([]);
  const [currencyData, setCurrencyData] = useState<any[]>([]);

  useEffect(() => {
    // 一進來先抓資料庫裡有語言的資料
    const newLangData = company_language_data.map((v) => {
      return {
        label: v.language_Name,
        value: v.language_Code
      };
    });
    setEditLangData(newLangData);
  }, [, company_language_data]);

  useEffect(() => {
    // 一進來先抓資料庫裡有幣別的資料
    const newCurData = company_currency_data.map((v) => {
      return {
        label: v.currency_Name,
        value: v.currency_Code
      };
    });
    setEditCurData(newCurData);
  }, [company_currency_data]);

  // 把選出的語系陣列更新回要打API的大物件
  useEffect(() => {
    const apiData = { ...C_data.companyData };
    // 語言
    const newLangData = langData?.map((obj) => {
      return {
        language_Code: obj.value,
        language_Name: obj.label
      };
    });
    apiData["company_Language"] = newLangData;

    // 貨幣
    const newCurData = currencyData?.map((obj) => {
      return {
        currency_Code: obj.value,
        currency_Name: obj.label
      };
    });
    apiData["company_Currency"] = newCurData;

    C_data.setCompanyData(apiData);
  }, [langData, currencyData]);
  console.log("C_data in LALALALA", C_data);
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
            editData={editLangData}
          />
        </Pane>
        <Pane className="input-line">
          <Text className="">幣別</Text>
          <TagSelect
            options={currencyOptions}
            handleCustomData={setCurrencyData}
            editData={editCurData}
          />
        </Pane>
      </form>
    </BodySTY>
  );
}

export default CountrySet;
