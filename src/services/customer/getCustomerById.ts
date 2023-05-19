export const getCustomerById = async (customer_no: string) => {
  const response = await fetch(
    `https://localhost:7088/CTR/GetOneCustomer?customer_no=${customer_no}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  const data = await response.json();
  console.log("data", data);
  return data.dataList[0];
};

type PatternType = { [key: string]: string };
export const customerPattern: PatternType = {
  customer_gui_no: "customer_Gui_No",
  customer_name: "customer_Name",
  customer_typ: "customer_Typ",
  contact_name: "contact_Name",
  contact_phone: "contact_Phone",
  contact_email: "contact_Email"
};

const mappingData = (data: { [key: string]: any }, pattern: PatternType) => {
  const result: { [key: string]: any } = {};
  for (const key in pattern) {
    result[key] = data[key];
  }
  return result;
};
