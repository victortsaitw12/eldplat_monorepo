import API_Path from "./apiPath";
import { deepCloneWithDateFormat } from "@utils/formatDateFromAPI";
export const getMaintenanceByFilter = async (bus_no: string) => {
  const url = new URL(API_Path["getMaintenanceByFilter"]);
  const response = await fetch(`${url.href}/${bus_no}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  const data = await response.json();
  console.log("maintenance data", data);
  const result = data.dataList[0];
  const resultCloneWithDateFormat = deepCloneWithDateFormat(result);

  return resultCloneWithDateFormat;
};
