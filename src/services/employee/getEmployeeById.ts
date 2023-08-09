import API_Path from "./apiPath";

export const getEmployeeById = async (user_no: string) => {
  const url = new URL(API_Path["GetEmployeeById"]);
  url.searchParams.append("user_no", user_no);
  const response = await fetch(url.href, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  console.log("response", response);
  const data = await response.json();
  console.log("data", data);
  return data;
};

type PatternType = { [key: string]: string };
export const employeePattern: PatternType = {
  customer_Gui_No: "customer_Gui_No",
  customer_Name: "customer_Name",
  customer_Typ: "customer_Typ",
  contact_Name: "contact_Name",
  contact_Phone: "contact_Phone",
  contact_Email: "contact_Email"
};
