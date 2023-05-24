import { PatternType } from "@utils/mappingQueryData";
import React, { createElement } from "react";
export const getAllCustomers = async (
  filter: { [key: string]: any } = {},
  customer_status = "1"
) => {
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
  const res = await fetch("https://localhost:7088/CTR/GetCustomer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      customer_status,
      customer_Filter: customerFilter,
      filter_Needed: true,
      pageInfo: {
        page_index: 1,
        page_size: 10,
        orderby: "customer_no",
        arrangement: "asc"
      }
    })
  });
  console.log("res", res);
  return res.json();
};

export const getCustomerTitle = () => {
  const DUMMY_TITLES = [
    "客戶系統編號",
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
  customer_area: true,
  customer_tel: true,
  customer_email: true,
  contact_name: true,
  contact_phone_and_tel: true,
  label_name: true
};

export const customerParser = (data: any, key: string) => {
  if (key === "id") {
    return {
      label: data["customer_no"] || null,
      value: data["customer_no"] || null
    };
  }
  if (key === "customer_typ") {
    let translatedLabel = "";
    switch (data[key]) {
      case "01":
        translatedLabel = "公司";
        break;
      case "02":
        translatedLabel = "個人";
        break;
      case "03":
        translatedLabel = "旅行社";
        break;
      default:
        translatedLabel = "---";
    }
    return {
      label: translatedLabel,
      value: data[key] || null
    };
  }
  if (key === "customer_tel") {
    return {
      label: data[key] || "---",
      value: data[key] || null
    };
  }
  if (key === "contact_phone_and_tel") {
    const lebelElement = createElement(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      [
        createElement(
          "div",
          { key: "contact_tel" },
          data["contact_tel"]
            ? data["contact_tel_code"] + " " + data["contact_tel"]
            : "---"
        ),
        createElement(
          "div",
          { key: "contact_phone" },
          data["contact_phone"]
            ? data["contact_phone_code"] + " " + data["contact_phone"]
            : "---"
        )
      ]
    );
    return {
      // label: lebelElement,
      label: lebelElement,
      value:
        `${data["contact_tel_code"] + data["contact_tel"]}, ${
          data["contact_phone_code"] + data["contact_phone"]
        }` || null
    };
  }
  return {
    label: data[key] || "---",
    value: data[key] || null
  };
};
