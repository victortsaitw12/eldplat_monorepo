// 新增供應商
export const createVendor = async (vendorData: any) => {
  //
  const filteredNullData: { [key: string]: string | null } = {};
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
    "https://localhost:7188/Gateway_VendorStream/MutationResolver/CreateVendor/api/CreateVendor/1",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(filteredNullData)
    }
  );
  return res.json();
};
