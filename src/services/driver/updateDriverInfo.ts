import API_Path from "./apiPath";

// 更新駕駛資料 updateDriverInfo (疑似作廢，待確認)
export const updateDriverInfo = async (driverData: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in driverData) {
    console.log("key", key);
    if (key === "driver_typ") {
      filteredNullData[key] = driverData[key];
    } else if (driverData[key] !== null && driverData[key].trim() !== "") {
      filteredNullData[key] = driverData[key];
    }
  }
  const res = await fetch(`${API_Path["updateDriverInfo"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    body: JSON.stringify(filteredNullData)
  });
  return res.json();
};
