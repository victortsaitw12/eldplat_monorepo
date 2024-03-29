export interface I_Receipt_Type {
  receipt_number: string;
  receipt_url: string;
  price: number;
  service_remark: string;
  files?: string[] | any;
}

export interface I_Maintenance_Type {
  am_driver_bus_group_name: string;
  am_driver_bus_group_no: string;
  bus_assignment_no: string;
  bus_name: string;
  bus_no: string;
  bus_group: string;
  bus_group_name: string;
  driver_assignment_no: string;
  driver_name: string;
  driver_no: string;
  license_plate: string;
  year: number;
  operator_no: string;
  operator_bus_group_name: string;
  operator_name: string;
  maintenance_no: string;
  maintenance_type: string;
  type_name: string;
  service_start_date: string;
  service_end_date: string;
  meter: number;
  package_code: string;
  package_name: string;
  vendor_no: string;
  vendor_name: string;
  maintenanceDts: I_Receipt_Type[];
}
