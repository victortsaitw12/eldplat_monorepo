// 新增員工資料
export const createEmployee = async (employeeData: any) => {
  // const filteredNullData: { [key: string]: string | null } = {};
  // for (const key in employeeData) {
  //   console.log("key", key);
  //   if (key === "driver_typ") {
  //     filteredNullData[key] = employeeData[key];
  //   } else if (employeeData[key] !== null && employeeData[key].trim() !== "") {
  //     filteredNullData[key] = employeeData[key];
  //   }
  // }
  // console.log("filteredNullData", filteredNullData);
  const res = await fetch(
    "https://localhost:7188/Gateway_AccountDriver/Account/InsertAccount/api/InsertAccount/1",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeData)
    }
  );
  return res.json();
};

/*
{
    "user_name": "asdasda",
    "user_first_name": "sdasd",
    "user_english_name": "asdasd",
    "user_identity": "",
    "user_country": "TW",
    "user_birthday": "2023-03-01",
    "user_sex": "1",
    "user_photo_link": "",
    "group_no": [],
    "user_email": "bus@bus.com",
    "user_phone": "0999123456",
    "user_address": "",
    "city": "01",
    "district": "01",
    "street": "01",
    "lane": "01",
    "emgc_phone": "",
    "emgc_contact": "",
    "staff_no": "",
    "job_title": "01",
    "department": "01",
    "group": "01",
    "arrive_date": "2023-03-31",
    "license_name": [],
    "languags": [],
    "healths": [
        {
            "heal_date": "2023-03-01",
            "heal_typ": "01",
            "heal_agency": "",
            "heal_status": "01",
            "heal_examine_date": "2023-03-31",
            "heal_filename": "",
            "invalid": "N",
            "invalid_remark": "",
            "": ""
        }
    ]
}
*/
