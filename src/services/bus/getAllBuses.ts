import { PatternType } from "@utils/mappingQueryData";
export const getAllBuses = async (
  filter: { [key: string]: any } = {},
  bus_status = "1"
) => {
  console.log("getAllBuses", filter);
  const busFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      busFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  console.log("bus_Filter", busFilter);
  console.log("accessToken", process.env.NEXT_PUBLIC_ACCESS_TOKEN);
  const res = await fetch("https://localhost:7088/CAR/GetBusList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      bus_status,
      bus_Filter: busFilter,
      filter_Needed: true,
      page_Info: {
        page_index: 1,
        page_size: 10,
        orderby: "bus_No",
        arrangement: "asc"
      }
    })
  });
  console.log("res", res);
  return res.json();
};

export const getBusTitle = () => {
  const DUMMY_TITLES = [
    "車輛系統編號",
    "車種",
    "廠牌",
    "車型",
    "車牌",
    "車齡",
    "車輛群組",
    "駕駛",
    "狀態",
    "標籤"
  ];
  return DUMMY_TITLES;
};

export const busPattern: PatternType = {
  id: true,
  bus_no: true,
  type: true,
  make: true,
  model: true,
  license_plate: true,
  year: true,
  bus_group: true,
  operator: true,
  status: true,
  labels: true
};

export const busParser = (
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
