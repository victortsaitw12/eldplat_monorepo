import API_Path from "./apiPath";
import { deepCloneWithDateFormat } from "@utils/formatDateFromAPI";

const DUMMY_DATA = {
  info: {
    user_no: "USR202305240008",
    user_name: "鍾俊儀",
    user_email: "ania@test.com",
    user_phone: "0968547854",
    driver_no: "DRV202307060001",
    license_no: "A100000",
    license_area: "2039003000000000",
    license_area_name: "台北市",
    license_lvl: "S級",
    driver_seniority: "5",
    driver_country: "2039000000000000",
    driver_country_name: "台灣",
    dsph_area: "03",
    dsph_area_name: "北北基",
    dsph_group: "03",
    dsph_group_name: "第一車隊",
    working_hours_code: "01",
    working_hours_name: "八週變形工時"
  },
};

export const getBusById = async (bus_no: string) => {
  return DUMMY_DATA;
  const url = new URL(API_Path["getBusById"]);
  const response = await fetch(`${url.href}/${bus_no}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  const data = await response.json();
  console.log(data);
  const result = data.dataList[0];
  const resultCloneWithDateFormat = deepCloneWithDateFormat(result);
  return resultCloneWithDateFormat;
};
