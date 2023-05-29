export const updateDriver = async (driver_no: string, driverData: any) => {
  // const filteredNullData: { [key: string]: string | null } = {};
  // console.log("updateDriver", driverData);
  // for (const key in driverData) {
  //   if (
  //     driverData[key] !== null &&
  //     typeof driverData[key] === "string" &&
  //     driverData[key].trim() !== ""
  //   ) {
  //     filteredNullData[key] = driverData[key];
  //   }
  // }
  // console.log("filteredNullData", filteredNullData);
  // filteredNullData["driver_no"] = driver_no;
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
