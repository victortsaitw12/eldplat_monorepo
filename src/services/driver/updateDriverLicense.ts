import API_Path from "./apiPath";

// 更新-單筆駕駛證照
export const updateDriverLicense = async (data: any, type: boolean) => {
  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in data) {
    console.log("key", key);
    if (key === "no") {
      filteredNullData[key] = data[key];
    } else if (data[key] !== null && data[key].trim() !== "") {
      filteredNullData[key] = data[key];
    }
  }
  const res = await fetch(`${API_Path["updateDriverLicense"]}?type=${type}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    body: JSON.stringify(filteredNullData)
  });
  return res.json();
};
