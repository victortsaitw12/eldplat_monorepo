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
// create or update health
interface updateHealthPayload {
  operationType: "0" | "2" | "3";
  // 0: create, 2: update, 3: delete
  healthData: any;
}
async function updateAccountHealth({
  operationType,
  healthData
}: updateHealthPayload) {
  const url = new URL(API_Path["UpdateAccountHealth"]);
  url.searchParams.append("type", operationType);
  try {
    const res = await fetch(url.href, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      },
      body: JSON.stringify(healthData)
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

// 新增駕駛健康資料
async function createAccuontHealthData(healthData: any) {
  try {
    const res = await updateAccountHealth({
      operationType: "0",
      healthData
    });
    return res;
  } catch (err) {
    console.log(err);
  }
}

// 更新駕駛健康資料
async function updateAccuontHealthData(healthData: any) {
  try {
    const res = await updateAccountHealth({
      operationType: "2",
      healthData
    });
    return res;
  } catch (err) {
    console.log(err);
  }
}

// 刪除駕駛資料
async function deleteAccuontHealthData(healthNo: string) {
  try {
    const res = await updateAccountHealth({
      operationType: "3",
      healthData: { health_no: healthNo }
    });
    return res;
  } catch (err) {
    console.log(err);
  }
}

// 取得單一駕駛健康資料列表
async function getHealthListByAccountId(
  userNo: string,
  filter?: { [key: string]: any },
  pageQuery?: any
) {
  const requestBody = {
    user_no: userNo,
    health_Filter: filter || [],
    filter_Needed: true,
    pageInfo: pageQuery || defaultPageInfo
  };
  const res = await fetch(`${API_Path["GetHealthsListByID"]}`, {
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
}

// 取得單一健康資料
async function getHealthDataByHealthId(healthNo: string) {
  const url = new URL(API_Path["GetHealthByID"]);
  url.searchParams.append("health_no", healthNo);
  const res = await fetch(url.href, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
  });
  const result = await res.json();
  const healthData = result.data;

  return healthData;
}

export {
  createAccuontHealthData,
  updateAccuontHealthData,
  deleteAccuontHealthData,
  getHealthListByAccountId,
  getHealthDataByHealthId
};
