// import {
//   I_Add_Employees_Type,
//   I_Get_Employees_Type
// } from "@typings/employee_type";
import React, { useEffect, useState } from "react";
import { BodySTY } from "./style";
import { Pane, DocumentIcon } from "evergreen-ui";
//@components
import LightBox from "@components/Lightbox";
import TableWithEdit from "@components/Table/TableWithEdit";
//@content
import dayjs from "dayjs";
import EditHealth from "./EditHealth";
//@service
import { getHealthById, defaultPageInfo } from "@services/driver/getHealthById";
import { HEAL_TYP } from "@services/getDDL/";
import {
  createAccuontHealthData,
  updateAccuontHealthData
} from "@services/employee/healthAPI";
//
import LoadingSpinner from "@components/LoadingSpinner";
//
interface I_Props {
  userId: string;
  userName: string;
  insertData: any;
  isEdit: boolean;
  setInsertData?: (data: any) => void;
}
//
const mock_title = ["日期", "分類", "機構", "結果", "報告"];

const HealthInfo = ({ userId, isEdit, userName }: I_Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pageInfo, setPageInfo] = useState(null);
  const [healthsData, setHealthData] = useState([]);
  const [modalOpen, setModalOpen] = useState<any>(null);
  async function updateHealthHandler(userId: string, healthPayload: any) {
    const createHealthPayload = {
      ...healthPayload,
      user_no: userId
    };
    setLoading(true);
    try {
      const result = await createAccuontHealthData(createHealthPayload);
      setModalOpen(null);
      await fetchData();
    } catch {
      console.log("createHealthPayload error");
    }
    setLoading(false);
  }
  // };

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

  async function fetchData() {
    setLoading(true);
    try {
      const { healths, pageInfo } = await getHealthById(userId);
      setHealthData(healths);
      setPageInfo(pageInfo);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }
  React.useEffect(() => {
    fetchData();
  }, [userId]);
  console.log("healthData: ", healthsData);
  //
  return (
    <BodySTY>
      {healthsData && (
        <>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <TableWithEdit
              needCheckBox={isEdit}
              needCreateBtn={isEdit}
              createBtnText="新增健康記錄"
              goToCreatePage={() => {
                setModalOpen({ type: "create", open: true });
              }}
              needAction={isEdit}
              cleanTableName={userName || "缺少員工名稱"}
              tableName=""
              titles={mock_title}
              data={tableData()}
              goToEditPage={(id, item) => {
                setModalOpen({
                  type: "edit",
                  open: true,
                  defaultData: null,
                  dataIndex: id || null
                });
              }}
              deleteItem={() => {
                console.log("點擊刪除");
              }}
              pageInfo={pageInfo || defaultPageInfo}
            />
          )}
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
                userName={userName}
                updateHealthHandler={updateHealthHandler.bind(null, userId)}
              />
            )}
          </LightBox>
        </>
      )}
    </BodySTY>
  );
};

export default HealthInfo;
