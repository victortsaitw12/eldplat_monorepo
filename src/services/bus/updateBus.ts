export const updateBus = async (busData: any) => {
  console.log("updateBus", busData);
  for (const key in busData) {
    const subForm = busData[key];
    for (const subKey in subForm) {
      if (subForm[subKey] === "") {
        delete subForm[subKey];
      }
    }
  }
  console.log("updateBus", busData);
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
