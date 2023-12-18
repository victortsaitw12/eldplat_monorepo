import { PatternType } from "@utils/mappingQueryData";
import { createElement } from "react";
import API_Path from "./apiPath";
import { I_PageInfo } from "@components/PaginationField";

export const defaultPageInfo: I_PageInfo = {
  Page_Index: 1,
  Page_Size: 10,
  Orderby: null,
  Arrangement: "desc",
  Total: 0,
  Last_Page: 0
};

// 取得維保任務資料
export const getAllMaintenanceRecords = async (
  filter: { [key: string]: any } = {},
  maintenance_status = "3",
  pageQuery = defaultPageInfo
) => {
  const mainRecordFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      mainRecordFilter.push({
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
      maintenance_filter: mainRecordFilter,
      filter_Needed: true,
      page_info: pageQuery
    })
  });
  console.log("record res : ", res);
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
  } else if (key === "bus_name") {
    const labelElement = createElement(
      "a",
      {
        style: { textDecoration: "none", cursor: "pointer", color: "inherit" },
        href: `/maintenance/detail/${data["maintenance_no"]}?editPage=view`
      },
      data["bus_name"]
    );
    return {
      label: labelElement,
      value: data["bus_name"] || null
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

export const getMaintenanceRecordTitle = () => {
  const DUMMY_TITLES = [
    "車輛名稱",
    "駕駛",
    "維保序號",
    "分類",
    "維修廠",
    "項目",
    "派單單號",
    "完成日期"
  ];
  return DUMMY_TITLES;
};
