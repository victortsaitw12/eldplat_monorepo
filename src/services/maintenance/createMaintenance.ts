import API_Path from "./apiPath";

// 側邊快速新增資料
export const createMaintenance = async (maintenanceData: any) => {
  console.log("🍅 maintenanceData:", maintenanceData);

  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in maintenanceData) {
    if (maintenanceData[key] !== null && maintenanceData[key].trim() !== "") {
      filteredNullData[key] = maintenanceData[key];
    }
  }
  const res = await fetch(API_Path["CreateMaintenance"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(filteredNullData)
  });
  return res.json();
};

// 按下派單按鈕
export const createMaintenanceAssignment = async (maintenanceData: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in maintenanceData) {
    if (maintenanceData[key] !== null && maintenanceData[key].trim() !== "") {
      filteredNullData[key] = maintenanceData[key];
    }
  }
  const res = await fetch(API_Path["CreateMaintenanceAssignment"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(filteredNullData)
  });
  return res.json();
};
