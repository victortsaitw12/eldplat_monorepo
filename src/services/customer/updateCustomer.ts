import API_Path from "./apiPath";
export const updateCustomer = async (customerData: any) => {
  for (const key in customerData) {
    if (customerData[key] === "") {
      delete customerData[key];
    }
  }
  // handle customer_contact
  for (let i = 0; i < customerData.customer_contact.length; i++) {
    if (i !== 0) {
      customerData.customer_contact[i]["contact_sort"] = "2";
    }
  }
  //
  const url = new URL(API_Path["updateCustomer"]);
  //
  const res = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(customerData)
  });
  const result = await res.json();
  return result;
};
