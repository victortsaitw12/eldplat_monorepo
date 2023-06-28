import API_Path from "./apiPath";
//更改詢價/報價/訂單狀態
export const updateFEStatusLog = async (
  quote_no: string,
  status_code: string
) => {
  const res = await fetch(
    API_Path["UpdateStatusLog"] +
      "?quote_no=" +
      quote_no +
      "&status_type=FE" +
      "&status_code=" +
      status_code,
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
