import Table from "@components/Table/Table";
import PaginationField from "@components/PaginationField/";
import React, { useState } from "react";
import { BodySTY } from "./style";

import { getHealthById, defaultPageInfo } from "@services/driver/getHealthById";
import { I_PageInfo } from "@components/PaginationField";
import { mappingQueryData } from "@utils/mappingQueryData";
import FilterWrapper from "@layout/FilterWrapper";
import { useDriverStore } from "@contexts/filter/driverStore";

const table_title = ["修改說明", "修改人員", "修改時間"];

interface I_EditHistory {
  edit_no: string;
  description: string;
  editor: string;
  edit_time: string;
}

const MOCK_DATA: I_EditHistory[] = [
  {
    edit_no: "1",
    description: "根據現況調整，更新該駕駛之標籤內容。",
    editor: "簡翰婷",
    edit_time: "2022-11-13 14:00"
  },
  {
    edit_no: "2",
    description: "駕照更新期限已至，補上最新有效期限之駕照。",
    editor: "簡翰婷",
    edit_time: "2022-11-13 14:00"
  },
  {
    edit_no: "3",
    description: "因應規定，參與新人訓練之紀錄。",
    editor: "林筠紹",
    edit_time: "2022-11-11 13:40"
  },
  {
    edit_no: "4",
    description: "新增該駕駛帳號",
    editor: "王薇翔",
    edit_time: "2022-11-11 10:30"
  }
];

function HealthRecords({
  userNo,
  userName
}: {
  userNo: string;
  userName: string;
}) {
  const [editData, setEditData] = useState<I_EditHistory | any>([]);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);

  React.useEffect(() => {
    const fetchData = async () => {
      // const { editHistory, pageInfo } = await getHealthById(userNo);

      if (!subFilter) {
        // localStorage.setItem("driverInitFilter", JSON.stringify(editHistory));
        initializeSubFilter();
      }

      // setEditData(editHistory);
      setEditData(MOCK_DATA);
      setPageInfo(pageInfo);
    };

    fetchData();
  }, [userNo]);

  const { initializeSubFilter, subFilter, updateSubFilter } = useDriverStore();

  const handleView = () => {
    console.log("handle view");
  };

  const changeKey = (data: Array<I_EditHistory>) => {
    return data.map((item: I_EditHistory) => {
      return {
        id: item["edit_no"],
        description: item["description"],
        editor: item["editor"],
        edit_time: item["edit_time"]
      };
    });
  };

  const modifiedData = editData ? changeKey(editData) : undefined;

  return (
    <BodySTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        filter={subFilter}
      >
        <Table
          titles={table_title}
          data={modifiedData}
          onView={handleView}
          headNode={<PaginationField pageInfo={pageInfo} />}
        />
      </FilterWrapper>
    </BodySTY>
  );
}

export default HealthRecords;
