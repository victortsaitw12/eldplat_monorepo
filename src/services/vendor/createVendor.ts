import API_Path from "./apiPath";
// 新增供應商
export const createVendor = async (vendorData: any) => {
  // handle vendor_Contact_List
  for (let i = 0; i < vendorData?.vendor_Contact_List.length; i++) {
    if (i !== 0) {
      vendorData.vendor_Contact_List[i]["contact_sort"] = "2";
    } else {
      vendorData.vendor_Contact_List[i]["contact_sort"] = "1";
    }
  }
  //
  const filteredNullData: { [key: string]: string | null } = {};
  console.log("vendorData", vendorData);
  for (const key in vendorData) {
    console.log("key", key);
    if (key === "driver_typ") {
      filteredNullData[key] = vendorData[key];
    } else if (vendorData[key].length !== 0) {
      filteredNullData[key] = vendorData[key];
    } else if (vendorData[key] !== null && vendorData[key].trim() !== "") {
      filteredNullData[key] = vendorData[key];
    }
  }
  //
  const res = await fetch(
    API_Path["CreateVendor"],
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      },
      body: JSON.stringify(filteredNullData)
    }
  );
  return res.json();
};
