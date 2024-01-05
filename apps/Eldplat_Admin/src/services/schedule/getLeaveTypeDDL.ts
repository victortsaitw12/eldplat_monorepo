import API_Path from "./apiPath";
// 取得假別
export const getLeaveTypeDDL = async (): Promise<I_LeaveType[]> => {
  const res = await fetch(`${API_Path["getLeaveTypeDDL"]}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
  });
  const result = await res.json();
  return result.dataList[0].leave_options;
};

export interface I_LeaveType {
  option_code: string; //'02
  option_name: string; // '病假'
}
