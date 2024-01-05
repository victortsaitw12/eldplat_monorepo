import { I_PageInfo } from "@components/PaginationField";
import API_Path from "./apiPath";
import { PatternType } from "@utils/mappingQueryData";

export const defaultPageInfo: I_PageInfo = {
  Page_Index: 1,
  Page_Size: 10,
  Orderby: null,
  Arrangement: "desc",
  Total: 0,
  Last_Page: 0
};
export interface I_Maintenance {
  id: number;
  maintenance_no: string;
  maintenance_date: string;
  maintenance_status: string;
  distance: string;
  category: string;
  repair_garage: string;
  maintenance_item: string;
}

const DUMMY_DATA = {
  statusCode: "200",
  message: "OK",
  resultList: [
    {
      id: 1,
      maintenance_no: "MTC2023012010001",
      maintenance_date: "2023-08-22",
      maintenance_status: "結案",
      distance: "12,045 公里",
      category: "定期保養",
      repair_garage: "台北保養廠",
      maintenance_item: "15 定期保養組合"
    },
    {
      id: 2,
      maintenance_no: "MTC2023012010002",
      maintenance_date: "2023-08-30",
      maintenance_status: "執行中",
      distance: "13,188 公里",
      category: "維修",
      repair_garage: "新竹保養廠",
      maintenance_item: "左側車大燈更換"
    },
    {
      id: 3,
      maintenance_no: "MTC2023012010004",
      maintenance_date: "2023-12-01",
      maintenance_status: "預計執行",
      distance: "48,089 公里",
      category: "維修",
      repair_garage: "台中保養廠",
      maintenance_item: "燃油濾清器濾芯"
    }
  ],
  pageInfo: {
    page_Index: 1,
    page_Size: 10,
    orderby: null,
    arrangement: "desc",
    total: 89,
    last_Page: 9
  }
};

export const getMaintenanceByFilter = async (
  bus_no: string,
  pageInfo: I_PageInfo
) => {
  return DUMMY_DATA;
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
