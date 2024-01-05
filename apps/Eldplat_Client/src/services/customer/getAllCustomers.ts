import { PatternType } from "@utils/mappingQueryData";
import { createElement } from "react";
import API_Path from "./apiPath";
import { I_PageInfo } from "@components/PaginationField";

export const getAllCustomers = async (
  pageInfo: I_PageInfo,
  filter: { [key: string]: any } = {},
  customer_status = "1"
) => {
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
  const url = new URL(API_Path["getAllCustomers"]);
  const res = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      customer_status,
      customer_Filter: customerFilter,
      filter_Needed: true,
      pageInfo
    })
  });
  return res.json();
};

export const getCustomerTitle = () => {
  const DUMMY_TITLES = [
    "客戶號碼",
    "名稱",
    "分類",
    "區域",
    "公司電話",
    "公司信箱",
    "主要聯絡人",
    "主要聯絡人電話",
    "標籤"
  ];
  return DUMMY_TITLES;
};

export const customerPattern: PatternType = {
  id: true,
  customer_no: true,
  customer_name: true,
  customer_typ: true,
  customer_city: true,
  customer_tel: true,
  customer_email: true,
  contact_name: true,
  contact_phone_and_tel: true,
  label_name: true
};

export function customerParser(data: any, key: string) {
  if (key === "id") {
    return {
      label: data["customer_no"] || null,
      value: data["customer_no"] || null
    };
  } else if (key === "customer_name") {
    const lebelElement = createElement(
      "a",
      {
        style: {
          textDecoration: "none",
          cursor: "pointer",
          color: "inherit"
        },
        href: `/customer/detail/${data["customer_no"]}?editPage=view`
      },
      data["customer_name"]
    );
    return {
      label: lebelElement || null,
      value: data["customer_name"] || null
    };
  } else if (key === "customer_typ") {
    return {
      label: data["type_name"] || null,
      value: data["customer_typ"] || null
    };
  } else if (key === "customer_city") {
    return {
      label: data["customer_city_name"] || "--",
      value: data[key] || null
    };
  } else if (key === "customer_tel") {
    return {
      label: data[key] || "--",
      value: data[key] || null
    };
  } else if (key === "contact_phone_and_tel") {
    const lebelElement = createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }
      },
      [
        createElement(
          "div",
          { key: "contact_tel" },
          data["contact_tel"]
            ? data["contact_tel_code"] + " " + data["contact_tel"]
            : "--"
        ),
        createElement(
          "div",
          { key: "contact_phone" },
          data["contact_phone"]
            ? data["contact_phone_code"] + " " + data["contact_phone"]
            : "--"
        )
      ]
    );
    return {
      label: lebelElement,
      value:
        `${data["contact_tel_code"] + data["contact_tel"]}, ${
          data["contact_phone_code"] + data["contact_phone"]
        }` || null
    };
  }
  return {
    label: data[key] || "--",
    value: data[key] || null
  };
}
