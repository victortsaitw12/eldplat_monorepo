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
  licn_duration: string;
  licn_passdate: string;
  trainer_name: string;
  description: string;
}

// export interface I_License {
//   no: 0;
//   driver_no: string;
//   licn_typ: string;
//   licn_name: string;
//   licn_unit: string;
//   licn_issue: string; //"2023-08-04T02:14:20.188Z"
//   licn_exp: string; //"2023-08-04T02:14:20.188Z"
//   licn_examine_Date: string; //"2023-08-04T02:14:20.188Z"
//   licn_link: string;
//   licn_filename: string;
// }

const MOCK_DATA = [
  {
    no: 1,
    driver_no: "DRV202300001",
    licn_typ: "A",
    licn_name: "車輛保養與急救常識",
    licn_duration: "2023-11.05",
    licn_passdate: "2023-11-11",
    trainer_name: "曾士東",
    description: "--"
  },
  {
    no: 2,
    driver_no: "DRV202300002",
    licn_typ: "B",
    licn_name: "道路安全講習",
    licn_duration: "2023-08-11",
    licn_passdate: "2023-08-03",
    trainer_name: "張慧宜",
    description: "--"
  },
  {
    no: 3,
    driver_no: "DRV202300003",
    licn_typ: "C",
    licn_name: "新人訓練",
    licn_duration: "2023-01-01~2023-01-09",
    licn_passdate: "2023-11-11",
    trainer_name: "陳佳琳",
    description: "由公司內部舉辦之新人訓練，凡加入本公司必..."
  }
];

// 取得單一駕駛證照資料
export const getLicenseById = async (
  driver_no: string,
  pageQuery?: any,
  filter?: { [key: string]: any }
) => {
  const licenses = MOCK_DATA;
  const pageInfo = defaultPageInfo;

  return { licenses, pageInfo };

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
  // const licenses = result.contentList;
  // const pageInfo = result.pageInfo;

  return { licenses, pageInfo };
};
