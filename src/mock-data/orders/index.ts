export const MOCK_ORDERS_LIST = {
  all: [],
  query: [
    {
      quote_no: "ORD202302020001",
      costs_no: "CST202302020001",
      order_no: "ORD202302020001-20230530",
      purpose: "機場接送",
      departure_date: "2023/06/15",
      order_status: "01",
      payment_status: "1"
    },
    {
      quote_no: "ORD202302020002",
      costs_no: "CST202302020002",
      order_no: "ORD202302020002-20230530",
      purpose: "客製包車",
      departure_date: "2023/06/15",
      order_status: "01",
      payment_status: "1"
    }
  ],
  quote: [
    {
      quote_no: "ORD202302020002",
      costs_no: "CST202302020002",
      order_no: "ORD202302020002-20230530",
      purpose: "客製包車",
      departure_date: "2023/06/15",
      order_status: "02",
      payment_status: "0"
    }
  ],
  order: [],
  finish: [],
  cancel: []
};
export const MOCK_ORDER_DETAIL = {
  quote_no: "ORD202302020001",
  costs_no: "CST202302020001",
  order_no: "ORD202302020001-20230530",
  purpose: "機場接送",
  departure_date: "2023/06/15",
  order_status: "01",
  payment_status: "1",
  // contact
  family_name: "李",
  name: "婷華",
  contact_phone_code: "",
  contact_phone: "+886 968-746-163",
  contact_tel_code: "",
  contact_tel: "+886 (06)123-4567",
  contact_email: "123456@liontravel.com",
  contact_type: "",
  social_media_type: "",
  social_media: "Line：test12345"
};
export const MOCK_progressList = [
  {
    label: "送出詢價",
    status: "ok", // "ok" | "pending" | "error"
    date: "05/04 10:00"
  },
  {
    label: "收到報價",
    status: "pending", // "ok" | "pending" | "error"
    date: ""
  },
  {
    label: "接受報價",
    status: "pending", // "ok" | "pending" | "error"
    date: ""
  },
  {
    label: "訂單成立",
    status: "pending", // "ok" | "pending" | "error"
    date: ""
  },
  {
    label: "結案",
    status: "pending", // "ok" | "pending" | "error"
    date: ""
  }
];
