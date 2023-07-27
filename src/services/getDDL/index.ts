// Order ----- follows ELDPLAT_TABLE_SCHEMA_20230601.xlsx

// table: Quotation
//服務種類
export const QUOTE_TYPE: any = {
  "1": { label: "客製包車", value: "1" },
  "2": { label: "機場接送", value: "2" },
  "3": { label: "機場接送", value: "3" }
};
//訂車用途
export const PURPOSE: any = {
  "01": { label: "學校/企業參訪", value: "01" },
  "02": { label: "旅遊", value: "02" },
  "03": { label: "戶外教學", value: "03" },
  "04": { label: "企業教育訓練", value: "04" },
  "05": { label: "員工旅遊", value: "05" },
  "06": { label: "進香團", value: "06" },
  "07": { label: "其他", value: "07" }
};
// table: Quotation_DT
//指定車齡代號
export const BUS_AGE: any = {
  "01": { label: "3年以下TBD", value: "01" },
  "02": { label: "5年以下TBD", value: "02" },
  "03": { label: "10年以下TBD", value: "03" }
};
//攜帶寵物單選代號
export const BRING_PETS_RADIO: any = {
  "1": {
    label: "攜帶小型寵物，且會裝於寵物籠/背包中。",
    value: "1",
    charge: 0
  },
  "2": {
    label: "寵物無法裝籠，將直接帶上車（NT$1,000）",
    value: "2",
    charge: 1000
  }
};

//資料表名稱: QUOTATION_CONTACT (聯絡人資料)
//代表人、聯絡人區分
export const contact_type = {
  "1": { label: "代表人", value: "1" },
  "2": { label: "聯絡人", value: "2" }
};
//通訊軟體種類
export const SOCIAL_MEDIA_TYPE: any = {
  "01": { label: "Line", value: "01" },
  "02": { label: "Wechat", value: "02" }
};

//資料表名稱: ORDER_STATUS (訂單狀態)
//狀態號碼 INT
export const STATUS_CODE: any = {
  1: { label: "送出詢價", value: 1 },
  2: { label: "收到詢價", value: 2 },
  3: { label: "送出報價", value: 3 },
  4: { label: "收到報價", value: 4 },
  5: { label: "接受報價", value: 5 },
  6: { label: "已付全額", value: 6 },
  7: { label: "已付訂金", value: 7 },
  8: { label: "已付尾款", value: 8 },
  9: { label: "訂金逾期", value: 9 },
  10: { label: "尾款逾期", value: 10 },
  11: { label: "繳款逾期", value: 11 },
  12: { label: "訂單成立", value: 12 },
  13: { label: "預約派車", value: 13 },
  14: { label: "預約完成", value: 14 },
  15: { label: "結案", value: 15 }
};
//前後台狀態分類
export const status_type = {
  FR: { label: "前台", value: "FR" },
  BK: { label: "後台", value: "BK" }
};
//付款狀態 下拉待規劃
export const payment_status = {
  "01": { label: "未付款", value: "01" },
  "02": { label: "已付訂金", value: "02" },
  "03": { label: "已付全額", value: "03" },
  "04": { label: "已過付款期限", value: "04" }
};

// 資料表名稱: QUOTATION_COSTS (報價單資料)
export const PAYMENT_HISTORY: I_PaymentHistory = {
  "01": { label: "現金", value: "01" },
  "02": { label: "匯款", value: "02" }
};
interface I_PaymentHistory {
  [key: string]: {
    label: string;
    value: string;
  };
}

//資料表名稱: ORDER_STATUS_CODE (狀態代號名稱)

//證照種類
export const LICN_TYP: any = {
  "01": { label: "小型車普通駕駛執照", value: "01" },
  "02": { label: "大貨車普通駕駛執照", value: "02" },
  "03": { label: "大客車普通駕駛執照", value: "03" },
  "04": { label: "聯結車普通駕駛執照", value: "04" },
  "05": { label: "小型車職業駕駛執照", value: "05" },
  "06": { label: "大貨車職業駕駛執照", value: "06" },
  "07": { label: "大客車職業駕駛執照", value: "07" },
  "08": { label: "聯結車職業駕駛執照", value: "08" },
  "09": { label: "國際駕駛執照", value: "09" },
  "10": { label: "輕型機車駕駛執照", value: "10" },
  "11": { label: "小型輕型機車駕駛執照", value: "11" },
  "12": { label: "普通輕型機車駕駛執照", value: "12" },
  "13": { label: "重型機車駕駛執照", value: "13" },
  "14": { label: "普通重型機車駕駛執照", value: "14" },
  "15": { label: "大型重型機車駕駛執照", value: "15" }
};

//駕駛國家
export const DRIVER_COUNTRY: any = {
  "01": { label: "美國", value: "01" },
  "02": { label: "泰國", value: "02" },
  "03": { label: "台灣", value: "03" }
};

//執照州/省/地區
export const LICENSE_AREA: any = {
  "01": { label: "華盛頓州", value: "01" },
  "02": { label: "泰國", value: "02" },
  "03": { label: "台灣", value: "03" }
};

//派遣區域
export const DSPH_AREA: any = {
  "01": { label: "美加", value: "01" },
  "02": { label: "東南亞", value: "02" },
  "03": { label: "台灣", value: "03" }
};

//派遣都市
export const DSPH_CITY: any = {
  "01": { label: "西雅圖", value: "01" },
  "02": { label: "曼谷", value: "02" },
  "03": { label: "台北", value: "03" },
  "04": { label: "台中", value: "01" },
  "05": { label: "台南", value: "02" }
};
//體檢分類
export const HEAL_TYP: any = {
  "01": { label: "一般體格檢查", value: "01" },
  "02": { label: "特殊健檢", value: "02" },
  "03": { label: "特殊粉塵健檢", value: "03" },
  "04": { label: "特殊噪音健檢", value: "04" }
};
