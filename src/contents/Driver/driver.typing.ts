export interface I_driverInfo {
  //   info: {
  user_name?: string; // for read: Basic form only
  user_email?: string; // for read: Basic form only
  user_phone?: string; // for read: Basic form only
  user_no?: string; // for update only
  driver_no: string | null;
  license_no: string | null;
  license_area: string | null;
  license_lvl: string | null;
  driver_seniority: number | null;
  // driver_typ: string[] | null; 暫時移除，待後續開發到標籤功能再加入
  dsph_area: string | null;
  dsph_city: string | null;
  licn_typ: string | null;
  licn_name: string | null;
  licn_unit: string | null;
  licn_issue: string | null; //"2023-05-18T08:00:32.426Z"
  licn_exp: string | null; //"2023-05-18T08:00:32.426Z"
  licn_examine_date: string | null; //"2023-05-18T08:00:32.426Z";
  licn_filename: string | null;
  licn_link: string | null;
  // 這個不知道是不是先不做
  blocklist_mark?: string | null;
  remark?: string | null;
  invalid?: string | null;
  invalid_remark?: string | null;
  //   };
  //   languages: any[];
  //   healths: any[];
}

// 暫代 queryDriverInfo
export const DUMMY_DRIVERINFO = {
  user_name: "測試資料",
  user_email: "測試資料@gmail.com",
  user_phone: "0999666666",
  driver_no: "DRV202305180002",
  license_no: "測試資料",
  license_area: "測試資料",
  license_lvl: "測試資料",
  driver_seniority: 999,
  driver_typ: ["測試資料1", "測試資料2"], //暫時移除，待後續開發到標籤功能再加入
  dsph_area: "測試資料",
  dsph_city: "測試資料",
  licn_typ: "測試資料",
  licn_name: "測試資料",
  licn_unit: "測試資料",
  licn_issue: "測試資料",
  licn_exp: "測試資料",
  licn_examine_date: "測試資料",
  licn_filename: "測試資料的證照.jpg",
  licn_link: "測試資料",
  // 這個不知道是不是先不做
  blocklist_mark: "1",
  remark: "測試資料",
  invalid: "測試資料",
  invalid_remark: "測試資料"
};
