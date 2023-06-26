export const updateReplaceAssignment = async (assignmentData: any) => {
  const res = await fetch(
    "https://localhost:7088/ANV/CreateReplaceAssignment",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      },
      body: JSON.stringify(assignmentData)
    }
  );
  return res.json();
};

export interface I_ReplaceAssignment {
  assignment_no: string;
  quote_no: string;
  bus_driver_no: string;
  bus_day_number: number;
  bus_group: string;
  task_start_time: string; //2023-06-26T08:12:19.812Z
  task_end_time: string; //2023-06-26T08:12:19.812Z
  remark: string;
}
