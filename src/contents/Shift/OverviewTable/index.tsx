import React from "react";
import { useRouter } from "next/router";
import { Checkbox, Table } from "evergreen-ui";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import { TableSTY } from "./style";
import { WKDAY_LABEL, EVENT_TYPE } from "@contents/Shift/shift.data";
import EventTag from "@contents/Shift/EventTag";
import { getDayStart } from "../shift.util";
import { DriverData, ScheduleInfoData, DateItem } from "../shift.typing";

interface I_OverviewTable {
  data: DriverData[];
  initialMonthFirst: Date;
  expandPercentage: number;
  handleCheckboxChange?: (item: any) => void;
  handleSelectAll?: () => void;
  handleDeselectAll?: () => void;
}
const OverviewTable = ({
  data,
  initialMonthFirst,
  expandPercentage,
  handleCheckboxChange = (item) => {
    console.log(item);
  },
  handleSelectAll,
  handleDeselectAll
}: I_OverviewTable) => {
  const UI = React.useContext(UIContext);
  const router = useRouter();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [checkedItems, setCheckedItems] = React.useState<any[]>([]);

  const curMonthFirst: Date = new Date(
    initialMonthFirst.getFullYear(),
    initialMonthFirst.getMonth() + UI.monthCount,
    1
  );
  const curMonthTotal: number = new Date(
    initialMonthFirst.getFullYear(),
    initialMonthFirst.getMonth() + 1 + UI.monthCount,
    0
  ).getDate();

  //------ functions ------//
  const handleClickUser = (id: string) => {
    router.push(`/shift/${id}?cur=${curMonthFirst}`);
  };

  const renderShifts = (date: DateItem, scheduleInfo: ScheduleInfoData[]) => {
    const shiftsOnGivenDate = scheduleInfo.filter(
      (item: ScheduleInfoData) =>
        getDayStart(new Date(item.schd_Start_Time)) <=
          new Date(date.timestamp.valueOf()) &&
        new Date(item.schd_End_Time) >= new Date(date.timestamp.valueOf())
    );

    if (shiftsOnGivenDate.length === 0) {
      return;
    } else {
      return shiftsOnGivenDate.map((item: ScheduleInfoData, i: number) => {
        const eventTypeCode =
          item.schd_Type === "04"
            ? item.schd_Type.concat(item.check_Status)
            : item.schd_Type;
        const shownTotal =
          shiftsOnGivenDate.length >= 3 ? 3 : shiftsOnGivenDate.length;
        return (
          <EventTag
            key={`shift-${i}`}
            className={`shift-btn ${i >= 3 ? "hidden" : ""} ${
              item.check_Status === "0" ? "reminder" : ""
            } n${shownTotal}`}
            value={EVENT_TYPE.get(eventTypeCode)}
          />
        );
      });
    }
  };

  // checkbox +++
  const handleCheckAll = (e: any) => {
    checkedItems.length === data.length
      ? setCheckedItems([])
      : setCheckedItems(data.map((item) => item.driver_No));
    if (!handleSelectAll || !handleDeselectAll) return;
    e.target.checked ? handleSelectAll() : handleDeselectAll();
  };

  const handleCheck = (e: any) => {
    if (checkedItems.includes(e.target.id)) {
      const updated = checkedItems.filter((item) => item !== e.target.id);
      setCheckedItems(updated);
    } else {
      const updated = [...checkedItems, e.target.id];
      setCheckedItems(updated);
    }

    if (!handleCheckboxChange) return;
    e.target.checked
      ? handleCheckboxChange(e.target.value)
      : handleCheckboxChange("");
  };

  // get current date arr
  const dateArr: Array<DateItem> = [];
  for (let i = 0; i < curMonthTotal; i++) {
    const wkday = WKDAY_LABEL.get((curMonthFirst.getDay() + i) % 7)!;
    dateArr.push({
      date: i + 1,
      day: wkday,
      timestamp: curMonthFirst.valueOf() + 86400000 * i
    });
  }

  const dateCells = dateArr.map((date, i) => (
    <Table.TextHeaderCell
      key={"date-" + i}
      className={`eg-th ${date.day.weekend ? "weekend" : ""}`}
    >
      <span className="date-date">{date.date}</span>
      <span className="date-day">{date.day.label}</span>
    </Table.TextHeaderCell>
  ));
  return (
    <TableSTY
      className="overviewTable"
      expandPercentage={expandPercentage}
      ref={containerRef}
      // onWheel={handleScroll}
    >
      <Table className="eg-table">
        <Table.Head className="eg-head" style={{ paddingRight: "0px" }}>
          <Checkbox
            className="eg-th checkbox"
            key="selectAll"
            label=""
            onChange={(e) => handleCheckAll(e)}
            checked={checkedItems.length === data.length}
          />
          <Table.TextHeaderCell
            className="eg-th"
            style={{ width: "64px", minWidth: "64px" }}
          >
            駕駛姓名
          </Table.TextHeaderCell>
          <Table.TextHeaderCell
            className="eg-th"
            style={{ width: "64px", minWidth: "64px" }}
          >
            休假(天)
          </Table.TextHeaderCell>
          {dateCells}
        </Table.Head>
        <Table.Body className="eg-body" height={240}>
          {data.map((item) => (
            <Table.Row
              className="eg-bodyRow"
              key={item.driver_No}
              isSelectable
              onSelect={handleClickUser.bind(null, item.driver_No)}
            >
              <Checkbox
                className="eg-td checkbox"
                key={"check-" + item.driver_No}
                id={item?.driver_No}
                checked={checkedItems.includes(item?.driver_No)}
                onChange={(e) => handleCheck(e)}
                onClick={(e: any) => {
                  e.stopPropagation();
                }}
              />
              <Table.TextCell
                className="eg-td"
                style={{ width: "64px", minWidth: "64px" }}
              >
                {item.user_Name}
              </Table.TextCell>
              <Table.TextCell
                className="eg-td"
                style={{ width: "64px", minWidth: "64px" }}
              >
                {item.total_Leave_Days}
              </Table.TextCell>
              {dateArr.map((date, i) => (
                <Table.TextCell
                  key={"shift-" + i}
                  className={`${date.timestamp} eg-td ${
                    date.day.weekend ? "weekend" : ""
                  }`}
                >
                  <div className="eventTag-container">
                    {renderShifts(date, item.schedule_List)}
                  </div>
                </Table.TextCell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {data.length === 0 ? (
        <div className="noResultMsg">
          {"搜尋條件 (日期/地區/姓名) 無可顯示資料。"}
        </div>
      ) : (
        ""
      )}
    </TableSTY>
  );
};

export default OverviewTable;
