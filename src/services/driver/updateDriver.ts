import { token } from "./token";

export const updateCustomer = async (
  customer_No: string,
  customerData: any
) => {
  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in customerData) {
    if (customerData[key] !== null && customerData[key].trim() !== "") {
      filteredNullData[key] = customerData[key];
    }
  }
  filteredNullData["customer_No"] = customer_No;
  console.log("filteredNullData", filteredNullData);
  const res = await fetch(
    "https://localhost:7188/Gateway_Customer/UpdateCustomer",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(filteredNullData)
    }
  );
  return res.json();
};
