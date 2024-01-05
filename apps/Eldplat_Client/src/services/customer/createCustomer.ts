import API_Path from "./apiPath";
export const createCustomer = async (customerData: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in customerData) {
    if (customerData[key] !== null && customerData[key].trim() !== "") {
      filteredNullData[key] = customerData[key];
    }
  }
  //
  const url = new URL(API_Path["createCustomer"]);
  //
  const res = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(filteredNullData)
  });
  return res.json();
};
