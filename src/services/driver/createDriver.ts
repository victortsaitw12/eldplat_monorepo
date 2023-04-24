// 新增駕駛編號 (未填寫資料)  InsertFilterUserToDriver
export const createDriverNO = async (data: any) => {
  const res = await fetch(
    `https://localhost:7188/Gateway_AccountDriver/Driver/InsertFilterUserToDriver/api/InsertFilterUserToDriver/1?userNO=${data}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  return res.json();
};

// 新增駕駛資料 InsertDriver
export const insertDriverInfo = async (driverData: any) => {
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
        "Content-Type": "application/json"
      },
      body: JSON.stringify(filteredNullData)
    }
  );
  return res.json();
};
