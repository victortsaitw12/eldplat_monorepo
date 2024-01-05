export interface I_AssignData {
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
  task_start_time: string | any | number;
}

export interface I_ManualAssignType {
  departure_date: string;
  order_quantity: number;
  quote_no: string;
  quote_type: string;
  return_date: string;
}

export interface AutoAssignType {
  quote_No: string;
  estimated_Start_Date: string;
  estimated_End_Date: string;
  areaConvoyGroupType: string;
}

export interface I_ManualCreateType {
  quote_no: string;
  maintenance_no?: string;
  manual_driver: I_ManualDriver[];
  manual_bus: I_ManualBus[];
}

export interface I_ManualBus {
  bus_no: string;
  bus_day_number: number;
  bus_group: string;
  task_start_time: string;
  task_end_time: string;
  remark: string;
  filled?: boolean;
}

export interface I_ManualDriver {
  driver_no: string;
  bus_day_number: number;
  bus_group: string;
  task_start_time: string;
  task_end_time: string;
  remark: string;
}
