export interface I_Company_Contact_Type {
  contact_name: string;
  contact_phone_code: string;
  contact_phone: string;
  contact_tel_code: string;
  contact_tel: string;
  contact_email: string;
  contact_sort: string;
}

export interface I_Company_Working_Type {
  working_hours_code: any | string;
  working_hours_name: string;
}

export interface I_Company_Leave_Type {
  leave_code: any | string;
  leave_name: string;
}

export interface I_Company_Update_Type {
  address1: string;
  address2: string;
  administrator_no: string;
  administrator_name: string;
  agent_no: string;
  company_area: string;
  company_city: string;
  company_contact: I_Company_Contact_Type[];
  company_country: string;
  company_country2: string;
  company_currency: {
    currency_code: string;
    currency_name: string;
  }[];
  company_district_code: string;
  company_email: string;
  company_fax: string;
  company_fax_code: string;
  company_gui_no: string;
  company_language: {
    language_code: string;
    language_name: string;
  }[];
  company_leave: I_Company_Leave_Type[];
  company_logo_link: string;
  company_name: string;
  company_no: string;
  company_owner: string;
  company_tel: string;
  company_tel_code: string;
  company_typ: string;
  company_working_hours: I_Company_Working_Type[];
  no: number;
  user_name: string;
}
