import { I_Health_TYPE } from "@typings/employee_type";
import Table from "@components/Table/Table";
import PaginationField from "@components/PaginationField/";
import { Heading, Pane, DocumentIcon, CogIcon, Tooltip } from "evergreen-ui";
import React, { useState } from "react";
import { BodySTY } from "./style";

import { getHealthById, defaultPageInfo } from "@services/driver/getHealthById";
import { I_PageInfo } from "@components/PaginationField";
import { mappingQueryData } from "@utils/mappingQueryData";
import FilterWrapper from "@layout/FilterWrapper";
import { useDriverStore } from "@contexts/filter/driverStore";

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

const table_title = ["項目名稱", "健檢日期", "說明", "下次健檢日"];

function EditHistory({
  userNo,
  userName
}: {
  userNo: string;
  userName: string;
}) {
  const [healthData, setHealthData] = useState<I_Healths | any>([]);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);

  // interface DataDetail {
  //   id: string;
  //   heal_date: string;
  //   heal_typ: string;
  //   heal_agency: string;
  //   heal_status: string;
  //   heal_link: any;
  // }

  interface I_Healths {
    health_no: string;
    heal_date: string;
    heal_name: string;
    description: string;
    next_date: string;
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const { healths, pageInfo } = await getHealthById(userNo);

      if (!subFilter) {
        localStorage.setItem("driverInitFilter", JSON.stringify(healths));
        initializeSubFilter();
      }

      setHealthData(healths);
      setPageInfo(pageInfo);
    };

    fetchData();
  }, [userNo]);

  const { initializeSubFilter, subFilter, updateSubFilter } = useDriverStore();

  const handleView = () => {
    console.log("handle view");
  };

  const changeKey = (data: Array<I_Healths>) => {
    return data.map((item: I_Healths) => {
      return {
        id: item["health_no"],
        heal_name: item["heal_name"],
        heal_date: item["heal_date"],
        description: item["description"],
        next_date: item["next_date"]
      };
    });
  };

  const modifiedData = healthData ? changeKey(healthData) : undefined;

  return (
    <BodySTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        // filter={subFilter}
        filter={DUMMY_SUBFILTER}
      />
      <Table
        titles={table_title}
        data={modifiedData}
        onView={handleView}
        headNode={<PaginationField pageInfo={pageInfo} />}
      />
    </BodySTY>
  );
}

export default EditHistory;
