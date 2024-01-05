import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
import Head from "next/head";
import { Pane } from "evergreen-ui";
import { ShiftSTY } from "./style";
import { useRouter } from "next/router";
import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/scheduleContext/UIProvider";
import { useShiftStore } from "@contexts/filter/shiftStore";
import {
  getAllDriverScheduleListFiltered,
  defaultPageInfo
} from "@services/schedule/getAllDriverScheduleListFiltered";
import MonthPicker from "@contents/Schedule/MonthPicker";
import PaginationField, { I_PageInfo } from "@components/PaginationField";
import OverviewTable from "@contents/Schedule/OverviewTable";
import ZoomBar from "@components/ZoomBar";
import { EVENT_TYPE } from "@contents/Shift/shift.data";
import EventTag from "@contents/Schedule/EventTag";
import FilterWrapper from "@layout/FilterWrapper";

const ShiftPage: NextPageWithLayout<never> = () => {
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter
  } = useShiftStore();
  const [expandPercentage, setExpandPercentage] = React.useState<number>(0);
  const [data, setData] = React.useState<any>([]);
  const [pageInfo, setPageInfo] = React.useState<I_PageInfo>(defaultPageInfo);
  const [renderDate, setRenderDate] = React.useState(new Date());

  const DUMMY_subfilter = {
    User_Name: {
      field_Name: "User_Name",
      arrayConditions: ["like", "equal"],
      displayType: "search",
      dataType: "string",
      label: "駕駛-名",
      value: ""
    },
    Dsph_Area: {
      field_Name: "Dsph_Area",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "駐派區域",
      value: ""
    }
  };
  const DUMMY_pageInfo = {
    Page_Index: 1,
    Page_Size: 10,
    Orderby: null,
    Arrangement: "desc",
    Total: 5,
    Last_Page: 1
  };
  //------ functions ------//
  const fetchData = async (subFilter: any, pageInfo: I_PageInfo) => {
    const dateStr = `${renderDate.getFullYear()}-${(
      renderDate.getMonth() +
      1 +
      0
    )
      .toString()
      .padStart(2, "0")}`;
    getAllDriverScheduleListFiltered(dateStr, subFilter, pageInfo).then(
      (res) => {
        const data = res;
        // const data = [...res.resultList];
        // const updatedData = data.map((item) => ({
        //   ...item,
        //   id: item.driver_No
        // }));
        setData(data);
        // setPageInfo(res.pageInfo);
        setPageInfo(DUMMY_pageInfo);

        // if (!subFilter) {
        //   localStorage.setItem(
        //     "shiftInitFilter",
        //     JSON.stringify(res.conditionList)
        //   );
        //   initializeSubFilter();
        // }
      }
    );
  };
  const handleChangeMonth = (v: Date) => {
    setRenderDate(v);
  };

  const handleZoombar = (value: number) => {
    setExpandPercentage(value);
  };

  // TODO: 一進入畫面時不跑
  const handlePageChange = React.useCallback(
    (pageQuery: I_PageInfo) => {
      if (
        pageInfo.Page_Index === pageQuery.Page_Index &&
        pageInfo.Page_Size === pageQuery.Page_Size
      )
        return;

      fetchData(subFilter, pageQuery);
    },
    [fetchData]
  );

  React.useEffect(() => {
    fetchData(subFilter, pageInfo);
  }, [mainFilter, subFilter, initializeSubFilter, 0]);

  return (
    <UIProvider>
      <ShiftSTY>
        <Head>
          <title>駕駛出勤管理</title>
        </Head>
        <div className="pageContent">
          <Pane display="flex" paddingTop={8}>
            <FilterWrapper
              updateFilter={updateSubFilter}
              resetFilter={() => {
                initializeSubFilter();
              }}
              filter={DUMMY_subfilter}
            ></FilterWrapper>
            <MonthPicker
              key="monthpicker"
              initialDate={renderDate}
              onMonthChange={handleChangeMonth}
            />
          </Pane>
          <Pane
            className="overviewControl"
            display="flex"
            justifyContent="space-between"
          >
            <Pane display="flex">
              {Array.from(EVENT_TYPE).map(([key, value]) => {
                if (key !== "00" && key !== "042")
                  return <EventTag key={key} value={value} />;
              })}
            </Pane>
            <ZoomBar key="zoombar" setState={handleZoombar} />
          </Pane>
          <Pane className="overviewPag">
            <PaginationField
              pageInfo={pageInfo}
              onPageChange={handlePageChange}
            />
          </Pane>
          <div className="overviewContainer">
            <OverviewTable
              data={data}
              initialDate={renderDate}
              expandPercentage={expandPercentage}
            />
          </div>
        </div>
      </ShiftSTY>
    </UIProvider>
  );
};

ShiftPage.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default ShiftPage;
