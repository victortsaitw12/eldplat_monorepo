import LightBox from "@components/Lightbox";
import { I_Content_Props, I_Health_TYPE } from "@typings/employee_type";
import {
  Button,
  Heading,
  Pane,
  PlusIcon,
  SearchIcon,
  Table
} from "evergreen-ui";
import React, { useState, useEffect } from "react";
import AddHealth from "./AddHealth";
import { BodySTY } from "./style";

function HealthFirst({
  handleEmployeeChange,
  insertData,
  setInsertData
}: I_Content_Props) {
  const [showHealthModal, setShowHealthModal] = useState<boolean>(false);
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

  // 一進來先抓資料庫原本就有的健康資料
  useEffect(() => {
    insertData && setHealthListArr(insertData?.healths);
  }, [insertData]);

  const handleHealthChange = (e: any) => {
    const newData: any = { ...healthData };
    newData[e.target.name] = e.target.value;
    setHealthData(newData);
  };

  // 將新增的健康資料陣列更新回大物件
  useEffect(() => {
    const allData: any = { ...insertData };
    allData.healths = healthListArr;
    setInsertData(allData);
  }, [healthListArr]);

  // health list不要顯示代碼，顯示文字給使用者看 (health type)
  const showHealthType = (data: any) => {
    if (data.heal_typ === "01") {
      return "職業汽車駕照體檢";
    }
    if (data.heal_typ === "02") {
      return "職業駕駛審驗體檢";
    }
    if (data.heal_typ === "03") {
      return "一般勞工體檢";
    }
  };

  // health list不要顯示代碼，顯示文字給使用者看 (health status)
  const showHealthStatus = (data: any) => {
    if (data.heal_status === "01") {
      return "合格";
    }
    if (data.heal_status === "02") {
      return "需複檢";
    }
    if (data.heal_status === "03") {
      return "未通過";
    }
  };

  return (
    <BodySTY>
      <Pane className="health-title">
        <Heading is="h4">健康紀錄</Heading>
        <Pane className="health-title-right">
          <Button
            marginRight={12}
            iconBefore={PlusIcon}
            onClick={() => {
              setShowHealthModal(true);
            }}
          >
            新增健康紀錄
          </Button>
          <Button marginRight={12} iconBefore={SearchIcon}>
            查看更多
          </Button>
        </Pane>
      </Pane>
      <Table className="health-table">
        <Table.Head>
          {/* <Table.SearchHeaderCell /> */}
          <Table.TextHeaderCell>日期</Table.TextHeaderCell>
          <Table.TextHeaderCell>分類</Table.TextHeaderCell>
          <Table.TextHeaderCell>機構</Table.TextHeaderCell>
          <Table.TextHeaderCell>結果</Table.TextHeaderCell>
          <Table.TextHeaderCell>報告</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height="fit-content">
          {healthListArr &&
            healthListArr.map((data, idx) => {
              return (
                <Table.Row
                  key={idx}
                  isSelectable
                  // onSelect={() => alert(data.category)}
                >
                  <Table.TextCell>{data?.heal_date}</Table.TextCell>
                  <Table.TextCell>{showHealthType(data)}</Table.TextCell>
                  <Table.TextCell>{data?.heal_agency}</Table.TextCell>
                  <Table.TextCell>{showHealthStatus(data)}</Table.TextCell>
                  <Table.TextCell>{data?.heal_filename}</Table.TextCell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>

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
}

export default HealthFirst;
