import { PageInfoType } from "@services/type";
import API_Path from "./apiPath";
import { PatternType } from "@utils/mappingQueryData";
export const getMaintenanceByFilter = async (
  bus_no: string,
  pageInfo: PageInfoType
) => {
  console.log("pageInfo", pageInfo);
  const url = new URL(API_Path["getMaintenanceByFilter"]);
  const response = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      bus_no: bus_no,
      page_Info: pageInfo
    })
  });
  const data = await response.json();
  return data;
};

export const busMaintenacePattern: PatternType = {
  id: true,
  maintenance_no: true,
  credate: true,
  meter: true,
  vendor_name: true,
  package_name: true,
  type_name: true,
  driver_assignment_no: true,
  bus_assignment_no: true
};

export const busMaintenaceParser = (
  data: any,
  key: string
): { label: any; value: any } => {
  if (key === "id") {
    return {
      label: data["bus_no"] || null,
      value: data["bus_no"] || null
    };
  }
  return {
    label: data[key] || null,
    value: data[key] || null
  };
};
