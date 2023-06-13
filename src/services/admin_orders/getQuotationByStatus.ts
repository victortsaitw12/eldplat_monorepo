import API_Path from "./apiPath";
// 創建詢價/報價單
export const getQuotationByStatus = async (tab_code: any) => {
  const res = await fetch(
    API_Path["GetQuotationByStatus"] + "?tab_code=" + tab_code,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  return res.json();
};
