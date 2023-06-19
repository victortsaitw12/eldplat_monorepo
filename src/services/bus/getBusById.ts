import { deepCloneWithDateFormat } from "@utils/formatDateFromAPI";
export const getBusById = async (bus_no: string) => {
  console.log("fetching bus data");
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
  const result = data.dataList[0];
  const resultCloneWithDateFormat = deepCloneWithDateFormat(result);
  return resultCloneWithDateFormat;
};
