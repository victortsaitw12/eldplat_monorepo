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
import { log } from "console";
import { I_ManualAssignType } from "@typings/assignment_type";

//@components
// import { I_contactData } from "../vendor.type";
export interface CreateCustomerPayload {
  customer_name: string;
  customer_gui_no: string;
  customer_owner: string;
  address1: string;
  address2: string;
  customer_city: string;
  customer_area: string;
  customer_district_code: string;
  customer_country: string;
  customer_tel_code: string;
  customer_tel: string;
  contact_name: string;
  contact_phone_code: string;
  contact_phone: string;
  contact_tel_code: string;
  contact_tel: string;
  customer_typ: string;
}

// default value
const defaultValues: CreateCustomerPayload = {
  customer_name: "",
  customer_gui_no: "",
  customer_owner: "",
  address1: "",
  address2: "",
  customer_city: "",
  customer_area: "",
  customer_district_code: "",
  customer_country: "",
  customer_tel_code: "",
  customer_tel: "",
  contact_name: "",
  contact_phone_code: "",
  contact_phone: "",
  contact_tel_code: "",
  contact_tel: "",
  customer_typ: ""
};

interface I_AssignManualCreateProps {
  assignData?: any;
  reloadData?: () => void;
  secondDrawerOpen: boolean;
  setSecondDrawerOpen: (secondDrawerOpen: boolean) => void;
  orderInfo: I_ManualAssignType[];
  setShowSecondTitle: (t: any) => void;
}

function AssignManualCreate({
  assignData,
  reloadData,
  secondDrawerOpen,
  setSecondDrawerOpen,
  orderInfo,
  setShowSecondTitle
}: I_AssignManualCreateProps) {
  const { register, handleSubmit, control, reset } =
    useForm<CreateCustomerPayload>({
      defaultValues
    });
  const [loading, setLoading] = useState(false);

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
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      console.log("👉data for click save", data);
      // const res = await createCustomer(data);
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
    reloadData && reloadData();
    reset();
  };

  const handleClick = (
    e: any,
    orderItem: {
      date: string | number | Date | dayjs.Dayjs | null | undefined;
    },
    car_no: number
  ) => {
    e.preventDefault();
    console.log("e", e);
    console.log("orderItem", orderItem);
    console.log("car_no", car_no);
    setShowSecondTitle({
      date: orderItem.date,
      day: dayjs(orderItem.date).format("dddd"),
      car: car_no,
      assignType: e.target.name === "car" ? "派車" : "派工"
    });
    setSecondDrawerOpen(!secondDrawerOpen);
  };

  console.log("😊assignData", assignData);
  console.log("😋orderInfo", orderInfo);
  console.log("😴orderArr", orderArr);
  console.log("dayjs(orderItem.date)", dayjs("2023/05/15").format("dddd"));

  return (
    <FormSTY
      onSubmit={handleSubmit((data) => {
        asyncSubmitForm({
          ...data
        });
      })}
    >
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
        return (
          <Pane key={idx} className="assign-table">
            <Pane borderBottom="1px solid #D5E2F1" paddingY={6} paddingX={12}>
              {item.date}
            </Pane>

            {item.cars.map((v: number) => {
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
                      display="flex"
                      flexWrap="wrap"
                      marginY={4}
                      name="car"
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
