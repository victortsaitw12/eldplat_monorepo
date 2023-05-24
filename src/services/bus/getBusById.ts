import { BusDataTypes } from "@contents/Bus/busDefaultData";
function flatternAndLowerCaseInputData(oriBusData: any) {
  /**
   * bus, bus_Specifications,bus_Lifecycle
   * flattern data and concat to one string
   */
  console.log("oriBusData", oriBusData);
  let flatternData: { [key: string]: any } = {};
  // import bus
  flatternData = Object.assign(flatternData, oriBusData.bus);
  // import bus_Specifications
  flatternData = Object.assign(flatternData, oriBusData.bus_specifications);
  // import bus_Lifecycle
  flatternData = Object.assign(flatternData, oriBusData.bus_lifecycle);
  // import bus_loan_lease
  flatternData = Object.assign(flatternData, oriBusData.bus_loan_lease);
  console.log("flatternData", flatternData);
  return flatternData;
}
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
  return data.dataList[0];
};

type PatternType = { [key: string]: string };

const mappingData = (data: { [key: string]: any }, pattern: PatternType) => {
  const result: { [key: string]: any } = {};
  for (const key in pattern) {
    result[key] = data[key];
  }
  return result;
};
