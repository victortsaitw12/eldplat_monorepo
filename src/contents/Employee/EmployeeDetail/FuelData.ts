export const MOCK_FUEL_DATA = [
  {
    value: "01",
    check: false,
    label: "燃料",
    hint: "燃料分類允許供應商列在燃料記錄中"
  },
  {
    value: "02",
    check: false,
    label: "服務",
    hint: "服務分類允許供應商列在服務記錄和工作訂單中"
  },
  {
    value: "03",
    check: false,
    label: "車輛",
    hint: "車輛分類允許供應商列在車輛取得記錄中"
  },
  {
    value: "04",
    check: false,
    label: "外部車隊",
    hint: "外部車隊分類允許供應商列在車輛取得記錄中"
  }
];

export const employee_options: { [key: string]: { [subKey: string]: string } } =
  {
    job_title: {
      "01": "車管主管",
      "02": "車管",
      "03": "調度",
      "04": "調度主管",
      "05": "駕駛員",
      "06": "業務主管"
    },
    department: {
      "1": "多元發展部",
      "2": "創新發展部",
      "3": "資通部",
      "4": "營運部"
    },
    group: {
      "1": "應用專案管理組",
      "2": "前端互動應用組",
      "3": "商業互動設計組",
      "4": "通運應用整合組"
    }
  };

// export function getEmployeeOptions(key: string, value: any) {
//   if (
//     typeof value !== "string" ||
//     !Object.keys(employee_options).includes(key)
//   ) {
//     return null;
//   }
//   return employee_options[key][value] || null;
// }
