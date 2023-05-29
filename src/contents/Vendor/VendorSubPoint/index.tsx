import React, { useState } from "react";
import { BodySTY } from "./style";
import { Pane, Heading, CogIcon } from "evergreen-ui";
//@components
import Table from "@components/Table/Table";
import LabelTag from "@components/LabelTag";
import PaginationField from "@components/PaginationField";
import LightBox from "@components/Lightbox";
//@content
import EditSubPoint from "@contents/Vendor/SubForm/EditSubPoint";

interface I_Props {
  isEdit: boolean;
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
const VendorSubPoint = ({ isEdit }: I_Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(isEdit ? "子據點編輯模式" : "檢視模式")
  return (
    <BodySTY>
      <Pane className="title">
        <Heading is="h4">富豪車隊</Heading>
      </Pane>
      <Pane className="title-right">
        {isEdit &&
          <button
            className="create"
            onClick={() => {
              setModalOpen(true);
              console.log("點擊新增子據點")
            }}
          >
            新增子據點
          </button>
        }
        <PaginationField />
        <CogIcon color="#718BAA" size={11} />
      </Pane>
      <Table
        titles={mock_title}
        data={mock_data}
      />
      <LightBox
        wrapperStyle={{ maxWidth: "unset" }}
        title={"新增子據點"}
        isOpen={modalOpen}
        handleCloseLightBox={() => {
          setModalOpen(false);
        }}>
        <EditSubPoint
          onClickCancel={
            () => setModalOpen(false)
          }
        />
      </LightBox>
    </BodySTY>
  );
}

export default VendorSubPoint;