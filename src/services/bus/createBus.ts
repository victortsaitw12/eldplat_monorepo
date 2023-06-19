import { flattenObject } from "@utils/flattenObject";
import { filterNullData } from "@utils/filterNullData";
export const createBus = async (busData: any) => {
  console.log("busData", busData);
  const flattenBusData = flattenObject(busData);
  console.log("flattenBusData", flattenBusData);
  const filteredData = filterNullData(flattenBusData);
  console.log(filteredData);
  try {
    const res = await fetch("https://localhost:7088/CAR/CreateBus", {
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
