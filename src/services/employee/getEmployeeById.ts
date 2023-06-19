export const getEmployeeById = async (user_no: string) => {
  const response = await fetch(
    `https://localhost:7088/ATR/GetUpdateList?user_no=${user_no}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  const data = await response.json();
  // console.log(mappingData(data.contentList[0], employeePattern));
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

// const mappingData = (data: { [key: string]: any }, pattern: PatternType) => {
//   const result: { [key: string]: any } = {};
//   for (const key in pattern) {
//     result[key] = data[key];
//   }
//   return result;
// };
