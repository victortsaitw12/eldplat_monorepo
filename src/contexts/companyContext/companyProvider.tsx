import { mock_company_data } from "@mock-data/company/mock_data";
import { getSingleCompany } from "@services/company/getAllCompany";
import { I_Company_Update_Type } from "@typings/company_type";
import {
  phoneValidation,
  numberValidation,
  emailValidation,
  textValidation
} from "@utils/inputValidation";
import React, { useState, createContext, useEffect } from "react";
import { useForm } from "react-hook-form";

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
  errMsg: I_ErrMsg[] | boolean | any;
  countryNumInput: any | I_CountryNum;
  setCountryNumInput: (countryNumInput: I_CountryNum) => void;
  handleCompanyBasicChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCompanyContactChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCompanyCountrySetChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

// make a context for those components
export const CompanyContext = createContext<I_Company_Context>({
  companyData: mock_company_data,
  setCompanyData: function (): void {
    throw new Error("Function not implemented.");
  },
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
  handleCompanyCountrySetChange: function (): void {
    throw new Error("Function not implemented.");
  }
});

// function component start
export const CompanyProvider = ({ children }: any) => {
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

  const companyNo = "BH49202304190001";
  useEffect(() => {
    getSingleCompany(companyNo).then((data) => {
      console.log("company data", data);
      const newData = {
        company_No: data.company.company_No,
        company: {
          administrator: data.company.administrator,
          agent_No: data.company.agent_No,
          invoice_No: data.company.invoice_No,
          corporation_Code: data.company.corporation_Code,
          company_Typ: data.company.company_Typ,
          com_Name: data.company.com_Name,
          com_Country: data.company.com_Country,
          owner: data.company.owner,
          com_Logo_Link: data.company.com_Logo_Link,
          plf_Typ: data.company.plf_Typ,
          plan_Typ: data.company.plan_Typ,
          sub_Status: data.company.sub_Status,
          sub_Time: data.company.sub_Time,
          com_Status: data.company.com_Status
        },
        company_Dt: {
          tel: data.company_Dt.tel,
          com_Email: data.company_Dt.coM_EMAIL,
          com_Fax: data.company_Dt.com_Fax,
          country: data.company_Dt.country,
          city: data.company_Dt.city,
          district: data.company_Dt.district,
          zip_Code: data.company_Dt.zip_Code,
          user_Address1: data.company_Dt.user_Address1,
          user_Address2: data.company_Dt.user_Address2,
          contact_Name: data.company_Dt.contact_Name,
          contact_Tel: data.company_Dt.contact_Tel,
          country_Code: data.company_Dt.country_Code,
          contact_Phone: data.company_Dt.contact_Phone
        },
        company_Currency: data.company_Currency,
        company_Language: data.company_Language,
        company_Leave: data.company_Leave,
        company_Working_Hours: data.company_Working_Hours
      };
      setCompanyData(newData);
    });
  }, [countryNumInput]);

  // handle change input for Basic component
  const handleCompanyBasicChange = (
    e: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const newData = { ...companyData };
    newData.company[e.target.name] = e.target.value;
    setCompanyData(newData);

    // 設定error message
    const comNameValid = textValidation(companyData.company["com_Name"]);
    if (comNameValid !== true) {
      return setErrMsg({
        errField: "com_Name",
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
    newData.company_Dt[e.target.name] = e.target.value;
    setCompanyData(newData);

    // 設定error message
    const telValid = numberValidation(companyData.company_Dt["tel"]);
    const comFaxValid = numberValidation(companyData.company_Dt["com_Fax"]);
    const comEmailValid = emailValidation(companyData.company_Dt["com_Email"]);
    const contactTelValid = numberValidation(
      companyData.company_Dt["contact_Tel"]
    );
    const mobileValid = phoneValidation(
      companyData.company_Dt["contact_Phone"]
    );

    // 聯絡人手機
    if (mobileValid !== true) {
      return setErrMsg({
        errField: "contact_Phone",
        errText: mobileValid
      });
    } // 聯絡人電話
    else if (contactTelValid !== true) {
      return setErrMsg({ errField: "contact_Tel", errText: contactTelValid });
    } // 公司電話
    else if (telValid !== true) {
      return setErrMsg({ errField: "tel", errText: telValid });
    } // 公司傳真
    else if (comFaxValid !== true) {
      return setErrMsg({ errField: "com_Fax", errText: comFaxValid });
    } // 公司email
    else if (comEmailValid !== true) {
      return setErrMsg({ errField: "com_Email", errText: comEmailValid });
    } else {
      setErrMsg(false);
    }
  };

  // handle change input for Country/Language/Currency component
  const handleCompanyCountrySetChange = (
    e: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const newData = { ...companyData };
    newData.company[e.target.name] = e.target.value;
    // newData.company_Dt[e.target.name] = e.target.value;
    setCompanyData(newData);
  };

  const allContextValues = {
    companyData,
    setCompanyData,
    errMsg,
    countryNumInput,
    setCountryNumInput,
    handleCompanyBasicChange,
    handleCompanyContactChange,
    handleCompanyCountrySetChange
  };

  console.log("🏆🏆🏆companyData", companyData);
  console.log("💥errMsg", errMsg);

  return (
    <CompanyContext.Provider value={allContextValues}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyProvider;

// const newData = data.map((item: any, index: any) => {
//   return {
//     company_No: item.company.company_No,
//     company: {
//       administrator: item.company.administrator,
//       agent_No: item.company.agent_No,
//       invoice_No: item.company.invoice_No,
//       corporation_Code: item.company.corporation_Code,
//       company_Typ: item.company.company_Typ,
//       com_Name: item.company.com_Name,
//       com_Country: item.company.com_Country,
//       owner: item.company.owner,
//       com_Logo_Link: item.company.com_Logo_Link,
//       plf_Typ: item.company.plf_Typ,
//       plan_Typ: item.company.plan_Typ,
//       sub_Status: item.company.sub_Status,
//       sub_Time: item.company.sub_Time,
//       com_Status: item.company.com_Status
//     },
//     company_Dt: {
//       tel: item.company_Dt.tel,
//       com_Email: item.company_Dt.coM_EMAIL,
//       com_Fax: item.company_Dt.com_Fax,
//       country: item.company_Dt.country,
//       city: item.company_Dt.city,
//       district: item.company_Dt.district,
//       zip_Code: item.company_Dt.zip_Code,
//       user_Address1: item.company_Dt.user_Address1,
//       user_Address2: item.company_Dt.user_Address2,
//       contact_Name: item.company_Dt.contact_Name,
//       contact_Tel: item.company_Dt.contact_Tel,
//       country_Code: item.company_Dt.country_Code,
//       contact_Phone: item.company_Dt.contact_Phone
//     },
//     company_Currency: item.company_Currency,
//     company_Language: item.company_Language,
//     company_Leave: item.company_Leave,
//     company_Working_Hours: item.company_Working_Hours
//   };
// });
