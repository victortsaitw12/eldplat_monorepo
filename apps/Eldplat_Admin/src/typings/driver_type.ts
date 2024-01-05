export interface DRIVER_TYPE {
  driver_no: string; // 駕駛編號
  user_no: string;
  // <DriverResume />, TABLE: DRIVER
  license_no: string; // 駕照編號
  license_area: string; // 執照州/省/地區
  license_lvl: string; // 牌照等級
  driver_seniority: string; // 駕駛資歷(年)
  driver_typ: string[]; // 駕駛分類
  dsph_area: string; // 派遣地區(區域)
  dsph_city: string; // 派遣地區(都市)
  blocklist_mark: string; // 黑名單註記
  remark: string; // 備註
  // <DriverLicense /> TABLE: DRIVER_LICENCE
  licn_typ: string; // 證照種類
  licn_name: string; // 證照名稱
  licn_unit: string; // 發照單位
  licn_issue: string; // 發照日期
  licn_exp: string; // 有效日期
  licn_examine_date: string; // 下次審驗日期
  licn_filename: string; // 證照檔案名稱
  licn_link: string; // 證照圖片路徑
  invalid: "Y" | "N"; // 失效
  invalid_remark: string; // 失效備註
}
