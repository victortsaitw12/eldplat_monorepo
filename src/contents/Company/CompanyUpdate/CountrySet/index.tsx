import React, { useContext, useEffect, useState } from "react";
import { Heading, Pane, SelectField, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import TagSelect from "@components/TagSelect";
import {
  I_Region_Context,
  RegionContext
} from "@contexts/regionContext/regionProvider";

// const languageOptions = [
//   { value: "no", label: "請選擇" },
//   { value: "01", label: "簡體中文" },
//   { value: "02", label: "日文" },
//   { value: "03", label: "韓文" },
//   { value: "04", label: "泰文" }
// ];
// const currencyOptions = [
//   { value: "no", label: "請選擇" },
//   { value: "01", label: "台幣" },
//   { value: "02", label: "日幣" },
//   { value: "03", label: "韓元" },
//   { value: "04", label: "泰銖" }
// ];

function CountrySet() {
  const { companyData, setCompanyData, handleCompanyDDLChange, companyDDL } =
    useContext<I_Company_Context>(CompanyContext);
  // const { allCountries, setAllCountries } =
  //   useContext<I_Region_Context>(RegionContext);
  const { countries, handleCountryChange } =
    useContext<I_Region_Context>(RegionContext);
  const company_language_data = companyData?.company_language;
  const [editLangData, setEditLangData] = useState<any[]>();
  const company_currency_data = companyData?.company_currency;
  const [editCurData, setEditCurData] = useState<any[]>();
  const [langData, setLangData] = useState<any[]>([]);
  const [currencyData, setCurrencyData] = useState<any[]>([]);
  const [ddlLanguage, setDdlLanguage] = useState<any>([
    { label: "請選擇", value: "no" }
  ]);
  const [ddlCurrency, setDdlCurrency] = useState<any>([
    { label: "請選擇", value: "no" }
  ]);

  // 語系下拉資料
  useEffect(() => {
    const langDDL = companyDDL?.language_options.map(
      (v: { option_name: string; option_code: string }) => {
        return {
          label: v.option_name,
          value: v.option_code
        };
      }
    );
    langDDL && langDDL.unshift({ label: "請選擇", value: "no" });
    setDdlLanguage(langDDL);
  }, [companyDDL?.language_options]);

  // 幣別下拉資料
  useEffect(() => {
    const curDDL = companyDDL?.currency_options.map(
      (v: { option_name: string; option_code: string }) => {
        return {
          label: v.option_name,
          value: v.option_code
        };
      }
    );
    setDdlCurrency(curDDL);
  }, [companyDDL?.currency_options]);

  useEffect(() => {
    // 一進來先抓資料庫裡有語言的資料
    const newLangData = company_language_data.map((v) => {
      return {
        label: v.language_name,
        value: v.language_code
      };
    });
    setEditLangData(newLangData);
  }, [company_language_data]);

  useEffect(() => {
    // 一進來先抓資料庫裡有幣別的資料
    const newCurData = company_currency_data.map((v) => {
      return {
        label: v.currency_name,
        value: v.currency_code
      };
    });
    setEditCurData(newCurData);
  }, [company_currency_data]);

  // 把選出的語系陣列更新回要打API的大物件
  useEffect(() => {
    const apiData = { ...companyData };
    // 語言
    const newLangData = langData?.map((obj) => {
      return {
        language_code: obj.value,
        language_name: obj.label
      };
    });
    apiData["company_language"] = newLangData;

    // 貨幣
    const newCurData = currencyData?.map((obj) => {
      return {
        currency_code: obj.value,
        currency_name: obj.label
      };
    });
    apiData["company_currency"] = newCurData;

    setCompanyData(apiData);
  }, [langData, currencyData]);

  console.log("1️⃣langData", langData);
  console.log("2️⃣currencyData", currencyData);

  return (
    <BodySTY>
      <Heading is="h4">國別 / 語系 / 幣別設定</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">國別</Text>
          <SelectField
            className="com_Country"
            label=""
            name="company_country"
            defaultValue={companyData.company_country}
            value={companyData.company_country}
            onChange={(e: any) => {
              handleCompanyDDLChange(e);
            }}
          >
            <>
              <option value={""} disabled>
                請選擇
              </option>
              {countries?.map((item) => (
                <option key={item.area_No} value={item.area_No}>
                  {item.area_Name_Tw}
                </option>
              ))}
            </>
            {/* {allCountries?.map((item) => (
              <option key={item.areaNo} value={item.areaNo}>
                {item.regionName}
              </option>
            ))} */}
          </SelectField>
        </Pane>
        <Pane className="input-line">
          <Text className="">語系</Text>
          <TagSelect
            // options={languageOptions}
            options={ddlLanguage}
            handleCustomData={setLangData}
            editData={editLangData}
          />
        </Pane>
        <Pane className="input-line">
          <Text className="">幣別</Text>
          <TagSelect
            options={ddlCurrency}
            handleCustomData={setCurrencyData}
            editData={editCurData}
          />
        </Pane>
      </form>
    </BodySTY>
  );
}

export default CountrySet;
