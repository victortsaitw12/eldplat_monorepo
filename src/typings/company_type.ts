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
  working_hours_code?: any | string;
  working_hours_name?: string;
  option_code?: any | string;
  option_name?: string;
}

export interface I_Company_Leave_Type {
  leave_code: any | string;
  leave_name: string;
}

export interface I_Company_Update_Type {
  no: number;
  company_no: string;
  agent_no: string;
  company_name: string;
  company_gui_no: string;
  company_typ: string;
  company_owner: string;
  company_logo_link: string;
  company_tel_code: string;
  company_tel: string;
  company_fax_code: string;
  company_fax: string;
  address1: string;
  address2: string;
  company_city: string;
  city_name: string;
  company_area: string;
  area_name: string;
  company_district_code: string;
  company_country: string;
  country_name: string;
  company_email: string;
  company_country2: string;
  country2_name: string;
  date_format: string;
  time_zone: string;
  time_format: string;
  milage: string;
  fuel_unit: string;
  measurement_units: string;
  date_format_name: string;
  time_format_name: string;
  milage_name: string;
  fuel_unit_name: string;
  measurement_units_name: string;

  administrator_no: string;
  administrator_name?: string;
  administrator_first_name?: string;
  administrator_photo_link?: string;

  company_contact: I_Company_Contact_Type[];
  company_language: {
    language_code: string;
    language_name: string;
  }[];
  company_currency: {
    currency_code: string;
    currency_name: string;
  }[];
  company_leave: I_Company_Leave_Type[];
  company_working_hours: I_Company_Working_Type[];

  user_name?: string;
}
