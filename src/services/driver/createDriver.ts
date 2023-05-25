import { token } from "./token";

// 新增駕駛編號 (未填寫資料)  InsertFilterUserToDriver
export const createDriverNO = async (data: any) => {
  console.log("dataInsert:", data);
  const res = await fetch(
    `https://localhost:7088/ATR/InsertFilterUserToDriver?userNo=${data}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  );
  return res.json();
};

// 新增駕駛資料 updateDriverInfo
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
  console.log("filteredNullData", filteredNullData);
  const res = await fetch(
    "https://localhost:7188/Gateway_AccountDriver/Driver/InsertDriver/api/InsertDriver/1",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(filteredNullData)
    }
  );
  return res.json();
};
