import API_Path from "./apiPath";
// 編輯詢價/報價單
export const updateQuotation = async (data: any) => {
  console.log("😊😊😊😊😊😊😊😊data", data);
  const res = await fetch(API_Path["UpdateQuotation"], {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(data)
  });
  return res.json();
};
