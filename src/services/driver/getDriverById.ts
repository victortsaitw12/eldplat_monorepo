import API_Path from "./apiPath";

// 取得單一駕駛資料
import { deepCloneWithDateFormat } from "@utils/formatDateFromAPI";
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
  const languages = data.languages;
  const licenses = data.licenses;
  const healths = data.healths.map((healthItem: any) => {
    return deepCloneWithDateFormat(healthItem);
  });
  return { info, languages, licenses, healths };
};
