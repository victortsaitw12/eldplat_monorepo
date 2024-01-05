import API_Path from "./apiPath";

export const createOtherAssignment = async (
  assignmentData: I_OtherAssignment
) => {
  const res = await fetch(`${API_Path["createOtherAssignment"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(assignmentData)
  });
  return res.json();
};

// request
export interface I_OtherAssignment {
  quote_no: string;
  bus_day_number: number;
  bus_group: string;
  bus_driver_no: string;
  time_list: I_timeList[] | [];
}

export interface I_timeList {
  task_start_time: string; //"2023-07-03T06:15:12.538Z",
  task_end_time: string; //"2023-07-03T06:15:12.538Z";
  assignment_no: string; //"string";
}
