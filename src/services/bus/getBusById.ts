import { deepCloneWithDateFormat } from "@utils/formatDateFromAPI";
export const getBusById = async (bus_no: string) => {
  const response = await fetch(
    `https://localhost:7088/CAR/GetOneBus/${bus_no}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  const data = await response.json();
  console.log("data", data);
  const result = data.dataList[0];
  console.log("ori result", result);
  const resultCloneWithDateFormat = deepCloneWithDateFormat(result);
  console.log("resultCloneWithDateFormat", resultCloneWithDateFormat);
  return resultCloneWithDateFormat;
};

type PatternType = { [key: string]: string };

const mappingData = (data: { [key: string]: any }, pattern: PatternType) => {
  const result: { [key: string]: any } = {};
  for (const key in pattern) {
    result[key] = data[key];
  }
  return result;
};
