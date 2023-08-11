import { I_Health_TYPE } from "@typings/employee_type";
import Table from "@components/Table/Table";
import PaginationField from "@components/PaginationField/";
import { Heading, Pane, DocumentIcon, CogIcon, Tooltip } from "evergreen-ui";
import React, { useState } from "react";
import { BodySTY } from "./style";

import { getHealthById, defaultPageInfo } from "@services/driver/getHealthById";
import { I_PageInfo } from "@components/PaginationField";
import { mappingQueryData } from "@utils/mappingQueryData";

// TODO 改接/COM/GetOneDDL
const HEAL_TYP = new Map([
  ["01", "一般體格檢查"],
  ["02", "特殊健檢"],
  ["03", "特殊粉塵健檢"],
  ["03", "特殊噪音健檢"]
]);
const HEAL_STATUS = new Map([
  ["01", "正常"],
  ["02", "異常"]
]);

const table_title = ["日期", "分類", "機構", "結果", "報告"];

function HealthRecords({
  userNo,
  userName
}: {
  userNo: string;
  userName: string;
}) {
  const [healthData, setHealthData] = useState<I_Health_TYPE | any>([]);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);

  interface DataDetail {
    id: string;
    heal_date: string;
    heal_typ: string;
    heal_agency: string;
    heal_status: string;
    heal_link: any;
  }

  const orderedTableData = healthData.map((item: any) => {
    const dataDetail: DataDetail = {
      id: item.user_no,
      heal_date: item.heal_date?.split("T")[0],
      heal_typ: (item.heal_typ && HEAL_TYP.get(item.heal_typ)) || "--",
      heal_agency: item.heal_agency,
      heal_status:
        (item.heal_status && HEAL_STATUS.get(item.heal_status)) || "--",
      heal_link:
        (item.heal_link && (
          <Tooltip content={`下載${item.heal_link || ""}`}>
            <DocumentIcon
              className="reportIcon"
              size={12}
              color="#718BAA"
              onClick={() => {
                console.log(`從${item.heal_link}下載`);
              }}
            />
          </Tooltip>
        )) ||
        "--"
    };
    return dataDetail;
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const { healths, pageInfo } = await getHealthById(userNo);
      setHealthData(healths);
      setPageInfo(pageInfo);
    };
    fetchData();
  }, [userNo]);

  return (
    <BodySTY>
      <Pane className="health-title container-header">
        <div className="container-header-left">{userName}</div>
      </Pane>
      <Pane className="health-title-right">
        <PaginationField />
        <CogIcon color="#718BAA" size={11} />
      </Pane>
      {healthData.length !== 0 ? (
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
