import API_Path from "./apiPath";

export const createReplaceAssignment = async (assignmentData: any) => {
  const res = await fetch(`${API_Path["createReplaceAssignment"]}`, {
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
export interface I_ReplaceAssignment {
  quote_no: string;
  bus_driver_no: string | null;
  bus_day_number: number;
  bus_group: string;
  task_start_time: string; //2023-06-26T 8:12:19.812Z
  task_end_time: string; //2023-06-26T08:12:19.812Z
  remark: string;
}

// response dataList: I_creatOtherAssignment[]
// dataList[0] 這隻API永遠list裡只有一個物件, 用來打 CreateOtherAssignment
export interface I_creatOtherAssignment {
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

// NOTE:response (ERROR)
// {
//   "statusCode": "500",
//   "message": "500",
//   "dataList": [],
//   "result": false,
//   "resultString": "選取時間重疊",
//   "resultInt": 0
// }
