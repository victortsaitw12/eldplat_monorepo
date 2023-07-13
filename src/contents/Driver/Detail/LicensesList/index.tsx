import React from "react";
import dayjs from "dayjs";
import {
  Pane,
  Text,
  PlusIcon,
  DocumentIcon,
  Tooltip,
  toaster,
  Dialog
} from "evergreen-ui";
import { DivSTY } from "./style";

import { IconLeft } from "@components/Button/Primary";
import TableWithEdit from "@components/Table/TableWithEdit";
import { mappingQueryData } from "@utils/mappingQueryData";
import LicenseForm from "@contents/Driver/Detail/LicenseForm";
import { LICN_TYP } from "@services/getDDL";
import { updateDriverLicense } from "@services/driver/updateDriverLicense";

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
  licensesData: any;
  userName: string;
  refetch: () => void;
}

function LicensesList({ licensesData, userName, refetch }: Props) {
  const [isLightBoxOpen, setIsLightBoxOpen] = React.useState(false);
  const [editNo, setEditNo] = React.useState<number | null>(null);
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
    // licn_filename: true,
    licn_link: true
  };
  const driverParser = (
    data: any,
    key: string
  ): { label: any; value: any } | any => {
    if (key === "id") {
      return {
        label: data["no"],
        value: data["no"]
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
          label: (
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
    console.log("打開新增彈窗");
  };
  const handleCancel = () => {
    setIsLightBoxOpen(false);
  };

  const handleConfirm = () => {
    if (btnRef.current) btnRef.current.click();
  };
  const asyncSubmitForm = async (data: any) => {
    console.log("😒😒😒 asyncSubmitForm called", data);
    const type = editNo ? false : true;
    try {
      const res = await updateDriverLicense(data, type); //type: true = 新增，false = 更新
      if (res.result === true)
        toaster.success("成功更新駕駛證照", { duration: 1.5 });
      // update license list
      await refetch();
      setIsLightBoxOpen(false);
    } catch (e: any) {
      console.log(e);
      toaster.warning(e.message);
    }
  };

  //刪除該筆證照資料
  const handleDelete = async (id: number) => {
    try {
      alert("刪除該筆證照資料");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DivSTY>
      <Pane className="licn-title">
        <Text className="licn-title-left">{userName}</Text>
        <IconLeft
          className="licn-title-right"
          type="button"
          text={"新增駕駛證照"}
          onClick={handleCreate}
        >
          <PlusIcon size={14} />
        </IconLeft>
      </Pane>
      {orderedLicensesData && (
        <TableWithEdit
          tableName={null}
          titles={table_title}
          data={orderedLicensesData}
          goToEditPage={handleEdit}
          deleteItem={handleDelete}
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
                  type={editNo ? false : true}
                  licensesData={
                    licensesData.filter((item: any) => item.no === editNo)[0]
                  }
                  asyncSubmitForm={asyncSubmitForm}
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
