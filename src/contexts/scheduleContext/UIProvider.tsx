import React from "react";
import {
  InsertData,
  EventData,
  DrawerType,
  UItyping
} from "@contents/Shift/shift.typing";

let defultUI: any;
export const UIContext = React.createContext(defultUI);

export const initData: InsertData = {
  //TODO: check 大小寫必要
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
  const [currentTab, setCurrentTab] = React.useState<number>(0); //如果未來 shift頁面要出現多個頁籤時使用
  const [monthCount, setMonthCount] = React.useState<number>(0);
  const [isSelect, setIsSelect] = React.useState<boolean>(false);
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const [viewEventList, setViewEventList] = React.useState<EventData[]>([]);
  const [drawerType, setDrawerType] = React.useState<DrawerType>({
    type: "", //"view", "edit"
    title: "新增",
    timestamp: null
  });
  const [insertData, setInsertData] = React.useState<InsertData>(initData);
  const [flag, setFlag] = React.useState<boolean>(true);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [timeframe, setTimeframe] = React.useState<number>(1000 * 60 * 60 * 1); // PM: fix to 1hour now
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isMouseMenuBtn, setIsMouseMenuBtn] = React.useState(false);

  const resetState = (): void => {
    console.log("< Reset state >");
    UI.setIsSelect(false);
    UI.setStartDate(null);
    UI.setEndDate(null);
    UI.setViewEventList([]);
    UI.setDrawerType({
      type: "",
      title: "新增",
      timestamp: null
    });
    UI.setInsertData(initData);
  };

  const UI: UItyping = {
    id,
    setId,
    currentTab,
    setCurrentTab,
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
    flag,
    setFlag,
    isLoading,
    setIsLoading,
    timeframe,
    setTimeframe,
    mousePosition,
    setMousePosition,
    isMouseMenuBtn,
    setIsMouseMenuBtn,
    // 共用 function
    resetState
  };
  return <UIContext.Provider value={UI}>{children}</UIContext.Provider>;
};

export default UIProvider;
