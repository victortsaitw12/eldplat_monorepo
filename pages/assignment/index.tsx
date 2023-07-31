import React, { useState, useEffect, useRef, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { Text } from "evergreen-ui";
//
import { getLayout } from "@layout/MainLayout";
import LoadingSpinner from "@components/LoadingSpinner";
import { mappingQueryData } from "@utils/mappingQueryData";
import { convertDateAndTimeFormat } from "@utils/convertDate";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import Drawer from "@components/Drawer";
import AssignmentList from "@contents/Assignment/AssignmentList";
import AutoAssignBtn from "@contents/Assignment/AssignmentList/AutoAssignBtn";
import ManualAssignBtn from "@contents/Assignment/AssignmentList/ManualAssignBtn";

import {
  // assignParser, 移進/assignment 因為渲染畫面元件跟function
  assignPattern,
  getAllAssignments,
  defaultPageInfo
} from "@services/assignment/getAllAssignment";

import { useAssignmentStore } from "@contexts/filter/assignmentStore";
import { I_ManualCreateType } from "@typings/assignment_type";

import { dashDate2 } from "@utils/convertDate";

import {
  getBusAssignmentInfo,
  getDriverAssignmentInfo
} from "@services/assignment/getAssignmentEdit";

import { I_PageInfo } from "@components/PaginationField";
import AssignmentDrawers from "@contents/Assignment/AssignmentDrawers";
//
const mainFilterArray = [{ id: 1, label: "全部", value: "1" }];
export const startTimeName = ["start_hours", "start_minutes", "start_type"];
export const endTimeName = ["end_hours", "end_minutes", "end_type"];
//
const Page: NextPageWithLayout<never> = () => {
  const [data, setData] = useState<any>(null);
  const [subAssignData, setSubAssignData] = useState<any[]>([]);
  const [nowTab, setNowTab] = useState("1");
  const [firstDrawerOpen, setFirstDrawerOpen] = useState<string>("");
  // "autoAssign"|"manualAssign"| "editCar"| "editDriver"| "additionalCar" | "additionalDriver" | ""
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
  const timeRef = useRef(null);
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
  const [disabledAutoAssign, setDisabledAutoAssign] = useState<string[]>([]);

  // dayNum: 第幾天(點的那天-出發日期)
  // carNum: 點的那個日期的第幾車
  function setPosition(dayNum: number, carNum: number) {
    if (orderInfo[0].order_quantity === 1) {
      setOrderIndex(dayNum - 1 + (carNum - 1));
    } else {
      setOrderIndex(2 * (dayNum - 1) + carNum - 1);
    }
  }

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
                      `/client/orders/detail/${data.maintenance_quote_no}`
                    );
                console.log("goToPageDetail");
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
    //---------------------------------------------------------------
    getAllAssignments(pageInfo)
      .then((data) => {
        // ✅設定子列表的狀態
        const newSubData = data.contentList.map(
          (item: { assignments: any }) => {
            return item.assignments;
          }
        );
        if (isCanceled) {
          console.log("canceled");
          return;
        }
        if (!subFilter) {
          const DUMMY_FILTER = [
            {
              field_Name: "User_Name",
              arrayConditions: ["like", "equal"],
              displayType: "search",
              dataType: "string",
              label: "使用者姓名"
            }
          ];
          data.conditionList
            ? localStorage.setItem(
                "assignmentInitFilter",
                JSON.stringify(data.conditionList)
              )
            : localStorage.setItem(
                "assignmentInitFilter",
                JSON.stringify(DUMMY_FILTER)
              );
          initializeSubFilter();
        }
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
          const item_no = idx < 9 ? `000${idx + 1}` : `00${idx + 1}`;
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
            // TODO 🍅🍅🍅 這裡的 disabledAutoAssign 不會計入 virtual dom 更新state @@
            v["auto_assign"] = {
              label: newSubData[idx].length === 0 && (
                <AutoAssignBtn
                  setFirstDrawerOpen={() => setFirstDrawerOpen("autoAssign")}
                  id={v.maintenance_quote_no.value}
                  setOrderInfo={setOrderInfo}
                  disabled={disabledAutoAssign.includes(
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

  // 打開派單編輯頁
  const goToEditPageHandler = async (item: any) => {
    console.log("item for EDIT : ", item);
    if (item.assignment_no.substring(0, 3) === "BAM") {
      const result = await getBusAssignmentInfo(item.assignment_no);
      console.log("result for bus single assignment", result);
      setFirstDrawerOpen("editCar");
      const newResult = { ...result.dataList[0] };
      newResult["plate"] = item.license_plate;
      newResult["car_no"] = item.bus_day_number;
      newResult["assign_type"] = "派車";
      newResult["assignment_no"] = item.assignment_no;
      setEditData(newResult);
    } else {
      const result = await getDriverAssignmentInfo(item.assignment_no);
      console.log("result for driver single assignment", result);
      setFirstDrawerOpen("editDriver");
      const newResult = { ...result.dataList[0] };
      newResult["car_no"] = item.bus_day_number;
      newResult["assign_type"] = "派工";
      newResult["assignment_no"] = item.assignment_no;
      setEditData(newResult);
    }
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
      bus_day_number: showSecondTitle.car,
      task_start_time: `${dashDate2(showSecondTitle.date)}T01:00`,
      task_end_time: `${dashDate2(showSecondTitle.date)}T01:00`
    };

    // 判斷變動到的是起始時間而不是其他下拉選項的話:
    if (startTimeName.includes(e.target.name)) {
      if (e.target.name === "start_hours") {
        setStartTime((prev: any) => {
          return { ...prev, start_hours: e.target.value };
        });
      } else if (e.target.name === "start_minutes") {
        setStartTime((prev: any) => {
          return { ...prev, start_minutes: e.target.value };
        });
      } else if (e.target.name === "start_type") {
        setStartTime((prev: any) => {
          return { ...prev, start_type: e.target.value };
        });
      }
    }
    // 判斷變動到的是截止時間而不是其他下拉選項的話:
    if (endTimeName.includes(e.target.name)) {
      if (e.target.name === "end_hours") {
        setEndTime((prev: any) => {
          return { ...prev, end_hours: e.target.value };
        });
      } else if (e.target.name === "end_minutes") {
        setEndTime((prev: any) => {
          return { ...prev, end_minutes: e.target.value };
        });
      } else if (e.target.name === "end_type") {
        setEndTime((prev: any) => {
          return { ...prev, end_type: e.target.value };
        });
      }
    }

    // 把所有的時間組合成API可以接受的格式 (yyyy-mm-ddThh:mm)
    const newStartTime = `${dashDate2(showSecondTitle.date)}T${
      startTime.start_type === "pm"
        ? (Number(startTime.start_hours) + 12).toString()
        : startTime.start_hours
    }:${startTime.start_minutes}`;
    const newEndTime = `${dashDate2(showSecondTitle.date)}T${
      endTime.end_type === "pm"
        ? (Number(endTime.end_hours) + 12).toString()
        : endTime.end_hours
    }:${endTime.end_minutes}`;

    // 設回原大物件
    if (startTimeName.includes(e.target.name)) {
      newBusArr[orderIndex] = {
        ...target,
        task_start_time: newStartTime
      };
      newCreateAssignData.manual_bus = newBusArr;
    } else if (endTimeName.includes(e.target.name)) {
      newBusArr[orderIndex] = {
        ...target,
        task_end_time: newEndTime
      };
      newCreateAssignData.manual_bus = newBusArr;
    } else {
      newBusArr[orderIndex] = updatedTarget;
      newCreateAssignData.manual_bus = newBusArr;
    }

    // 判斷如果使用者沒選時間的話，就給個預設的
    // if (!Object.keys(newBusArr[orderIndex]).includes("task_start_time")) {
    //   console.log("77777");
    //   newBusArr[orderIndex] = {
    //     ...target,
    //     task_start_time: `${dashDate2(showSecondTitle.date)}T01:00`
    //   };
    //   console.log("newBusArr", newBusArr);
    // } else if (!Object.keys(newBusArr[orderIndex]).includes("task_end_time")) {
    //   newBusArr[orderIndex] = {
    //     ...target,
    //     task_end_time: `${dashDate2(showSecondTitle.date)}T01:00`
    //   };
    // }

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
      task_start_time: `${dashDate2(showSecondTitle.date)}T01:00`,
      task_end_time: `${dashDate2(showSecondTitle.date)}T01:00`
    };
    // 判斷變動到的是起始時間而不是其他下拉選項的話:
    if (startTimeName.includes(e.target.name)) {
      if (e.target.name === "start_hours") {
        setStartTime((prev: any) => {
          return { ...prev, start_hours: e.target.value };
        });
      } else if (e.target.name === "start_minutes") {
        setStartTime((prev: any) => {
          return { ...prev, start_minutes: e.target.value };
        });
      } else if (e.target.name === "start_type") {
        setStartTime((prev: any) => {
          return { ...prev, start_type: e.target.value };
        });
      }
    }
    // 判斷變動到的是截止時間而不是其他下拉選項的話:
    if (endTimeName.includes(e.target.name)) {
      if (e.target.name === "end_hours") {
        setEndTime((prev: any) => {
          return { ...prev, end_hours: e.target.value };
        });
      } else if (e.target.name === "end_minutes") {
        setEndTime((prev: any) => {
          return { ...prev, end_minutes: e.target.value };
        });
      } else if (e.target.name === "end_type") {
        setEndTime((prev: any) => {
          return { ...prev, end_type: e.target.value };
        });
      }
    }

    // 把所有的時間組合成API可以接受的格式 (yyyy-mm-ddThh:mm)
    const newStartTime = `${dashDate2(showSecondTitle.date)}T${
      startTime.start_type === "pm"
        ? (Number(startTime.start_hours) + 12).toString()
        : startTime.start_hours
    }:${startTime.start_minutes}`;
    const newEndTime = `${dashDate2(showSecondTitle.date)}T${
      endTime.end_type === "pm"
        ? (Number(endTime.end_hours) + 12).toString()
        : endTime.end_hours
    }:${endTime.end_minutes}`;

    // 設回原大物件
    if (startTimeName.includes(e.target.name)) {
      newDriverArr[orderIndex] = {
        ...target,
        task_start_time: newStartTime
      };
      newCreateAssignData.manual_driver = newDriverArr;
    } else if (endTimeName.includes(e.target.name)) {
      newDriverArr[orderIndex] = {
        ...target,
        task_end_time: newEndTime
      };
      newCreateAssignData.manual_driver = newDriverArr;
    } else {
      newDriverArr[orderIndex] = updatedTarget;
      newCreateAssignData.manual_driver = newDriverArr;
    }

    // 判斷如果使用者沒選時間的話，就給個預設的
    // if (newDriverArr[orderIndex].task_start_time === undefined) {
    //   newDriverArr[orderIndex] = {
    //     ...target,
    //     task_start_time: `${dashDate2(showSecondTitle.date)}T01:00`
    //   };
    //   newCreateAssignData.manual_driver = newDriverArr;
    // } else if (newDriverArr[orderIndex].task_end_time === undefined) {
    //   newDriverArr[orderIndex] = {
    //     ...target,
    //     task_end_time: `${dashDate2(showSecondTitle.date)}T01:00`
    //   };
    //   newCreateAssignData.manual_driver = newDriverArr;
    // }

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
  console.log("1️⃣orderInfo", orderInfo);
  console.log("2️⃣showSecondTitle", showSecondTitle);
  console.log("3️⃣carArr", carArr);
  console.log("4️⃣manual_bus", createAssignData.manual_bus);
  console.log("5️⃣createAssignData", createAssignData);
  console.log("6️⃣subAssignData", subAssignData);
  console.log("7️⃣orderIndex", orderIndex);
  console.log("8️⃣firstDrawerOpen", firstDrawerOpen);
  console.log("9️⃣editData", editData);

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
          {" "}
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
          orderInfo={orderInfo}
          data={data}
          reloadData={() => {
            fetchAssignData(false, nowTab);
            setFirstDrawerOpen("");
          }}
          setDisabledAutoAssign={setDisabledAutoAssign}
          showSecondTitle={showSecondTitle}
          setShowSecondTitle={setShowSecondTitle}
          setPosition={setPosition}
          createAssignData={createAssignData}
          orderIndex={orderIndex}
          editData={editData}
          setSubAssignData={setSubAssignData}
          handleAssignmentCarChange={handleAssignmentCarChange}
          timeRef={timeRef}
          handleAssignmentDriverChange={handleAssignmentDriverChange}
        />
      )}
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;

/*
    // 計算car陣列總共會有幾個物件
    const arrCount =
      (dayjs(orderInfo[0]?.return_date).diff(
        dashDate(orderInfo[0]?.departure_date),
        "day"
      ) +
        1) *
      orderInfo[0].order_quantity;
    console.log("arrCount", arrCount);
    [...new Array(arrCount)].map((v) => {}); */

/*
    const targetName = e.target.name as keyof I_ManualBus;
    const targetValue = e.target.value as any;
    if (!carArr?.map((v) => v.id).includes(showSecondTitle.id)) {
      setCarArr((prev) => [
        ...prev,
        {
          id: showSecondTitle.id,
          bus_no: targetName === "bus_no" && targetValue,
          bus_day_number: showSecondTitle.car,
          bus_group: targetName === "bus_group" && targetValue,
          task_start_time: showSecondTitle.date,
          task_end_time: showSecondTitle.date,
          remark: ""
        }
      ]);
    }
    */
/* 抽出 所有drawers to <AssignmentDrawers/> 
       {firstDrawerOpen === "manualAssign" && (
        <Drawer
          tabName={["手動派單"]}
          closeDrawer={
            !secondDrawerOpen ? () => setFirstDrawerOpen("") : undefined
          }
        >
          <AssignManualCreate
            assignData={data}
            reloadData={() => {
              fetchAssignData(false, nowTab);
              setFirstDrawerOpen("");
            }}
            secondDrawerOpen={secondDrawerOpen}
            setSecondDrawerOpen={setSecondDrawerOpen}
            orderInfo={orderInfo}e
            showSecondTitle={showSecondTitle}
            setShowSecondTitle={setShowSecondTitle}
            setPosition={setPosition}
            createAssignData={createAssignData}
            orderIndex={orderIndex}
          />
        </Drawer>
      )} 
       {firstDrawerOpen === "additionalCar" && (
        <Drawer
          tabName={["新增派車"]}
          closeDrawer={() => setFirstDrawerOpen("")}
        >
          <AssignmentAdditional
            type="car"
            orderInfo={orderInfo}
            createAssignData={createAssignData}
            setSubAssignData={setSubAssignData}
            setFirstDrawerOpen={setFirstDrawerOpen}
          />
        </Drawer>
      )}
      {firstDrawerOpen === "additionalDriver" && (
        <Drawer
          tabName={["新增派工"]}
          closeDrawer={() => setFirstDrawerOpen("")}
        >
          <AssignmentAdditional
            type="driver"
            orderInfo={orderInfo}
            createAssignData={createAssignData}
            setSubAssignData={setSubAssignData}
            setFirstDrawerOpen={setFirstDrawerOpen}
          />
        </Drawer>
      )}
      {firstDrawerOpen === "editCar" && (
        <Drawer closeDrawer={() => setFirstDrawerOpen("")}>
          <CarEdit editData={editData} />
        </Drawer>
      )}
      {firstDrawerOpen === "editDriver" && (
        <Drawer closeDrawer={() => setFirstDrawerOpen("")}>
          <DriverEdit editData={editData} />
        </Drawer>
      )}
      {firstDrawerOpen === "autoAssign" && (
        <Drawer
          tabName={["設定排程"]}
          closeDrawer={() => setFirstDrawerOpen("")}
        >
          <AssignAutoCreate
            orderInfo={orderInfo}
            setDisabledAutoAssign={setDisabledAutoAssign}
          />
        </Drawer>
      )} 
       {secondDrawerOpen === "派車" && (
        <Drawer
          isTabShown={false}
          closeDrawer={() => {
            setSecondDrawerOpen("");
          }}
        >
          <SecondCarAssignManualCreate
            createAssignData={createAssignData}
            showSecondTitle={showSecondTitle}
            handleAssignmentCarChange={handleAssignmentCarChange}
            timeRef={timeRef}
          ></SecondCarAssignManualCreate>
        </Drawer>
      )}
      {secondDrawerOpen === "派工" && (
        <Drawer
          closeDrawer={() => {
            setSecondDrawerOpen("");
          }}
        >
          <SecondDriverAssignManualCreate
            createAssignData={createAssignData}
            showSecondTitle={showSecondTitle}
            handleAssignmentDriverChange={handleAssignmentDriverChange}
          ></SecondDriverAssignManualCreate>
        </Drawer>
      )} */
