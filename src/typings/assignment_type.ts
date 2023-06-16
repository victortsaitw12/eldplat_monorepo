export interface I_SubAssignData {
  [x: string]: any;
  assignment_no: string;
  bus_day_number: number;
  bus_group: string;
  bus_group_name: string;
  bus_name: string;
  bus_no: string;
  driver_name: string;
  driver_no: string;
  license_plate: string;
  maintenance_quote_no: string;
  task_end_time: string;
  task_start_time: string;
}

export interface I_ManualAssignType {
  departure_date: string;
  order_quantity: number;
  quote_no: string;
  quote_type: string;
  return_date: string;
}

export interface I_ManualCreateType {
  quote_no: string;
  maintenance_no?: string;
  manual_driver: {
    driver_no: string;
    bus_day_number: number;
    bus_group: string;
    task_start_time: string;
    task_end_time: string;
    remark: string;
  }[];

  manual_bus: {
    bus_no: string;
    bus_day_number: number;
    bus_group: string;
    task_start_time: string;
    task_end_time: string;
    remark: string;
  }[];
}
