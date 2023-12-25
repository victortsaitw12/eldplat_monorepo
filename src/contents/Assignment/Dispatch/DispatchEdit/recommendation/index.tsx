import React, { useState, useEffect, ReactNode } from "react";
import { DivSTY } from "./style";
import Table from "@components/Table/Table";
import FilterWrapper from "@layout/FilterWrapper";
import SecondaryBtn from "@components/Button/Secondary/Label";
import { DriveTimeIcon, Radio, Pane } from "evergreen-ui";
import { I_PageInfo } from "@components/PaginationField";
import PaginationField from "@components/PaginationField";
import { useBusStore } from "@contexts/filter/busStore";
import {
  getBusData,
  getBusTitle,
  I_BusData
} from "@services/assignment/getRecommendCar";
import LoadingSpinner from "@components/LoadingSpinner";

const Recommendation = () => {
  const [data, setData] = useState<any>(null);
  const busTitle = getBusTitle();

  const [pageInfo, setPageInfo] = useState<I_PageInfo>({
    Arrangement: "desc",
    Orderby: null,
    Page_Index: 1,
    Page_Size: 4,
    Last_Page: 10
  });
  const { initializeSubFilter, subFilter, updateSubFilter } = useBusStore();

  const fetchBusData = async (
    isCanceled: boolean,
    mainFilter = "1",
    pageInfo: I_PageInfo
  ) => {
    getBusData(pageInfo, subFilter, mainFilter).then((res) => {
      const { resultList: busesData, pageInfo } = res;
      if (isCanceled) {
        console.log("canceled");
        return;
      }

      if (!subFilter) {
        localStorage.setItem(
          "busInitFilter",
          JSON.stringify(res.conditionList)
        );
        initializeSubFilter();
      }

      setData(busesData);
      //   setPageInfo(pageInfo);
    });
  };

  useEffect(() => {
    console.log("call useEffect");
    let isCanceled = false;
    fetchBusData(isCanceled, "1", pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [pageInfo, subFilter]);

  if (!data) {
    return <LoadingSpinner />;
  }

  const controlButton = (
    <SecondaryBtn text={"前往車輛列表"} onClick={console.log}>
      <DriveTimeIcon size={14} />
    </SecondaryBtn>
  );

  const changeKey = (data: Array<any>) => {
    return data.map((item: any) => {
      return {
        action: <Radio name="group" />,
        id: item.id,
        bus_name: item.bus_name,
        type: item.type,
        main_driver: item.main_driver,
        prev_end_info: (
          <div className="stop_info">
            <p>{item.prev_end_dt}</p>
            <p>{item.prev_end_location}</p>
          </div>
        ),
        next_begin_info: (
          <div className="stop_info">
            <p>{item.prev_begin_dt}</p>
            <p>{item.prev_begin_location}</p>
          </div>
        )
      };
    });
  };

  const modifiedData = data ? changeKey(data) : undefined;

  return (
    <DivSTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        filter={subFilter}
        btns={controlButton}
      />
      <Pane aria-label="Radio Group Label 12" role="group">
        <Table
          titles={busTitle}
          data={modifiedData}
          onView={console.log}
          headNode={<PaginationField pageInfo={pageInfo} />}
        />
      </Pane>
    </DivSTY>
  );
};

export default Recommendation;
