import { mock_company_data } from "@mock-data/company/mock_data";
import {
  getCompanyOptions,
  getSingleCompany
} from "@services/company/getAllCompany";
import { getDdlData } from "@services/ddl/getDdlData";
import { I_Company_Update_Type } from "@typings/company_type";
import {
  phoneValidation,
  numberValidation,
  emailValidation,
  textValidation
} from "@utils/inputValidation";
import React, { useState, createContext, useEffect } from "react";

interface I_DDL_Type {
  label: string;
  value: string;
}

interface I_CountryNum {
  contactTel: string;
  contactPhone: string;
}
interface I_ErrMsg {
  errField: string;
  errText: string;
}
// the provider of types
export interface I_Company_Context {
  companyData: I_Company_Update_Type;
  setCompanyData: (companyData: I_Company_Update_Type) => void;
  companyDDL: any;
  ddlLanguage: I_DDL_Type[];
  errMsg: I_ErrMsg[] | boolean | any;
  countryNumInput: any | I_CountryNum;
  setCountryNumInput: (countryNumInput: I_CountryNum) => void;
  handleCompanyBasicChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCompanyContactChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCompanyDDLChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// make a context for those components
export const CompanyContext = createContext<I_Company_Context>({
  companyData: mock_company_data,
  setCompanyData: function (): void {
    throw new Error("Function not implemented.");
  },
  companyDDL: {},
  ddlLanguage: [{ label: "請選擇", value: "no" }],
  errMsg: { errField: "", errText: "" } || false,
  countryNumInput: { contactTel: "", contactPhone: "" },
  setCountryNumInput: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCompanyBasicChange: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCompanyContactChange: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCompanyDDLChange: function (): void {
    throw new Error("Function not implemented.");
  }
});

// function component start
export const CompanyProvider = ({ children }: any) => {
  const [companyDDL, setCompanyDDL] = useState<any>(null);
  const [ddlLanguage, setDdlLanguage] = useState<I_DDL_Type[]>([
    { label: "請選擇", value: "no" }
  ]);

  const [companyData, setCompanyData] = useState<I_Company_Update_Type | any>(
    mock_company_data
  );

  const [countryNumInput, setCountryNumInput] = useState<I_CountryNum>({
    contactTel: "",
    contactPhone: ""
  });

  const [errMsg, setErrMsg] = useState<I_ErrMsg | boolean | any>(
    { errField: "", errText: "" } || false
  );

  const [loading, setLoading] = useState<boolean>(false);

  // 取得公司所有下拉式資料
  useEffect(() => {
    setLoading(true);
    try {
      getCompanyOptions().then((item) => {
        console.log("公司所有下拉item", item);
        setCompanyDDL(item.dataList[0]);
      });
    } catch (e: any) {
      console.log("Error: 取得公司下拉式錯誤", e);
    }

    setLoading(false);
  }, []);

  // 取得語系下拉式選單的資料
  useEffect(() => {
    setLoading(true);
    const languageObj = { ddl_column: "company_language", ddl_type: "company" };
    try {
      getDdlData(languageObj).then((data) => {
        console.log("ddl lang data", data);
        const originData = [...ddlLanguage];
        const newData = data.dataList.map(
          (v: { label: string; value: string }) => {
            return { label: v.label, value: v.value };
          }
        );
        const concatData = originData.concat(newData);
        setDdlLanguage(concatData);
      });
    } catch (e: any) {
      console.log(e);
      console.log("get DDL errors :", e.message);
    }
    setLoading(false);
  }, []);

  // 取得登入公司的資料
  useEffect(() => {
    setLoading(true);
    getSingleCompany().then((data) => {
      setCompanyData(data.dataList[0]);
    });
    setLoading(false);
  }, [countryNumInput]);

  // handle change input for Basic component
  const handleCompanyBasicChange = (
    e: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const newData = { ...companyData };
    newData[e.target.name] = e.target.value;
    setCompanyData(newData);

    // 設定error message
    const comNameValid = textValidation(companyData["company_name"]);
    if (comNameValid !== true) {
      return setErrMsg({
        errField: "company_name",
        errText: comNameValid
      });
    } else {
      setErrMsg(false);
    }
  };

  // handle change input for Contact component
  const handleCompanyContactChange = (
    e: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const newData = { ...companyData };
    newData[e.target.name] = e.target.value;
    setCompanyData(newData);

    // 設定error message
    const contactInfo = { ...companyData.company_contact[0] };

    const telValid = numberValidation(companyData["company_tel"]);
    const comFaxValid = numberValidation(companyData["company_fax"]);
    const comEmailValid = emailValidation(companyData["company_email"]);
    const contactTelValid = numberValidation(contactInfo["contact_tel"]);
    const mobileValid = phoneValidation(contactInfo["contact_phone"]);
    console.log("mobileValid", mobileValid);
    // 聯絡人手機
    if (mobileValid !== true) {
      return setErrMsg({
        errField: "contact_phone",
        errText: mobileValid
      });
    } // 聯絡人電話
    else if (contactTelValid !== true) {
      return setErrMsg({ errField: "contact_tel", errText: contactTelValid });
    } // 公司電話
    else if (telValid !== true) {
      return setErrMsg({ errField: "company_tel", errText: telValid });
    } // 公司傳真
    else if (comFaxValid !== true) {
      return setErrMsg({ errField: "company_fax", errText: comFaxValid });
    } // 公司email
    else if (comEmailValid !== true) {
      return setErrMsg({ errField: "company_email", errText: comEmailValid });
    } else {
      setErrMsg(false);
    }
  };

  // handle change input for Country/Language/Currency component
  const handleCompanyDDLChange = (
    e: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    console.log("e::::::::::", e);
    const newData = { ...companyData };
    newData[e.target.name] = e.target.value;
    // newData.company_Dt[e.target.name] = e.target.value;
    console.log("✴newData", newData);
    setCompanyData(newData);
  };

  const allContextValues = {
    companyData,
    setCompanyData,
    companyDDL,
    ddlLanguage,
    errMsg,
    countryNumInput,
    setCountryNumInput,
    handleCompanyBasicChange,
    handleCompanyContactChange,
    handleCompanyDDLChange,
    loading
  };

  // console.log("🏆🏆🏆companyData", companyData);

  return (
    <CompanyContext.Provider value={allContextValues}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyProvider;
