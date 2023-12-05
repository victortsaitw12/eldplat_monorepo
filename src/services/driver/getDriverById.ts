import API_Path from "./apiPath";
import { deepCloneWithDateFormat } from "@utils/formatDateFromAPI";

export interface I_Info {
  user_no: string; //"USR202305240008";
  user_name: string; //"國勝大葛格";
  user_email: string; //"ania@test.com";
  user_phone: string; //"0968547854";
  driver_no: string; //"DRV202307060001";
  license_no: string; //"A100000";
  license_area: string; //"2039003000000000";
  license_area_name: string; // "台北市";
  license_lvl: string; //"1";
  driver_seniority: string; //"5";
  driver_country: string; //"2039000000000000";
  driver_country_name: string; //"中華民國";
  dsph_area: string; //"03";
  dsph_area_name: string; //"南部";
  dsph_group: string; //"03";
  dsph_group_name: string; //"第三車隊";
  working_hours_code: string; //"01";
  working_hours_name: string; //"一例一休";
}
export interface I_Lang {
  user_no: string; //"USR202305240008";
  language: string; //"05";
  listen: string; //"1";
  speak: string; //"1";
  read: string; //"1";
  write: string; //"2";
}

export interface I_Workinghour {
  working_hours_code: string; //"01";
  working_hours_name: string; //"一例一休";
}

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
    dsph_group_name: "第三車隊",
    working_hours_code: "01",
    working_hours_name: "一例一休"
  },
  language: [
    {
      user_no: "USR202305240008",
      language: "05",
      listen: "1",
      speak: "1",
      read: "1",
      write: "2"
    }
  ],
  workinghours: [
    { working_hours_code: "01", working_hours_name: "一例一休" },
    { working_hours_code: "03", working_hours_name: "四週變形工時" },
    { working_hours_code: "02", working_hours_name: "兩週變形工時" }
  ]
};

// 取得單一駕駛資料
export const getDriverById = async (driver_no: string) => {
  return DUMMY_DATA;
  const response = await fetch(
    `${API_Path["getDriverById"]}?driver_no=${driver_no}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      }
    }
  );
  const result = await response.json();
  const data = result.data;
  const info: I_Info = deepCloneWithDateFormat(data.info);
  const workinghours: I_Workinghour[] = data.workinghours;
  const languages: I_Lang[] = data.languages;

  return { info, workinghours, languages };
};
