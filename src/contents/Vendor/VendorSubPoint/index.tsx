import React from "react";
import { BodySTY } from "./style";
import Table from "@components/Table/Table";
import { Pane, Heading, CogIcon } from "evergreen-ui";
import LabelTag from "@components/LabelTag";
import PaginationField from "@components/PaginationField";

interface I_Props {
  test?: boolean;
}
const mock_title = [
  "供應商號碼",
  "資料串接",
  "名稱",
  "區域",
  "公司電話",
  "公司信箱",
  "主要聯絡人",
  "主要聯絡人電話",
  "網址",
  "標籤"
]
const mock_data = [
  {
    no: "vendor00002001",
    data: "無",
    name: "富豪台中廠",
    area: "台中市",
    phone: "+886 22225555",
    mail: "fuhow@example.com",
    contact: "陳富豪",
    contact_phone: <p>+886 22225555#8989<br />+886 900111222</p>,
    website: "網址",
    label: <LabelTag text="標籤" />
  },
  {
    no: "vendor00002002",
    data: "有",
    name: "富豪台南廠",
    area: "台南市",
    phone: "+886 23336666",
    mail: "fuhow@example.com",
    contact: "陳富豪",
    contact_phone: <p>+886 22225555#8989<br />+886 900111222</p>,
    website: "網址",
    label: <LabelTag text="標籤" />
  }
]
const VendorSubPoint = (props: I_Props) => {
  return (
    <BodySTY>
      <Pane className="title">
        <Heading is="h4">富豪車隊</Heading>
      </Pane>
      <Pane className="title-right">
        <PaginationField />
        <CogIcon color="#718BAA" size={11} />
      </Pane>
      <Table
        titles={mock_title}
        data={mock_data}
      />
    </BodySTY>
  );
}

export default VendorSubPoint;