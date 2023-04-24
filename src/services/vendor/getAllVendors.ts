// 取得供應商資料
export const getAllVendors = async (filter: { [key: string]: any } = {}) => {
  const vendorFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      vendorFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  const res = await fetch(
    "https://localhost:7188/Gateway_VendorStream/QueryResolver/GetVendor/api/GetVendor/1",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        vendor_Filter: vendorFilter,
        filter_Needed: true
      })
    }
  );
  return res.json();
};

export const getVendorTitle = () => {
  const DUMMY_TITLES = [
    "名稱",
    "區域",
    "電話",
    "網站",
    "聯絡人",
    "聯絡信箱",
    "標籤"
  ];
  return DUMMY_TITLES;
};
