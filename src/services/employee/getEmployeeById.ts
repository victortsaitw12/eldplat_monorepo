export const getEmployeeById = async (user_no: string) => {
  const response = await fetch(
    `https://localhost:7088/ATR/QueryUpdateList/api/QueryUpdateList/1?user_no=${user_no}`,
    {
      method: "POST",
      body: JSON.stringify({
        user_no: user_no
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzA0MTIwMDAxIiwiTmFtZSI6IlNob2hlaSIsIkNvbXBhbnlfTm8iOiJCSDQ5MjAyMzAyMDIwMDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi6Kq_5bqm576k57WEIiwiZXhwIjoxNjg0NDg5MjczLCJpc3MiOiJsb2NhbGhvc3Q6NzA3NiIsImF1ZCI6ImxvY2FsaG9zdDo3MDc2In0.BbFT4yOL9o_sieeujOJnrw-e-kns8GPFWC0R32eh3Ok"
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
