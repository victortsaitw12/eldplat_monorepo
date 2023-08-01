import API_Path from "./apiPath";
import { I_PageInfo } from "@components/PaginationField";
// 取得供應商資料
// status:"1"啟用 "2"停用
// codeType:供應商分類
export const defaultPageInfo: I_PageInfo = {
  page_Index: 1,
  page_Size: 3,
  orderby: "vendor_no",
  arrangement: "desc",
  total: 0,
  last_Page: 0
};
export const getAllVendors = async (
  filter: { [key: string]: any } = {},
  status: string,
  codeType: string,
  pageQuery = defaultPageInfo
) => {
  const vendorFilter = [];
  let codeTypeValue = "";
  switch (codeType) {
    case "01":
      codeTypeValue = "CAR_GROUP";
      break;
    case "03":
      codeTypeValue = "REPAIR";
      break;
    default:
      codeTypeValue = "OTHER";
      break;
  }
  for (const key in filter) {
    if (filter[key].value !== "") {
      vendorFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  const res = await fetch(API_Path["GetVendor"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      vendor_code: codeType,
      vendor_main_type: codeTypeValue,
      vendor_Status: status,
      vendor_Filter: vendorFilter,
      filter_Needed: true,
      pageInfo: pageQuery
    })
  });
  return await res.json();
};

// 取得Vendor List頁多國語系
export const getVendorsLang = async (lang: string, page: string) => {
  const res = await fetch(
    // `https://localhost:7188/Gateway_Vendor/ProduceVendorLanguage/${lang}, ${page}`,
    `${API_Path["GetLanguages"]}/${lang}, ${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  return res.json();
};

export const getVendorTitle = () => {
  const DUMMY_TITLES = [
    "名稱",
    "區域",
    "電話",
    "網站",
    "聯絡人",
    "聯絡信箱",
    "標籤"
  ];
  return DUMMY_TITLES;
};
