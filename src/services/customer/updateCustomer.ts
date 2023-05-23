export const updateCustomer = async (customerData: any) => {
  console.log("customerData", customerData);
  for (const key in customerData) {
    if (!customerData[key]) {
      delete customerData[key];
    }
  }
  // filter null data in contact
  // for (const contactItem of customerData.customer_contact) {
  //   for (const key in contactItem) {
  //     if (!contactItem[key]) {
  //       delete contactItem[key];
  //     }
  //   }
  // }
  console.log("updateCustomer", customerData);
  const res = await fetch("https://localhost:7088/CTR/UpdateCustomer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(customerData)
  });
  const result = await res.json();
  console.log("update result", result);
  return result;
};
