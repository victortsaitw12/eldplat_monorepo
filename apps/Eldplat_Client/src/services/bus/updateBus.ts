import API_Path from "./apiPath";
export const updateBus = async (busData: any) => {
  console.log("updateBus", busData);
  for (const key in busData) {
    const subForm = busData[key];
    for (const subKey in subForm) {
      if (subForm[subKey] === null || subForm[subKey] === "") {
        delete subForm[subKey];
      }
    }
  }
  const url = new URL(API_Path["updateBus"]);
  const res = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(busData)
  });
  return res.json();
};
