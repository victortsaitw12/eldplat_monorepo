import API_Path from "./apiPath";
// 取得供應商資料(單筆)
export const getVendorById = async (vendor_No: string) => {
  const response = await fetch(
    API_Path["GetOneVendor"] + "?vendor_no=" + vendor_No,
    {
      method: "POST",
      // body: JSON.stringify({
      //     vendor_no: vendor_No
      // }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  const data = await response.json();
  return data.data;
};
