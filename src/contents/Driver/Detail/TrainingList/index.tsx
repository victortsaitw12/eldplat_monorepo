import React from "react";
import dayjs from "dayjs";
import { Pane, DocumentIcon, Tooltip, toaster, Dialog } from "evergreen-ui";
import { DivSTY } from "./style";

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

import Table from "@components/Table/Table";
import FilterWrapper from "@layout/FilterWrapper";
import PaginationField from "@components/PaginationField";
import { useDriverStore } from "@contexts/filter/driverStore";
import Checkbox from "@components/CheckBox";
import IconBtn from "@components/Button/IconBtn";
import SecondaryButton from "@components/Button/Secondary/IconLeft";
import { PlusIcon } from "evergreen-ui";
import { useRouter } from "next/router";

const table_title = [
  <Checkbox key={"driver"} />,
  "項目名稱",
  "訓練期間",
  "訓練通過日期",
  "培訓人",
  "說明"
];

interface Props {
  isEdit: boolean;
  userName: string;
  driverNo: string;
}

const DUMMY_SUBFILTER = {
  User_Name: {
    field_Name: "User_Name",
    arrayConditions: ["like", "equal"],
    displayType: "search",
    dataType: "string",
    label: "搜尋",
    value: ""
  }
};

function LicensesList({ isEdit, userName, driverNo }: Props) {
  const [isLightBoxOpen, setIsLightBoxOpen] = React.useState(false);
  const [editNo, setEditNo] = React.useState<number | null>(null);
  const [licensesData, setLicensesData] = React.useState<I_License | any>([]);
  const [pageInfo, setPageInfo] = React.useState<I_PageInfo>(defaultPageInfo);
  const btnRef = React.useRef<any>(null);

  const router = useRouter();
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

    const IDLicenses = licenses.map((item: any) => {
      return { ...item, id: { label: item.no, value: item.no } };
    });

    if (!subFilter) {
      localStorage.setItem("driverInitFilter", JSON.stringify(licenses));
      initializeSubFilter();
    }
    setLicensesData(IDLicenses);
    setPageInfo(pageInfo);
  };

  React.useEffect(() => {
    fetchLicenseData();
  }, [driverNo]);

  const handleView = () => {
    router.push(`/driver/training/${driverNo}?editPage=edit`);
  };

  const handleTableEdit = () => {
    console.log("edit");
  };

  const handleCreateTraining = () => {
    router.push("/driver/training/create");
  }

  const { initializeSubFilter, subFilter, updateSubFilter } = useDriverStore();

  const changeKey = (data: Array<I_License>) => {
    return data.map((item: I_License) => {
      return {
        id: item["driver_no"],
        checkbox: <Checkbox value={item["driver_no"]} />,
        licn_name: item["licn_name"],
        licn_duration: item["licn_duration"],
        licn_passdate: item["licn_passdate"],
        trainer_name: item["trainer_name"],
        description: item["description"],
        action: <IconBtn tip="編輯" type="edit" onClick={handleTableEdit} />
      };
    });
  };

  const modifiedData = licensesData ? changeKey(licensesData) : undefined;

  return (
    <DivSTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        // filter={subFilter}
        filter={DUMMY_SUBFILTER}
        btns={
          <SecondaryButton onClick={handleCreateTraining} text="新增教育訓練">
            <PlusIcon />
          </SecondaryButton>
        }
      >
        <Table
          titles={table_title}
          data={modifiedData}
          onView={handleView}
          headNode={<PaginationField pageInfo={pageInfo} />}
        />
      </FilterWrapper>
    </DivSTY>
  );
}

export default LicensesList;
