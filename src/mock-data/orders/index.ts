export const order_sepcial = [
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

export const order_shuttleList = [
  {
    date: "2023-06-01"
  },
  {
    date: "2023-06-02"
  },
  {
    date: "2023-06-03"
  },
  {
    date: "2023-06-04"
  }
];

export const MOCK_ORDERS_LIST = {
  all: [],
  query: [
    {
      quote_no: "ORD202302020001",
      costs_no: "CST202302020001",
      order_no: "ORD202302020001-20230530",
      purpose: "機場接送",
      departure_date: "2023/06/15",
      status_code: "1",
      payment_status: "1"
    },
    {
      quote_no: "ORD202302020002",
      costs_no: "CST202302020002",
      order_no: "ORD202302020002-20230530",
      purpose: "客製包車",
      departure_date: "2023/06/15",
      status_code: "1",
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
      status_code: "1",
      payment_status: "0"
    }
  ],
  order: [],
  finish: [],
  cancel: []
};
export const MOCK_ORDER_DETAIL = {
  quote_no: "ORD202302020001", //
  costs_no: "CST202302020001",
  order_no: "ORD202302020001-20230530",
  purpose: "01",
  departure_date: "2023-07-01T04:02:10.624Z", //
  return_date: "2023-07-03T04:02:10.624Z", //
  status_code: "4",
  payment_status: "1",
  full_payment_amount: "NT$2,200",
  // contact
  contact: [
    {
      family_name: "李",
      name: "婷華聯絡人",
      contact_phone_code: "",
      contact_phone: "+886 968-746-163",
      contact_tel_code: "",
      contact_tel: "+886 (06)123-4567",
      contact_email: "123456@liontravel.com",
      contact_type: "2",
      social_media_type: "01",
      social_media: "test12345"
    },
    {
      family_name: "李",
      name: "婷華代表人",
      contact_phone_code: "",
      contact_phone: "+886 968-746-163",
      contact_tel_code: "",
      contact_tel: "+886 (06)123-4567",
      contact_email: "123456@liontravel.com",
      contact_type: "1",
      social_media_type: "01",
      social_media: "test12345"
    }
  ],
  // itinerary
  itinerary: [
    {
      day_number: 0,
      day_date: "2023-05-17",
      departure_time: "09:00",
      pickup_location: "內湖區石潭路151號1樓",
      dropoff_location: "桃園高鐵站大門口",
      stopover: [
        { stopover_address: "桃園車站", stopover_sort: 0 },
        { stopover_address: "板橋車站", stopover_sort: 1 }
      ]
    },
    {
      day_number: 1,
      day_date: "2023-05-18",
      departure_time: "09:00",
      pickup_location: "內湖區石潭路151號1樓",
      dropoff_location: "桃園高鐵站大門口",
      stopover: [
        { stopover_address: "桃園車站", stopover_sort: 0 },
        { stopover_address: "板橋車站", stopover_sort: 1 }
      ]
    },
    {
      day_number: 2,
      day_date: "2023-05-19",
      departure_time: "09:00",
      pickup_location: "內湖區石潭路151號1樓",
      dropoff_location: "桃園高鐵站大門口",
      stopover: [
        { stopover_address: "桃園車站", stopover_sort: 0 },
        { stopover_address: "板橋車站", stopover_sort: 1 }
      ]
    },
    {
      day_number: 3,
      day_date: "2023-05-20",
      departure_time: "09:00",
      pickup_location: "內湖區石潭路151號1樓",
      dropoff_location: "桃園高鐵站大門口",
      stopover: [
        { stopover_address: "桃園車站", stopover_sort: 0 },
        { stopover_address: "板橋車站", stopover_sort: 1 }
      ]
    }
  ],
  // quotation
  adult: 1,
  child: 0,
  infant: 0,
  check_in_luggage: 0,
  carry_on_luggage: 1,
  // bus type
  bus: [
    { bus_type: "小車款", bus_seat: 21, order_quantity: 1 },
    { bus_type: "大車款", bus_seat: 36, order_quantity: 1 }
  ],

  // quotation DT
  pickup_sign_remark: "Andy Welcome",
  driver_guide_check: false,
  bus_age: "01",
  special_luggage_check: "0",
  bring_pets_check: "1",
  bring_pets_radio: "1",
  mineral_water: "0",
  bottled_water_check: "1",
  bottled_water_box: 1,
  child_seat_check: "0",
  child_seat_seller: 1,
  child_seat_yourself: 1,
  infant_seat_check: 0,
  infant_seat_seller: 0,
  infant_seat_yourself: 1,
  remark: ""
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

export const MOCK_expenseList = [
  { label: "基本車資", value: 1200, hint: "基本車資" },
  { label: "小費", value: 200, hint: "小費" },
  { label: "旺季加價", value: 300, hint: "旺季加價" },
  { label: "司機費用", value: 300, hint: "司機費用" },
  { label: "夜間加價", value: 200, hint: "夜間加價" },
  { label: "偏遠地區加價", value: 300, hint: "偏遠地區加價" },
  { label: "特殊需求小計", value: 300, hint: "特殊需求小計" }
];
