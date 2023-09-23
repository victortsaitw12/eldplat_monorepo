import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  Text,
  Button,
  Pane,
  DocumentShareIcon,
  Paragraph,
  FloppyDiskIcon,
  toaster
} from "evergreen-ui";
import { FormSTY } from "./style";

import { IconLeft } from "@components/Button/Primary";
import { convertDateAndTimeFormat } from "@utils/convertDate";
import { deepClone } from "@utils/deepClone";
import {
  I_ManualAssignType,
  I_ManualCreateType
} from "@typings/assignment_type";
import { createAssignmentByManual } from "@services/assignment/createAssignmentByManual";
import { getOrderDates } from "@services/assignment/getOrderDates";

interface I_AssignManualCreateProps {
  refetch?: () => void;
  secondDrawerOpen: string;
  setSecondDrawerOpen: (secondDrawerOpen: string) => void;
  orderInfo: I_ManualAssignType[];
  secondDrawerInfo: any;
  setSecondDrawerInfo: (t: any) => void;
  createAssignData: I_ManualCreateType;
  setOrderIndex: (v: number) => void;
}

function AssignManualCreate({
  refetch,
  setSecondDrawerOpen,
  orderInfo,
  secondDrawerInfo,
  setSecondDrawerInfo,
  createAssignData,
  setOrderIndex
}: I_AssignManualCreateProps) {
  const [dataFilled, setDataFilled] = useState<any>(null);

  // 做一個function來抓某筆訂單需要渲染幾個派車派工(側邊欄-1)
  function formatOrderInfo(orderInfoArr: any) {
    if (!orderInfoArr) return;
    const orderInfo = orderInfoArr[0];
    // 計算一開始到最後一天共有幾天
    const dayCount = dayjs(orderInfo.return_date).isAfter(
      dayjs(orderInfo.departure_date)
    )
      ? dayjs(orderInfo.return_date).diff(orderInfo.departure_date, "day") + 1
      : 1;
    let carCounter = 0;

    // [...new Array(放數字)] 代表請產出一個有多少內容的陣列
    const arr = [...new Array(dayCount)].reduce((acc, _, dayIdx) => {
      const data = {
        date: dayjs(orderInfo.departure_date)
          .add(dayIdx, "day")
          .format("YYYY/MM/DD"),
        cars: [...new Array(orderInfo.order_quantity)].map((_, carIdx) => {
          carCounter++;
          return {
            no: carIdx + 1,
            // filled:
            //   secondDrawerInfo?.assignType === "派車"
            //     ? dataFilled?.manual_bus[carCounter - 1]?.filled
            //     : dataFilled?.manual_driver[carCounter - 1]?.filled,
            filled: {
              car: dataFilled?.manual_bus[carCounter - 1]?.filled,
              driver: dataFilled?.manual_driver[carCounter - 1]?.filled
            },
            type: secondDrawerInfo?.assignType === "派車" ? "car" : "driver"
          };
        })
      };
      acc.push(data);
      return acc;
    }, []);

    return arr;
  }
  const orderArr = formatOrderInfo(orderInfo);

  // 按下儲存派單按鈕
  const asyncSubmitForm = async (e: any) => {
    e.preventDefault();
    try {
      const res = await createAssignmentByManual(createAssignData);
      if (res.statusCode !== "200") throw new Error(` ${res.resultString}`);
      toaster.success("排程成功", {
        duration: 2
      });
    } catch (e: any) {
      console.log(e);
      toaster.danger("排程失敗", {
        description: `${e.message}`,
        duration: 2,
        hasCloseButton: true
      });
    } finally {
      refetch && refetch();
    }
  };

  function getOrderIndex(dayNum: number, carNum: number) {
    // dayNum: 第幾天(點的那天-出發日期)
    // carNum: 點的那個日期的第幾車
    const updatedOrderIndex =
      orderInfo[0].order_quantity === 1
        ? dayNum - 1 + (carNum - 1)
        : 2 * (dayNum - 1) + carNum - 1;
    return updatedOrderIndex;
  }

  const handleOpenSecondDrawer = async (
    e: any,
    orderItem: {
      date: string | number | Date | dayjs.Dayjs | null | undefined;
    },
    car_no: number
  ) => {
    e.preventDefault();

    // 打API取得從起始日期到回程日期有的每一天日期和周幾
    const result = await getOrderDates(
      orderInfo[0].departure_date,
      orderInfo[0].return_date
    );
    const day = result.dataList[0].order_date_options.find(
      (v: {
        order_date: string | number | Date | dayjs.Dayjs | null | undefined;
      }) => {
        return dayjs(v.order_date).format("YYYY/MM/DD") === orderItem.date;
      }
    );

    setSecondDrawerInfo({
      date: orderItem.date,
      day: day.order_weekday,
      car: car_no,
      assignType: e.target.name === "car" ? "派車" : "派工",
      id: `${orderItem.date}-${car_no}`
    });
    setSecondDrawerOpen(e.target.name === "car" ? "派車" : "派工");

    const dayNum = dayjs(orderItem.date).diff(
      orderInfo[0].departure_date,
      "day"
    );
    const updatedOrderIndex = getOrderIndex(dayNum + 1, car_no);
    setOrderIndex(updatedOrderIndex);
  };

  // 複製大物件，如果必填項目有填寫的話，就給一個key叫做filled
  useEffect(() => {
    const filledData = deepClone(createAssignData);
    filledData.manual_bus.map(
      (item: { bus_group: any; bus_no: any }, idx: string | number) => {
        if (item?.bus_group && item?.bus_no) {
          filledData.manual_bus[idx]["filled"] = true;
        }
      }
    );
    filledData.manual_driver.map(
      (item: { bus_group: any; driver_no: any }, idx: string | number) => {
        if (item?.bus_group && item?.driver_no) {
          filledData.manual_driver[idx]["filled"] = true;
        }
      }
    );
    setDataFilled(filledData);
  }, [createAssignData]);

  // 計算總共有幾個派車派工的按鈕要填
  const arrCount = () => {
    if (!orderInfo) return;
    const count = dayjs(orderInfo[0]?.return_date).diff(
      orderInfo[0]?.departure_date,
      "day"
    );

    return (count + 1) * orderInfo[0]?.order_quantity;
  };

  // console.log("😋orderInfo", orderInfo);
  // console.log("😴orderArr", orderArr);
  // console.log("😎createAssignData", createAssignData);
  // console.log("😍dataFilled", dataFilled);

  return (
    <FormSTY onSubmit={asyncSubmitForm}>
      {/* 超連結按鈕 */}
      <Pane display="flex" justifyContent="center">
        <Button iconBefore={DocumentShareIcon} marginRight={12} type="button">
          車輛分配
        </Button>
        <Button
          iconBefore={DocumentShareIcon}
          onClick={(e: any) => {
            e.preventDefault();
            window.open("/shift", "_blank");
          }}
        >
          駕駛排班
        </Button>
      </Pane>

      {/* 資訊小方塊 */}
      <Pane className="info-box">
        <Paragraph>{orderInfo && orderInfo[0].quote_no}</Paragraph>
        <Paragraph>{orderInfo && orderInfo[0].quote_type}</Paragraph>
        <Pane className="date-area">
          <Text>
            {orderInfo && convertDateAndTimeFormat(orderInfo[0].departure_date)}
          </Text>
          <Text marginX={26}>—</Text>
          <Text>
            {orderInfo && convertDateAndTimeFormat(orderInfo[0].return_date)}
          </Text>
        </Pane>
      </Pane>

      {/* 全部都填好之後的儲存按鈕 */}
      <IconLeft
        text={"儲存派單"}
        type="submit"
        disabled={
          createAssignData.manual_bus.filter((item) => item.bus_no).length !==
            arrCount() ||
          createAssignData.manual_driver.filter((item) => item.driver_no)
            .length !== arrCount()
        }
        className="Primary-Radius-yellow"
      >
        <FloppyDiskIcon size={14} />
      </IconLeft>

      {/* 派車派工小表格 */}
      {orderArr?.map((item: any, dateIdx: number) => {
        return (
          <Pane key={dateIdx} className="assign-table">
            <Pane borderBottom="1px solid #D5E2F1" paddingY={6} paddingX={12}>
              {item.date}
            </Pane>

            {item.cars.map((v: any) => {
              return (
                <Pane
                  key={v.no}
                  display="flex"
                  borderBottom="1px solid #D5E2F1"
                >
                  <Pane
                    borderRight="1px solid #D5E2F1"
                    marginRight={10}
                    padding={10}
                    display="flex"
                    alignItems="center"
                  >
                    第{v.no}車
                  </Pane>
                  <Pane>
                    <Button
                      name="car"
                      className={`${v?.filled.car && "finished"}`}
                      display="flex"
                      flexWrap="wrap"
                      marginY={4}
                      onClick={(e: any) => {
                        handleOpenSecondDrawer(e, item, v.no);
                      }}
                    >
                      派車
                    </Button>
                    <Button
                      name="driver"
                      className={`${v?.filled.driver && "finished"}`}
                      marginBottom={4}
                      onClick={(e: any) => {
                        handleOpenSecondDrawer(e, item, v.no);
                      }}
                    >
                      派工
                    </Button>
                  </Pane>
                </Pane>
              );
            })}
          </Pane>
        );
      })}
    </FormSTY>
  );
}

export default AssignManualCreate;
