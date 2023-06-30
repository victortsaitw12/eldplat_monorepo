import API_Path from "./apiPath";
// 創建詢價/報價單
export const createQuotation = async (data: any) => {
  //
  const res = await fetch(API_Path["CreateQuotation"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(data)
  });
  return res.json();
};
