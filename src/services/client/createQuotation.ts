export const createQuotation = async (quotationData: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in quotationData) {
    if (
      typeof quotationData[key] !== "string" ||
      quotationData[key].trim() !== ""
    ) {
      filteredNullData[key] = quotationData[key];
    }
  }
  console.log("originalData", quotationData);
  console.log("filteredNullData", filteredNullData);
  const res = await fetch("https://localhost:7088/ORD/CreateFEQuotation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(filteredNullData)
  });
  console.log("res", res);
  const result = await res.json();
  console.log("result", result);
  return result;
};
