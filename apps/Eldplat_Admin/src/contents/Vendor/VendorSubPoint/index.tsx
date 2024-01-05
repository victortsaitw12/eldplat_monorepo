import React, { useState } from "react";
import { BodySTY } from "./style";
import { Pane, Heading, CogIcon, GlobeIcon } from "evergreen-ui";
//@components
import Table from "@components/Table/Table";
import LabelTag from "@components/LabelTag";
import PaginationField from "@components/PaginationField";
import LightBox from "@components/Lightbox";
import TableWithEdit from "@components/Table/TableWithEdit";
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
];
const mock_data = [
  {
    no: "vendor00002001",
    data: "無",
    name: "富豪台中廠",
    area: "台中市",
    phone: "+886 22225555",
    mail: "fuhow@example.com",
    contact: "陳富豪",
    contact_phone: (
      <p>
        +886 22225555#8989
        <br />
        +886 900111222
      </p>
    ),
    website: "/",
    label: <LabelTag text="標籤" />
  }
];

const VendorSubPoint = ({ isEdit }: I_Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const tableData = () => {
    return mock_data.map((child) => {
      return {
        id: { label: child["no"], value: child["no"] },
        no: { label: child["no"], value: child["no"] },
        data: {
          label: (
            <Pane
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              無
            </Pane>
          ),
          value: child["data"]
        },
        name: { label: child["name"], value: child["name"] },
        area: { label: child["area"], value: child["area"] },
        phone: { label: child["phone"], value: child["phone"] },
        mail: { label: child["mail"], value: child["mail"] },
        contact: {
          label: child["contact"],
          value: child["contact"]
        },
        contact_phone: {
          label: child["contact_phone"],
          value: child["contact_phone"]
        },
        website: {
          label: (
            <Pane
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <a href={child["website"]} target="_blank" rel="noreferrer">
                <GlobeIcon size={16} color="#718BAA" />
              </a>
            </Pane>
          ),
          value: child["website"]
        },
        label: { label: <LabelTag text="標籤" />, value: "" }
      };
    });
  };
  return (
    <BodySTY>
      {/* <Pane className="title">
        <Heading is="h4">富豪車隊</Heading>
      </Pane>
      <Pane className="title-right">
        {isEdit && (
          <button
            className="create"
            onClick={() => {
              setModalOpen(true);
              console.log("點擊新增子據點");
            }}
          >
            新增子據點
          </button>
        )}
        <PaginationField />
        <CogIcon color="#718BAA" size={11} />
      </Pane> */}
      <TableWithEdit
        createBtnText="新增子據點"
        tableName={"富豪車隊"}
        titles={mock_title}
        data={tableData()}
        goToCreatePage={() => {
          setModalOpen(true);
        }}
        goToEditPage={() => {
          console.log("點擊編輯");
        }}
        deleteItem={() => {
          console.log("點擊刪除");
        }}
        viewItem={() => {
          console.log("點擊檢視");
        }}
      />
      <LightBox
        wrapperStyle={{ maxWidth: "60%" }}
        title={"新增子據點"}
        isOpen={modalOpen}
        handleCloseLightBox={() => {
          setModalOpen(false);
        }}
      >
        <EditSubPoint onClickCancel={() => setModalOpen(false)} />
      </LightBox>
    </BodySTY>
  );
};

export default VendorSubPoint;
