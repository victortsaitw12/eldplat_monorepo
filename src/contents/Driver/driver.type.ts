// single driver info
export interface DriverInfo {
  info: {
    user_name: string | null;
    user_email: string | null;
    user_phone: string | null;
    driver_no: string | null;
    license_no: string | null;
    license_area: string | null;
    license_lvl: string | null;
    driver_seniority: string | null;
    dsph_area: string | null;
    dsph_city: string | null;
    licn_typ: string | null;
    licn_name: string | null;
    licn_unit: string | null;
    licn_issue: string | null; //"2023-05-18T08:00:32.426Z"
    licn_exp: string | null; //"2023-05-18T08:00:32.426Z"
    licn_examine_Date: string | null; //"2023-05-18T08:00:32.426Z"
    licn_link: string | null;
    licn_filename: string | null;
  };
  languages: Array<{
    user_no: string;
    language: string;
    listen: string;
    speak: string;
    read: string;
    write: string;
  }>;
  healths: Array<{
    user_no: string;
    heal_date: string;
    heal_typ: string;
    heal_agency: string;
    heal_status: string;
    heal_examine_date: "2023-05-25T00:00:00";
    heal_filename: string;
    heal_link: string;
    invalid: string;
    invalid_remark: string;
  }>;
}

// Update driver info payload
export interface UpdateDriverInfoPayload {
  driver_no: string;
  license_no: string;
  driver_country: string;
  license_area: string;
  license_lvl: string;
  driver_seniority: string;
  dsph_area: string;
  dsph_city: string;
  licn_typ: string;
  licn_name: string;
  licn_unit: string;
  licn_issue: string;
  licn_exp: string;
  licn_examine_date: string;
  licn_filename: string;
  licn_link: string;
}
