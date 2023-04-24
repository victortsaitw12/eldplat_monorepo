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
import React, { useState } from "react";
import AddHealth from "./AddHealth";
import { BodySTY } from "./style";

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

  console.log("healthListArr", healthListArr);

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
                <Table.Row key={idx} isSelectable>
                  <Table.TextCell>{data?.heal_date}</Table.TextCell>
                  <Table.TextCell>{data?.heal_typ}</Table.TextCell>
                  <Table.TextCell>{data?.heal_agency}</Table.TextCell>
                  <Table.TextCell>{data?.heal_status}</Table.TextCell>
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
          setInsertData={setInsertData}
          healthData={healthData}
          setHealthData={setHealthData}
          handleHealthChange={handleHealthChange}
          setHealthListArr={setHealthListArr}
        />
      </LightBox>
    </BodySTY>
  );
}

export default HealthFirst;
