import API_Path from "./apiPath";
import { I_PageInfo } from "@components/PaginationField";

export const defaultPageInfo: I_PageInfo = {
  Page_Index: 1,
  Page_Size: 10,
  Orderby: null,
  Arrangement: "desc",
  Total: 0,
  Last_Page: 0
};
export interface I_License {
  no: 0;
  driver_no: string;
  licn_typ: string;
  licn_name: string;
  licn_unit: string;
  licn_issue: string; //"2023-08-04T02:14:20.188Z"
  licn_exp: string; //"2023-08-04T02:14:20.188Z"
  licn_examine_Date: string; //"2023-08-04T02:14:20.188Z"
  licn_link: string;
  licn_filename: string;
}

// 取得單一駕駛證照資料
export const getLicenseById = async (
  driver_no: string,
  pageQuery?: any,
  filter?: { [key: string]: any }
) => {
  const requestBody = {
    driver_no: driver_no,
    license_Filter: filter || [],
    filter_Needed: true,
    pageInfo: pageQuery || defaultPageInfo
  };
  const res = await fetch(`${API_Path["getLicenseById"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  const licenses = result.contentList;
  const pageInfo = result.pageInfo;

  return { licenses, pageInfo };
};
