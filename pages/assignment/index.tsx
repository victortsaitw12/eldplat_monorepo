import React, { useState, useEffect, useRef } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import LoadingSpinner from "@components/LoadingSpinner";
import { mappingQueryData } from "@utils/mappingQueryData";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import { deleteCustomer } from "@services/customer/deleteCustomer";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import Drawer from "@components/Drawer";
import AssignmentList from "@contents/Assignment/AssignmentList";
import AutoAssignBtn from "@contents/Assignment/AssignmentList/AutoAssignBtn";
import ManualAssignBtn from "@contents/Assignment/AssignmentList/ManualAssignBtn";
import AssignManualCreate from "@contents/Assignment/AssignManualCreate";
import {
  assignParser,
  assignPattern,
  getAllAssignments
} from "@services/assignment/getAllAssignment";
import dayjs from "dayjs";

import { useAssignmentStore } from "@contexts/filter/assignmentStore";
import { I_ManualBus, I_ManualCreateType } from "@typings/assignment_type";
import SecondCarAssignManualCreate from "@contents/Assignment/AssignManualCreate/SecondCarManualCreate";
import SecondDriverAssignManualCreate from "@contents/Assignment/AssignManualCreate/SecondDriverManualCreate";
import { dashDate, dashDate2 } from "@utils/convertDate";
import { slashDate } from "@utils/convertDate";
//
const mainFilterArray = [
  { id: 1, label: "啟用", value: "1" },
  { id: 2, label: "停用", value: "2" }
];
const startTimeName = ["start_hours", "start_minutes", "start_type"];
const endTimeName = ["end_hours", "end_minutes", "end_type"];
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [subAssignData, setSubAssignData] = useState<any[]>([]);
  const [nowTab, setNowTab] = useState("1");
  const [secondDrawerOpen, setSecondDrawerOpen] = useState<string>("");
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

  // dayNum: 第幾天(點的那天-出發日期)
  // carNum: 點的那個日期的第幾車
  function setPosition(dayNum: number, carNum: number) {
    setOrderIndex(2 * (dayNum - 1) + carNum - 1);
  }

  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter,
    isDrawerOpen,
    setDrawerOpen
  } = useAssignmentStore();
  //

  const fetchAssignData = async () => {
    //---------------------------------------------------------------
    getAllAssignments()
      .then((data) => {
        // ✅設定子列表的狀態
        const newSubData = data.contentList.map(
          (item: { assignments: any }) => {
            return item.assignments;
          }
        );

        setSubAssignData(newSubData);

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
          if (v.maintenance_quote_no.label.substring(0, 3) === "ORD")
            v["auto_assign"] = {
              label: <AutoAssignBtn></AutoAssignBtn>,
              value: null
            };
          if (v.maintenance_quote_no.label.substring(0, 3) === "ORD")
            v["manual_assign"] = {
              label: (
                <ManualAssignBtn
                  id={v.maintenance_quote_no.label}
                  isDrawerOpen={isDrawerOpen}
                  setDrawerOpen={setDrawerOpen}
                  setOrderInfo={setOrderInfo}
                />
              ),
              value: null
            };
        });
        setData(newData);
      })
      .catch((err) => {
        console.error("error in assignment list", err);
      });
  };
  //

  // 打開派單編輯頁
  const goToEditPageHandler = (id: string) => {
    router.push("/customer/detail/" + id + "?editPage=edit");
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
      bus_day_number: showSecondTitle.car
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
    fetchAssignData();
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
  console.log("7️⃣index", orderIndex);

  return (
    <BodySTY>
      {/* <TableWrapper
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
        > */}
      <AssignmentList
        assignData={data}
        subAssignData={subAssignData}
        goToCreatePage={() => {
          setDrawerOpen(true);
        }}
        goToEditPageHandler={goToEditPageHandler}
      />
      {/* </FilterWrapper>
      </TableWrapper> */}
      {isDrawerOpen && (
        <Drawer
          tabName={["手動派單"]}
          closeDrawer={() => {
            setDrawerOpen(false);
          }}
        >
          <AssignManualCreate
            assignData={data}
            reloadData={() => {
              fetchAssignData();
              setDrawerOpen(false);
            }}
            secondDrawerOpen={secondDrawerOpen}
            setSecondDrawerOpen={setSecondDrawerOpen}
            orderInfo={orderInfo}
            showSecondTitle={showSecondTitle}
            setShowSecondTitle={setShowSecondTitle}
            setPosition={setPosition}
            createAssignData={createAssignData}
            orderIndex={orderIndex}
          />
        </Drawer>
      )}

      {secondDrawerOpen === "派車" && (
        <Drawer
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
      )}
    </BodySTY>
  );
};

Page.getLayout = getLayout;
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
