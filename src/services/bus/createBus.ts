export const createBus = async (busData: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in busData) {
    if (busData[key] !== null && busData[key].trim() !== "") {
      filteredNullData[key] = busData[key];
    }
  }
  try {
    const res = await fetch(
      "https://localhost:7188/Gateway_BusStream/MutationResolver/CreateBus/api/CreateBus/1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        // body: JSON.stringify(DUMMY_INPUTS),
        body: JSON.stringify(filteredNullData)
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
// prettier-ignore
const DUMMY_INPUTS = {
  "bus_name": "國光-1",
  "vin": "55688",
  "license_plate": "99661155",
  "type": "c1",
  "status": "01",
  "ownership": "02",
  "driver_seat": "1",
  "bus_seat": "42",
  "bus_seat_row": "20",
  "primary_meter": "3",
  "fuel_unit": 1,
  "estimated_resale": "100"
};
