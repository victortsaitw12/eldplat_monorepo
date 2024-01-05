import API_Path from "./apiPath";
import { I_PageInfo } from "@components/PaginationField";

export const defaultPageInfo: I_PageInfo = {
  Page_Index: 1,
  Page_Size: 10,
  Arrangement: "desc",
  Total: 0,
  Last_Page: 0
};

export interface I_GetOrdersListRes {
  StatusCode: string;
  Message: string;
  ContentList: [
    {
      account_name: string;
      role_name_o: string;
      org_name: string;
      content_phone_tel1: string;
      content_phone_tel2: string;
      role_name_m: string;
      invt_sts: string;
    },
    {
      account_name: string;
      role_name_o: string;
      org_name: string;
      content_phone_tel1: string;
      content_phone_tel2: string;
      role_name_m: string;
      invt_sts: string;
    }
  ];
  ConditionList: [];
  PageInfo: {
    Page_Index: number;
    Page_Size: number;
    Arrangement: string;
    Total: number;
    Last_Page: number;
  };
}

export interface I_OrdersItem {
  order_no: string;
  order_type: string;
  order_date: string;
  order_status: string;
  order_sales: string;
}

// ------- MOCK DATA ------- //
const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ContentList: [
    {
      order_no: "ORD202310310003",
      order_type: "客製包車",
      order_date: "2023-11-11 ～ 2023-11-13",
      order_status: "詢價中",
      order_sales: "李家鴻"
    },
    {
      order_no: "ORD202310310002",
      order_type: "機場接送",
      order_date: "2023-11-12",
      order_status: "接受報價",
      order_sales: "梁哲青"
    },
    {
      order_no: "ORD202310310001",
      order_type: "機場接送",
      order_date: "2023-11-10",
      order_status: "訂單成立",
      order_sales: "謝榮瑤"
    }
  ],
  ConditionList: [
    {
      field_Name: "User_Name",
      arrayConditions: ["like", "equal"],
      displayType: "search",
      dataType: "string",
      label: "駕駛-名"
    },
    {
      field_Name: "User_First_Name",
      arrayConditions: ["like", "equal"],
      displayType: "search",
      dataType: "string",
      label: "駕駛-姓"
    },
    {
      field_Name: "Short_Schd_Date",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "月份"
    },
    {
      field_Name: "Dsph_Area",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "區域"
    },
    {
      field_Name: "Dsph_City",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "都市"
    }
  ],
  PageInfo: {
    Page_Index: 1,
    Page_Size: 1000,
    Arrangement: "desc",
    Total: 3,
    Last_Page: 1
  }
};

// 取得所有訂單資料 QueryOrderList
export const getAllOrders = async (
  filter: { [key: string]: any } = {},
  pageQuery = defaultPageInfo
) => {
  return DUMMY_DATA;

  const ordersFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      ordersFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  // const res = await fetch(`${API_Path["getAllOrders"]}`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //   },
  //   // body: JSON.stringify(data),
  //   body: JSON.stringify({
  //     filters: orderFilter,
  //     filter_Needed: true,
  //     pageInfo: pageQuery
  //   })
  // });
  // return res.json();
};

export const getOrdersTitle = () => {
  const DUMMY_TITLES = [
    "訂單編號",
    "分類",
    "用車日期",
    "訂單狀態",
    "負責業務",
    ""
  ];
  return DUMMY_TITLES;
};
