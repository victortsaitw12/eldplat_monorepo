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
