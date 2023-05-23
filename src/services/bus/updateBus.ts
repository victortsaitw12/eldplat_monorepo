export const updateBus = async (busData: any) => {
  for (const key in busData) {
    const subFormData = busData[key];
    console.log("subFormData", subFormData);
    for (const subKey in subFormData) {
      console.log("subKey", subFormData[subKey]);
      if (
        !Array.isArray(subFormData[subKey]) &&
        typeof subFormData[subKey] === "string" &&
        subFormData[subKey].trim() === ""
      ) {
        delete subFormData[subKey];
      }
    }
    console.log("subFormData", subFormData);
  }
  const res = await fetch("https://localhost:7088/CAR/UpdateBus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(busData)
  });
  return res.json();
};
