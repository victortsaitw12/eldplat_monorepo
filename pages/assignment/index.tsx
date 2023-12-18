import React, { useState, useEffect, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { Pane, toaster } from "evergreen-ui";
import { BodySTY } from "./style";
import Head from "next/head";
import { useRouter } from "next/router";
//
import { getLayout } from "@layout/MainLayout";
import TabsWrapper from "@layout/TabsWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import { mappingQueryData } from "@utils/mappingQueryData";
import { useAssignmentStore } from "@contexts/filter/assignmentStore";
import LoadingSpinner from "@components/LoadingSpinner";
import { I_PageInfo } from "@components/PaginationField";
import AssignmentList from "@contents/Assignment/AssignmentList";
import AutoAssignBtn from "@contents/Assignment/AssignmentList/AutoAssignBtn";
import ManualAssignBtn from "@contents/Assignment/AssignmentList/ManualAssignBtn";
import AssignmentDrawers, {
  I_FirstDrawer
} from "@contents/Assignment/AssignmentDrawers";
import {
  assignParser,
  assignPattern,
  getAllAssignments,
  defaultPageInfo
} from "@services/assignment/getAllAssignment";
import {
  getBusAssignmentInfo,
  getDriverAssignmentInfo
} from "@services/assignment/getAssignmentEdit";
import { getOrderInfo } from "@services/assignment/getOrderInfo";

import BusTable from "@contents/Assignment/BusTable";
import BusStatusRow from "@contents/Assignment/BusStatusRow";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import { PlusIcon } from "evergreen-ui";

// ----- variables ----- //
const mainFilterArray = [
  { id: 1, label: "任務列表", value: "1" },
  { id: 2, label: "車輛分配", value: "2" }
];
// export const startTimeName = ["start_hours", "start_minutes", "start_type"];
// export const endTimeName = ["end_hours", "end_minutes", "end_type"];
const DUMMY_subfilter = {
  User_Name: {
    field_Name: "User_Name",
    arrayConditions: ["like", "equal"],
    displayType: "search",
    dataType: "string",
    label: "搜尋",
    value: ""
  },
  Dsph_Date: {
    field_Name: "Dsph_Date",
    arrayConditions: ["like", "equal"],
    displayType: "fix",
    dataType: "date",
    label: "日期區間",
    value: ""
  },
  Dsph_catefory: {
    field_Name: "Dsph_catefory",
    arrayConditions: ["like", "equal"],
    displayType: "fix",
    dataType: "string",
    label: "分類",
    value: ""
  }
};
const DUMMY_data = [];
// const DUMMY_FILTER = [
//   {
//     field_Name: "maintenance_quote_no",
//     arrayConditions: ["like", "equal"],
//     displayType: "search",
//     dataType: "string",
//     label: "單號"
//   },
//   {
//     field_Name: "DUMMY_TYPE",
//     arrayConditions: ["like", "equal"],
//     displayType: "fix",
//     dataType: "string",
//     label: "分類"
//   }
// ];

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [ordersData, setOrdersData] = useState<any>(null);
  const [busData, setBusData] = useState<any>([]);
  const [assignsData, setAssignsData] = useState<any[]>([]);
  const [nowTab, setNowTab] = useState("2");
  const [firstDrawerOpen, setFirstDrawerOpen] = useState<I_FirstDrawer>("");
  const [editData, setEditData] = useState<any>(null);
  const [orderInfo, setOrderInfo] = useState<any>(null);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const [disabledAutoList, setDisabledAutoList] = useState<string[]>([]);

  const [renderDate, setRenderDate] = React.useState(new Date());

  useEffect(() => {
    setOrdersData((oldData: Array<any>) => {
      if (!oldData) return oldData;
      const updateData = oldData.map((item) => {
        const quoteNo = item.maintenance_quote_no.value;
        if (disabledAutoList.includes(quoteNo)) {
          const newItem = item;
          newItem["auto_assign"] = {
            label: (
              <AutoAssignBtn
                id={newItem.maintenance_quote_no.value}
                onBtnClick={handleAssignCreate.bind(null, "autoAssign")}
                disabled={disabledAutoList.includes(
                  newItem.maintenance_quote_no.value
                )}
              />
            ),
            value: null
          };

          return newItem;
          //
        }
        return item;
      });
      return updateData;
    });
  }, [disabledAutoList]);
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter
  } = useAssignmentStore();
  //

  const fetchAssignData = async (
    isCanceled: boolean,
    mainFilter = "1",
    pageInfo = defaultPageInfo
  ) => {
    //---------------------------------------------------------------
    getAllAssignments(pageInfo)
      .then((res) => {
        // if (isCanceled) {
        //   console.log("canceled");
        //   return;
        // }
        // if (!subFilter) {
        //   localStorage.setItem(
        //     "assignmentInitFilter",
        //     JSON.stringify(ordersData.conditionList || DUMMY_FILTER)
        //   );
        //   initializeSubFilter();
        // }
        // // ✅設定子列表的狀態
        // const newSubData = ordersData.contentList.map(
        //   (item: { assignments: any }) => item.assignments
        // );
        // setAssignsData(newSubData);
        // setPageInfo(ordersData.pageInfo);

        // // ✅設定外層列表狀態
        // const assignData = mappingQueryData(
        //   ordersData.contentList,
        //   assignPattern,
        //   assignParser
        // );
        // const newData = [...assignData];
        // newData.map((v, idx) => {
        //   const item_no = (
        //     (pageInfo.Page_Index - 1) * pageInfo.Page_Size +
        //     idx +
        //     1
        //   )
        //     .toString()
        //     .padStart(4, "0");
        //   v["no"] = { label: item_no, value: item_no };
        //   if (v.maintenance_quote_no.value.substring(0, 3) === "MTC") {
        //     // 維保單無按鈕
        //     v["auto_assign"] = {
        //       label: " ",
        //       value: null
        //     };
        //     v["manual_assign"] = {
        //       label: " ",
        //       value: null
        //     };
        //   } else {
        //     // 全新訂單排程按鈕 or 已排程訂單修改按鈕
        //     v["auto_assign"] = {
        //       label: newSubData[idx].length === 0 && (
        //         <AutoAssignBtn
        //           id={v.maintenance_quote_no.value}
        //           onBtnClick={handleAssignCreate.bind(null, "autoAssign")}
        //           disabled={disabledAutoList.includes(
        //             v.maintenance_quote_no.value
        //           )}
        //         />
        //       ),
        //       value: null
        //     };
        //     v["manual_assign"] = {
        //       label: newSubData[idx].length === 0 && (
        //         <ManualAssignBtn
        //           id={v.maintenance_quote_no.value}
        //           onBtnClick={handleAssignCreate.bind(null, "manualAssign")}
        //         />
        //       ),
        //       value: null
        //     };
        //   }
        // });
        const data = res;
        setBusData(data);
      })
      .catch((err) => {
        console.error("error in assignment list", err);
      });
  };

  const fetchDrawerInfo = async (id: string) => {
    try {
      const res = await getOrderInfo(id);
      const data = res.dataList;
      setOrderInfo(data);
      return true;
    } catch (err) {
      console.log("err of click the finish button", err);
      return false;
    }
  };

  // 處理mainFilter
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
  };

  // 處理切換頁面
  const upDatePageHandler = (newPageInfo: I_PageInfo) => {
    fetchAssignData(false, nowTab, newPageInfo);
  };

  const fetchEditData = async (
    assignment_no: string,
    type: "editCar" | "editDriver"
  ) => {
    try {
      const result =
        type === "editCar"
          ? await getBusAssignmentInfo(assignment_no)
          : await getDriverAssignmentInfo(assignment_no);
      if (result.statusCode !== "200") throw new Error(`${result.message}`);
      return result;
    } catch (e: any) {
      console.log(e.message);
      toaster.warning("發生錯誤，請再試一次");
    }
  };
  const handleAssignCreate = (type: I_FirstDrawer, id: string) => {
    fetchDrawerInfo(id);
    setFirstDrawerOpen(type);
  };

  useEffect(() => {
    const isCanceled = false;
    fetchAssignData(isCanceled, "1");
  }, []);
  // useEffect(() => {
  //   let isCanceled = false;
  //   fetchAssignData(isCanceled, nowTab);
  //   return () => {
  //     isCanceled = true;
  //   };
  // }, [nowTab]);

  // if (!ordersData) return <LoadingSpinner />;

  return (
    <BodySTY>
      <Head>
        <title>任務指派</title>
      </Head>
      <div className="pageContent">
        <TabsWrapper
          onChangeTab={changeMainFilterHandler}
          mainFilter={nowTab}
          mainFilterArray={mainFilterArray}
        >
          {nowTab === "1" && <BusStatusRow />}
          <FilterWrapper
            updateFilter={updateSubFilter}
            resetFilter={() => {
              initializeSubFilter();
            }}
            filter={DUMMY_subfilter}
            btns={
              <PrimaryBtn
                text="新增任務"
                onClick={() => router.push("/driver/detail/create")}
              >
                <PlusIcon />
              </PrimaryBtn>
            }
          >
            {nowTab === "1" ? (
              <Pane></Pane>
            ) : (
              <Pane className="pageContent">
                <div className="overviewContainer">
                  <BusTable data={busData} initialDate={renderDate} />
                </div>
              </Pane>
            )}
          </FilterWrapper>
        </TabsWrapper>
      </div>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
