export const getAllCustomers = async (filter: { [key: string]: any } = {}) => {
  console.log("getAllCustomers", filter);
  const customerFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      customerFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  console.log("customer_Filter", customerFilter);
  const res = await fetch(
    "https://localhost:7188/Gateway_Customer/GetCustomer",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        customer_Filter: customerFilter,
        filter_Needed: true,
        pageInfo: {
          page_index: 1,
          page_size: 10,
          orderby: "customer_no",
          arrangement: "asc"
        }
      })
    }
  );
  console.log("res", res);
  return res.json();
};

export const getCustomerTitle = () => {
  const DUMMY_TITLES = ["客戶系統編號", "名稱", "分類", "聯絡電話", "聯絡信箱"];
  return DUMMY_TITLES;
};
