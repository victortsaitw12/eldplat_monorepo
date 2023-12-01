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
interface I_Healths {
  heal_date: string; //"2023-08-02T04:29:16.926Z";
  heal_typ: string;
  heal_agency: string;
  heal_status: string;
  heal_link: string;
}

// 取得單一駕駛健康資料
export const getHealthById = async (
  userNo: string,
  filter?: { [key: string]: any },
  pageQuery?: any
) => {
  const requestBody = {
    user_no: userNo,
    health_Filter: filter || [],
    filter_Needed: true,
    pageInfo: pageQuery || defaultPageInfo
  };
  const res = await fetch(`${API_Path["getHealthById"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  const healths = result.contentList;
  const pageInfo = result.pageInfo;

  return { healths, pageInfo };
};
