import React from "react";

import {
  InsertData,
  EventData,
  DrawerType,
  UItyping
} from "@contents/Shift/shift.typing";
import { formatDate } from "@contents/Shift/shift.util";
import { getScheduleUpdateList } from "@services/schedule/getScheduleUpdateList";

let defultUI: any;
const defaultDrawer = {
  type: "", //"view", "edit"
  title: "新增",
  timestamp: null
};
const defaultTimeframe = 1000 * 60 * 60 * 1;

export const UIContext = React.createContext(defultUI);

export const initData: InsertData = {
  driver_No: "",
  schd_Date: "",
  schd_Type: "03", //預設排休
  schd_Start_Time: "",
  schd_End_Time: "",
  leave_Code: "",
  leave_Description: "",
  leave_File_Url: "",
  check_Status: ""
};

export const UIProvider = ({ children }: any) => {
  const [id, setId] = React.useState<string>(""); // for [id]頁面裡面全部 component
  const [monthCount, setMonthCount] = React.useState<number>(0);
  const [isSelect, setIsSelect] = React.useState<boolean>(false);
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const [viewEventList, setViewEventList] = React.useState<EventData[]>([]);
  const [drawerType, setDrawerType] = React.useState<DrawerType>(defaultDrawer);
  const [insertData, setInsertData] = React.useState<InsertData>(initData);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [timeframe, setTimeframe] = React.useState<number>(defaultTimeframe);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isMouseMenuBtn, setIsMouseMenuBtn] = React.useState(false);

  const resetState = React.useCallback((): void => {
    setIsSelect(false);
    setStartDate(null);
    setEndDate(null);
    setViewEventList([]);
    setDrawerType(defaultDrawer);
    setInsertData(initData);
  }, []);

  const getEventStatusDrawer = React.useCallback(
    async (drv_Schedule_No: string, cellTimestamp: number) => {
      resetState();
      setIsLoading(true);
      setDrawerType({
        type: "view",
        title: formatDate(new Date(cellTimestamp)),
        timestamp: cellTimestamp
      });
      try {
        const result = await getScheduleUpdateList(drv_Schedule_No, id);
        const updateViewEventList = [result.data];
        setViewEventList(updateViewEventList);
        setIsLoading(false);
      } catch (e) {
        alert(e);
      }
    },
    [id, resetState]
  );

  const getSignOffEditDrawer = React.useCallback(
    async (drv_Schedule_No: string, cellTimestamp: number) => {
      resetState();
      setIsLoading(true);
      setDrawerType({
        type: "edit",
        title: "簽核",
        timestamp: cellTimestamp
      });
      try {
        const result = await getScheduleUpdateList(drv_Schedule_No, id);
        const updateInsertData = result.data;
        setInsertData(updateInsertData);
        setStartDate(new Date(updateInsertData.schd_Start_Time));
        setEndDate(new Date(updateInsertData.schd_End_Time));
        setIsLoading(false);
      } catch (e) {
        alert(e);
      }
    },
    [id, resetState]
  );

  const scheduleUI: UItyping = {
    id,
    setId,
    monthCount,
    setMonthCount,
    isSelect,
    setIsSelect,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    viewEventList,
    setViewEventList,
    drawerType,
    setDrawerType,
    insertData,
    setInsertData,
    isLoading,
    setIsLoading,
    timeframe,
    setTimeframe,
    mousePosition,
    setMousePosition,
    isMouseMenuBtn,
    setIsMouseMenuBtn,
    // function //
    resetState,
    getEventStatusDrawer,
    getSignOffEditDrawer
  };
  return <UIContext.Provider value={scheduleUI}>{children}</UIContext.Provider>;
};

export default UIProvider;
