// 新增供應商
export const createVendor = async (vendorData: any) => {
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
    "https://localhost:7188/Gateway_Vendor/CreateVendor",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzAyMDIwMDAxIiwiTmFtZSI6Iua4rOippuW4s-iZnyIsIkNvbXBhbnlfTm8iOiJCSDQ5MjAyMzAyMDIwMDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi566h55CG5ZOhIiwiZXhwIjoxNjg1MDA0OTEzLCJpc3MiOiJsb2NhbGhvc3Q6NzA3NiIsImF1ZCI6ImxvY2FsaG9zdDo3MDc2In0.WTz2erASC-m1Q2CXyGd6L4seUiei5mlxCbWzekdfx3M"
      },
      body: JSON.stringify(filteredNullData)
    }
  );
  return res.json();
};
