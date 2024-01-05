export const mock_company_data = {
  address1: "",
  address2: "",
  administrator_no: "",
  administrator_name: "",
  administrator_photo_link: "",
  agent_no: "",
  company_area: "",
  area_name: "",
  company_city: "",
  city_name: "",
  company_contact: [
    {
      contact_name: "",
      contact_phone_code: "",
      contact_phone: "",
      contact_tel_code: "",
      contact_tel: "",
      contact_email: "",
      contact_sort: ""
    }
  ],
  company_country: "",
  country_name: "",
  company_country2: "",
  country2_name: "",
  company_district_code: "",
  company_email: "",
  company_fax: "",
  company_fax_code: "",
  company_gui_no: "",
  date_format: "",
  time_zone: "",
  time_format: "",
  milage: "",
  fuel_unit: "",
  measurement_units: "",
  date_format_name: "",
  time_format_name: "",
  milage_name: "",
  fuel_unit_name: "",
  measurement_units_name: "",

  company_currency: [
    {
      currency_code: "",
      currency_name: ""
    }
  ],
  company_language: [
    {
      language_code: "",
      language_name: ""
    }
  ],
  company_leave: [{ leave_code: "", leave_name: "" }],
  company_logo_link: "",
  company_name: "",
  company_no: "",
  company_owner: "",
  company_tel: "",
  company_tel_code: "",
  company_typ: "",
  // company_working_hours: [{ working_hours_code: "", working_hours_name: "" }],
  company_working_hours: [],
  no: 1,
  user_name: ""
};

// 檢視的某些值在更新資料時不需要打入API，因此移除
export const keysToDelete = [
  "administrator_photo_link",
  "administrator_name",
  "administrator_first_name",
  "city_name",
  "country_name",
  "country2_name",
  "date_format_name",
  "time_format_name",
  "milage_name",
  "fuel_unit_name",
  "measurement_units_name"
];

////////////////////

/* company_No: "",
  company: {
    agent_No: "",
    invoice_No: "",
    corporation_Code: "",
    company_Typ: "",
    com_Name: "",
    com_Country: "",
    owner: "",
    administrator: "",
    com_Logo_Link: "",
    plf_Typ: "",
    plan_Typ: "",
    sub_Status: "",
    sub_Time: "",
    com_Status: ""
  },
  company_Currency: [
    {
      currency_Code: "",
      currency_Name: ""
    }
  ],
  company_Dt: {
    tel: "",
    com_Email: "",
    com_Fax: "",
    country: "",
    city: "",
    district: "",
    zip_Code: "",
    user_Address1: "",
    user_Address2: ""
  },
  company_Contact: [
    {
      contact_name: "",
      contact_phone_code: "",
      contact_phone: "",
      contact_tel_code: "",
      contact_tel: "",
      contact_email: ""
    }
  ],
  company_Language: [
    {
      language_Code: "",
      language_Name: ""
    }
  ],
  company_Leave: [
    {
      leave_Code: "",
      leave_Name: ""
    }
  ],
  company_Working_Hours: [
    {
      working_Hours_Code: "",
      working_Hours_Name: ""
    }
  ] */
