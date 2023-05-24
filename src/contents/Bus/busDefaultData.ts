import { deepClone } from "@utils/deepClone";
export interface BusDataTypes {
  bus: {
    bus_no: string;
    bus_name: string;
    vin: string;
    license_plate: string;
    bus_type: string;
    year: number;
    make: string;
    model: string;
    trim: string;
    photo_url: string;
    registration_province: string;
    status: string;
    bus_group: string;
    operator: string;
    ownership: string;
    color: string;
    bus_seat: number;
    body_type: string;
    body_subtype: string;
    mspr: number;
    age: number;
    label: Array<{
      label_name: string;
    }>;
  };
  bus_lifecycle: {
    in_service_date: string;
    in_service_odometer: number;
    out_service_date: string;
    out_service_odometer: number;
    estimated_service_months: number;
    estimated_service_meter: number;
    estimated_resale: number;
  };
  bus_specifications: {
    width: number;
    height: number;
    length: number;
    interior_volume: number;
    passenger_volume: number;
    cargo_volume: number;
    ground_clearance: number;
    bed_length: number;
    curb_weight: number;
    weight_rating: number;
    towing_capacity: number;
    max_payload: number;
    epa_city: number;
    epa_highway: number;
    epa_combined: number;
    engine_summary: string;
    engine_brand: string;
    aspiration: string;
    block_type: string;
    bore: number;
    cam_type: string;
    compression: number;
    cylinders: number;
    displacement: number;
    fuel_induction: string;
    max_hp: number;
    max_torque: number;
    redline_rpm: string;
    stroke: number;
    valves: number;
    transmission_summary: string;
    transmission_brand: string;
    transmission_type: string;
    transmission_gears: number;
    drive_type: string;
    brake_system: string;
    front_track_width: number;
    rear_track_width: number;
    wheelbase: number;
    front_wheel_diameter: string;
    rear_wheel_diameter: string;
    rear_axle: string;
    front_tire_type: string;
    front_tire_psi: number;
    rear_tire_type: string;
    rear_tire_psi: number;
    fuel_type: string;
    fuel_quality: string;
    fuel_tank_capacity1: number;
    fuel_tank_capacity2: number;
    oil_capacity: number;
  };
  bus_loan_lease: {
    vendor_no: string;
    vendor_name: string;
    vendor_no_loan_lease: string;
    vendor_name_loan_lease: string;
    purchase_date: string;
    purchase_price: number;
    odometer: number;
    notes: string;
    warranty_expiration_date: string;
    warranty_max_meter: number;
    loan_lease: string;
    date_of_lease: string;
    capitalized_cost: number;
    lease_end_date: string;
    residual_value: number;
    contract_mileage_cap: number;
    excess_mileage_charge: number;
    lease_number: string;
    date_of_loan: string;
    amount_of_loan: number;
    annual_percentage_rate: number;
    loan_end_date: string;
    account_number: string;
    down_payment: number;
    first_payment_date: string;
    monthly_payment: number;
    number_of_payments: number;
    loan_lease_notes: string;
    total_payment_amount: number;
  };
}

const busDefaultData: BusDataTypes = {
  bus: {
    bus_no: "",
    bus_name: "",
    vin: "",
    license_plate: "",
    bus_type: "",
    year: 0,
    make: "",
    model: "",
    trim: "",
    photo_url: "",
    registration_province: "",
    status: "",
    bus_group: "",
    operator: "",
    ownership: "",
    color: "",
    bus_seat: 0,
    body_type: "",
    body_subtype: "",
    mspr: 0,
    age: 0,
    label: []
  },
  bus_lifecycle: {
    in_service_date: "",
    in_service_odometer: 0,
    out_service_date: "",
    out_service_odometer: 0,
    estimated_service_months: 0,
    estimated_service_meter: 0,
    estimated_resale: 0
  },
  bus_specifications: {
    width: 0,
    height: 0,
    length: 0,
    interior_volume: 0,
    passenger_volume: 0,
    cargo_volume: 0,
    ground_clearance: 0,
    bed_length: 0,
    curb_weight: 0,
    weight_rating: 0,
    towing_capacity: 0,
    max_payload: 0,
    epa_city: 0,
    epa_highway: 0,
    epa_combined: 0,
    engine_summary: "",
    engine_brand: "",
    aspiration: "",
    block_type: "",
    bore: 0,
    cam_type: "",
    compression: 0,
    cylinders: 0,
    displacement: 0,
    fuel_induction: "",
    max_hp: 0,
    max_torque: 0,
    redline_rpm: "",
    stroke: 0,
    valves: 0,
    transmission_summary: "",
    transmission_brand: "",
    transmission_type: "",
    transmission_gears: 0,
    drive_type: "",
    brake_system: "",
    front_track_width: 0,
    rear_track_width: 0,
    wheelbase: 0,
    front_wheel_diameter: "",
    rear_wheel_diameter: "",
    rear_axle: "",
    front_tire_type: "",
    front_tire_psi: 0,
    rear_tire_type: "",
    rear_tire_psi: 0,
    fuel_type: "",
    fuel_quality: "",
    fuel_tank_capacity1: 0,
    fuel_tank_capacity2: 0,
    oil_capacity: 0
  },
  bus_loan_lease: {
    vendor_no: "",
    vendor_name: "",
    vendor_no_loan_lease: "",
    vendor_name_loan_lease: "",
    purchase_date: "",
    purchase_price: 0,
    odometer: 0,
    notes: "",
    warranty_expiration_date: "",
    warranty_max_meter: 0,
    loan_lease: "",
    date_of_lease: "",
    capitalized_cost: 0,
    lease_end_date: "",
    residual_value: 0,
    contract_mileage_cap: 0,
    excess_mileage_charge: 0,
    lease_number: "",
    date_of_loan: "",
    amount_of_loan: 0,
    annual_percentage_rate: 0,
    loan_end_date: "",
    account_number: "",
    down_payment: 0,
    first_payment_date: "",
    monthly_payment: 0,
    number_of_payments: 0,
    loan_lease_notes: "",
    total_payment_amount: 0
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
