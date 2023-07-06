import API_Path from "./apiPath";

// 新增員工資料
export const createEmployee = async (employeeData: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in employeeData) {
    console.log("2️⃣key", key);
    if (key === "driver_typ") {
      filteredNullData[key] = employeeData[key];
    } else if (
      employeeData[key] !== null ||
      employeeData[key].trim() !== "" ||
      employeeData[key].length !== 0
    ) {
      filteredNullData[key] = employeeData[key];
    }
  }
  console.log("filteredNullData", filteredNullData);
  const res = await fetch(API_Path["CreateEmployee"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(employeeData)
  });
  return res.json();
};

// List頁快速新增
export const createBriefEmployee = async (
  user_first_name: string,
  user_name: string,
  user_email: string,
  user_phone: string
) => {
  const res = await fetch(
    `${API_Path["CreateBriefEmployee"]}?user_first_name=${user_first_name}&user_name=${user_name}&user_email=${user_email}&user_phone=${user_phone}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      },
      body: JSON.stringify({})
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
    "languages": [],
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
