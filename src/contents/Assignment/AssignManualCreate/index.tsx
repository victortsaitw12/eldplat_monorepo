import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";
//@sevices
// import { createVendor } from "@services/vendor/createVendor";
import { createCustomer } from "@services/customer/createCustomer";
import FiledInput from "./FieldInput";
import {
  PlusIcon,
  Text,
  SelectField,
  Select,
  Button,
  Pane,
  DocumentShareIcon,
  Paragraph,
  FloppyDiskIcon
} from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";

//@layout
import FlexWrapper from "@layout/FlexWrapper";
import Drawer from "@components/Drawer";
import SecondAssignManualCreate from "./SecondCarManualCreate";
import { convertDateAndTimeFormat } from "@utils/convertDate";
import dayjs from "dayjs";
import {
  I_ManualAssignType,
  I_ManualCreateType
} from "@typings/assignment_type";
import { createAssignmentByManual } from "@services/assignment/createAssignmentByManual";

//@components
// import { I_contactData } from "../vendor.type";

interface I_AssignManualCreateProps {
  carArr: any;
  setCarArr: (t: any) => void;
  assignData?: any;
  reloadData?: () => void;
  secondDrawerOpen: string;
  setSecondDrawerOpen: (secondDrawerOpen: string) => void;
  orderInfo: I_ManualAssignType[];
  showSecondTitle: any;
  setShowSecondTitle: (t: any) => void;
  setPosition: (dayNum: number, carNum: number) => void;
  createAssignData: I_ManualCreateType;
}

function AssignManualCreate({
  carArr,
  setCarArr,
  assignData,
  reloadData,
  secondDrawerOpen,
  setSecondDrawerOpen,
  orderInfo,
  showSecondTitle,
  setShowSecondTitle,
  setPosition,
  createAssignData
}: I_AssignManualCreateProps) {
  const [loading, setLoading] = useState(false);
  // const []

  // 做一個function來抓某筆訂單需要渲染幾個派車派工(側邊欄-1)
  function formatOrderInfo(orderInfoArr: any) {
    if (!orderInfoArr) return;
    const orderInfo = orderInfoArr[0];

    // 計算一開始到最後一天共有幾天
    const dayCount =
      dayjs(orderInfo.return_date).diff(orderInfo.departure_date, "day") + 1;

    // [...new Array(放數字)] 代表請產出一個有多少內容的陣列
    const arr = [...new Array(dayCount)].reduce((acc, _, i) => {
      const data = {
        date: dayjs(orderInfo.departure_date)
          .add(i, "day")
          .format("YYYY/MM/DD"),
        cars: [...new Array(orderInfo.order_quantity)].map((_, i) => i + 1)
      };
      acc.push(data);
      return acc;
    }, []);
    return arr;
  }
  const orderArr = formatOrderInfo(orderInfo);

  // 按下儲存派單按鈕
  const asyncSubmitForm = async () => {
    setLoading(true);
    try {
      console.log("👉data for click save", createAssignData);
      const res = await createAssignmentByManual(createAssignData);
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
    reloadData && reloadData();
  };

  const handleClick = (
    e: any,
    orderItem: {
      date: string | number | Date | dayjs.Dayjs | null | undefined;
    },
    car_no: number
  ) => {
    e.preventDefault();

    setShowSecondTitle({
      date: orderItem.date,
      day: dayjs(orderItem.date).format("dddd"),
      car: car_no,
      assignType: e.target.name === "car" ? "派車" : "派工",
      id: `${orderItem.date}-${car_no}`
    });
    setSecondDrawerOpen(e.target.name === "car" ? "派車" : "派工");

    const dayNum = dayjs(orderItem.date).diff(
      orderInfo[0].departure_date,
      "day"
    );
    setPosition(dayNum + 1, car_no);
  };

  useEffect(() => {
    const filledData = { ...createAssignData };
    filledData.manual_bus.map((item, idx) => {
      if (item.bus_group && item.bus_no) {
        filledData.manual_bus[idx]["filled"] = true;
      }
    });
    // if(filledData.manual_bus)
  }, [createAssignData]);

  console.log("😊assignData", assignData);
  console.log("😋orderInfo", orderInfo);
  console.log("😴orderArr", orderArr);
  console.log("😎createAssignData", createAssignData);

  return (
    <FormSTY onSubmit={asyncSubmitForm}>
      {/* 超連結按鈕 */}
      <Pane display="flex" justifyContent="center">
        <Button iconBefore={DocumentShareIcon} marginRight={12}>
          車輛分配
        </Button>
        <Button iconBefore={DocumentShareIcon}>駕駛排班</Button>
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
      <IconLeft text={"儲存派單"} type="submit">
        <FloppyDiskIcon size={14} />
      </IconLeft>

      {/* 派車派工小表格 */}
      {orderArr?.map((item: any, idx: number) => {
        console.log("💙item", item);
        return (
          <Pane key={idx} className="assign-table">
            <Pane borderBottom="1px solid #D5E2F1" paddingY={6} paddingX={12}>
              {item.date}
            </Pane>

            {item.cars.map((v: number) => {
              console.log("💛v", v);
              return (
                <Pane key={v} display="flex" borderBottom="1px solid #D5E2F1">
                  <Pane
                    borderRight="1px solid #D5E2F1"
                    marginRight={10}
                    padding={10}
                    display="flex"
                    alignItems="center"
                  >
                    第{v}車
                  </Pane>
                  <Pane>
                    <Button
                      name="car"
                      className="finished"
                      display="flex"
                      flexWrap="wrap"
                      marginY={4}
                      onClick={(e: any) => {
                        handleClick(e, item, v);
                      }}
                    >
                      派車
                    </Button>
                    <Button
                      name="driver"
                      marginBottom={4}
                      onClick={(e: any) => {
                        handleClick(e, item, v);
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

{
  /* <FiledInput
        label="名稱"
        controlProps={{
          name: "customer_name",
          control,
          rules: { required: "此欄位必填" }
        }}
        required
      />
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>負責人
          </div>
        }
        {...register("customer_owner", { required: "此欄位必填" })}
      >
        <option value="負責人1">負責人1</option>
        <option value="負責人2">負責人2</option>
        <option value="負責人3">負責人3</option>
        <option value="負責人4">負責人4</option>
      </SelectField> */
}

{
  /* <Pane className="assign-table">
        <Pane borderBottom="1px solid #D5E2F1" paddingY={6} paddingX={12}>
          2022/11/23 週三
        </Pane>
        <Pane display="flex">
          <Pane
            borderRight="1px solid #D5E2F1"
            marginRight={10}
            padding={10}
            display="flex"
            alignItems="center"
          >
            第01車
          </Pane>
          <Pane>
            <Button
              display="flex"
              flexWrap="wrap"
              marginY={4}
              onClick={handleClick}
            >
              派車
            </Button>
            <Button marginBottom={4}>派工</Button>
          </Pane>
        </Pane>
      </Pane> */
}
