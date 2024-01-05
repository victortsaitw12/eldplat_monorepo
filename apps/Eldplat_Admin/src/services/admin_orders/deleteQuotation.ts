import API_Path from "./apiPath";
// 取消詢價/報價單
export const deleteQuotation = async (quote_no: any) => {
  const res = await fetch(
    API_Path["CancelQuotation"] + "?quote_no=" + quote_no,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  return res.json();
};
