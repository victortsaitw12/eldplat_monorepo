import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
import Head from "next/head";
import { Pane } from "evergreen-ui";
import { ShiftSTY } from "./style";
import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/scheduleContext/UIProvider";
import { useShiftStore } from "@contexts/filter/shiftStore";
import {
  getAllDriverScheduleListFiltered,
  defaultPageInfo
} from "@services/schedule/getAllDriverScheduleListFiltered";
import MonthPicker from "@contents/Shift/MonthPicker";
import TableTitle from "@contents/Shift/TableTitle";
import OverviewTable from "@contents/Shift/OverviewTable";
import ZoomBar from "@components/ZoomBar";
import { EVENT_TYPE } from "@contents/Shift/shift.data";
import EventTag from "@contents/Shift/EventTag";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import { I_PageInfo } from "@components/PaginationField";

const mainFilterArray = [{ id: 1, label: "啟用", value: "1" }];

const ShiftPage: NextPageWithLayout<never> = () => {
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter
  } = useShiftStore();
  const [expandPercentage, setExpandPercentage] = React.useState<number>(0);
  const [nowTab, setNowTab] = React.useState("1");
  const [data, setData] = React.useState<any>([]);
  const [pageInfo, setPageInfo] = React.useState<I_PageInfo>(defaultPageInfo);
  const [monthCount, setMonthCount] = React.useState(0);

  //------ functions ------//
  const fetchData = async (subFilter: any, pageInfo: I_PageInfo) => {
    const dateStr = `${initialMonthFirst.getFullYear()}-${(
      initialMonthFirst.getMonth() +
      1 +
      monthCount
    )
      .toString()
      .padStart(2, "0")}`;
    getAllDriverScheduleListFiltered(dateStr, subFilter, pageInfo).then(
      (res) => {
        const data = [...res.contentList];
        const updatedData = data.map((item) => ({
          ...item,
          id: item.driver_No
        }));
        setData(data);
        setPageInfo(res.pageInfo);

        if (!subFilter) {
          localStorage.setItem(
            "shiftInitFilter",
            JSON.stringify(res.conditionList)
          );
          initializeSubFilter();
        }
      }
    );
  };
  const handleChangeMonth = (v: number) => {
    setMonthCount(v);
  };

  const handleZoombar = (value: number) => {
    setExpandPercentage(value);
  };

  // TODO: 一進入畫面時不跑
  const handlePageChange = React.useCallback(
    (pageQuery: I_PageInfo) => {
      if (
        pageInfo.page_Index === pageQuery.page_Index &&
        pageInfo.page_Size === pageQuery.page_Size
      )
        return;

      fetchData(subFilter, pageQuery);
    },
    [fetchData]
  );

  // 排班列表頁其實僅顯示"啟用"
  const changeMainFilterHandler = (value: string) => setNowTab(value);

  //------ get current month from user ------//
  const TODAY = new Date();
  const initialMonthFirst: Date = new Date(
    TODAY.getFullYear(),
    TODAY.getMonth(),
    1
  );
  //------ useEffect ------//
  React.useEffect(() => {
    updateMainFilter("active");
  }, []);

  React.useEffect(() => {
    fetchData(subFilter, pageInfo);
  }, [mainFilter, subFilter, initializeSubFilter, monthCount]);

  return (
    <UIProvider>
      <ShiftSTY>
        <Head>
          <title>駕駛排班總覽</title>
        </Head>
        <TableWrapper
          onChangeTab={changeMainFilterHandler}
          mainFilter={nowTab}
          mainFilterArray={mainFilterArray}
          viewOnly={true}
        >
          <FilterWrapper
            updateFilter={updateSubFilter}
            resetFilter={() => {
              initializeSubFilter();
            }}
            filter={subFilter}
          >
            <Pane className="pageContent">
              <TableTitle
                tableName={[
                  <MonthPicker
                    key="monthpicker"
                    initialMonthFirst={initialMonthFirst}
                    onMonthChange={handleChangeMonth}
                  />,
                  <div key="tabelTitle-type" className="container-header-left">
                    <span>全部區域</span>
                    <span>全部都市</span>
                  </div>
                ]}
                control={[<ZoomBar key="zoombar" setState={handleZoombar} />]}
                sub={Array.from(EVENT_TYPE).map(([key, value]) => {
                  if (key !== "00") return <EventTag key={key} value={value} />;
                })}
                page={true}
                pageInfo={pageInfo}
                onPageChange={handlePageChange}
              />
              <div className="overviewContainer">
                <OverviewTable
                  data={data}
                  initialMonthFirst={initialMonthFirst}
                  expandPercentage={expandPercentage}
                />
              </div>
            </Pane>
          </FilterWrapper>
        </TableWrapper>
      </ShiftSTY>
    </UIProvider>
  );
};

ShiftPage.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default ShiftPage;
