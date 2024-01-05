import { I_Charactor } from "@contents/Employee/Charactor";

export interface I_Add_Employees_Type {
  user_name: string;
  user_first_name: string;
  user_english_name: string;
  user_identity: string;
  user_country: string;
  company_name: string;
  working_hours_code: string;
  working_hours_name: string;
  leave_date: any | string;
  leave_check: string;
  user_phone_code: string;
  zip_code: string;
  dt_country: string;
  user_address1: string;
  user_address2: string;
  user_birthday: string;
  user_sex: string;
  user_photo_link: string;
  group_no?: string[];
  user_email: string;
  user_phone: string;
  city: string;
  district: string;
  emgc_phone_code: string;
  emgc_phone: string;
  emgc_contact: string;
  staff_no: string;
  job_title: string;
  department: string;
  group: string;
  arrive_date: string;
  license_name: string[];
  languages: {
    language: string;
    listen: string;
    read: string;
    speak: string;
    write: string;
  }[];
  healths: {
    // user_no: string;
    heal_date: string;
    heal_typ: string;
    heal_agency: string;
    heal_status: string;
    heal_examine_date: string;
    heal_link: string;
    heal_filename: string;
    invalid: string;
    invalid_remark: string;
  }[];
}

export interface I_Get_Employees_Type {
  invts: any;
  user_name: string;
  user_first_name: string;
  user_english_name: string;
  user_identity: string;
  user_country: string;
  company_name: string;
  working_hours_code: string;
  working_hours_name: string;
  leave_date: any | string;
  leave_check: string;
  user_phone_code: string;
  zip_code: string;
  dt_country: string;
  user_address1: string;
  user_address2: string;
  user_birthday: string;
  user_sex: string;
  user_photo_link: string;
  groups: I_Charactor[];
  user_email: string;
  user_phone: string;
  city: string;
  district: string;
  emgc_phone_code: string;
  emgc_phone: string;
  emgc_contact: string;
  staff_no: string;
  job_title: string;
  department: string;
  group: string;
  arrive_date: string;
  license_name: string[];
  languages: {
    language: string;
    listen: string;
    read: string;
    speak: string;
    write: string;
  }[];
  healths: {
    // user_no: string;
    heal_date: string;
    heal_typ: string;
    heal_agency: string;
    heal_status: string;
    heal_examine_date: string;
    heal_link: string;
    heal_filename: string;
    invalid: string;
    invalid_remark: string;
  }[];
}

export interface I_Content_Props {
  handleEmployeeChange: (e: any | React.ChangeEvent<HTMLInputElement>) => void;
  insertData: I_Get_Employees_Type;
  setInsertData: (insertData: I_Add_Employees_Type) => void;
  // editData?: I_Get_Employees_Type;
}

export interface I_Health_TYPE {
  // user_no: string;
  heal_date: string;
  heal_typ: string;
  heal_agency: string;
  heal_status: string;
  heal_examine_date: string;
  heal_filename: string;
  invalid: string;
  invalid_remark: string;
}
