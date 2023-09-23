import React, { useState, useEffect, useRef, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { Text, toaster } from "evergreen-ui";
//
import { getLayout } from "@layout/MainLayout";
import LoadingSpinner from "@components/LoadingSpinner";
import { mappingQueryData } from "@utils/mappingQueryData";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import AssignmentList from "@contents/Assignment/AssignmentList";
import AutoAssignBtn from "@contents/Assignment/AssignmentList/AutoAssignBtn";
import ManualAssignBtn from "@contents/Assignment/AssignmentList/ManualAssignBtn";

import {
  // assignParser, 因為渲染畫面元件跟function移進/assignment
  assignPattern,
  getAllAssignments,
  defaultPageInfo
} from "@services/assignment/getAllAssignment";

import { useAssignmentStore } from "@contexts/filter/assignmentStore";
import { I_ManualCreateType } from "@typings/assignment_type";

import {
  dashDate,
  slashDate,
  convertDateAndTimeFormat
} from "@utils/convertDate";
import {
  getBusAssignmentInfo,
  getDriverAssignmentInfo
} from "@services/assignment/getAssignmentEdit";

import { I_PageInfo } from "@components/PaginationField";
import AssignmentDrawers, {
  I_FirstDrawer
} from "@contents/Assignment/AssignmentDrawers";

// ----- variables ----- //
const mainFilterArray = [{ id: 1, label: "全部", value: "1" }];
export const startTimeName = ["start_hours", "start_minutes", "start_type"];
export const endTimeName = ["end_hours", "end_minutes", "end_type"];
const DUMMY_FILTER = [
  {
    field_Name: "maintenance_quote_no",
    arrayConditions: ["like", "equal"],
    displayType: "search",
    dataType: "string",
    label: "單號"
  },
  {
    field_Name: "DUMMY_TYPE",
    arrayConditions: ["like", "equal"],
    displayType: "fix",
    dataType: "string",
    label: "分類"
  }
];

const Page: NextPageWithLayout<never> = () => {
  const [data, setData] = useState<any>(null);
  const [subAssignData, setSubAssignData] = useState<any[]>([]);
  const [nowTab, setNowTab] = useState("1");
  const [firstDrawerOpen, setFirstDrawerOpen] = useState<I_FirstDrawer>("");
  const [secondDrawerOpen, setSecondDrawerOpen] = useState<string>("");
  const [editData, setEditData] = useState<any>(null);
  const [orderInfo, setOrderInfo] = useState<any>(null);
  const [showSecondTitle, setShowSecondTitle] = useState<any>();
  const [carArr, setCarArr] = useState<any[]>([]);
  const [orderIndex, setOrderIndex] = useState<number>(1);
  const [createAssignData, setCreateAssignData] = useState<I_ManualCreateType>({
    quote_no: "",
    manual_driver: [],
    manual_bus: []
  });
  const router = useRouter();
  const [startTime, setStartTime] = useState<any>({
    start_hours: "00",
    start_minutes: "00",
    start_type: ""
  });
  const [endTime, setEndTime] = useState<any>({
    end_hours: "00",
    end_minutes: "00",
    end_type: ""
  });
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const [disabledAutoList, setDisabledAutoList] = useState<string[]>([]);

  // dayNum: 第幾天(點的那天-出發日期)
  // carNum: 點的那個日期的第幾車
  function setPosition(dayNum: number, carNum: number) {
    if (orderInfo[0].order_quantity === 1) {
      setOrderIndex(dayNum - 1 + (carNum - 1));
    } else {
      setOrderIndex(2 * (dayNum - 1) + carNum - 1);
    }
  }
  useEffect(() => {
    setData((oldData: Array<any>) => {
      if (!oldData) return oldData;
      const updateData = oldData.map((item) => {
        const quoteNo = item.maintenance_quote_no.value;
        if (disabledAutoList.includes(quoteNo)) {
          const newItem = item;
          newItem["auto_assign"] = {
            label: (
              <AutoAssignBtn
                setFirstDrawerOpen={() => setFirstDrawerOpen("autoAssign")}
                id={newItem.maintenance_quote_no.value}
                setOrderInfo={setOrderInfo}
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

  const assignParser = (data: any, key: string) => {
    // if (key === "id") {
    //   return {
    //     label: data["customer_no"] || null,
    //     value: data["customer_no"] || null
    //   };
    // }
    if (key === "maintenance_quote_no") {
      return {
        label: (
          <Text
            style={{
              cursor: "pointer"
            }}
            onClick={() => {
              data.maintenance_quote_no.substring(0, 3) === "MTC"
                ? router.push(
                    `/maintenance/detail/${data.maintenance_quote_no}?editPage=view`
                  )
                : router.push(
                    `/admin_orders/detail/${data.maintenance_quote_no}?type=1`
                  );
            }}
          >
            {data.maintenance_quote_no || "--"}
          </Text>
        ),
        value: data.maintenance_quote_no || null
      };
    }
    if (key === "task_start_time") {
      return {
        label:
          data.task_start_time !== null
            ? convertDateAndTimeFormat(data.task_start_time)
            : "--",
        value:
          data.task_start_time !== null
            ? convertDateAndTimeFormat(data.task_start_time)
            : "--"
      };
    }
    if (key === "task_end_time") {
      return {
        label:
          data.task_end_time !== null
            ? convertDateAndTimeFormat(data.task_end_time)
            : "--",
        value:
          data.task_end_time !== null
            ? convertDateAndTimeFormat(data.task_end_time)
            : "--"
      };
    }

    return {
      label: data[key] || "--",
      value: data[key] || null
    };
  };

  const fetchAssignData = async (
    isCanceled: boolean,
    mainFilter = "1",
    pageInfo = defaultPageInfo
  ) => {
    //---------------------------------------------------------------
    getAllAssignments(pageInfo)
      .then((data) => {
        if (isCanceled) {
          console.log("canceled");
          return;
        }
        if (!subFilter) {
          localStorage.setItem(
            "assignmentInitFilter",
            JSON.stringify(data.conditionList || DUMMY_FILTER)
          );
          initializeSubFilter();
        }
        // ✅設定子列表的狀態
        const newSubData = data.contentList.map(
          (item: { assignments: any }) => {
            return item.assignments;
          }
        );
        setSubAssignData(newSubData);
        setPageInfo(data.pageInfo);

        // ✅設定外層列表狀態
        const assignData = mappingQueryData(
          data.contentList,
          assignPattern,
          assignParser
        );
        const newData = [...assignData];
        newData.map((v, idx) => {
          // const item_no = idx < 9 ? `000${idx + 1}` : `00${idx + 1}`;
          const item_no = (
            (pageInfo.page_Index - 1) * pageInfo.page_Size +
            idx +
            1
          )
            .toString()
            .padStart(4, "0");
          v["no"] = { label: item_no, value: item_no };
          if (v.maintenance_quote_no.value.substring(0, 3) === "MTC") {
            // 維保單無按鈕
            v["auto_assign"] = {
              label: " ",
              value: null
            };
            v["manual_assign"] = {
              label: " ",
              value: null
            };
          } else {
            // 全新訂單排程按鈕 or 已排程訂單修改按鈕
            v["auto_assign"] = {
              label: newSubData[idx].length === 0 && (
                <AutoAssignBtn
                  setFirstDrawerOpen={() => setFirstDrawerOpen("autoAssign")}
                  id={v.maintenance_quote_no.value}
                  setOrderInfo={setOrderInfo}
                  disabled={disabledAutoList.includes(
                    v.maintenance_quote_no.value
                  )}
                />
              ),
              value: null
            };
            v["manual_assign"] = {
              label: newSubData[idx].length === 0 && (
                <ManualAssignBtn
                  id={v.maintenance_quote_no.value}
                  setFirstDrawerOpen={() => setFirstDrawerOpen("manualAssign")}
                  setOrderInfo={setOrderInfo}
                />
              ),
              value: null
            };
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.error("error in assignment list", err);
      });
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

  // 打開派單編輯側欄
  const goToEditPageHandler = async (item: any) => {
    const type =
      item.assignment_no.substring(0, 3) === "BAM" ? "editCar" : "editDriver";
    const result = await fetchEditData(item.assignment_no, type);
    if (!result) return;
    setFirstDrawerOpen(type);
    const newResult = { ...result.dataList[0] };
    newResult["car_no"] = item.bus_day_number;
    newResult["assignment_no"] = item.assignment_no;
    if (type === "editCar") newResult["plate"] = item.license_plate;
    setEditData(newResult);
  };

  // ⭐新增派車單: onChange
  const handleAssignmentCarChange = (
    e: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const newCreateAssignData = { ...createAssignData };
    const newBusArr = [...newCreateAssignData.manual_bus];
    const target = newBusArr[orderIndex];
    const updatedTarget = {
      ...target,
      [e.target.name]: e.target.value,
      bus_day_number: showSecondTitle.car
    };

    // 設回原大物件
    newBusArr[orderIndex] = updatedTarget;
    newCreateAssignData.manual_bus = newBusArr;

    newCreateAssignData["quote_no"] = orderInfo[0].quote_no;
    setCreateAssignData(newCreateAssignData);
  };

  // ⭐新增派工單: onChange
  const handleAssignmentDriverChange = (
    e: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const newCreateAssignData = { ...createAssignData };
    const newDriverArr = [...newCreateAssignData.manual_driver];
    const target = newDriverArr[orderIndex];
    const updatedTarget = {
      ...target,
      [e.target.name]: e.target.value,
      bus_day_number: showSecondTitle.car,
      task_start_time: `${dashDate(showSecondTitle.date)}T${
        startTime.start_hours
      }:${startTime.start_minutes}`,
      task_end_time: `${dashDate(showSecondTitle.date)}T${endTime.end_hours}:${
        endTime.end_minutes
      }`
    };
    // 判斷變動到的是起始時間而不是其他下拉選項的話:
    if (startTimeName.includes(e.target.name)) {
      let newStartTime = updatedTarget.task_start_time;
      if (e.target.name === "start_hours") {
        setStartTime((prev: any) => {
          return { ...prev, start_hours: e.target.value };
        });
        newStartTime = `${dashDate(showSecondTitle.date)}T${
          startTime.start_type === "pm"
            ? (Number(e.target.value) + 12).toString()
            : e.target.value
        }:${startTime.start_minutes}`;
      } else if (e.target.name === "start_minutes") {
        setStartTime((prev: any) => {
          return { ...prev, start_minutes: e.target.value };
        });

        newStartTime = `${dashDate(showSecondTitle.date)}T${
          startTime.start_type === "pm"
            ? (Number(startTime.start_hours) + 12).toString()
            : startTime.start_hours
        }:${e.target.value}`;
      } else if (e.target.name === "start_type") {
        setStartTime((prev: any) => {
          return { ...prev, start_type: e.target.value };
        });
        newStartTime = `${dashDate(showSecondTitle.date)}T${
          e.target.value === "pm"
            ? (Number(startTime.start_hours) + 12).toString()
            : startTime.start_hours
        }:${startTime.start_minutes}`;
      }
      updatedTarget.task_start_time = newStartTime;
    }
    // 判斷變動到的是截止時間而不是其他下拉選項的話:
    if (endTimeName.includes(e.target.name)) {
      let newEndTime = updatedTarget.task_end_time;
      if (e.target.name === "end_hours") {
        setEndTime((prev: any) => {
          return { ...prev, end_hours: e.target.value };
        });

        newEndTime = `${dashDate(showSecondTitle.date)}T${
          endTime.end_type === "pm"
            ? (Number(e.target.value) + 12).toString()
            : e.target.value
        }:${endTime.end_minutes}`;
      } else if (e.target.name === "end_minutes") {
        setEndTime((prev: any) => {
          return { ...prev, end_minutes: e.target.value };
        });
        newEndTime = `${dashDate(showSecondTitle.date)}T${
          endTime.end_type === "pm"
            ? (Number(endTime.end_hours) + 12).toString()
            : endTime.end_hours
        }:${e.target.value}`;
      } else if (e.target.name === "end_type") {
        setEndTime((prev: any) => {
          return { ...prev, end_type: e.target.value };
        });

        newEndTime = `${dashDate(showSecondTitle.date)}T${
          e.target.value === "pm"
            ? (Number(endTime.end_hours) + 12).toString()
            : endTime.end_hours
        }:${endTime.end_minutes}`;
      }
      updatedTarget.task_end_time = newEndTime;
    }

    // 設回原大物件
    newDriverArr[orderIndex] = updatedTarget;
    newCreateAssignData.manual_driver = newDriverArr;

    newCreateAssignData["quote_no"] = orderInfo[0].quote_no;
    setCreateAssignData(newCreateAssignData);
  };

  useEffect(() => {
    let isCanceled = false;
    fetchAssignData(isCanceled, nowTab);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);

  if (!data) {
    return <LoadingSpinner />;
  }

  // TODO naming assignData => data
  // TODO naming subAssignData => subData
  // console.log("0️⃣assignData", data);
  // console.log("1️⃣orderInfo", orderInfo);
  // console.log("2️⃣showSecondTitle", showSecondTitle);
  // console.log("3️⃣carArr", carArr);
  // console.log("4️⃣manual_bus", createAssignData.manual_bus);
  console.log("5️⃣createAssignData", createAssignData);
  // console.log("6️⃣subAssignData", subAssignData);
  // console.log("7️⃣orderIndex", orderIndex);
  // console.log("8️⃣firstDrawerOpen", firstDrawerOpen);
  // console.log("9️⃣editData", editData);

  return (
    <BodySTY>
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
          <div style={{ color: "red", fontSize: "36px" }}></div>
          <AssignmentList
            assignData={data}
            subAssignData={subAssignData}
            goToCreatePage={() => {
              setFirstDrawerOpen("manualAssign");
            }}
            goToEditPageHandler={goToEditPageHandler}
            pageInfo={pageInfo}
            onPageChange={upDatePageHandler}
            setOrderInfo={setOrderInfo}
            setFirstDrawerOpen={setFirstDrawerOpen}
          />
        </FilterWrapper>
      </TableWrapper>
      {firstDrawerOpen !== "" && (
        <AssignmentDrawers
          firstDrawerOpen={firstDrawerOpen}
          setFirstDrawerOpen={setFirstDrawerOpen}
          secondDrawerOpen={secondDrawerOpen}
          setSecondDrawerOpen={setSecondDrawerOpen}
          assignData={data}
          refetch={() => {
            setPageInfo(defaultPageInfo);
            fetchAssignData(false, nowTab, defaultPageInfo);
            setFirstDrawerOpen("");
          }}
          orderInfo={orderInfo}
          setDisabledAutoList={setDisabledAutoList}
          showSecondTitle={showSecondTitle}
          setShowSecondTitle={setShowSecondTitle}
          setPosition={setPosition}
          createAssignData={createAssignData}
          orderIndex={orderIndex}
          editData={editData}
          handleAssignmentCarChange={handleAssignmentCarChange}
          handleAssignmentDriverChange={handleAssignmentDriverChange}
        />
      )}
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
