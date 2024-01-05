import { flattenObject } from "@utils/flattenObject";
import { filterNullData } from "@utils/filterNullData";
import API_Path from "./apiPath";
export const createBus = async (busData: any) => {
  const flattenBusData = flattenObject(busData);
  const filteredData = filterNullData(flattenBusData);
  const url = new URL(API_Path["createBus"]);
  try {
    const res = await fetch(url.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      },
      body: JSON.stringify(filteredData)
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
// prettier-ignore
// const DUMMY_INPUTS = {
//   bus_name: "國光-1",
//   vin: "55688",
//   license_plate: "99661155",
//   type: "c1",
//   status: "01",
//   ownership: "02",
//   primary_meter: "3",
//   fuel_unit: "1",
//   measurement_units: "2",
//   estimated_resale: "100"
// };
