export const getDriverById = async (driver_no: string) => {
  const response = await fetch(
    `https://localhost:7088/ATR/QueryDriverInfo?driver_no=${driver_no}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      }
    }
  );
  const data = await response.json();
  return data.data;
};

type PatternType = { [key: string]: string };
export const customerPattern: PatternType = {
  customer_Gui_No: "customer_Gui_No",
  customer_Name: "customer_Name",
  customer_Typ: "customer_Typ",
  contact_Name: "contact_Name",
  contact_Phone: "contact_Phone",
  contact_Email: "contact_Email"
};

const mappingData = (data: { [key: string]: any }, pattern: PatternType) => {
  const result: { [key: string]: any } = {};
  for (const key in pattern) {
    result[key] = data[key];
  }
  return result;
};

/*
const defaultValues = {
  customer_gui_no: "",
  customer_name: "",
  customer_typ: "01",
  contact_name: "",
  contact_phone: "",
  contact_email: ""
}
*/
