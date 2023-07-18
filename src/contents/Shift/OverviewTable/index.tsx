import React from "react";
import { useRouter } from "next/router";
import { Checkbox, Table } from "evergreen-ui";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import { getAllDriverScheduleList } from "@services/schedule/getAllDriverScheduleList";
import { TableSTY } from "./style";
import { WKDAY_LABEL, EVENT_TYPE } from "@contents/Shift/shift.data";
import EventTag from "@contents/Shift/EventTag";
import { getDayStart } from "../shift.util";
import { DriverData, ScheduleInfoData, DateItem } from "../shift.typing";

interface I_OverviewTable {
  initialMonthFirst: Date;
  isExpand: boolean;
  handleCheckboxChange?: (item: any) => void;
  handleSelectAll?: () => void;
  handleDeselectAll?: () => void;
}
const OverviewTable = ({
  initialMonthFirst,
  isExpand,
  handleCheckboxChange = (item) => {
    console.log(item);
  },
  handleSelectAll,
  handleDeselectAll
}: I_OverviewTable) => {
  const UI = React.useContext(UIContext);
  const router = useRouter();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [allData, setAllData] = React.useState<DriverData[]>([]);
  const [checkedItems, setCheckedItems] = React.useState<any[]>([]);

  React.useEffect(() => {
    const queryString = `${initialMonthFirst.getFullYear()}-${(
      initialMonthFirst.getMonth() +
      1 +
      UI.monthCount
    )
      .toString()
      .padStart(2, "0")}`;
    const fetchData = async () => {
      const result = await getAllDriverScheduleList(queryString);
      const data = [...result.data];
      const updatedData = data.map(
        (item) => (item.scheduleInfo.id = item.scheduleInfo.driver_No)
      );
      setAllData(data);
      console.log("data:", result.data);
    };
    fetchData();
  }, [initialMonthFirst, UI.monthCount]);

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
  const handleScroll = (event: any) => {
    event.preventDefault();
    const container = containerRef.current;
    if (!container) return;
    container.scrollLeft += event.deltaY;
  };

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
        return (
          <EventTag
            key={`shift-${i}`}
            className={`shift-btn ${i >= 3 ? "hidden" : ""} ${
              item.check_Status === "0" ? "reminder" : ""
            }`}
            value={EVENT_TYPE.get(eventTypeCode)}
          />
        );
      });
    }
  };

  // checkbox +++
  const handleCheckAll = (e: any) => {
    checkedItems.length === allData.length
      ? setCheckedItems([])
      : setCheckedItems(allData.map((item) => item.id?.value));
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
      className="table-viewport"
      isExpand={isExpand}
      ref={containerRef}
      onWheel={handleScroll}
    >
      <Table className="eg-table">
        <Table.Head className="eg-head">
          <Checkbox
            className="eg-th checkbox"
            key="selectAll"
            label=""
            onChange={(e) => handleCheckAll(e)}
            checked={checkedItems.length === allData.length}
          />
          <Table.TextHeaderCell className="eg-th">
            駕駛姓名
          </Table.TextHeaderCell>
          <Table.TextHeaderCell className="eg-th">
            休假(天)
          </Table.TextHeaderCell>
          {dateCells}
        </Table.Head>
        <Table.Body className="eg-body" height={240}>
          {allData.map((item) => (
            <Table.Row
              className="eg-bodyRow"
              key={item.driverLeaveInfo.driver_No}
              isSelectable
              onSelect={handleClickUser.bind(
                null,
                item.driverLeaveInfo.driver_No
              )}
            >
              <Checkbox
                className="eg-td checkbox"
                key={"check-" + item.driverLeaveInfo.driver_No}
                label=""
              />
              <Table.TextCell className="eg-td">
                {item.driverLeaveInfo.user_Name}
              </Table.TextCell>
              <Table.TextCell className="eg-td">
                {item.driverLeaveInfo.total_Leave_Days}
              </Table.TextCell>
              {dateArr.map((date, i) => (
                <Table.TextCell
                  key={"shift-" + i}
                  className={`${date.timestamp} eg-td ${
                    date.day.weekend ? "weekend" : ""
                  }`}
                >
                  <div className="eventTag-container">
                    {renderShifts(date, item.scheduleInfo)}
                  </div>
                </Table.TextCell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {allData.length === 0 ? (
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
