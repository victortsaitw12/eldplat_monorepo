import API_Path from "./apiPath";
import { deepCloneWithDateFormat } from "@utils/formatDateFromAPI";

// 取得單一駕駛資料

export const getDriverById = async (driver_no: string) => {
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
  const info = deepCloneWithDateFormat(data.info);
  const workinghours = data.workinghours;
  const languages = data.languages;
  // const licenses = data.licenses;
  // const healths = data.healths.map((healthItem: any) => {
  //   return deepCloneWithDateFormat(healthItem);
  // });
  return { info, workinghours, languages };
};
