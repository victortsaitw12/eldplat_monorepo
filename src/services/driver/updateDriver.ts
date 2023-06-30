export const updateDriver = async (driver_no: string, driverData: any) => {
  driverData["driver_no"] = driver_no;
  console.log("updateDriver", driverData);
  const res = await fetch("https://localhost:7088/ATR/UpdateDriver", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    // body: JSON.stringify(filteredNullData)
    body: JSON.stringify(driverData)
  });
  return res.json();
};
