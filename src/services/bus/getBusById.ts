function flatternAndLowerCaseInputData(oriBusData: any) {
  /**
   * bus, bus_Specifications,bus_Lifecycle
   * flattern data and concat to one string
   */
  let flatternData: { [key: string]: any } = {};
  // import bus
  flatternData = Object.assign(flatternData, oriBusData.bus[0]);
  // import bus_Specifications
  flatternData = Object.assign(flatternData, oriBusData.bus_Specifications[0]);
  // import bus_Lifecycle
  flatternData = Object.assign(flatternData, oriBusData.bus_Lifecycle[0]);
  console.log("flatternData", flatternData);
  /**
   * Transform key to lower case
   */
  const lowerCaseData: { [key: string]: any } = {};
  for (const key in flatternData) {
    lowerCaseData[key.toLowerCase()] = flatternData[key];
  }
  console.log("lowerCaseData", lowerCaseData);
  return lowerCaseData;
}
export const getBusById = async (bus_No: string) => {
  const response = await fetch("https://localhost:7188/Gateway_Bus/GetOneBus", {
    method: "POST",
    body: JSON.stringify({
      bus_No: bus_No
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  const data = await response.json();
  const flatternLowerCaseData = flatternAndLowerCaseInputData(data);
  return mappingData(flatternLowerCaseData, busPattern);
};

type PatternType = { [key: string]: string };
export const busPattern: PatternType = {
  vin: "",
  bus_name: "",
  license_plate: "",
  type: "",
  year: "",
  make: "",
  model: "",
  trim: "",
  labels: "",
  status: "",
  bus_group: "",
  operator: "",
  ownership: "",
  color: "",
  body_type: "",
  body_subtype: "",
  mspr: "",
  vendor_no: "",
  purchase_date: "",
  purchase_price: "",
  odometer: "",
  notes: "",
  warranty_expiration_date: "",
  warranty_max_meter: "",
  in_service_date: "",
  in_service_odometer: "",
  estimated_service_months: "",
  estimated_service_meter: "",
  estimated_resale: "",
  out_service_date: "",
  out_service_odometer: "",
  primary_meter: "",
  fuel_unit: "",
  measurement_units: "",
  width: "",
  height: "",
  length: "",
  interior_volume: "",
  passenger_volume: "",
  cargo_bolume: "",
  ground_clearance: "",
  bed_length: "",
  curb_weight: "",
  weight_rating: "",
  towing_capacity: "",
  max_payload: "",
  epa_city: "",
  epa_highway: "",
  epa_combined: "",
  engine_summary: "",
  engine_brand: "",
  aspiration: "",
  block_type: "",
  bore: "",
  cam_type: "",
  compression: "",
  cylinders: "",
  displacement: "",
  fuel_induction: "",
  max_hp: "",
  max_torque: "",
  redline_rpm: "",
  stroke: "",
  valves: "",
  transmission_summary: "",
  transmission_brand: "",
  transmission_type: "",
  transmission_gears: "",
  driver_type: "",
  break_system: "",
  front_track_width: "",
  rear_track_width: "",
  wheelbase: "",
  front_wheel_diameter: "",
  rear_wheel_diameter: "",
  rear_axle: "",
  front_tire_type: "",
  rear_tire_psi: "",
  rear_tire_type: "",
  front_tire_psi: "",
  fuel_type: "",
  fuel_quality: "",
  fuel_tank_capacity1: "",
  fuel_tank_capacity2: "",
  oil_capacity: ""
};

const mappingData = (data: { [key: string]: any }, pattern: PatternType) => {
  const result: { [key: string]: any } = {};
  for (const key in pattern) {
    result[key] = data[key];
  }
  return result;
};

/*
const defaultValues = {
  customer_gui_no: "",
  customer_name: "",
  customer_typ: "01",
  contact_name: "",
  contact_phone: "",
  contact_email: ""
}
*/
