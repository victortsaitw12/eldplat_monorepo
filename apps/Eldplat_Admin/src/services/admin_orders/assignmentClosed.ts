import API_Path from "./apiPath";
// 編輯詢價/報價單

export const assignmentClosed = async (quote_no: string, status: string) => {
  const res = await fetch(
    API_Path["AssignmentClosed"] +
      "/?maintenance_quote_no=" +
      quote_no +
      "&status=" +
      status,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  return res.json();
};
