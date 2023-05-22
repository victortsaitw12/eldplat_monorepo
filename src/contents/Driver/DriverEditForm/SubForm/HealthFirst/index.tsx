import LightBox from "@components/Lightbox";
import { I_Content_Props, I_Health_TYPE } from "@typings/employee_type";
import Table from "@components/Table/Table";
import PaginationField from "@components/PaginationField/";
import {
  Heading,
  Pane,
  DocumentIcon,
  CogIcon,
} from "evergreen-ui";
import React, { useState } from "react";
import AddHealth from "./AddHealth";
import { BodySTY } from "./style";

const table_title = [
  "日期",
  "分類",
  "機構",
  "結果",
  "報告"
]

const table_data = [
  {
    id: "USR202302020002",
    health_date: "2023/05/22",
    health_cate: "一般體格檢查",
    health_org: "起薪診所",
    health_res: "正常",
    health_rep: <DocumentIcon size={12} color="#718BAA" onClick={() => { console.log("下載PDF") }} />
  },
  {
    id: "USR202302020003",
    health_date: "2023/05/22",
    health_cate: "一般體格檢查",
    health_org: "起薪診所",
    health_res: "正常",
    health_rep: <DocumentIcon size={12} color="#718BAA" onClick={() => { console.log("下載PDF") }} />
  },
  {
    id: "USR202302020004",
    health_date: "2023/05/22",
    health_cate: "一般體格檢查",
    health_org: "起薪診所",
    health_res: "正常",
    health_rep: <DocumentIcon size={12} color="#718BAA" onClick={() => { console.log("下載PDF") }} />
  }
]

function HealthFirst({ handleEmployeeChange, setInsertData }: I_Content_Props) {
  const [showHealthModal, setShowHealthModal] = useState<boolean>(false);
  const [healthData, setHealthData] = useState<I_Health_TYPE | any>({
    // user_no: "USR202303210008",
    heal_date: "",
    heal_typ: "01",
    heal_agency: "",
    heal_status: "01",
    heal_examine_date: "",
    heal_filename: "",
    invalid: "N",
    invalid_remark: ""
  });
  const [healthListArr, setHealthListArr] = useState<I_Health_TYPE[] | any[]>(
    []
  );

  const handleHealthChange = (e: any) => {
    const newData = { ...healthData };
    newData[e.target.name] = e.target.value;
    setHealthData(newData);
  };

  // useEffect(() => {
  //   const newData: any = { ...insertData };
  //   newData["healths"] = healthListArr;
  //   setInsertData(newData);
  // }, [healthListArr]);

  return (
    <BodySTY>
      <Pane className="health-title">
        <Heading is="h4">
          鐘筑月
        </Heading>
      </Pane>
      <Pane className="health-title-right">
        <PaginationField />
        <CogIcon color="#718BAA" size={11} />
      </Pane>
      <Table
        titles={table_title}
        data={table_data}
      />
      {/* 新增健康紀錄的光箱 */}
      <LightBox
        title="新增健康紀錄"
        isOpen={showHealthModal}
        handleCloseLightBox={() => {
          setShowHealthModal((prev) => !prev);
        }}
      >
        <AddHealth
          setShowHealthModal={setShowHealthModal}
          handleEmployeeChange={handleEmployeeChange}
          setInsertData={setInsertData}
          healthData={healthData}
          setHealthData={setHealthData}
          handleHealthChange={handleHealthChange}
          setHealthListArr={setHealthListArr}
        />
      </LightBox>
    </BodySTY >
  );
}

export default HealthFirst;
