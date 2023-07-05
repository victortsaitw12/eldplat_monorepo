import { PatternType } from "@utils/mappingQueryData";
import API_Path from "./apiPath";
// 取得維保通知資料
export const getAllMaintenanceNotices = async (
  filter: { [key: string]: any } = {},
  maintenance_status: string
) => {
  const mainNoticeFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      mainNoticeFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  console.log("mainNoticeFilter", mainNoticeFilter);
  const res = await fetch(API_Path["GetAllMaintenanceNotices"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      maintenance_status,
      filter: mainNoticeFilter,
      filter_needed: true,
      page_info: {
        page_Index: 1,
        page_Size: 20,
        orderby: "reminders_no",
        arrangement: "desc"
      }
    })
  });
  console.log("notice res : ", res);
  return res.json();
};

// 停用維保通知
export const CancelMaintenanceById = async (reminder_no: string) => {
  const response = await fetch(
    `${API_Path["CancelMaintenanceById"]}/${reminder_no}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  const data = await response.json();
  return data.dataList[0];
};

export const maintenancePattern: PatternType = {
  id: true,
  reminders_no: true,
  bus_name: true,
  vendor_name: true,
  driver_name: true,
  meter: true,
  month: true,
  component_name: true
};

export const maintenanceParser = (data: any, key: string) => {
  if (key === "id") {
    return {
      label: data["reminders_no"] || null,
      value: data["reminders_no"] || null
    };
  }

  return {
    label: data[key] || "---",
    value: data[key] || null
  };
};

export const getMaintenanceNoticeTitle = () => {
  const DUMMY_TITLES = [
    "車輛名稱",
    "主要駕駛",
    "當前里程數",
    "維修廠",
    "項目",
    "新增任務"
  ];
  return DUMMY_TITLES;
};
