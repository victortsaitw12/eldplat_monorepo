import { I_Info, I_Lang, I_Workinghour } from "@services/driver/getDriverById";

// single driver info
export interface I_DriverInfo {
  info: I_Info;
  languages: I_Lang[];
  workinghours: I_Workinghour[];
}
// Update driver info payload
export interface UpdateDriverInfoPayload {
  user_no: string;
  driver_no: string;
  license_no: string;
  license_area: string;
  license_area_name: string;
  license_lvl: string;
  driver_seniority: string;
  driver_country: string;
  driver_country_name: string;
  dsph_area: string;
  dsph_area_name: string;
  dsph_group: string;
  dsph_group_name: string;
  working_hours_code: string;
  working_hours_name: string;
}

// Update driver license payload
export interface UpdateLicensePayload {
  no?: string | null;
  driver_no: string;
  licn_typ: string | null;
  licn_name: string | null;
  licn_unit: string | null;
  licn_issue: string | null; //"2023-05-18T08:00:32.426Z"
  licn_exp: string | null; //"2023-05-18T08:00:32.426Z"
  licn_examine_date: string | null; //"2023-05-18T08:00:32.426Z"
  licn_link: string | null;
  licn_filename: string | null;
}
