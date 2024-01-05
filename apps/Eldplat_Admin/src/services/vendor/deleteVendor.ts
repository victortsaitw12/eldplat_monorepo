import API_Path from "./apiPath";
// 刪除供應商資料
export const deleteVendor = async (vendor_No: string, status: string) => {
  const response = await fetch(
    API_Path["DeleteVendor"] + "?vendor_no=" + vendor_No + "&status=" + status,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  const data = await response.json();
  return data;
};
