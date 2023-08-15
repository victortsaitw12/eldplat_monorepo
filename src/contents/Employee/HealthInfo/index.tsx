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
  updateAccuontHealthData,
  deleteAccuontHealthData
} from "@services/employee/healthAPI";
//
import LoadingSpinner from "@components/LoadingSpinner";
//
import { dashDate } from "@utils/convertDate";
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
    if (!createHealthPayload.heal_date) {
      console.log(
        "no createHealthPayload.heal_date",
        createHealthPayload.heal_date
      );
      delete createHealthPayload["heal_date"];
    }
    if (!createHealthPayload.heal_examine_date) {
      console.log(
        "no createHealthPayload.heal_examine_date",
        createHealthPayload.heal_examine_date
      );
      delete createHealthPayload["heal_examine_date"];
    }
    setLoading(true);
    try {
      modalOpen.type === "create"
        ? await createAccuontHealthData(createHealthPayload)
        : await updateAccuontHealthData(createHealthPayload);
      setModalOpen(null);
      await fetchData();
    } catch {
      console.log("createHealthPayload error");
    }
    setLoading(false);
  }

  async function deleteHealthHandler(healthNo: string) {
    setLoading(true);
    try {
      await deleteAccuontHealthData(healthNo);
      await fetchData();
    } catch (err) {
      console.log("deleteHealthHandler error: ", err);
    }
    setLoading(false);
  }

  const tableData = () => {
    return healthsData.map((child: { [key: string]: string }) => {
      return {
        id: { label: child["health_no"], value: child["health_no"] },
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
      console.log("healths: ", healths);
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
  //
  function convertHealthDataToEditForm(healthData: any) {
    console.log("healthData: ", healthData);
    const healthForm = {
      health_no: healthData["id"].value,
      heal_agency: healthData["heal_agency"].value,
      heal_date: healthData["heal_date"].value
        ? dashDate(healthData["heal_date"].value)
        : null,
      heal_examine_date: null,
      heal_filename: null,
      heal_link: healthData["heal_link"].value,
      heal_status: null,
      heal_typ: healthData["heal_typ"].value,
      invalid: null,
      invalid_mark: null
    };
    console.log("healthForm", healthForm);
    return healthForm;
  }
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
                  defaultData: convertHealthDataToEditForm(item),
                  dataIndex: id || null
                });
              }}
              deleteItem={deleteHealthHandler}
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
                defaultData={modalOpen?.defaultData}
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
