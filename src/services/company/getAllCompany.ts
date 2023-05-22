import { I_Company_Update_Type } from "@typings/company_type";

// 取得單一公司資料
export const getSingleCompany = async () => {
  const res = await fetch("https://localhost:7088/ATR/QueryCompany", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzAyMDIwMDAyIiwiTmFtZSI6IuWwj-Wuoui7iiIsIkNvbXBhbnlfTm8iOiJCSDQ5MjAyMzAyMDIwMDAyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi5bCP5a6i6LuK6aeV6aeb576kIiwiZXhwIjoxNjg2NTUzNTQzLCJpc3MiOiJsb2NhbGhvc3Q6NzA3NiIsImF1ZCI6ImxvY2FsaG9zdDo3MDc2In0.mbBwUGUwANCCcfiyND5drSJd-NBrDa6JPJ5KEyhlCeE"
    }
  });

  return res.json();
};

// 更新公司資料
export const updateCompany = async (companyData: I_Company_Update_Type) => {
  const res = await fetch("https://localhost:7088/ATR/UpdateCompany", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzAyMDIwMDAyIiwiTmFtZSI6IuWwj-Wuoui7iiIsIkNvbXBhbnlfTm8iOiJCSDQ5MjAyMzAyMDIwMDAyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi5bCP5a6i6LuK6aeV6aeb576kIiwiZXhwIjoxNjg2NTUzNTQzLCJpc3MiOiJsb2NhbGhvc3Q6NzA3NiIsImF1ZCI6ImxvY2FsaG9zdDo3MDc2In0.mbBwUGUwANCCcfiyND5drSJd-NBrDa6JPJ5KEyhlCeE"
    },
    body: JSON.stringify(companyData)
  });
  return res.json();
};

/* export const getRealSingleCompany = async (companyNo: string) => {
getSingleCompany(companyNo).then((data) => {
    console.log("company data", data);
    const newData = [data].map((item: any, index: any) => {
      return {
        company_No: item.company[0].company_No,
        company: {
          administrator: item.company[0].administrator,
          agent_No: item.company[0].agent_No,
          invoice_No: item.company[0].invoice_No,
          corporation_Code: item.company[0].corporation_Code,
          company_Typ: item.company[0].company_Typ,
          com_Name: item.company[0].com_Name,
          com_Country: item.company[0].com_Country,
          owner: item.company[0].owner,
          com_Logo_Link: item.company[0].com_Logo_Link,
          plf_Typ: item.company[0].plf_Typ,
          plan_Typ: item.company[0].plan_Typ,
          sub_Status: item.company[0].sub_Status,
          sub_Time: item.company[0].sub_Time,
          com_Status: item.company[0].com_Status
        },
        company_Dt: {
          tel: item.company_Dt[0].tel,
          com_Email: item.company_Dt[0].coM_EMAIL,
          com_Fax: item.company_Dt[0].com_Fax,
          country: item.company_Dt[0].country,
          city: item.company_Dt[0].city,
          district: item.company_Dt[0].district,
          zip_Code: item.company_Dt[0].zip_Code,
          user_Address1: item.company_Dt[0].user_Address1,
          user_Address2: item.company_Dt[0].user_Address2,
          contact_Name: item.company_Dt[0].contact_Name,
          contact_Tel: item.company_Dt[0].contact_Tel,
          country_Code: item.company_Dt[0].country_Code,
          contact_Phone: item.company_Dt[0].contact_Phone
        },
        company_Currency: item.company_Currency,
        company_Language: item.company_Language,
        company_Leave: item.company_Leave,
        company_Working_Hours: item.company_Working_Hours
      };
    });
  });
}; */
