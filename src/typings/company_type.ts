export interface I_Company_Update_Type {
  company_No: string;
  company: {
    administrator: string;
    agent_No: string;
    invoice_No: string;
    corporation_Code: string;
    company_Typ: string;
    com_Name: string;
    com_Country: string;
    owner: string;
    com_Logo_Link: string;
    plf_Typ: string;
    plan_Typ: string;
    sub_Status: string;
    sub_Time: string;
    com_Status: string;
  };
  company_Currency: {
    currency_Code: string;
    currency_Name: string;
  }[];
  company_Dt: {
    tel: string;
    com_Email: string;
    com_Fax: string;
    country: string;
    city: string;
    district: string;
    zip_Code: string;
    user_Address1: string;
    user_Address2: string;
  };
  company_Contact: {
    contact_name: string;
    contact_phone_code: string;
    contact_phone: string;
    contact_tel_code: string;
    contact_tel: string;
    contact_email: string;
  }[];
  company_Language: {
    language_Code: string;
    language_Name: string;
  }[];
  company_Leave: {
    leave_Code: string;
    leave_Name: string;
  }[];
  company_Working_Hours: {
    working_Hours_Code: string;
    working_Hours_Name: string;
  }[];
}
