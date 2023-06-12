export const createMaintenance = async (maintenanceData: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in maintenanceData) {
    if (maintenanceData[key] !== null && maintenanceData[key].trim() !== "") {
      filteredNullData[key] = maintenanceData[key];
    }
  }
  const res = await fetch("https://localhost:7088/CAR/CreateMaintenance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(filteredNullData)
  });
  return res.json();
};
