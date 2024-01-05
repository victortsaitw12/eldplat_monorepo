const data = {};

const mock_subFilter = [
  {
    field_Name: "customer_name",
    arrayConditions: ["like", "equal"],
    displayType: "search",
    dataType: "string",
    label: "名稱"
  },
  {
    field_Name: "customer_no",
    arrayConditions: ["like", "equal"],
    displayType: "fix",
    dataType: "string",
    label: "客戶號碼",
    value: ""
  }
];

const mock_progressdata: Array<{
  label: string;
  status: "ok" | "pending" | "error";
  date?: string;
}> = [
  {
    label: "收到詢價",
    status: "ok",
    date: "2022/03/22"
  },
  {
    label: "送出報價",
    status: "pending"
  },
  {
    label: "接受報價",
    status: "pending"
  },
  {
    label: "已付訂金",
    status: "pending"
  },
  {
    label: "已付尾款",
    status: "pending"
  },
  {
    label: "完成報價",
    status: "pending"
  }
];

const mock_orderData = {
  test: "測試的資料"
};

const order_contact = [
  {
    title: "姓",
    value: "李"
  },
  {
    title: "名",
    value: "婷華"
  },
  {
    title: "手機",
    value: "+886 968-746-163"
  },
  {
    title: "電話",
    value: "+886 (06)123-4567"
  },
  {
    title: "信箱",
    value: "123456@liontravel.com"
  },
  {
    title: "通訊軟體",
    value: "Line：test12345"
  }
];

const order_represent = [
  {
    title: "姓",
    value: "李"
  },
  {
    title: "名",
    value: "婷華"
  },
  {
    title: "手機",
    value: "+886 968-746-163"
  },
  {
    title: "電話",
    value: "+886 (06)123-4567"
  },
  {
    title: "信箱",
    value: "123456@liontravel.com"
  },
  {
    title: "通訊軟體",
    value: "Line：test12345"
  }
];

const order_sepcial = [
  {
    title: "舉牌：Andy Welcome",
    value: "NT$200"
  },
  {
    title: "司導",
    value: "NT$200"
  },
  {
    title: "指定車齡 3年",
    value: "NT$1,000"
  },
  {
    title: "兒童座椅 由店家提供 1",
    value: "免費"
  },
  {
    title: "兒童座椅 自備 1",
    value: "免費"
  },
  {
    title: "嬰兒座椅 自備 1",
    value: "免費"
  }
];

const order_shuttleList = [
  {
    date: "2023-06-01"
  }
];

const order_flight = [
  {
    title: "航班日期",
    value: "2023-05-05"
  },
  {
    title: "航班編號",
    value: "C123"
  },
  {
    title: "機場",
    value: "桃園國際機場"
  },
  {
    title: "航廈",
    value: "第二航廈"
  },
  {
    title: "航班抵達時間",
    value: "10:30"
  },
  {
    title: "航空公司",
    value: "樂桃"
  }
];

const mock_GetQuotationByFilterList = [
  {
    quote_no: "ORD202305310010",
    costs_no: "CST202305310010",
    status_code: null,
    quote_type: "1",
    family_name: "測試",
    name: "新增",
    contact_phone_code: "+1",
    contact_phone: "99999999",
    contact_tel_code: "+1",
    contact_tel: "22222222",
    contact_email: "testcreate@gmail.com"
  },
  {
    quote_no: "ORD202305310014",
    costs_no: "CST202305310014",
    status_code: null,
    quote_type: "1",
    family_name: null,
    name: null,
    contact_phone_code: "+000",
    contact_phone: "1111111111",
    contact_tel_code: "+000",
    contact_tel: "1111111",
    contact_email: null
  },
  {
    quote_no: "ORD202305310015",
    costs_no: "CST202305310015",
    status_code: "7",
    quote_type: "1",
    family_name: "測試歐歐歐歐",
    name: "新增歐歐歐歐",
    contact_phone_code: "+1",
    contact_phone: "99999999",
    contact_tel_code: "+1",
    contact_tel: "22222222",
    contact_email: "testcreate@gmail.com"
  },
  {
    quote_no: "ORD202305310016",
    costs_no: "CST202305310016",
    status_code: null,
    quote_type: "1",
    family_name: "測試歐歐歐歐",
    name: "新增歐歐歐歐",
    contact_phone_code: "+1",
    contact_phone: "99999999",
    contact_tel_code: "+1",
    contact_tel: "22222222",
    contact_email: "testcreate@gmail.com"
  },
  {
    quote_no: "ORD202306010001",
    costs_no: "CST202306010031",
    status_code: null,
    quote_type: "1",
    family_name: "TEST",
    name: "UPDATE",
    contact_phone_code: "+33",
    contact_phone: "99999999",
    contact_tel_code: "+33",
    contact_tel: "22222222",
    contact_email: "testupdate@gmail.com"
  },
  {
    quote_no: "ORD202306010002",
    costs_no: "CST202306010032",
    status_code: null,
    quote_type: "1",
    family_name: "TEST",
    name: "UPDATE",
    contact_phone_code: "+33",
    contact_phone: "99999999",
    contact_tel_code: "+33",
    contact_tel: "22222222",
    contact_email: "testupdate@gmail.com"
  },
  {
    quote_no: "ORD202306010003",
    costs_no: "CST202306010033",
    status_code: null,
    quote_type: "1",
    family_name: "TEST",
    name: "UPDATE",
    contact_phone_code: "+33",
    contact_phone: "99999999",
    contact_tel_code: "+33",
    contact_tel: "22222222",
    contact_email: "testupdate@gmail.com"
  },
  {
    quote_no: "ORD202306010004",
    costs_no: "CST202306010034",
    status_code: null,
    quote_type: "1",
    family_name: "測試",
    name: "代表人",
    contact_phone_code: "+881",
    contact_phone: "0000000000",
    contact_tel_code: "+881",
    contact_tel: "00000000",
    contact_email: "test"
  },
  {
    quote_no: "ORD202306010005",
    costs_no: "CST202306010035",
    status_code: null,
    quote_type: "1",
    family_name: "TEST",
    name: "UPDATE",
    contact_phone_code: "+33",
    contact_phone: "99999999",
    contact_tel_code: "+33",
    contact_tel: "22222222",
    contact_email: "testupdate@gmail.com"
  },
  {
    quote_no: "ORD202306010006",
    costs_no: "CST202306010036",
    status_code: null,
    quote_type: "1",
    family_name: "TEST",
    name: "UPDATE",
    contact_phone_code: "+33",
    contact_phone: "99999999",
    contact_tel_code: "+33",
    contact_tel: "22222222",
    contact_email: "testupdate@gmail.com"
  }
];
export {
  data,
  mock_subFilter,
  mock_GetQuotationByFilterList,
  mock_orderData,
  mock_progressdata,
  order_contact,
  order_represent,
  order_shuttleList,
  order_sepcial,
  order_flight
};
