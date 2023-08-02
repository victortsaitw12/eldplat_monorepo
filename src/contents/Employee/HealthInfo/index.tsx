import {
  I_Add_Employees_Type,
  I_Get_Employees_Type,
  I_Health_TYPE
} from "@typings/employee_type";
import React, { useEffect, useState } from "react";
import { BodySTY } from "./style";
import { Pane, DocumentIcon } from "evergreen-ui";
import { v4 as uuid } from "uuid";
//@components
import LightBox from "@components/Lightbox";
import TableWithEdit from "@components/Table/TableWithEdit";
//@content
import dayjs from "dayjs";
import EditHealth from "./EditHealth";

//@service
import { getHealthById, defaultPageInfo } from "@services/driver/getHealthById";

import { HEAL_TYP } from "@services/getDDL/";

interface I_Props {
  userId: string;
  insertData: any;
  isEdit: boolean;
  setInsertData?: (data: any) => void;
}
const mock_title = ["日期", "分類", "機構", "結果", "報告"];

const HealthInfo = ({ userId, insertData, setInsertData, isEdit }: I_Props) => {
  const [pageInfo, setPageInfo] = useState(null);
  const [healthsData, setHealthData] = useState([]);
  const handleEmployeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...insertData };
    const targetName = e.target.name as
      | keyof (I_Add_Employees_Type | I_Get_Employees_Type);
    let targetValue = e.target.value as any;

    if (e.target.type === "date") targetValue ||= null;
    //  targetValue ||= null 的意思就等於 targetValue = targetValue || null
    newData[targetName] = targetValue;
    setInsertData && setInsertData(newData);
  };

  const [modalOpen, setModalOpen] = useState<any>(null);

  const tableData = () => {
    return healthsData.map((child: { [key: string]: string }, i: number) => {
      return {
        id: { label: i.toString(), value: i.toString() },
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

  React.useEffect(() => {
    const fetchData = async () => {
      const { healths, pageInfo } = await getHealthById(userId);
      setHealthData(healths);
      setPageInfo(pageInfo);
    };
    fetchData();
  }, [userId]);

  return (
    <BodySTY>
      {insertData && (
        <>
          <TableWithEdit
            needCheckBox={isEdit}
            needCreateBtn={isEdit}
            createBtnText="新增健康記錄"
            goToCreatePage={() => {
              setModalOpen({ type: "create", open: true });
            }}
            needAction={isEdit}
            cleanTableName={insertData?.user_name || "缺少員工名稱"}
            tableName=""
            titles={mock_title}
            data={tableData()}
            goToEditPage={(id, item) => {
              setModalOpen({
                type: "edit",
                open: true,
                defaultData: insertData["healths"][id] || null,
                dataIndex: id || null
              });
            }}
            deleteItem={() => {
              console.log("點擊刪除");
            }}
          />
          <LightBox
            wrapperStyle={{ maxWidth: "37rem" }}
            title={
              modalOpen?.type == "create" ? "新增健康記錄" : "編輯健康記錄"
            }
            isOpen={modalOpen?.open}
            handleCloseLightBox={() => {
              setModalOpen(null);
            }}
          >
            {modalOpen && modalOpen?.open && (
              <EditHealth
                {...(modalOpen?.defaultData && {
                  defaultData: modalOpen?.defaultData
                })}
                dataIndex={modalOpen?.dataIndex || null}
                setShowHealthModal={setModalOpen}
                handleEmployeeChange={handleEmployeeChange}
                insertData={insertData}
                setInsertData={setInsertData}
              />
            )}
          </LightBox>
        </>
      )}
    </BodySTY>
  );
};

export default HealthInfo;
