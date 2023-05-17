export const updateBus = async (bus_No: string, busData: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  console.log("busData", busData);
  for (const key in busData) {
    if (busData[key] !== null && busData[key].trim() !== "") {
      filteredNullData[key] = busData[key];
    }
  }
  filteredNullData["bus_No"] = bus_No;
  console.log("filteredNullData", filteredNullData);
  const res = await fetch("https://localhost:7188/Gateway_Bus/UpdateBus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(filteredNullData)
  });
  return res.json();
};
