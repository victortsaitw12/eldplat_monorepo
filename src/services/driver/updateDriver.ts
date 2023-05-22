import { token } from "./token";

export const updateDriver = async (userId: string, driverData: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in driverData) {
    if (
      driverData[key] !== null &&
      typeof driverData[key] === "string" &&
      driverData[key].trim() !== ""
    ) {
      filteredNullData[key] = driverData[key];
    }
  }
  filteredNullData["user_no"] = userId;
  console.log("filteredNullData", filteredNullData);
  const res = await fetch("https://localhost:7088/ATR/InsertDriver", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(filteredNullData)
  });
  return res.json();
};
