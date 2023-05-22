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
  const res = await fetch("https://localhost:7088/VNR/GetVendor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzAzMTUwMDAxIiwiTmFtZSI6Iua4rOippi3lkI01IiwiQ29tcGFueV9ObyI6IkJINDkyMDIzMDIwMjAwMDEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsi6aCQ6Kit6KeA55yL6ICFIiwi566h55CG5ZOhIl0sImV4cCI6MTY4NDQ2NDU0NSwiaXNzIjoibG9jYWxob3N0OjcwNzYiLCJhdWQiOiJsb2NhbGhvc3Q6NzA3NiJ9.28Q4uoLpQnATct96gRJbbbFdRFhHfyQePROsTi5T5BY"
    },
    body: JSON.stringify({
      vendor_Filter: vendorFilter,
      filter_Needed: true,
      pageInfo: {
        page_Index: 1,
        page_Size: 30,
        orderby: "vendor_no",
        arrangement: "asc",
        total: 0,
        last_Page: 0
      }
    })
  });
  return await res.json();
};

// 取得Vendor List頁多國語系
export const getVendorsLang = async (lang: string, page: string) => {
  const res = await fetch(
    `https://localhost:7088/COM/ProduceMultilingual/${lang}, ${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
        // Authorization:
        //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzA0MTIwMDAxIiwiTmFtZSI6IlNob2hlaSIsIkNvbXBhbnlfTm8iOiJCSDQ5MjAyMzAyMDIwMDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi6Kq_5bqm576k57WEIiwiZXhwIjoxNjg0NDg5MjczLCJpc3MiOiJsb2NhbGhvc3Q6NzA3NiIsImF1ZCI6ImxvY2FsaG9zdDo3MDc2In0.BbFT4yOL9o_sieeujOJnrw-e-kns8GPFWC0R32eh3Ok",
      }
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
