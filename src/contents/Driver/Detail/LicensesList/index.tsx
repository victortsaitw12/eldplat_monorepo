import React from "react";
import dayjs from "dayjs";
import { Pane, DocumentIcon, Tooltip, toaster, Dialog } from "evergreen-ui";
import { DivSTY } from "./style";

import TableWithEdit from "@components/Table/TableWithEdit";
import { mappingQueryData } from "@utils/mappingQueryData";
import LicenseForm from "@contents/Driver/Detail/LicenseForm";
import { LICN_TYP } from "@services/getDDL";
import { updateDriverLicense } from "@services/driver/updateDriverLicense";
import { I_PageInfo } from "@components/PaginationField";
import {
  getLicenseById,
  I_License,
  defaultPageInfo
} from "@services/driver/getLicenseById";

const table_title = [
  "證照種類",
  "證照名稱",
  "發照單位",
  "發照日期",
  "有效日期",
  "下次審驗日期",
  "證照檔案"
];
interface Props {
  isEdit: boolean;
  userName: string;
  driverNo: string;
}

function LicensesList({ isEdit, userName, driverNo }: Props) {
  const [isLightBoxOpen, setIsLightBoxOpen] = React.useState(false);
  const [editNo, setEditNo] = React.useState<number | null>(null);
  const [licensesData, setLicensesData] = React.useState<I_License | any>([]);
  const [pageInfo, setPageInfo] = React.useState<I_PageInfo>(defaultPageInfo);
  const btnRef = React.useRef<any>(null);
  // ordering for <TableWithEdit/>
  const driverPattern = {
    id: true,
    licn_typ: true,
    licn_name: true,
    licn_unit: true,
    licn_issue: true,
    licn_exp: true,
    licn_examine_date: true,
    licn_link: true
  };
  const driverParser = (
    data: any,
    key: string
  ): { label: any; value: any } | any => {
    if (key === "id") {
      return {
        label: data["no"],
        value: data["no"]?.toString()
      };
    }
    if (key === "licn_typ") {
      return (
        {
          label: LICN_TYP[data[key]]?.label,
          value: data[key]
        } || <div>--</div>
      );
    }
    if (
      key === "licn_issue" ||
      key === "licn_exp" ||
      key === "licn_examine_date"
    ) {
      return (
        {
          label: dayjs(data[key]).format("YYYY / MM / DD"),
          value: data[key]
        } || <div>--</div>
      );
    }
    if (key === "licn_link") {
      return (
        {
          label: data["licn_link"] ? (
            <Tooltip content={`下載${data["licn_filename"] || ""}`}>
              <DocumentIcon
                className="documentIcon"
                size={12}
                color="#718BAA"
                onClick={() => {
                  console.log(`從${data["licn_link"]}下載`);
                }}
              />
            </Tooltip>
          ) : (
            <div>--</div>
          ),
          value: data[key]
        } || <div>--</div>
      );
    }
    return { label: data[key], value: data[key] } || <div>--</div>;
  };
  const orderedLicensesData = mappingQueryData(
    licensesData || [],
    driverPattern,
    driverParser
  );

  // ----- function ----- //
  const handleCreate = () => {
    setEditNo(null);
    setIsLightBoxOpen(true);
  };

  const handleEdit = (id: any) => {
    setEditNo(id);
    setIsLightBoxOpen(true);
  };

  const handleCancel = () => {
    setIsLightBoxOpen(false);
  };

  const handleConfirm = () => {
    if (btnRef.current) btnRef.current.click();
  };
  const handlePageChange = React.useCallback(
    (pageQuery: I_PageInfo) => {
      fetchLicenseData(pageQuery);
    },
    [driverNo]
  );
  const asyncSubmitCreateForm = async (data: any) => {
    const type = 0;
    //type: 0 = 新增，2 = 更新，3 = 刪除
    console.log("😒😒😒 asyncSubmitForm called", data);
    try {
      const res = await updateDriverLicense(data, type);
      if (res.result === true)
        toaster.success("成功新增駕駛證照", { duration: 1.5 });
      await fetchLicenseData();
      setIsLightBoxOpen(false);
    } catch (e: any) {
      console.log(e);
      toaster.warning(e.message);
    }
  };
  const asyncSubmitEditForm = async (data: any) => {
    const type = 2;
    //type: 0 = 新增，2 = 更新，3 = 刪除
    console.log("😒😒😒 asyncSubmitForm called", data);
    try {
      const res = await updateDriverLicense(data, type);
      if (res.result === true)
        toaster.success("成功更新駕駛證照", { duration: 1.5 });
      await fetchLicenseData();
      setIsLightBoxOpen(false);
    } catch (e: any) {
      console.log(e);
      toaster.warning(e.message);
    }
  };

  //刪除該筆證照資料
  const handleDelete = async (id: any) => {
    const data = licensesData.find((item: any) => item.no.toString() === id);
    try {
      const res = await updateDriverLicense(data, 3);
      if (res.result === true) {
        toaster.success("成功刪除證照資料", { duration: 1.5 });
      } else {
        throw new Error(`${res.resultString}`);
      }
      await fetchLicenseData();
    } catch (e: any) {
      console.log(e);
      toaster.danger("刪除失敗", {
        description: `${e.message}`,
        duration: 2,
        hasCloseButton: true
      });
    }
  };
  const fetchLicenseData = async (pageQuery = defaultPageInfo) => {
    const { licenses, pageInfo } = await getLicenseById(driverNo, pageQuery);
    const IDLicences = licenses.map((item: any) => {
      return { ...item, id: { label: item.no, value: item.no } };
    });
    setLicensesData(IDLicences);
    setPageInfo(pageInfo);
  };
  React.useEffect(() => {
    fetchLicenseData();
  }, [driverNo]);

  return (
    <DivSTY>
      {orderedLicensesData && (
        <TableWithEdit
          tableName=""
          cleanTableName={userName}
          titles={table_title}
          data={orderedLicensesData}
          goToCreatePage={handleCreate}
          goToEditPage={handleEdit}
          deleteItem={handleDelete}
          createBtnText="新增駕駛證照"
          needCreateBtn={isEdit}
          pageInfo={pageInfo}
          onPageChange={handlePageChange}
        />
      )}

      {isLightBoxOpen && (
        <Pane>
          <Dialog
            isShown={isLightBoxOpen}
            title={`${editNo ? "編輯" : "新增"}駕駛證照`}
            onConfirm={handleConfirm}
            onCloseComplete={handleCancel}
            cancelLabel="取消"
            confirmLabel="確定"
          >
            {({}) => (
              <>
                <hr
                  style={{ border: "none", borderBottom: "1px solid #D5E2F1" }}
                />
                <LicenseForm
                  btnRef={btnRef}
                  editNo={editNo}
                  licensesData={licensesData}
                  asyncSubmitCreateForm={asyncSubmitCreateForm}
                  asyncSubmitEditForm={asyncSubmitEditForm}
                  driverNo={driverNo}
                />
              </>
            )}
          </Dialog>
        </Pane>
      )}
    </DivSTY>
  );
}

export default LicensesList;
