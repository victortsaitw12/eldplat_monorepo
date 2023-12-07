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

const table_title = ["修改說明", "修改人員", "修改時間"];

function HealthRecords({
  userNo,
  userName
}: {
  userNo: string;
  userName: string;
}) {
  const [editData, setEditData] = useState<I_Health_TYPE | any>([]);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);

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
        heal_date: item["heal_date"],
        heal_name: item["heal_name"],
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
