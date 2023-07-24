import { PatternType } from "@utils/mappingQueryData";
import { createElement } from "react";
import API_Path from "./apiPath";
import { I_PageInfo } from "@components/PaginationField";
export const defaultPageInfo: I_PageInfo = {
  page_Index: 1,
  page_Size: 10,
  orderby: "maintenance_no",
  arrangement: "desc",
  total: 0,
  last_Page: 0
};

// 取得維保任務資料
export const getAllMaintenanceMissions = async (
  filter: { [key: string]: any } = {},
  maintenance_status = "1",
  pageQuery = defaultPageInfo
) => {
  const mainMissionFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      mainMissionFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  const res = await fetch(API_Path["GetMaintenanceListForMissionAndRecord"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      maintenance_status,
      maintenance_filter: mainMissionFilter,
      filter_Needed: true,
      page_info: pageQuery
    })
  });
  console.log("mission res : ", res);
  return res.json();
};

// 更改維保狀態(結案與否)
export const UpdateMaintenanceStatus = async (
  maintenance_no: string,
  maintenance_status: string
) => {
  const res = await fetch(API_Path["UpdateMaintenanceStatus"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      maintenance_no,
      maintenance_status
    })
  });
  return res.json();
};

export const maintenancePattern: PatternType = {
  id: true,
  bus_name: true,
  driver_name: true,
  maintenance_no: true,
  type_name: true,
  vendor_name: true,
  package_name: true,
  all_assignment_no: true,
  // bus_assignment_no: true,
  // driver_assignment_no: true,
  completion_time: true
};

export const maintenanceParser = (data: any, key: string) => {
  if (key === "id") {
    return {
      label: data["maintenance_no"] || null,
      value: data["maintenance_no"] || null
    };
  }
  if (key === "all_assignment_no") {
    const labelElement = createElement(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      [
        createElement(
          "div",
          { key: "bus_assignment_no" },
          data["bus_assignment_no"] ? data["bus_assignment_no"] : "---"
        ),
        createElement(
          "div",
          { key: "driver_assignment_no" },
          data["driver_assignment_no"] ? data["driver_assignment_no"] : "---"
        )
      ]
    );
    return {
      label: labelElement,
      value:
        `${data["bus_assignment_no"]}, ${data["driver_assignment_no"]}` || null
    };
  }

  return {
    label: data[key] || "---",
    value: data[key] || null
  };
};

export const getMaintenanceMissionTitle = () => {
  const DUMMY_TITLES = [
    "車輛名稱",
    "駕駛",
    "維保序號",
    "分類",
    "維修廠",
    "項目",
    "派單單號",
    "結案"
  ];
  return DUMMY_TITLES;
};
