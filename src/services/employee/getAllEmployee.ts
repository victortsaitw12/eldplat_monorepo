// 取得員工資料
export const getAllEmployees = async (filter: { [key: string]: any } = {}) => {
  const employeeFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      employeeFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  console.log("employeeFilter", employeeFilter);

  const res = await fetch("https://localhost:7088/ATR/GetAccountList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzAyMDIwMDAyIiwiTmFtZSI6IuWwj-Wuoui7iiIsIkNvbXBhbnlfTm8iOiJCSDQ5MjAyMzAyMDIwMDAyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi5bCP5a6i6LuK6aeV6aeb576kIiwiZXhwIjoxNjg2NTUzNTQzLCJpc3MiOiJsb2NhbGhvc3Q6NzA3NiIsImF1ZCI6ImxvY2FsaG9zdDo3MDc2In0.mbBwUGUwANCCcfiyND5drSJd-NBrDa6JPJ5KEyhlCeE"
    },
    body: JSON.stringify({
      filters: employeeFilter,
      filter_Needed: false,
      pageInfo: { page_Index: 1, page_Size: 10 },
      user_status: "1"
    })
  });
  return res.json();
};

export const getEmployeeTitle = () => {
  const DUMMY_TITLES = [
    "姓名",
    "E-MAIL",
    "群組",
    "登入次數",
    "加入時間",
    "加入狀態"
  ];
  return DUMMY_TITLES;
};
