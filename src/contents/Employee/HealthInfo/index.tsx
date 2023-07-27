import {
  I_Add_Employees_Type,
  I_Get_Employees_Type,
  I_Health_TYPE
} from "@typings/employee_type";
import React, { useState } from "react";
import { BodySTY } from "./style";
import { Pane, DocumentIcon } from "evergreen-ui";
import { v4 as uuid } from "uuid";
//@components
import LightBox from "@components/Lightbox";
import TableWithEdit from "@components/Table/TableWithEdit";
//@content
import EditSubPoint from "@contents/Vendor/SubForm/EditSubPoint";
import dayjs from "dayjs";
import EditHealth from "./EditHealth";

import { HEAL_TYP } from "@services/getDDL/";

interface I_Props {
  data: any;
  isEdit: boolean;
}
const mock_title = ["日期", "分類", "機構", "結果", "報告"];
const mock_data = [
  {
    no: "id-0",
    date: "2023/02/01",
    cate: "一般體格檢查",
    name: "啟新診所",
    result: "正常",
    report: "/"
  },
  {
    no: "id-1",
    date: "2023/02/01",
    cate: "一般體格檢查",
    name: "啟新診所",
    result: "正常",
    report: "/"
  },
  {
    no: "id-2",
    date: "2023/02/01",
    cate: "一般體格檢查",
    name: "啟新診所",
    result: "正常",
    report: "/"
  }
];

const HealthInfo = ({ data, isEdit }: I_Props) => {
  console.log("🎶🎶🎶🎶🎶🎶🎶員工的資料", data);
  const [insertData, setInsertData] = useState<any>(data);

  const [healthData, setHealthData] = useState({
    heal_date: "",
    heal_typ: "01",
    heal_agency: "",
    heal_status: "01",
    heal_examine_date: "",
    heal_filename: "",
    invalid: "N",
    invalid_remark: ""
  });

  const [healthListArr, setHealthListArr] = useState<I_Health_TYPE[]>([]);

  const handleHealthChange = (e: any) => {
    const newData: any = { ...healthData };
    newData[e.target.name] = e.target.value;
    setHealthData(newData);
  };
  const handleEmployeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...insertData };
    const targetName = e.target.name as
      | keyof (I_Add_Employees_Type | I_Get_Employees_Type);
    let targetValue = e.target.value as any;

    if (e.target.type === "date") targetValue ||= null;
    //  targetValue ||= null 的意思就等於 targetValue = targetValue || null
    newData[targetName] = targetValue;
    setInsertData(newData);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const tableData = () => {
    return data.healths.map((child: { [key: string]: string }) => {
      return {
        id: { label: uuid(), value: uuid() },
        heal_date: {
          label: dayjs(child["heal_date"]).format("YYYY/MM/DD"),
          value: child["heal_date"]
        },
        heal_typ: {
          label: HEAL_TYP[child["heal_typ"]]?.label,
          value: HEAL_TYP[child["heal_typ"]]?.value
        },
        heal_agency: {
          label: child["heal_agency"],
          value: child["heal_agency"]
        },
        heal_status: {
          label: child["heal_status"] == "01" ? "正常" : "異常",
          value: child["heal_status"] == "01" ? "正常" : "異常"
        },
        heal_link: {
          label: (
            <Pane
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start"
              }}
            >
              <a href={"/"} target="_blank" rel="noreferrer">
                <DocumentIcon size={16} color="#718BAA" />
              </a>
            </Pane>
          ),
          value: child["heal_link"]
        }
      };
    });
  };

  return (
    <BodySTY>
      <TableWithEdit
        needCreateBtn={isEdit}
        createBtnText="新增健康記錄"
        needAction={isEdit}
        cleanTableName={data.user_name || "缺少員工名稱"}
        tableName=""
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
        wrapperStyle={{ maxWidth: "37rem" }}
        title={"新增健康記錄"}
        isOpen={modalOpen}
        handleCloseLightBox={() => {
          setModalOpen(false);
        }}
      >
        <EditHealth
          setShowHealthModal={setModalOpen}
          handleEmployeeChange={handleEmployeeChange}
          insertData={insertData}
          setInsertData={setInsertData}
          healthData={healthData}
          setHealthData={setHealthData}
          handleHealthChange={handleHealthChange}
          healthListArr={healthListArr}
          setHealthListArr={setHealthListArr}
        />
      </LightBox>
    </BodySTY>
  );
};

export default HealthInfo;
