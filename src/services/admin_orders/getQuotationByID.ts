import API_Path from "./apiPath";
// 創建詢價/報價單
export const getQuotationByID = async (id: any) => {
  const res = await fetch(API_Path["GetQuotationByID"] + "?quote_no=" + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  return res.json();
};
