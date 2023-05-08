import { deepClone } from "@utils/deepClone";
export interface BusDataTypes {
  detail: {
    vin: string;
    bus_name: string;
    license_plate: string;
    type: string;
    year: string;
    make: string;
    model: string;
    trim: string;
    labels: string;
    status: string;
    bus_group: string;
    operator: string;
    ownership: string;
    color: string;
    body_type: string;
    body_subtype: string;
    mspr: string;
  };
  finacial: {
    vendor_no: string;
    purchase_date: string;
    purchase_price: string;
    odometer: string;
    notes: string;
    warranty_expiration_date: string;
    warranty_max_meter: string;
  };
  lifecycle: {
    in_service_date: string;
    in_service_odometer: string;
    estimated_service_months: string;
    estimated_service_meter: string;
    estimated_resale: string;
    out_service_date: string;
    out_service_odometer: string;
  };
  settings: {
    primary_meter: string;
    fuel_unit: string;
    measurement_units: string;
  };
  specifications: {
    width: string;
    height: string;
    length: string;
    interior_volume: string;
    passenger_volume: string;
    cargo_bolume: string;
    ground_clearance: string;
    bed_length: string;
    curb_weight: string;
    weight_rating: string;
    towing_capacity: string;
    max_payload: string;
    epa_city: string;
    epa_highway: string;
    epa_combined: string;
    engine_summary: string;
    engine_brand: string;
    aspiration: string;
    block_type: string;
    bore: string;
    cam_type: string;
    compression: string;
    cylinders: string;
    displacement: string;
    fuel_induction: string;
    max_hp: string;
    max_torque: string;
    redline_rpm: string;
    stroke: string;
    valves: string;
    transmission_summary: string;
    transmission_brand: string;
    transmission_type: string;
    transmission_gears: string;
    driver_type: string;
    break_system: string;
    front_track_width: string;
    rear_track_width: string;
    wheelbase: string;
    front_wheel_diameter: string;
    rear_wheel_diameter: string;
    rear_axle: string;
    front_tire_type: string;
    rear_tire_psi: string;
    rear_tire_type: string;
    front_tire_psi: string;
    fuel_type: string;
    fuel_quality: string;
    fuel_tank_capacity1: string;
    fuel_tank_capacity2: string;
    oil_capacity: string;
  };
}

const busDefaultData: BusDataTypes = {
  detail: {
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
    mspr: ""
  },
  finacial: {
    vendor_no: "",
    purchase_date: "",
    purchase_price: "",
    odometer: "",
    notes: "",
    warranty_expiration_date: "",
    warranty_max_meter: ""
  },
  lifecycle: {
    in_service_date: "",
    in_service_odometer: "",
    estimated_service_months: "",
    estimated_service_meter: "",
    estimated_resale: "",
    out_service_date: "",
    out_service_odometer: ""
  },
  settings: {
    primary_meter: "",
    fuel_unit: "",
    measurement_units: ""
  },
  specifications: {
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
  }
};

export function getBusDefaultData(inputQueryData?: { [key: string]: any }) {
  const oldResultObj = busDefaultData;
  const resultObj = deepClone(busDefaultData);
  if (!inputQueryData) return resultObj;
  for (const subFormKey in resultObj) {
    for (const fieldKey in resultObj[subFormKey]) {
      if (inputQueryData[fieldKey]) {
        resultObj[subFormKey][fieldKey] = String(inputQueryData[fieldKey]);
      }
    }
  }
  console.log("Is new Data?", oldResultObj === resultObj);
  console.log("resultObj", resultObj);
  return resultObj;
}
