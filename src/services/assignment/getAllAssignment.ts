import ManualAssignBtn from "@contents/Assignment/AssignmentList/ManualAssignBtn";
import { convertDateAndTimeFormat } from "@utils/convertDate";
import { PatternType } from "@utils/mappingQueryData";
import React, { createElement } from "react";

export const getAllAssignments = async () => {
  const res = await fetch("https://localhost:7088/ANV/GetAssignmentList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      page_Index: 1,
      page_Size: 10
    })
  });
  console.log("res for getting the list of assignment : ", res);
  return res.json();
};

export const getAssignmentTitle = () => {
  const DUMMY_TITLES = ["序號", "單號", "分類", "起始日期", "截止日期", "", ""];
  return DUMMY_TITLES;
};
export const getSubAssignmentTitle = () => {
  const DUMMY_TITLES = [
    "日期",
    "車次",
    "派單單號",
    "車隊",
    "車輛名稱",
    "車牌",
    "起始時間",
    "截止時間"
  ];
  return DUMMY_TITLES;
};

export const assignPattern: PatternType = {
  no: true,
  maintenance_quote_no: true,
  maintenance_quote_type_name: true,
  task_start_time: true,
  task_end_time: true,
  auto_assign: true,
  manual_assign: true
  // assignments: true
};

export const assignParser = (data: any, key: string) => {
  // if (key === "id") {
  //   return {
  //     label: data["customer_no"] || null,
  //     value: data["customer_no"] || null
  //   };
  // }
  if (key === "task_start_time") {
    return {
      label:
        data.task_start_time !== null
          ? convertDateAndTimeFormat(data.task_start_time)
          : "---",
      value:
        data.task_start_time !== null
          ? convertDateAndTimeFormat(data.task_start_time)
          : "---"
    };
  }
  if (key === "task_end_time") {
    return {
      label:
        data.task_end_time !== null
          ? convertDateAndTimeFormat(data.task_end_time)
          : "---",
      value:
        data.task_end_time !== null
          ? convertDateAndTimeFormat(data.task_end_time)
          : "---"
    };
  }

  return {
    label: data[key] || "---",
    value: data[key] || null
  };
};