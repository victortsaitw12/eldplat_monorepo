import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
import Head from "next/head";
import { Pane } from "evergreen-ui";
import { ShiftSTY } from "./style";
import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/scheduleContext/UIProvider";
import { useShiftStore } from "@contexts/filter/shiftStore";
import { getAllDriverScheduleListFiltered } from "@services/schedule/getAllDriverScheduleListFiltered";
import MonthPicker from "@contents/Shift/MonthPicker";
import TableTitle from "@components/Table/TableTitle";
import OverviewTable from "@contents/Shift/OverviewTable";
import ZoomBar from "@components/ZoomBar";
import { EVENT_TYPE } from "@contents/Shift/shift.data";
import EventTag from "@contents/Shift/EventTag";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";

const mainFilterArray = [{ id: 1, label: "啟用", value: "1" }];

const ShiftPage: NextPageWithLayout<never> = () => {
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter
  } = useShiftStore();
  const [isExpand, setIsExpand] = React.useState(false);
  const [nowTab, setNowTab] = React.useState("1");

  React.useEffect(() => {
    updateMainFilter("active");
  }, []);

  React.useEffect(() => {
    let isCanceled = false;
    const dateStr = `${initialMonthFirst.getFullYear()}-${(
      initialMonthFirst.getMonth() +
      1 +
      0
    )
      // UI.monthCount
      .toString()
      .padStart(2, "0")}`;
    const fetchFilterData = async (isCanceled: boolean) => {
      getAllDriverScheduleListFiltered(dateStr, subFilter).then((res) => {
        // const resultData = res.contentList ? [...res.contentList] : [];
        if (isCanceled) return;
        if (!subFilter) {
          localStorage.setItem(
            "shiftInitFilter",
            JSON.stringify(res.conditionList)
          );
          initializeSubFilter();
        }
      });
    };
    fetchFilterData(isCanceled);
    return () => {
      isCanceled = true;
    };
  }, [nowTab, mainFilter, subFilter, initializeSubFilter]);

  //------ functions ------//
  const changeMainFilterHandler = (value: string) => setNowTab(value);
  const handleZoombar = (value: boolean) => {
    setIsExpand(value);
  };

  //------ get current month from user ------//
  const TODAY = new Date();
  const initialMonthFirst: Date = new Date(
    TODAY.getFullYear(),
    TODAY.getMonth(),
    1
  );

  // TODO 滑鼠左右滾的動作 目前用onWeel 放在 OverviewTable裡面 TableSTY上
  // 跟雯雯確認萬一駕駛數量多到要下滾 左右滾的設定?

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
                //pageInfo={pageInfo}
                //onPageChange={onPageChange}
              />
              <div className="overviewContainer">
                <OverviewTable
                  initialMonthFirst={initialMonthFirst}
                  isExpand={isExpand}
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
