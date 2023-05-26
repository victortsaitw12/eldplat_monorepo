import { deepCloneWithDateFormat } from "@utils/formatDateFromAPI";
export const getDriverById = async (driver_no: string) => {
  const response = await fetch(
    `https://localhost:7088/ATR/QueryDriverInfo?driver_no=${driver_no}`,
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
  const healths = data.healths.map((healthItem: any) => {
    return deepCloneWithDateFormat(healthItem);
  });
  return { info, languages, healths };
};
