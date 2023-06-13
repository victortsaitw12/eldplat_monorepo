import API_Path from "./apiPath";
// 編輯詢價/報價單
export const updateQuotation = async (data: any) => {
  //   const filteredNullData: { [key: string]: string | null } = {};
  console.log("😊😊😊😊😊😊😊😊data", data);
  //   for (const key in data) {
  //     console.log("key", key);
  //     if (data[key].data !== 0) {
  //       filteredNullData[key] = data[key];
  //     } else if (data[key] !== null && data[key].trim() !== "") {
  //       filteredNullData[key] = data[key];
  //     }
  //   }
  //   const res = await fetch(API_Path["UpdateQuotation"], {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
  //     },
  //     body: JSON.stringify(data)
  //   });
  //   return res.json();
};
