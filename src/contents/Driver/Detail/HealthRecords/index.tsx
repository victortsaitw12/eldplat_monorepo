import { I_Health_TYPE } from "@typings/employee_type";
import Table from "@components/Table/Table";
import PaginationField from "@components/PaginationField/";
import { Heading, Pane, DocumentIcon, CogIcon, Tooltip } from "evergreen-ui";
import React, { useState } from "react";
import { BodySTY } from "./style";

const health_MAP = new Map([
  ["01", "職業汽車駕照體檢"],
  ["02", "職業駕駛審驗體檢"],
  ["03", "一般勞工體檢"]
]);

const table_title = ["日期", "分類", "機構", "結果", "報告"];

function HealthRecords({
  healths,
  userName
}: {
  healths: any;
  userName: string;
}) {
  console.log("healths:", healths);
  const [healthData, setHealthData] = useState<I_Health_TYPE | any>({
    user_no: "USR202303210008",
    heal_date: "",
    heal_typ: "01",
    heal_agency: "",
    invalid_remark: "",
    heal_status: "01",
    heal_examine_date: "",
    heal_filename: "",
    heal_link: "",
    invalid: "N"
  });

  interface DataDetail {
    id: string;
    heal_date: string;
    heal_typ: string;
    heal_agency: string;
    invalid_remark: string;
    heal_link: any;
  }
  const orderedTableData = healths.map((item: any) => {
    const dataDetail: DataDetail = {
      id: "",
      heal_date: "",
      heal_typ: "",
      heal_agency: "",
      invalid_remark: "",
      heal_link: ""
    };
    dataDetail.id = item.user_no;
    dataDetail.heal_date = item.heal_date?.split("T")[0];
    dataDetail.heal_typ =
      (item.heal_typ && health_MAP.get(item.heal_typ)) || "";
    dataDetail.heal_agency = item.heal_agency;
    dataDetail.invalid_remark = item.invalid_remark;
    dataDetail.heal_link = item.heal_link ? (
      <Tooltip content={`下載${item.heal_filename || ""}`}>
        <DocumentIcon
          className="reportIcon"
          size={12}
          color="#718BAA"
          onClick={() => {
            console.log(`從${item.heal_link}下載`);
          }}
        />
      </Tooltip>
    ) : (
      ""
    );
    return dataDetail;
  });

  const handleHealthChange = (e: any) => {
    const newData = { ...healthData };
    newData[e.target.name] = e.target.value;
    setHealthData(newData);
  };

  return (
    <BodySTY>
      <Pane className="health-title">
        <Heading is="h4">{userName}</Heading>
      </Pane>
      <Pane className="health-title-right">
        <PaginationField />
        <CogIcon color="#718BAA" size={11} />
      </Pane>
      {healths.length !== 0 ? (
        <Table titles={table_title} data={orderedTableData} />
      ) : (
        <div style={{ textAlign: "center" }}>
          目前無資料，請至員工設定頁面編輯
        </div>
      )}
    </BodySTY>
  );
}

export default HealthRecords;
