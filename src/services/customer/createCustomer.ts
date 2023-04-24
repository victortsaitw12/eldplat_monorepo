export const createCustomer = async (customerData: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in customerData) {
    if (customerData[key] !== null && customerData[key].trim() !== "") {
      filteredNullData[key] = customerData[key];
    }
  }
  const res = await fetch(
    "https://localhost:7188/Gateway_Customer/CreateCustomer",
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
